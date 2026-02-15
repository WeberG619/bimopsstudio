import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import type { Deal, DealStage, ProductSlug, PlanTier } from '@/types';

interface DealFormProps {
  deal?: Deal | null;
  defaultLeadId?: string;
  onSubmit: (data: DealFormData) => Promise<void>;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export interface DealFormData {
  title: string;
  value: number;
  product: ProductSlug;
  plan: PlanTier;
  stage: DealStage;
  probability: number;
  close_date: string;
  lead_id: string;
}

export function DealForm({ deal, defaultLeadId, onSubmit, onCancel, isSubmitting }: DealFormProps) {
  const [form, setForm] = useState<DealFormData>({
    title: deal?.title ?? '',
    value: deal?.value ?? 0,
    product: deal?.product ?? 'psc',
    plan: deal?.plan ?? 'individual',
    stage: deal?.stage ?? 'discovery',
    probability: deal?.probability ?? 20,
    close_date: deal?.close_date?.split('T')[0] ?? '',
    lead_id: deal?.lead_id ?? defaultLeadId ?? '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Deal Title *</Label>
        <Input
          id="title"
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="e.g., Acme Corp - PSC Team"
          className="mt-1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="value">Value ($)</Label>
          <Input
            id="value"
            type="number"
            value={form.value}
            onChange={(e) => setForm({ ...form, value: parseFloat(e.target.value) || 0 })}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="probability">Probability (%)</Label>
          <Input
            id="probability"
            type="number"
            min={0}
            max={100}
            value={form.probability}
            onChange={(e) => setForm({ ...form, probability: parseInt(e.target.value) || 0 })}
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="product">Product</Label>
          <Select
            id="product"
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value as ProductSlug })}
            className="mt-1"
          >
            <option value="psc">PSC</option>
            <option value="bimmemory">BIMmemory</option>
            <option value="bundle">Bundle</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="plan">Plan</Label>
          <Select
            id="plan"
            value={form.plan}
            onChange={(e) => setForm({ ...form, plan: e.target.value as PlanTier })}
            className="mt-1"
          >
            <option value="individual">Individual</option>
            <option value="team">Team</option>
            <option value="enterprise">Enterprise</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="stage">Stage</Label>
          <Select
            id="stage"
            value={form.stage}
            onChange={(e) => setForm({ ...form, stage: e.target.value as DealStage })}
            className="mt-1"
          >
            <option value="discovery">Discovery</option>
            <option value="demo">Demo</option>
            <option value="proposal">Proposal</option>
            <option value="negotiation">Negotiation</option>
            <option value="closed_won">Closed Won</option>
            <option value="closed_lost">Closed Lost</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="close_date">Expected Close</Label>
          <Input
            id="close_date"
            type="date"
            value={form.close_date}
            onChange={(e) => setForm({ ...form, close_date: e.target.value })}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="lead_id">Lead ID (optional)</Label>
        <Input
          id="lead_id"
          value={form.lead_id}
          onChange={(e) => setForm({ ...form, lead_id: e.target.value })}
          placeholder="UUID of associated lead"
          className="mt-1"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : deal ? 'Update Deal' : 'Create Deal'}
        </Button>
      </div>
    </form>
  );
}
