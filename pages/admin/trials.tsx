import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { getTrials } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { Trial } from '@/types';

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  expiring: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
  expired: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  converted: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
};

export default function TrialsPage() {
  const [trials, setTrials] = useState<Trial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrials().then(({ data }) => {
      setTrials(data ?? []);
      setIsLoading(false);
    });
  }, []);

  return (
    <AdminLayout title="Trials">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : trials.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No trials yet
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Started</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Expires</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Reminders</th>
                </tr>
              </thead>
              <tbody>
                {trials.map((trial) => (
                  <tr key={trial.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white uppercase">{trial.product}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300 capitalize">{trial.plan}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[trial.status] || ''}`}>
                        {trial.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(trial.starts_at)}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(trial.expires_at)}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {trial.reminder_day10_sent ? 'D10' : ''} {trial.reminder_day13_sent ? 'D13' : ''} {!trial.reminder_day10_sent && !trial.reminder_day13_sent ? '—' : ''}
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
