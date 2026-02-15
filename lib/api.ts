import { supabase } from './supabase';
import type {
  Lead, LeadStatus, Deal, DealStage, Note, NoteType,
  Subscription, Trial, ProductSlug, PlanTier,
} from '@/types';

// ============================================================
// LEADS
// ============================================================

export async function getLeads(status?: LeadStatus) {
  let query = supabase.from('leads').select('*').order('created_at', { ascending: false });
  if (status) query = query.eq('status', status);
  const { data, error } = await query;
  return { data: data as Lead[] | null, error };
}

export async function getLead(id: string) {
  const { data, error } = await supabase.from('leads').select('*').eq('id', id).single();
  return { data: data as Lead | null, error };
}

export async function updateLead(id: string, updates: Partial<Lead>) {
  const { data, error } = await supabase.from('leads').update(updates).eq('id', id).select().single();
  return { data: data as Lead | null, error };
}

export async function deleteLead(id: string) {
  const { error } = await supabase.from('leads').delete().eq('id', id);
  return { error };
}

// ============================================================
// DEALS
// ============================================================

export async function getDeals(stage?: DealStage) {
  let query = supabase.from('deals').select('*').order('created_at', { ascending: false });
  if (stage) query = query.eq('stage', stage);
  const { data, error } = await query;
  return { data: data as Deal[] | null, error };
}

export async function getDeal(id: string) {
  const { data, error } = await supabase.from('deals').select('*').eq('id', id).single();
  return { data: data as Deal | null, error };
}

export async function createDeal(deal: {
  lead_id?: string;
  title: string;
  value: number;
  product: ProductSlug;
  plan: PlanTier;
  stage?: DealStage;
  probability?: number;
  close_date?: string;
}) {
  const { data, error } = await supabase.from('deals').insert(deal).select().single();
  return { data: data as Deal | null, error };
}

export async function updateDeal(id: string, updates: Partial<Deal>) {
  const { data, error } = await supabase.from('deals').update(updates).eq('id', id).select().single();
  return { data: data as Deal | null, error };
}

export async function deleteDeal(id: string) {
  const { error } = await supabase.from('deals').delete().eq('id', id);
  return { error };
}

// ============================================================
// NOTES
// ============================================================

export async function getNotes(filters?: { lead_id?: string; deal_id?: string }) {
  let query = supabase.from('notes').select('*').order('created_at', { ascending: false });
  if (filters?.lead_id) query = query.eq('lead_id', filters.lead_id);
  if (filters?.deal_id) query = query.eq('deal_id', filters.deal_id);
  const { data, error } = await query;
  return { data: data as Note[] | null, error };
}

export async function createNote(note: {
  lead_id?: string;
  deal_id?: string;
  user_id?: string;
  type?: NoteType;
  content: string;
}) {
  const { data, error } = await supabase.from('notes').insert(note).select().single();
  return { data: data as Note | null, error };
}

// ============================================================
// SUBSCRIPTIONS
// ============================================================

export async function getSubscriptions() {
  const { data, error } = await supabase.from('subscriptions').select('*').order('created_at', { ascending: false });
  return { data: data as Subscription[] | null, error };
}

export async function getUserSubscriptions(userId: string) {
  const { data, error } = await supabase.from('subscriptions').select('*').eq('user_id', userId);
  return { data: data as Subscription[] | null, error };
}

// ============================================================
// TRIALS
// ============================================================

export async function getTrials() {
  const { data, error } = await supabase.from('trials').select('*').order('created_at', { ascending: false });
  return { data: data as Trial[] | null, error };
}

// ============================================================
// EMAIL LOGS
// ============================================================

export async function getEmailLogs() {
  const { data, error } = await supabase.from('email_logs').select('*').order('created_at', { ascending: false }).limit(100);
  return { data, error };
}

// ============================================================
// NEWSLETTER
// ============================================================

export async function getNewsletterSubscribers() {
  const { data, error } = await supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false });
  return { data, error };
}

// ============================================================
// DOWNLOADS
// ============================================================

export async function getDownloads() {
  const { data, error } = await supabase.from('downloads').select('*').order('created_at', { ascending: false }).limit(100);
  return { data, error };
}

// ============================================================
// METRICS (aggregated)
// ============================================================

export async function getDashboardMetrics() {
  const [
    { data: leads },
    { data: deals },
    { data: subs },
    { data: trials },
    { data: newsletter },
  ] = await Promise.all([
    supabase.from('leads').select('id, status, created_at'),
    supabase.from('deals').select('id, stage, value, created_at'),
    supabase.from('subscriptions').select('id, status, plan, product, created_at'),
    supabase.from('trials').select('id, status, created_at'),
    supabase.from('newsletter_subscribers').select('id, status'),
  ]);

  const activeSubscriptions = subs?.filter(s => s.status === 'active' || s.status === 'trialing') ?? [];
  const mrr = activeSubscriptions.reduce((sum, s) => {
    // Rough MRR calc based on plan (would use actual Stripe data in production)
    return sum;
  }, 0);

  const wonDeals = deals?.filter(d => d.stage === 'closed_won') ?? [];
  const totalPipeline = deals?.filter(d => !['closed_won', 'closed_lost'].includes(d.stage))
    .reduce((sum, d) => sum + Number(d.value), 0) ?? 0;

  return {
    totalLeads: leads?.length ?? 0,
    newLeads: leads?.filter(l => l.status === 'new').length ?? 0,
    totalDeals: deals?.length ?? 0,
    openPipelineValue: totalPipeline,
    wonDeals: wonDeals.length,
    activeSubscriptions: activeSubscriptions.length,
    activeTrials: trials?.filter(t => t.status === 'active').length ?? 0,
    newsletterSubscribers: newsletter?.filter(n => n.status === 'active').length ?? 0,
  };
}

// ============================================================
// PROFILES (admin)
// ============================================================

export async function getProfiles() {
  const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
  return { data, error };
}
