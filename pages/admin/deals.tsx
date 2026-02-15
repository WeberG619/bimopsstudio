import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { DealPipeline } from '@/components/admin/DealPipeline';
import { DealForm, type DealFormData } from '@/components/admin/DealForm';
import { DealDetail } from '@/components/admin/DealDetail';
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getDeals, createDeal } from '@/lib/api';
import { toast } from '@/lib/useToast';
import type { Deal } from '@/types';
import { Plus, DollarSign } from 'lucide-react';

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchDeals = async () => {
    const { data } = await getDeals();
    setDeals(data ?? []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const totalPipeline = deals
    .filter(d => !['closed_won', 'closed_lost'].includes(d.stage))
    .reduce((sum, d) => sum + Number(d.value), 0);

  const handleCreate = async (data: DealFormData) => {
    setIsSubmitting(true);
    const { error } = await createDeal({
      title: data.title,
      value: data.value,
      product: data.product,
      plan: data.plan,
      stage: data.stage,
      probability: data.probability,
      close_date: data.close_date || undefined,
      lead_id: data.lead_id || undefined,
    });
    setIsSubmitting(false);
    if (error) {
      toast({ title: 'Failed to create deal', description: error.message, variant: 'error' });
    } else {
      toast({ title: 'Deal created', variant: 'success' });
      setShowCreate(false);
      fetchDeals();
    }
  };

  return (
    <AdminLayout title="Deal Pipeline">
      {/* Header with total + add button */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <DollarSign size={16} className="text-electric-blue" />
            <span>Open Pipeline: <strong className="text-gray-900 dark:text-white">${totalPipeline.toLocaleString()}</strong></span>
          </div>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus size={16} className="mr-1" /> Add Deal
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
        </div>
      ) : (
        <DealPipeline deals={deals} onDealClick={(id) => setSelectedDealId(id)} />
      )}

      {/* Create Deal Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogClose onClose={() => setShowCreate(false)} />
        <DialogHeader>
          <DialogTitle>Add New Deal</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <DealForm
            onSubmit={handleCreate}
            onCancel={() => setShowCreate(false)}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Deal Detail Dialog */}
      <Dialog open={!!selectedDealId} onOpenChange={() => setSelectedDealId(null)}>
        <DialogClose onClose={() => setSelectedDealId(null)} />
        <DialogHeader>
          <DialogTitle>Deal Details</DialogTitle>
        </DialogHeader>
        <DialogContent>
          {selectedDealId && (
            <DealDetail
              dealId={selectedDealId}
              onClose={() => setSelectedDealId(null)}
              onUpdate={fetchDeals}
            />
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
