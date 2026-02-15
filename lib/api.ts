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

export async function getProfile(id: string) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', id).single();
  return { data, error };
}

// ============================================================
// EXTENDED QUERIES
// ============================================================

export async function createLead(lead: {
  email: string;
  full_name?: string;
  company?: string;
  source?: string;
  status?: LeadStatus;
  pain_points?: string;
  company_size?: string;
  revit_version?: string;
  seats?: number;
  timeline?: string;
}) {
  const { data, error } = await supabase.from('leads').insert(lead).select().single();
  return { data: data as Lead | null, error };
}

export async function getRecentActivity() {
  const [{ data: recentLeads }, { data: recentNotes }] = await Promise.all([
    supabase.from('leads').select('id, full_name, email, status, created_at').order('created_at', { ascending: false }).limit(10),
    supabase.from('notes').select('id, content, type, lead_id, deal_id, created_at').order('created_at', { ascending: false }).limit(10),
  ]);

  type ActivityItem = {
    id: string;
    type: 'lead' | 'note';
    description: string;
    detail: string;
    created_at: string;
  };

  const items: ActivityItem[] = [];

  (recentLeads ?? []).forEach((l: any) => {
    items.push({
      id: `lead-${l.id}`,
      type: 'lead',
      description: `New lead: ${l.full_name || l.email}`,
      detail: `Status: ${l.status}`,
      created_at: l.created_at,
    });
  });

  (recentNotes ?? []).forEach((n: any) => {
    items.push({
      id: `note-${n.id}`,
      type: 'note',
      description: `${n.type} note added`,
      detail: n.content.slice(0, 80) + (n.content.length > 80 ? '...' : ''),
      created_at: n.created_at,
    });
  });

  items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  return items.slice(0, 10);
}

export async function getLeadFunnel() {
  const { data: leads } = await supabase.from('leads').select('status');
  const counts: Record<string, number> = { new: 0, contacted: 0, qualified: 0, proposal: 0, won: 0, lost: 0 };
  (leads ?? []).forEach((l: any) => {
    if (counts[l.status] !== undefined) counts[l.status]++;
  });
  return counts;
}

export async function getLeadsTimeSeries() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const { data } = await supabase
    .from('leads')
    .select('created_at')
    .gte('created_at', thirtyDaysAgo.toISOString())
    .order('created_at', { ascending: true });

  const dayMap: Record<string, number> = {};
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dayMap[d.toISOString().split('T')[0]] = 0;
  }
  (data ?? []).forEach((l: any) => {
    const day = l.created_at.split('T')[0];
    if (dayMap[day] !== undefined) dayMap[day]++;
  });

  return Object.entries(dayMap).map(([date, count]) => ({
    date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    leads: count,
  }));
}

export async function getPipelineByStage() {
  const { data: deals } = await supabase.from('deals').select('stage, value');
  const stages: Record<string, number> = { discovery: 0, demo: 0, proposal: 0, negotiation: 0 };
  (deals ?? []).filter((d: any) => !['closed_won', 'closed_lost'].includes(d.stage)).forEach((d: any) => {
    if (stages[d.stage] !== undefined) stages[d.stage] += Number(d.value);
  });
  return Object.entries(stages).map(([stage, value]) => ({
    stage: stage.charAt(0).toUpperCase() + stage.slice(1),
    value,
  }));
}

export async function getCustomerDetail(userId: string) {
  const [profile, subscriptions, trials, downloads] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).single(),
    supabase.from('subscriptions').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
    supabase.from('trials').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
    supabase.from('downloads').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
  ]);
  return {
    profile: profile.data,
    subscriptions: subscriptions.data ?? [],
    trials: trials.data ?? [],
    downloads: downloads.data ?? [],
  };
}

export async function updateNewsletterSubscriber(id: string, updates: { status?: string; unsubscribed_at?: string }) {
  const { data, error } = await supabase.from('newsletter_subscribers').update(updates).eq('id', id).select().single();
  return { data, error };
}
