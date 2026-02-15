import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { NoteForm } from '@/components/admin/NoteForm';
import { ActivityTimeline } from '@/components/admin/ActivityTimeline';
import { LeadForm, type LeadFormData } from '@/components/admin/LeadForm';
import { DealForm, type DealFormData } from '@/components/admin/DealForm';
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getLead, updateLead, deleteLead, getNotes, createDeal } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { toast } from '@/lib/useToast';
import type { Lead, Note, LeadStatus } from '@/types';
import { ArrowLeft, Building2, Mail, Calendar, Users, Clock, Edit, Trash2, Briefcase, Star } from 'lucide-react';
import Link from 'next/link';

const statusOptions: LeadStatus[] = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'];

export default function LeadDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [lead, setLead] = useState<Lead | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showDealForm, setShowDealForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = useCallback(async () => {
    if (!id || typeof id !== 'string') return;
    const [leadRes, notesRes] = await Promise.all([
      getLead(id),
      getNotes({ lead_id: id }),
    ]);
    setLead(leadRes.data);
    setNotes(notesRes.data ?? []);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = async (newStatus: LeadStatus) => {
    if (!lead) return;
    await updateLead(lead.id, { status: newStatus });
    setLead({ ...lead, status: newStatus });
    toast({ title: `Status changed to ${newStatus}`, variant: 'success' });
  };

  const handleEdit = async (data: LeadFormData) => {
    if (!lead) return;
    setIsSubmitting(true);
    const { error } = await updateLead(lead.id, {
      full_name: data.full_name || null,
      email: data.email,
      company: data.company || null,
      source: data.source || null,
      status: data.status,
      pain_points: data.pain_points || null,
      company_size: data.company_size || null,
      revit_version: data.revit_version || null,
      seats: data.seats,
      timeline: data.timeline || null,
    });
    setIsSubmitting(false);
    if (error) {
      toast({ title: 'Failed to update lead', variant: 'error' });
    } else {
      toast({ title: 'Lead updated', variant: 'success' });
      setShowEdit(false);
      fetchData();
    }
  };

  const handleDelete = async () => {
    if (!lead) return;
    if (!confirm('Delete this lead and all associated data? This cannot be undone.')) return;
    const { error } = await deleteLead(lead.id);
    if (error) {
      toast({ title: 'Failed to delete lead', variant: 'error' });
    } else {
      toast({ title: 'Lead deleted', variant: 'success' });
      router.push('/admin/leads');
    }
  };

  const handleCreateDeal = async (data: DealFormData) => {
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
      toast({ title: 'Failed to create deal', variant: 'error' });
    } else {
      toast({ title: 'Deal created', variant: 'success' });
      setShowDealForm(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Lead Detail">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
        </div>
      </AdminLayout>
    );
  }

  if (!lead) {
    return (
      <AdminLayout title="Lead Not Found">
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Lead not found</p>
          <Link href="/admin/leads">
            <Button variant="outline">Back to Leads</Button>
          </Link>
        </div>
      </AdminLayout>
    );
  }

  const scoreColor = lead.score >= 70 ? 'text-green-500' : lead.score >= 40 ? 'text-yellow-500' : 'text-gray-400';

  return (
    <AdminLayout title={lead.full_name || lead.email}>
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin/leads" className="inline-flex items-center text-sm text-gray-500 hover:text-electric-blue">
          <ArrowLeft size={16} className="mr-1" />
          Back to Leads
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowDealForm(true)}>
            <Briefcase size={14} className="mr-1" /> Create Deal
          </Button>
          <Button variant="outline" size="sm" onClick={() => setShowEdit(true)}>
            <Edit size={14} className="mr-1" /> Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={handleDelete}>
            <Trash2 size={14} className="mr-1" /> Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lead Info */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Lead Information</h2>

            {/* Lead Score */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
              <Star size={16} className={scoreColor} />
              <span className={`text-sm font-semibold ${scoreColor}`}>Score: {lead.score}</span>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-2">
                <div
                  className={`h-2 rounded-full ${lead.score >= 70 ? 'bg-green-500' : lead.score >= 40 ? 'bg-yellow-500' : 'bg-gray-400'}`}
                  style={{ width: `${Math.min(lead.score, 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail size={14} className="text-gray-400 mr-2" />
                <a href={`mailto:${lead.email}`} className="text-electric-blue hover:underline">{lead.email}</a>
              </div>
              {lead.company && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Building2 size={14} className="text-gray-400 mr-2" />
                  {lead.company} {lead.company_size && `(${lead.company_size})`}
                </div>
              )}
              {lead.revit_version && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Users size={14} className="text-gray-400 mr-2" />
                  Revit {lead.revit_version} · {lead.seats || '?'} seats
                </div>
              )}
              {lead.timeline && (
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Clock size={14} className="text-gray-400 mr-2" />
                  Timeline: {lead.timeline}
                </div>
              )}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={14} className="text-gray-400 mr-2" />
                {formatDate(lead.created_at)}
              </div>
            </div>

            {lead.pain_points && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Pain Points</h3>
                <p className="text-sm text-gray-900 dark:text-white">{lead.pain_points}</p>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Status</h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                      lead.status === status
                        ? 'bg-electric-blue text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity & Notes */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add Note</h2>
            <NoteForm leadId={lead.id} onNoteAdded={fetchData} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity</h2>
            <ActivityTimeline notes={notes} />
          </div>
        </div>
      </div>

      {/* Edit Lead Dialog */}
      <Dialog open={showEdit} onOpenChange={setShowEdit}>
        <DialogClose onClose={() => setShowEdit(false)} />
        <DialogHeader>
          <DialogTitle>Edit Lead</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <LeadForm
            lead={lead}
            onSubmit={handleEdit}
            onCancel={() => setShowEdit(false)}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Create Deal Dialog */}
      <Dialog open={showDealForm} onOpenChange={setShowDealForm}>
        <DialogClose onClose={() => setShowDealForm(false)} />
        <DialogHeader>
          <DialogTitle>Create Deal from Lead</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <DealForm
            defaultLeadId={lead.id}
            onSubmit={handleCreateDeal}
            onCancel={() => setShowDealForm(false)}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
