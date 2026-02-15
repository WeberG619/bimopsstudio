import { supabase } from './supabase';
import type { ProductSlug, PlanTier } from '@/types';

export const STRIPE_PRICE_IDS: Record<string, string> = {
  'psc_individual': 'price_1T12axPbuJ07n01L1saKeJbU',
  'psc_team': 'price_1T12axPbuJ07n01LaAfI8ER9',
  'bimmemory_individual': 'price_1T12bBPbuJ07n01LCWYmZJFP',
  'bimmemory_team': 'price_1T12bBPbuJ07n01LIu91b7vA',
  'bundle_individual': 'price_1T12bCPbuJ07n01LTVYMw4cD',
  'bundle_team': 'price_1T12bCPbuJ07n01LHahEqH3M',
};

export const PRODUCT_DISPLAY: Record<ProductSlug, string> = {
  psc: 'Professional Sheet Creator',
  bimmemory: 'BIMmemory',
  bundle: 'Bundle',
};

export const PLAN_PRICES: Record<string, number> = {
  'psc_individual': 80,
  'psc_team': 200,
  'bimmemory_individual': 99,
  'bimmemory_team': 299,
  'bundle_individual': 161,
  'bundle_team': 449,
};

export async function createCheckoutSession(product: ProductSlug, plan: PlanTier) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('Not authenticated');

  const response = await supabase.functions.invoke('create-checkout', {
    body: { product, plan },
  });

  if (response.error) throw response.error;
  return response.data as { url: string };
}

export async function createPortalSession() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('Not authenticated');

  const response = await supabase.functions.invoke('customer-portal', {});

  if (response.error) throw response.error;
  return response.data as { url: string };
}

export function getPriceKey(product: ProductSlug, plan: PlanTier): string {
  return `${product}_${plan}`;
}

export function getMonthlyPrice(product: ProductSlug, plan: PlanTier): number | null {
  return PLAN_PRICES[getPriceKey(product, plan)] ?? null;
}
