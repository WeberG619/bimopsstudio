// Supabase Edge Function: stripe-webhook
// Processes Stripe webhook events

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@13?target=deno';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2023-10-16' });
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')! // Service role for admin writes
);

serve(async (req) => {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        const product = session.metadata?.product;
        const plan = session.metadata?.plan;

        if (userId && product && plan && session.subscription) {
          // Create subscription record
          await supabase.from('subscriptions').insert({
            user_id: userId,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: session.subscription as string,
            product,
            plan,
            status: 'trialing',
          });

          // Create trial record
          await supabase.from('trials').insert({
            user_id: userId,
            product,
            plan,
            status: 'active',
          });

          // Generate license key
          await supabase.from('license_keys').insert({
            user_id: userId,
            product,
            status: 'active',
          });

          // Log email (actual sending handled by send-email function)
          await supabase.from('email_logs').insert({
            template: 'trial_started',
            recipient: session.customer_email || '',
            subject: `Your ${product.toUpperCase()} trial has started!`,
            status: 'sent',
          });
        }
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await supabase.from('subscriptions')
          .update({
            status: subscription.status === 'active' ? 'active'
              : subscription.status === 'trialing' ? 'trialing'
              : subscription.status === 'past_due' ? 'past_due'
              : subscription.status === 'canceled' ? 'canceled'
              : 'unpaid',
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at: subscription.cancel_at ? new Date(subscription.cancel_at * 1000).toISOString() : null,
          })
          .eq('stripe_subscription_id', subscription.id);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.supabase_user_id;

        await supabase.from('subscriptions')
          .update({ status: 'canceled' })
          .eq('stripe_subscription_id', subscription.id);

        // Revoke license keys
        if (userId) {
          await supabase.from('license_keys')
            .update({ status: 'revoked' })
            .eq('user_id', userId)
            .eq('status', 'active');
        }

        // Log cancellation email
        const customer = await stripe.customers.retrieve(subscription.customer as string) as Stripe.Customer;
        if (customer.email) {
          await supabase.from('email_logs').insert({
            template: 'subscription_canceled',
            recipient: customer.email,
            subject: 'Your BIM Ops Studio subscription has been canceled',
            status: 'sent',
          });
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.customer_email) {
          await supabase.from('email_logs').insert({
            template: 'payment_receipt',
            recipient: invoice.customer_email,
            subject: `Payment receipt - $${(invoice.amount_paid / 100).toFixed(2)}`,
            status: 'sent',
          });
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.subscription) {
          await supabase.from('subscriptions')
            .update({ status: 'past_due' })
            .eq('stripe_subscription_id', invoice.subscription as string);
        }
        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
