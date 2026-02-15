import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NoteForm } from './NoteForm';
import { ActivityTimeline } from './ActivityTimeline';
import { DealForm, type DealFormData } from './DealForm';
import { getDeal, updateDeal, deleteDeal, getNotes } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { toast } from '@/lib/useToast';
import type { Deal, Note } from '@/types';
import { DollarSign, Calendar, Percent, Package, Edit, Trash2 } from 'lucide-react';

interface DealDetailProps {
  dealId: string;
  onClose: () => void;
  onUpdate: () => void;
}

const stageColors: Record<string, string> = {
  discovery: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  demo: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  proposal: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400',
  negotiation: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
  closed_won: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  closed_lost: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
};

export function DealDetail({ dealId, onClose, onUpdate }: DealDetailProps) {
  const [deal, setDeal] = useState<Deal | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = useCallback(async () => {
    const [dealRes, notesRes] = await Promise.all([
      getDeal(dealId),
      getNotes({ deal_id: dealId }),
    ]);
    setDeal(dealRes.data);
    setNotes(notesRes.data ?? []);
    setIsLoading(false);
  }, [dealId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleEdit = async (data: DealFormData) => {
    setIsSubmitting(true);
    const { error } = await updateDeal(dealId, {
      title: data.title,
      value: data.value,
      product: data.product,
      plan: data.plan,
      stage: data.stage,
      probability: data.probability,
      close_date: data.close_date || null,
      lead_id: data.lead_id || null,
    });
    setIsSubmitting(false);
    if (error) {
      toast({ title: 'Failed to update deal', variant: 'error' });
    } else {
      toast({ title: 'Deal updated', variant: 'success' });
      setIsEditing(false);
      fetchData();
      onUpdate();
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete this deal? This cannot be undone.')) return;
    const { error } = await deleteDeal(dealId);
    if (error) {
      toast({ title: 'Failed to delete deal', variant: 'error' });
    } else {
      toast({ title: 'Deal deleted', variant: 'success' });
      onClose();
      onUpdate();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
      </div>
    );
  }

  if (!deal) {
    return <p className="text-gray-500 text-center py-8">Deal not found</p>;
  }

  if (isEditing) {
    return (
      <DealForm
        deal={deal}
        onSubmit={handleEdit}
        onCancel={() => setIsEditing(false)}
        isSubmitting={isSubmitting}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{deal.title}</h3>
          <span className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${stageColors[deal.stage] || ''}`}>
            {deal.stage.replace('_', ' ')}
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            <Edit size={14} className="mr-1" /> Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={handleDelete}>
            <Trash2 size={14} className="mr-1" /> Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <DollarSign size={14} className="text-gray-400" />
          ${Number(deal.value).toLocaleString()}
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Percent size={14} className="text-gray-400" />
          {deal.probability}% probability
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Package size={14} className="text-gray-400" />
          {deal.product.toUpperCase()} — {deal.plan}
        </div>
        {deal.close_date && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Calendar size={14} className="text-gray-400" />
            Close: {formatDate(deal.close_date)}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Add Note</h4>
        <NoteForm dealId={deal.id} onNoteAdded={fetchData} />
      </div>

      {notes.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Activity</h4>
          <ActivityTimeline notes={notes} />
        </div>
      )}
    </div>
  );
}
