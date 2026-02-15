// Supabase Edge Function: trial-cron
// Run daily via Supabase cron scheduler
// Sends reminders at day 10 and day 13, expires trials at day 14

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async () => {
  const now = new Date();

  // 1. Send day-10 reminders (4 days before expiry)
  const day10Cutoff = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
  const { data: day10Trials } = await supabase
    .from('trials')
    .select('*')
    .eq('status', 'active')
    .eq('reminder_day10_sent', false)
    .lte('expires_at', day10Cutoff.toISOString());

  for (const trial of day10Trials ?? []) {
    // Get user email
    const { data: profile } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', trial.user_id)
      .single();

    if (profile?.email) {
      await supabase.from('email_logs').insert({
        template: 'trial_expiring_10',
        recipient: profile.email,
        subject: 'Your trial expires in 4 days — upgrade now',
        status: 'sent',
      });
    }

    await supabase.from('trials')
      .update({ reminder_day10_sent: true, status: 'expiring' })
      .eq('id', trial.id);
  }

  // 2. Send day-13 reminders (1 day before expiry)
  const day13Cutoff = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000);
  const { data: day13Trials } = await supabase
    .from('trials')
    .select('*')
    .eq('status', 'expiring')
    .eq('reminder_day13_sent', false)
    .lte('expires_at', day13Cutoff.toISOString());

  for (const trial of day13Trials ?? []) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', trial.user_id)
      .single();

    if (profile?.email) {
      await supabase.from('email_logs').insert({
        template: 'trial_expiring_13',
        recipient: profile.email,
        subject: 'Your trial expires tomorrow!',
        status: 'sent',
      });
    }

    await supabase.from('trials')
      .update({ reminder_day13_sent: true })
      .eq('id', trial.id);
  }

  // 3. Expire trials past their expiry date
  const { data: expiredTrials } = await supabase
    .from('trials')
    .select('*')
    .in('status', ['active', 'expiring'])
    .lte('expires_at', now.toISOString());

  for (const trial of expiredTrials ?? []) {
    await supabase.from('trials')
      .update({ status: 'expired' })
      .eq('id', trial.id);

    // Revoke associated license keys
    await supabase.from('license_keys')
      .update({ status: 'expired' })
      .eq('user_id', trial.user_id)
      .eq('product', trial.product)
      .eq('status', 'active');

    // Check if user has active subscription — if so, don't revoke
    const { data: activeSub } = await supabase
      .from('subscriptions')
      .select('id')
      .eq('user_id', trial.user_id)
      .eq('product', trial.product)
      .eq('status', 'active')
      .limit(1);

    if (activeSub && activeSub.length > 0) {
      // Re-activate license since they have a paid subscription
      await supabase.from('license_keys')
        .update({ status: 'active' })
        .eq('user_id', trial.user_id)
        .eq('product', trial.product);
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', trial.user_id)
      .single();

    if (profile?.email) {
      await supabase.from('email_logs').insert({
        template: 'trial_expired',
        recipient: profile.email,
        subject: 'Your trial has expired — subscribe to continue',
        status: 'sent',
      });
    }
  }

  return new Response(JSON.stringify({
    day10_sent: day10Trials?.length ?? 0,
    day13_sent: day13Trials?.length ?? 0,
    expired: expiredTrials?.length ?? 0,
  }), { status: 200 });
});
