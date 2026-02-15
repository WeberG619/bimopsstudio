// ============================================================
// BIM Ops Studio — Shared Type Definitions
// ============================================================

// --- Enums ---

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';

export type DealStage = 'discovery' | 'demo' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';

export type ProductSlug = 'psc' | 'bimmemory' | 'bundle';

export type PlanTier = 'individual' | 'team' | 'enterprise';

export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid';

export type TrialStatus = 'active' | 'expiring' | 'expired' | 'converted';

export type LicenseStatus = 'active' | 'revoked' | 'expired';

export type NoteType = 'call' | 'email' | 'meeting' | 'note' | 'system';

export type EmailStatus = 'sent' | 'delivered' | 'bounced' | 'failed';

export type NewsletterFrequency = 'weekly' | 'monthly';

export type NewsletterStatus = 'active' | 'unsubscribed';

// --- Database Row Types ---

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  role: string | null;
  revit_version: string | null;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  company_size: string | null;
  revit_version: string | null;
  seats: number | null;
  timeline: string | null;
  pain_points: string | null;
  status: LeadStatus;
  score: number;
  source: string | null;
  created_at: string;
  updated_at: string;
}

export interface Deal {
  id: string;
  lead_id: string | null;
  title: string;
  value: number;
  stage: DealStage;
  product: ProductSlug;
  plan: PlanTier;
  probability: number;
  close_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  lead_id: string | null;
  deal_id: string | null;
  user_id: string | null;
  type: NoteType;
  content: string;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  product: ProductSlug;
  plan: PlanTier;
  status: SubscriptionStatus;
  current_period_start: string | null;
  current_period_end: string | null;
  cancel_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Trial {
  id: string;
  user_id: string;
  product: ProductSlug;
  plan: PlanTier;
  status: TrialStatus;
  starts_at: string;
  expires_at: string;
  reminder_day10_sent: boolean;
  reminder_day13_sent: boolean;
  created_at: string;
}

export interface LicenseKey {
  id: string;
  user_id: string;
  product: ProductSlug;
  key: string;
  machine_id: string | null;
  status: LicenseStatus;
  activated_at: string | null;
  expires_at: string | null;
  created_at: string;
}

export interface EmailLog {
  id: string;
  template: string;
  recipient: string;
  subject: string;
  status: EmailStatus;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  frequency: NewsletterFrequency;
  status: NewsletterStatus;
  created_at: string;
  unsubscribed_at: string | null;
}

export interface DownloadLog {
  id: string;
  user_id: string | null;
  product: ProductSlug;
  version: string;
  ip_address: string | null;
  created_at: string;
}

// --- Insert Types (for creating new records) ---

export type LeadInsert = Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'score'> & {
  score?: number;
};

export type DealInsert = Omit<Deal, 'id' | 'created_at' | 'updated_at'>;

export type NoteInsert = Omit<Note, 'id' | 'created_at'>;

export type NewsletterSubscriberInsert = Pick<NewsletterSubscriber, 'email' | 'frequency'>;

// --- Stripe Price Map ---

export const STRIPE_PRICES: Record<string, { product: ProductSlug; plan: PlanTier; name: string; price: number }> = {
  // Replace with real Stripe Price IDs after Stripe Dashboard setup
  'price_psc_individual': { product: 'psc', plan: 'individual', name: 'PSC Individual', price: 8000 },
  'price_psc_team': { product: 'psc', plan: 'team', name: 'PSC Team', price: 20000 },
  'price_bimmemory_individual': { product: 'bimmemory', plan: 'individual', name: 'BIMmemory Individual', price: 9900 },
  'price_bimmemory_team': { product: 'bimmemory', plan: 'team', name: 'BIMmemory Team', price: 29900 },
  'price_bundle_individual': { product: 'bundle', plan: 'individual', name: 'Bundle Individual', price: 16100 },
  'price_bundle_team': { product: 'bundle', plan: 'team', name: 'Bundle Team', price: 44900 },
};
