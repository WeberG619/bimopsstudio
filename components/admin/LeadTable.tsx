import Link from 'next/link';
import type { Lead } from '@/types';
import { formatDate } from '@/lib/utils';
import { Trash2 } from 'lucide-react';

interface LeadTableProps {
  leads: Lead[];
  onDelete?: (id: string) => void;
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
  contacted: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
  qualified: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  proposal: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400',
  won: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  lost: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
};

export function LeadTable({ leads, onDelete }: LeadTableProps) {
  if (leads.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No leads found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Email</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Company</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Source</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
            {onDelete && <th className="w-10" />}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
            >
              <td className="py-3 px-4">
                <Link
                  href={`/admin/leads/${lead.id}`}
                  className="text-sm font-medium text-gray-900 dark:text-white hover:text-electric-blue"
                >
                  {lead.full_name || '—'}
                </Link>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{lead.email}</td>
              <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{lead.company || '—'}</td>
              <td className="py-3 px-4">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[lead.status] || ''}`}>
                  {lead.status}
                </span>
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{lead.source || '—'}</td>
              <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">{formatDate(lead.created_at)}</td>
              {onDelete && (
                <td className="py-3 px-2">
                  <button
                    onClick={() => onDelete(lead.id)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all"
                    title="Delete lead"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
