import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { Lead, LeadStatus } from '@/types';

interface LeadFormProps {
  lead?: Lead | null;
  onSubmit: (data: LeadFormData) => Promise<void>;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export interface LeadFormData {
  full_name: string;
  email: string;
  company: string;
  source: string;
  status: LeadStatus;
  pain_points: string;
  company_size: string;
  revit_version: string;
  seats: number | null;
  timeline: string;
}

export function LeadForm({ lead, onSubmit, onCancel, isSubmitting }: LeadFormProps) {
  const [form, setForm] = useState<LeadFormData>({
    full_name: lead?.full_name ?? '',
    email: lead?.email ?? '',
    company: lead?.company ?? '',
    source: lead?.source ?? '',
    status: lead?.status ?? 'new',
    pain_points: lead?.pain_points ?? '',
    company_size: lead?.company_size ?? '',
    revit_version: lead?.revit_version ?? '',
    seats: lead?.seats ?? null,
    timeline: lead?.timeline ?? '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="source">Source</Label>
          <Select
            id="source"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            className="mt-1"
          >
            <option value="">Select source</option>
            <option value="website">Website</option>
            <option value="referral">Referral</option>
            <option value="linkedin">LinkedIn</option>
            <option value="cold_outreach">Cold Outreach</option>
            <option value="conference">Conference</option>
            <option value="other">Other</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as LeadStatus })}
            className="mt-1"
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="won">Won</option>
            <option value="lost">Lost</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="company_size">Company Size</Label>
          <Select
            id="company_size"
            value={form.company_size}
            onChange={(e) => setForm({ ...form, company_size: e.target.value })}
            className="mt-1"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-1000">201-1000</option>
            <option value="1000+">1000+</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="revit_version">Revit Version</Label>
          <Input
            id="revit_version"
            value={form.revit_version}
            onChange={(e) => setForm({ ...form, revit_version: e.target.value })}
            placeholder="e.g., 2024"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="seats">Seats</Label>
          <Input
            id="seats"
            type="number"
            value={form.seats ?? ''}
            onChange={(e) => setForm({ ...form, seats: e.target.value ? parseInt(e.target.value) : null })}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="timeline">Timeline</Label>
        <Input
          id="timeline"
          value={form.timeline}
          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
          placeholder="e.g., Q1 2026"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="pain_points">Pain Points</Label>
        <Textarea
          id="pain_points"
          value={form.pain_points}
          onChange={(e) => setForm({ ...form, pain_points: e.target.value })}
          placeholder="What problems are they trying to solve?"
          className="mt-1"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : lead ? 'Update Lead' : 'Create Lead'}
        </Button>
      </div>
    </form>
  );
}
