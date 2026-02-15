// Supabase Edge Function: create-checkout
// Creates a Stripe Checkout Session for the authenticated user

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@13?target=deno';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2023-10-16' });

const PRICE_IDS: Record<string, string> = {
  'psc_individual': Deno.env.get('STRIPE_PRICE_PSC_INDIVIDUAL')!,
  'psc_team': Deno.env.get('STRIPE_PRICE_PSC_TEAM')!,
  'bimmemory_individual': Deno.env.get('STRIPE_PRICE_BIMMEMORY_INDIVIDUAL')!,
  'bimmemory_team': Deno.env.get('STRIPE_PRICE_BIMMEMORY_TEAM')!,
  'bundle_individual': Deno.env.get('STRIPE_PRICE_BUNDLE_INDIVIDUAL')!,
  'bundle_team': Deno.env.get('STRIPE_PRICE_BUNDLE_TEAM')!,
};

serve(async (req) => {
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { product, plan } = await req.json();
    const priceKey = `${product}_${plan}`;
    const priceId = PRICE_IDS[priceKey];

    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Invalid product/plan' }), { status: 400 });
    }

    // Check for existing Stripe customer
    const { data: existingSub } = await supabase
      .from('subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .limit(1)
      .single();

    let customerId = existingSub?.stripe_customer_id;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 14,
        metadata: { supabase_user_id: user.id, product, plan },
      },
      success_url: `${req.headers.get('origin')}/account/subscriptions?success=true`,
      cancel_url: `${req.headers.get('origin')}/pricing?canceled=true`,
      metadata: { supabase_user_id: user.id, product, plan },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
