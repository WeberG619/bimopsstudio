// Supabase Edge Function: validate-license
// POST endpoint for Revit add-in to verify license key + machine ID

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { license_key, machine_id } = await req.json();

    if (!license_key) {
      return new Response(JSON.stringify({ valid: false, error: 'Missing license key' }), { status: 400 });
    }

    // Look up the license key
    const { data: license, error } = await supabase
      .from('license_keys')
      .select('*')
      .eq('key', license_key)
      .eq('status', 'active')
      .single();

    if (error || !license) {
      return new Response(JSON.stringify({ valid: false, error: 'Invalid or inactive license key' }), { status: 200 });
    }

    // Check expiry
    if (license.expires_at && new Date(license.expires_at) < new Date()) {
      await supabase.from('license_keys').update({ status: 'expired' }).eq('id', license.id);
      return new Response(JSON.stringify({ valid: false, error: 'License expired' }), { status: 200 });
    }

    // Machine ID binding
    if (license.machine_id && license.machine_id !== machine_id) {
      return new Response(JSON.stringify({ valid: false, error: 'License bound to a different machine' }), { status: 200 });
    }

    // Bind machine ID on first activation
    if (!license.machine_id && machine_id) {
      await supabase.from('license_keys').update({
        machine_id,
        activated_at: new Date().toISOString(),
      }).eq('id', license.id);
    }

    return new Response(JSON.stringify({
      valid: true,
      product: license.product,
      user_id: license.user_id,
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ valid: false, error: error.message }), { status: 500 });
  }
});
