// Supabase Edge Function: send-email
// Resend API wrapper with HTML templates for all lifecycle emails

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
const FROM_EMAIL = 'BIM Ops Studio <noreply@bimopsstudio.com>';
const SITE_URL = 'https://bimopsstudio.com';

// ============================================================
// EMAIL TEMPLATES
// ============================================================

function baseTemplate(content: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f4f4f5; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; margin-top: 32px; margin-bottom: 32px; }
    .header { background: #0A1B2A; padding: 32px; text-align: center; }
    .header img { width: 48px; height: 48px; }
    .header h1 { color: white; font-size: 20px; margin: 12px 0 0; }
    .content { padding: 32px; color: #374151; line-height: 1.6; }
    .content h2 { color: #0A1B2A; margin-top: 0; }
    .btn { display: inline-block; background: #3B82F6; color: white !important; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 16px 0; }
    .footer { padding: 24px 32px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #E5E7EB; }
    .highlight { background: #F0F9FF; padding: 16px; border-radius: 8px; border-left: 4px solid #3B82F6; margin: 16px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${SITE_URL}/logo.png" alt="BIM Ops Studio" />
      <h1>BIM Ops Studio</h1>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>BIM Ops Studio &middot; ADN Member #USUS0234</p>
      <p><a href="${SITE_URL}" style="color: #3B82F6;">bimopsstudio.com</a></p>
    </div>
  </div>
</body>
</html>`;
}

const templates: Record<string, (data: Record<string, string>) => { subject: string; html: string }> = {
  welcome: (data) => ({
    subject: 'Welcome to BIM Ops Studio!',
    html: baseTemplate(`
      <h2>Welcome, ${data.name || 'there'}!</h2>
      <p>Thanks for creating your BIM Ops Studio account. You're now part of a community of BIM professionals who are automating their workflows.</p>
      <div class="highlight">
        <strong>What's next?</strong>
        <ul>
          <li>Start a 14-day free trial of Professional Sheet Creator</li>
          <li>Download the free BIM Ops Connector for Revit</li>
          <li>Explore our AI services for BIM automation</li>
        </ul>
      </div>
      <a href="${SITE_URL}/pricing" class="btn">Explore Our Tools</a>
      <p>Have questions? Reply to this email or reach out at weber@bimopsstudio.com.</p>
    `),
  }),

  trial_started: (data) => ({
    subject: `Your ${data.product} trial has started!`,
    html: baseTemplate(`
      <h2>Your 14-Day Trial is Active!</h2>
      <p>Great news! Your free trial of <strong>${data.product}</strong> (${data.plan} plan) is now active.</p>
      <div class="highlight">
        <strong>Trial details:</strong><br>
        Product: ${data.product}<br>
        Plan: ${data.plan}<br>
        Expires: ${data.expires || '14 days from now'}
      </div>
      <p>Here's how to get started:</p>
      <ol>
        <li>Download the add-in from your account</li>
        <li>Enter your license key in Revit</li>
        <li>Start creating sheets automatically!</li>
      </ol>
      <a href="${SITE_URL}/account/downloads" class="btn">Download Now</a>
    `),
  }),

  trial_expiring_10: (data) => ({
    subject: 'Your trial expires in 4 days — upgrade now',
    html: baseTemplate(`
      <h2>Your Trial Expires Soon</h2>
      <p>Your ${data.product} trial ends in <strong>4 days</strong>. Don't lose access to your automated workflows!</p>
      <p>Upgrade now to keep all your settings, templates, and automations.</p>
      <a href="${SITE_URL}/pricing" class="btn">Upgrade Now</a>
      <p style="font-size: 14px; color: #6B7280;">If you have questions about pricing or need help, reply to this email.</p>
    `),
  }),

  trial_expiring_13: (data) => ({
    subject: 'Your trial expires tomorrow!',
    html: baseTemplate(`
      <h2>Last Day of Your Trial</h2>
      <p>Your ${data.product} trial expires <strong>tomorrow</strong>.</p>
      <p>After expiration, your license key will be deactivated and you'll lose access to the tool.</p>
      <div class="highlight">
        <strong>Don't lose your work!</strong> Upgrade now to maintain uninterrupted access.
      </div>
      <a href="${SITE_URL}/pricing" class="btn">Upgrade Before It's Too Late</a>
    `),
  }),

  trial_expired: (data) => ({
    subject: 'Your trial has expired — subscribe to continue',
    html: baseTemplate(`
      <h2>Your Trial Has Expired</h2>
      <p>Your ${data.product} trial has ended and your license key has been deactivated.</p>
      <p>Subscribe to regain access and pick up right where you left off — all your settings are preserved.</p>
      <a href="${SITE_URL}/pricing" class="btn">Subscribe Now</a>
      <p style="font-size: 14px; color: #6B7280;">Need more time to evaluate? Reply to this email and we'll work something out.</p>
    `),
  }),

  payment_receipt: (data) => ({
    subject: `Payment receipt - $${data.amount}`,
    html: baseTemplate(`
      <h2>Payment Received</h2>
      <p>Thank you for your payment!</p>
      <div class="highlight">
        <strong>Receipt:</strong><br>
        Amount: $${data.amount}<br>
        Date: ${data.date || new Date().toLocaleDateString()}<br>
        ${data.product ? `Product: ${data.product}` : ''}
      </div>
      <p>You can view your full billing history in the customer portal.</p>
      <a href="${SITE_URL}/account/subscriptions" class="btn">View Account</a>
    `),
  }),

  subscription_canceled: (data) => ({
    subject: 'Your BIM Ops Studio subscription has been canceled',
    html: baseTemplate(`
      <h2>Subscription Canceled</h2>
      <p>Your ${data.product || 'BIM Ops Studio'} subscription has been canceled.</p>
      <p>You'll continue to have access until the end of your current billing period.</p>
      <p>We're sorry to see you go. If there's anything we could have done better, please let us know by replying to this email.</p>
      <a href="${SITE_URL}/pricing" class="btn">Resubscribe Anytime</a>
    `),
  }),

  contact_notification: (data) => ({
    subject: `New lead: ${data.name} from ${data.company || 'Unknown'}`,
    html: baseTemplate(`
      <h2>New Lead Submitted</h2>
      <div class="highlight">
        <strong>Name:</strong> ${data.name}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Company:</strong> ${data.company || 'Not provided'}<br>
        <strong>Company Size:</strong> ${data.company_size || 'Not provided'}<br>
        <strong>Revit Version:</strong> ${data.revit_version || 'Not provided'}<br>
        <strong>Seats:</strong> ${data.seats || 'Not provided'}<br>
        <strong>Timeline:</strong> ${data.timeline || 'Not provided'}<br>
        <strong>Pain Points:</strong> ${data.pain_points || 'Not provided'}
      </div>
      <a href="${SITE_URL}/admin/leads" class="btn">View in Admin</a>
    `),
  }),

  newsletter_welcome: (data) => ({
    subject: 'Welcome to the BIM Ops Studio newsletter!',
    html: baseTemplate(`
      <h2>You're Subscribed!</h2>
      <p>Thanks for joining the BIM Ops Studio newsletter. You'll receive ${data.frequency || 'weekly'} updates with:</p>
      <ul>
        <li>BIM automation tips and best practices</li>
        <li>Industry insights and trends</li>
        <li>Free resources and templates</li>
        <li>Early access to new features</li>
      </ul>
      <a href="${SITE_URL}/resources" class="btn">Browse Resources</a>
      <p style="font-size: 12px; color: #9CA3AF;">You can unsubscribe at any time by clicking the link in any email.</p>
    `),
  }),
};

// ============================================================
// HANDLER
// ============================================================

serve(async (req) => {
  try {
    const { template, to, data } = await req.json();

    if (!templates[template]) {
      return new Response(JSON.stringify({ error: `Unknown template: ${template}` }), { status: 400 });
    }

    const { subject, html } = templates[template](data || {});

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [to],
        subject,
        html,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: result }), { status: response.status });
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
