// Supabase Edge Function: contact-form
// Receives form data from contact page and sends notification email

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req) => {
  try {
    const formData = await req.json();

    // Invoke send-email function with contact notification template
    await supabase.functions.invoke('send-email', {
      body: {
        template: 'contact_notification',
        to: 'weber@bimopsstudio.com',
        data: formData,
      },
    });

    // Log the email
    await supabase.from('email_logs').insert({
      template: 'contact_notification',
      recipient: 'weber@bimopsstudio.com',
      subject: `New lead: ${formData.name} from ${formData.company || 'Unknown'}`,
      status: 'sent',
      metadata: formData,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
