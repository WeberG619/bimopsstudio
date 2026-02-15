import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { LeadTable } from '@/components/admin/LeadTable';
import { getLeads } from '@/lib/api';
import type { Lead, LeadStatus } from '@/types';

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

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const { data } = await getLeads(statusFilter === 'all' ? undefined : statusFilter);
      setLeads(data ?? []);
      setIsLoading(false);
    };
    fetch();
  }, [statusFilter]);

  return (
    <AdminLayout title="Leads">
      <div className="mb-6 flex flex-wrap gap-2">
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

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : (
          <LeadTable leads={leads} />
        )}
      </div>
    </AdminLayout>
  );
}
