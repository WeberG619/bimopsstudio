import type { Note } from '@/types';
import { formatDate } from '@/lib/utils';
import { Phone, Mail, Users, StickyNote, Settings } from 'lucide-react';

interface ActivityTimelineProps {
  notes: Note[];
}

const typeIcons: Record<string, React.ElementType> = {
  call: Phone,
  email: Mail,
  meeting: Users,
  note: StickyNote,
  system: Settings,
};

const typeColors: Record<string, string> = {
  call: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
  email: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  meeting: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
  note: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
  system: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
};

export function ActivityTimeline({ notes }: ActivityTimelineProps) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
        No activity yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => {
        const Icon = typeIcons[note.type] || StickyNote;
        return (
          <div key={note.id} className="flex gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${typeColors[note.type] || typeColors.note}`}>
              <Icon size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  {note.type}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {formatDate(note.created_at)}
                </span>
              </div>
              <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                {note.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
