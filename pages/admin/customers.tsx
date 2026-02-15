import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { getProfiles } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { Profile } from '@/types';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function CustomersPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProfiles().then(({ data }) => {
      setProfiles((data as Profile[]) ?? []);
      setIsLoading(false);
    });
  }, []);

  const filtered = profiles.filter((p) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (p.full_name?.toLowerCase().includes(q)) ||
      p.email.toLowerCase().includes(q) ||
      (p.company?.toLowerCase().includes(q))
    );
  });

  return (
    <AdminLayout title="Customers">
      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search by name, email, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {filtered.length} customer{filtered.length !== 1 ? 's' : ''}
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue mx-auto" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No customers found
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
                {filtered.map((profile) => (
                  <tr key={profile.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer">
                    <td className="py-3 px-4">
                      <Link
                        href={`/admin/customers/${profile.id}`}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-electric-blue flex items-center gap-2"
                      >
                        {profile.full_name || '—'}
                        {profile.is_admin && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Admin</Badge>
                        )}
                      </Link>
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
