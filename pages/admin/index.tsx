import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { StatsCard } from '@/components/admin/StatsCard';
import { getDashboardMetrics } from '@/lib/api';
import { Users, Briefcase, CreditCard, Clock, Mail, DollarSign, TrendingUp, UserPlus } from 'lucide-react';

interface Metrics {
  totalLeads: number;
  newLeads: number;
  totalDeals: number;
  openPipelineValue: number;
  wonDeals: number;
  activeSubscriptions: number;
  activeTrials: number;
  newsletterSubscribers: number;
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDashboardMetrics().then((data) => {
      setMetrics(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      ) : metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard label="Total Leads" value={metrics.totalLeads} icon={Users} />
          <StatsCard label="New Leads" value={metrics.newLeads} icon={UserPlus} />
          <StatsCard label="Open Pipeline" value={`$${metrics.openPipelineValue.toLocaleString()}`} icon={DollarSign} />
          <StatsCard label="Deals Won" value={metrics.wonDeals} icon={TrendingUp} />
          <StatsCard label="Active Subscriptions" value={metrics.activeSubscriptions} icon={CreditCard} />
          <StatsCard label="Active Trials" value={metrics.activeTrials} icon={Clock} />
          <StatsCard label="Total Deals" value={metrics.totalDeals} icon={Briefcase} />
          <StatsCard label="Newsletter Subs" value={metrics.newsletterSubscribers} icon={Mail} />
        </div>
      )}
    </AdminLayout>
  );
}
