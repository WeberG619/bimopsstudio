import { useEffect, useState } from 'react';
import { AccountLayout } from '@/components/account/AccountLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { getUserSubscriptions } from '@/lib/api';
import { createPortalSession, PRODUCT_DISPLAY } from '@/lib/stripe';
import { formatDate } from '@/lib/utils';
import type { Subscription } from '@/types';
import { CreditCard, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const statusLabels: Record<string, { label: string; color: string }> = {
  active: { label: 'Active', color: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' },
  trialing: { label: 'Trial', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' },
  past_due: { label: 'Past Due', color: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' },
  canceled: { label: 'Canceled', color: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' },
};

export default function SubscriptionsPage() {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (user?.id) {
      getUserSubscriptions(user.id).then(({ data }) => {
        setSubscriptions(data ?? []);
        setIsLoading(false);
      });
    }
  }, [user]);

  const handleManage = async () => {
    setPortalLoading(true);
    try {
      const { url } = await createPortalSession();
      window.location.href = url;
    } catch {
      setPortalLoading(false);
    }
  };

  return (
    <AccountLayout title="Subscriptions">
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
        </div>
      ) : subscriptions.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center py-12">
            <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Active Subscriptions</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Start a 14-day free trial to access our tools.
            </p>
            <Link href="/pricing">
              <Button>View Pricing</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {subscriptions.map((sub) => {
            const status = statusLabels[sub.status] || statusLabels.active;
            return (
              <Card key={sub.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {PRODUCT_DISPLAY[sub.product as keyof typeof PRODUCT_DISPLAY] || sub.product}
                        </h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {sub.plan} plan
                      </p>
                      {sub.current_period_end && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {sub.status === 'trialing' ? 'Trial ends' : 'Renews'}: {formatDate(sub.current_period_end)}
                        </p>
                      )}
                    </div>
                    <Button variant="outline" size="sm" onClick={handleManage} disabled={portalLoading}>
                      <ExternalLink size={14} className="mr-1.5" />
                      {portalLoading ? 'Loading...' : 'Manage'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </AccountLayout>
  );
}
