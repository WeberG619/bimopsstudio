import { useEffect, useState } from 'react';
import { getRecentActivity } from '@/lib/api';
import { UserPlus, StickyNote } from 'lucide-react';

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

type ActivityItem = {
  id: string;
  type: 'lead' | 'note';
  description: string;
  detail: string;
  created_at: string;
};

export function RecentActivity() {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecentActivity().then((data) => {
      setItems(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-3 animate-pulse">
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="flex-1 space-y-1.5">
              <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-gray-400">No recent activity</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const Icon = item.type === 'lead' ? UserPlus : StickyNote;
        const iconColor = item.type === 'lead' ? 'text-electric-blue bg-blue-50 dark:bg-blue-900/20' : 'text-gray-500 bg-gray-100 dark:bg-gray-700';
        return (
          <div key={item.id} className="flex gap-3">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${iconColor}`}>
              <Icon size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {item.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.detail}</p>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">
              {timeAgo(item.created_at)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
