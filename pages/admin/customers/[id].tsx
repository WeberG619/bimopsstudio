import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCustomerDetail } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Mail, Building2, Calendar, CreditCard, Clock, Download } from 'lucide-react';
import Link from 'next/link';
import type { Profile, Subscription, Trial, DownloadLog } from '@/types';

const subStatusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  trialing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  past_due: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  canceled: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  unpaid: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
};

const trialStatusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  expiring: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
  expired: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  converted: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
};

export default function CustomerDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [trials, setTrials] = useState<Trial[]>([]);
  const [downloads, setDownloads] = useState<DownloadLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id || typeof id !== 'string') return;
    getCustomerDetail(id).then((data) => {
      setProfile(data.profile as Profile | null);
      setSubscriptions(data.subscriptions as Subscription[]);
      setTrials(data.trials as Trial[]);
      setDownloads(data.downloads as DownloadLog[]);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <AdminLayout title="Customer Detail">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
        </div>
      </AdminLayout>
    );
  }

  if (!profile) {
    return (
      <AdminLayout title="Customer Not Found">
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Customer not found</p>
          <Link href="/admin/customers">
            <Button variant="outline">Back to Customers</Button>
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={profile.full_name || profile.email}>
      <Link href="/admin/customers" className="inline-flex items-center text-sm text-gray-500 hover:text-electric-blue mb-6">
        <ArrowLeft size={16} className="mr-1" />
        Back to Customers
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile</h2>
              {profile.is_admin && <Badge variant="secondary">Admin</Badge>}
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail size={14} className="text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">{profile.email}</span>
              </div>
              {profile.company && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Building2 size={14} className="text-gray-400 mr-2" />
                  {profile.company}
                </div>
              )}
              {profile.role && (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Role: {profile.role}
                </div>
              )}
              {profile.revit_version && (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Revit: {profile.revit_version}
                </div>
              )}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={14} className="text-gray-400 mr-2" />
                Joined {formatDate(profile.created_at)}
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions + Trials + Downloads */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subscriptions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={16} className="text-electric-blue" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Subscriptions</h3>
            </div>
            {subscriptions.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No subscriptions</p>
            ) : (
              <div className="space-y-3">
                {subscriptions.map((sub) => (
                  <div key={sub.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white uppercase">{sub.product}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 capitalize">{sub.plan}</span>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${subStatusColors[sub.status] || ''}`}>
                      {sub.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trials */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-electric-blue" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Trials</h3>
            </div>
            {trials.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No trials</p>
            ) : (
              <div className="space-y-3">
                {trials.map((trial) => (
                  <div key={trial.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white uppercase">{trial.product}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        Expires {formatDate(trial.expires_at)}
                      </span>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${trialStatusColors[trial.status] || ''}`}>
                      {trial.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Downloads */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Download size={16} className="text-electric-blue" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Downloads</h3>
            </div>
            {downloads.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No downloads</p>
            ) : (
              <div className="space-y-2">
                {downloads.map((dl) => (
                  <div key={dl.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-900 dark:text-white uppercase">{dl.product} v{dl.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{formatDate(dl.created_at)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
