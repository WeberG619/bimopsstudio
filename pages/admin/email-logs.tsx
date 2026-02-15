import { useEffect, useState, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Input } from '@/components/ui/input';
import { getEmailLogs } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { EmailLog } from '@/types';
import { Search } from 'lucide-react';

const statusColors: Record<string, string> = {
  sent: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  delivered: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  bounced: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
  failed: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
};

export default function EmailLogsPage() {
  const [logs, setLogs] = useState<EmailLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [templateFilter, setTemplateFilter] = useState<string>('all');

  useEffect(() => {
    getEmailLogs().then(({ data }) => {
      setLogs((data as EmailLog[]) ?? []);
      setIsLoading(false);
    });
  }, []);

  const templates = useMemo(() => {
    const set = new Set(logs.map((l) => l.template));
    return Array.from(set).sort();
  }, [logs]);

  const filtered = logs.filter((log) => {
    if (templateFilter !== 'all' && log.template !== templateFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return log.recipient.toLowerCase().includes(q) || log.subject.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <AdminLayout title="Email Logs">
      {/* Search + Template filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by recipient or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTemplateFilter('all')}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              templateFilter === 'all'
                ? 'bg-electric-blue text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-electric-blue'
            }`}
          >
            All Templates
          </button>
          {templates.map((tpl) => (
            <button
              key={tpl}
              onClick={() => setTemplateFilter(tpl)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
                templateFilter === tpl
                  ? 'bg-electric-blue text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-electric-blue'
              }`}
            >
              {tpl}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {filtered.length} email{filtered.length !== 1 ? 's' : ''}
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No emails found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Template</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Recipient</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Subject</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Sent</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">{log.template}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{log.recipient}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300 max-w-xs truncate">{log.subject}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[log.status] || ''}`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(log.created_at)}</td>
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
