import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { getSubscriptions } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { Subscription, SubscriptionStatus } from '@/types';

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  trialing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  past_due: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  canceled: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  unpaid: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
};

const statusFilters: { value: SubscriptionStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'trialing', label: 'Trialing' },
  { value: 'past_due', label: 'Past Due' },
  { value: 'canceled', label: 'Canceled' },
  { value: 'unpaid', label: 'Unpaid' },
];

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<SubscriptionStatus | 'all'>('all');

  useEffect(() => {
    getSubscriptions().then(({ data }) => {
      setSubscriptions(data ?? []);
      setIsLoading(false);
    });
  }, []);

  const filtered = statusFilter === 'all'
    ? subscriptions
    : subscriptions.filter((s) => s.status === statusFilter);

  return (
    <AdminLayout title="Subscriptions">
      {/* Status filter pills */}
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

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {filtered.length} subscription{filtered.length !== 1 ? 's' : ''}
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No subscriptions found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Period End</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Created</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white uppercase">{sub.product}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300 capitalize">{sub.plan}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[sub.status] || ''}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {sub.current_period_end ? formatDate(sub.current_period_end) : '—'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(sub.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
