-- ============================================================
-- BIM Ops Studio — Initial Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. PROFILES (extends auth.users)
-- ============================================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  full_name text,
  company text,
  role text,
  revit_version text,
  is_admin boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- Users can read their own profile
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Admins can read all profiles
create policy "Admins can read all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, company)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'company', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Auto-update updated_at
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();

-- ============================================================
-- 2. LEADS (CRM)
-- ============================================================
create table public.leads (
  id uuid default uuid_generate_v4() primary key,
  email text not null,
  full_name text,
  company text,
  company_size text,
  revit_version text,
  seats integer,
  timeline text,
  pain_points text,
  status text default 'new' check (status in ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost')),
  score integer default 0,
  source text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.leads enable row level security;

-- Anonymous users can insert leads (contact form)
create policy "Anyone can insert leads"
  on public.leads for insert
  with check (true);

-- Only admins can read/update/delete leads
create policy "Admins can manage leads"
  on public.leads for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.update_updated_at();

-- ============================================================
-- 3. DEALS (Pipeline)
-- ============================================================
create table public.deals (
  id uuid default uuid_generate_v4() primary key,
  lead_id uuid references public.leads(id) on delete set null,
  title text not null,
  value numeric(10,2) default 0,
  stage text default 'discovery' check (stage in ('discovery', 'demo', 'proposal', 'negotiation', 'closed_won', 'closed_lost')),
  product text not null check (product in ('psc', 'bimmemory', 'bundle')),
  plan text not null check (plan in ('individual', 'team', 'enterprise')),
  probability integer default 10 check (probability >= 0 and probability <= 100),
  close_date date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.deals enable row level security;

create policy "Admins can manage deals"
  on public.deals for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

create trigger deals_updated_at
  before update on public.deals
  for each row execute function public.update_updated_at();

-- ============================================================
-- 4. NOTES (Activity log)
-- ============================================================
create table public.notes (
  id uuid default uuid_generate_v4() primary key,
  lead_id uuid references public.leads(id) on delete cascade,
  deal_id uuid references public.deals(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  type text default 'note' check (type in ('call', 'email', 'meeting', 'note', 'system')),
  content text not null,
  created_at timestamptz default now()
);

alter table public.notes enable row level security;

create policy "Admins can manage notes"
  on public.notes for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- ============================================================
-- 5. SUBSCRIPTIONS (Stripe state)
-- ============================================================
create table public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  stripe_customer_id text not null,
  stripe_subscription_id text unique not null,
  product text not null check (product in ('psc', 'bimmemory', 'bundle')),
  plan text not null check (plan in ('individual', 'team', 'enterprise')),
  status text default 'trialing' check (status in ('trialing', 'active', 'past_due', 'canceled', 'unpaid')),
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.subscriptions enable row level security;

-- Users can read their own subscriptions
create policy "Users can read own subscriptions"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Admins can manage all subscriptions
create policy "Admins can manage subscriptions"
  on public.subscriptions for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

create trigger subscriptions_updated_at
  before update on public.subscriptions
  for each row execute function public.update_updated_at();

-- ============================================================
-- 6. TRIALS (14-day tracking)
-- ============================================================
create table public.trials (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  product text not null check (product in ('psc', 'bimmemory', 'bundle')),
  plan text not null check (plan in ('individual', 'team', 'enterprise')),
  status text default 'active' check (status in ('active', 'expiring', 'expired', 'converted')),
  starts_at timestamptz default now(),
  expires_at timestamptz default (now() + interval '14 days'),
  reminder_day10_sent boolean default false,
  reminder_day13_sent boolean default false,
  created_at timestamptz default now()
);

alter table public.trials enable row level security;

-- Users can read their own trials
create policy "Users can read own trials"
  on public.trials for select
  using (auth.uid() = user_id);

-- Admins can manage all trials
create policy "Admins can manage trials"
  on public.trials for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- ============================================================
-- 7. LICENSE_KEYS
-- ============================================================
create table public.license_keys (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  product text not null check (product in ('psc', 'bimmemory', 'bundle')),
  key text unique default encode(gen_random_bytes(16), 'hex'),
  machine_id text,
  status text default 'active' check (status in ('active', 'revoked', 'expired')),
  activated_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz default now()
);

alter table public.license_keys enable row level security;

-- Users can read their own license keys
create policy "Users can read own license keys"
  on public.license_keys for select
  using (auth.uid() = user_id);

-- Admins can manage all license keys
create policy "Admins can manage license keys"
  on public.license_keys for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- ============================================================
-- 8. EMAIL_LOGS
-- ============================================================
create table public.email_logs (
  id uuid default uuid_generate_v4() primary key,
  template text not null,
  recipient text not null,
  subject text not null,
  status text default 'sent' check (status in ('sent', 'delivered', 'bounced', 'failed')),
  metadata jsonb,
  created_at timestamptz default now()
);

alter table public.email_logs enable row level security;

create policy "Admins can manage email logs"
  on public.email_logs for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- ============================================================
-- 9. NEWSLETTER_SUBSCRIBERS
-- ============================================================
create table public.newsletter_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  frequency text default 'weekly' check (frequency in ('weekly', 'monthly')),
  status text default 'active' check (status in ('active', 'unsubscribed')),
  created_at timestamptz default now(),
  unsubscribed_at timestamptz
);

alter table public.newsletter_subscribers enable row level security;

-- Anonymous users can subscribe
create policy "Anyone can subscribe to newsletter"
  on public.newsletter_subscribers for insert
  with check (true);

-- Admins can manage all subscribers
create policy "Admins can manage newsletter subscribers"
  on public.newsletter_subscribers for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- ============================================================
-- 10. DOWNLOADS (installer download log)
-- ============================================================
create table public.downloads (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete set null,
  product text not null check (product in ('psc', 'bimmemory', 'bundle')),
  version text not null,
  ip_address inet,
  created_at timestamptz default now()
);

alter table public.downloads enable row level security;

-- Users can read their own downloads
create policy "Users can read own downloads"
  on public.downloads for select
  using (auth.uid() = user_id);

-- Authenticated users can insert downloads
create policy "Authenticated users can log downloads"
  on public.downloads for insert
  with check (auth.uid() is not null);

-- Admins can manage all downloads
create policy "Admins can manage downloads"
  on public.downloads for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and is_admin = true
    )
  );

-- ============================================================
-- INDEXES for performance
-- ============================================================
create index idx_leads_email on public.leads(email);
create index idx_leads_status on public.leads(status);
create index idx_deals_stage on public.deals(stage);
create index idx_deals_lead_id on public.deals(lead_id);
create index idx_notes_lead_id on public.notes(lead_id);
create index idx_notes_deal_id on public.notes(deal_id);
create index idx_subscriptions_user_id on public.subscriptions(user_id);
create index idx_subscriptions_stripe_customer on public.subscriptions(stripe_customer_id);
create index idx_trials_user_id on public.trials(user_id);
create index idx_trials_status on public.trials(status);
create index idx_license_keys_user_id on public.license_keys(user_id);
create index idx_license_keys_key on public.license_keys(key);
create index idx_email_logs_recipient on public.email_logs(recipient);
create index idx_newsletter_email on public.newsletter_subscribers(email);
create index idx_downloads_user_id on public.downloads(user_id);
