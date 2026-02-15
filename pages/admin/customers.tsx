import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { getProfiles } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { Profile } from '@/types';

export default function CustomersPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfiles().then(({ data }) => {
      setProfiles((data as Profile[]) ?? []);
      setIsLoading(false);
    });
  }, []);

  return (
    <AdminLayout title="Customers">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No customers yet
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Company</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Joined</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile) => (
                  <tr key={profile.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                      {profile.full_name || '—'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{profile.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{profile.company || '—'}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{profile.role || '—'}</td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(profile.created_at)}</td>
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
