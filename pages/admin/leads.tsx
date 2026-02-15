import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { LeadTable } from '@/components/admin/LeadTable';
import { LeadForm, type LeadFormData } from '@/components/admin/LeadForm';
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getLeads, createLead, deleteLead } from '@/lib/api';
import { toast } from '@/lib/useToast';
import type { Lead, LeadStatus } from '@/types';
import { Plus, Search, Trash2 } from 'lucide-react';

const statusFilters: { value: LeadStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'proposal', label: 'Proposal' },
  { value: 'won', label: 'Won' },
  { value: 'lost', label: 'Lost' },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'all'>('all');
  const [search, setSearch] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchLeads = async () => {
    setIsLoading(true);
    const { data } = await getLeads(statusFilter === 'all' ? undefined : statusFilter);
    setLeads(data ?? []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter]);

  const filteredLeads = leads.filter((lead) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (lead.full_name?.toLowerCase().includes(q)) ||
      lead.email.toLowerCase().includes(q) ||
      (lead.company?.toLowerCase().includes(q))
    );
  });

  const handleCreate = async (data: LeadFormData) => {
    setIsSubmitting(true);
    const { error } = await createLead({
      email: data.email,
      full_name: data.full_name || undefined,
      company: data.company || undefined,
      source: data.source || undefined,
      status: data.status,
      pain_points: data.pain_points || undefined,
      company_size: data.company_size || undefined,
      revit_version: data.revit_version || undefined,
      seats: data.seats ?? undefined,
      timeline: data.timeline || undefined,
    });
    setIsSubmitting(false);
    if (error) {
      toast({ title: 'Failed to create lead', description: error.message, variant: 'error' });
    } else {
      toast({ title: 'Lead created', variant: 'success' });
      setShowCreate(false);
      fetchLeads();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this lead? This cannot be undone.')) return;
    const { error } = await deleteLead(id);
    if (error) {
      toast({ title: 'Failed to delete lead', variant: 'error' });
    } else {
      toast({ title: 'Lead deleted', variant: 'success' });
      fetchLeads();
    }
  };

  return (
    <AdminLayout title="Leads">
      {/* Top bar: search + add */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus size={16} className="mr-1" /> Add Lead
        </Button>
      </div>

      {/* Status filter pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        {statusFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setStatusFilter(filter.value)}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              statusFilter === filter.value
                ? 'bg-electric-blue text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-electric-blue'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Row count */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        Showing {filteredLeads.length} lead{filteredLeads.length !== 1 ? 's' : ''}
      </p>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : (
          <LeadTable leads={filteredLeads} onDelete={handleDelete} />
        )}
      </div>

      {/* Create Lead Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogClose onClose={() => setShowCreate(false)} />
        <DialogHeader>
          <DialogTitle>Add New Lead</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <LeadForm
            onSubmit={handleCreate}
            onCancel={() => setShowCreate(false)}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
