import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DealPipeline } from '@/components/admin/DealPipeline';
import { getDeals } from '@/lib/api';
import type { Deal } from '@/types';

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDeals().then(({ data }) => {
      setDeals(data ?? []);
      setIsLoading(false);
    });
  }, []);

  return (
    <AdminLayout title="Deal Pipeline">
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
        </div>
      ) : (
        <DealPipeline deals={deals} />
      )}
    </AdminLayout>
  );
}
