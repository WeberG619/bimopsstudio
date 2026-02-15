import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Input } from '@/components/ui/input';
import { getNewsletterSubscribers, updateNewsletterSubscriber } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { toast } from '@/lib/useToast';
import type { NewsletterSubscriber, NewsletterStatus } from '@/types';
import { Search, UserMinus } from 'lucide-react';

const statusFilters: { value: NewsletterStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'unsubscribed', label: 'Unsubscribed' },
];

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  unsubscribed: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
};

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<NewsletterStatus | 'all'>('all');
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const { data } = await getNewsletterSubscribers();
    setSubscribers((data as NewsletterSubscriber[]) ?? []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = subscribers.filter((s) => {
    if (statusFilter !== 'all' && s.status !== statusFilter) return false;
    if (search) {
      return s.email.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });

  const handleUnsubscribe = async (id: string) => {
    if (!confirm('Unsubscribe this email?')) return;
    const { error } = await updateNewsletterSubscriber(id, {
      status: 'unsubscribed',
      unsubscribed_at: new Date().toISOString(),
    });
    if (error) {
      toast({ title: 'Failed to unsubscribe', variant: 'error' });
    } else {
      toast({ title: 'Subscriber removed', variant: 'success' });
      fetchData();
    }
  };

  return (
    <AdminLayout title="Newsletter">
      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
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

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {filtered.length} subscriber{filtered.length !== 1 ? 's' : ''}
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No subscribers found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Frequency</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Subscribed</th>
                  <th className="w-10" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 group">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">{sub.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300 capitalize">{sub.frequency}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[sub.status] || ''}`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(sub.created_at)}</td>
                    <td className="py-3 px-2">
                      {sub.status === 'active' && (
                        <button
                          onClick={() => handleUnsubscribe(sub.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all"
                          title="Unsubscribe"
                        >
                          <UserMinus size={14} />
                        </button>
                      )}
                    </td>
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
