import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createNote } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';
import type { NoteType } from '@/types';
import { MessageSquare, Phone, Mail, Users, StickyNote } from 'lucide-react';

interface NoteFormProps {
  leadId?: string;
  dealId?: string;
  onNoteAdded?: () => void;
}

const noteTypes: { value: NoteType; label: string; icon: React.ElementType }[] = [
  { value: 'note', label: 'Note', icon: StickyNote },
  { value: 'call', label: 'Call', icon: Phone },
  { value: 'email', label: 'Email', icon: Mail },
  { value: 'meeting', label: 'Meeting', icon: Users },
];

export function NoteForm({ leadId, dealId, onNoteAdded }: NoteFormProps) {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [type, setType] = useState<NoteType>('note');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    await createNote({
      lead_id: leadId,
      deal_id: dealId,
      user_id: user?.id,
      type,
      content: content.trim(),
    });
    setContent('');
    setIsSubmitting(false);
    onNoteAdded?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        {noteTypes.map((nt) => (
          <button
            key={nt.value}
            type="button"
            onClick={() => setType(nt.value)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border transition-colors ${
              type === nt.value
                ? 'bg-electric-blue text-white border-electric-blue'
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-electric-blue'
            }`}
          >
            <nt.icon size={12} />
            {nt.label}
          </button>
        ))}
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a note..."
        rows={3}
        className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-electric-blue resize-none"
      />

      <Button type="submit" size="sm" disabled={isSubmitting || !content.trim()}>
        <MessageSquare size={14} className="mr-1.5" />
        {isSubmitting ? 'Adding...' : 'Add Note'}
      </Button>
    </form>
  );
}
