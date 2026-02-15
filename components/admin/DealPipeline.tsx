import type { Deal } from '@/types';

interface DealPipelineProps {
  deals: Deal[];
  onDealClick?: (id: string) => void;
}

const stages = [
  { key: 'discovery', label: 'Discovery', color: 'border-blue-400' },
  { key: 'demo', label: 'Demo', color: 'border-purple-400' },
  { key: 'proposal', label: 'Proposal', color: 'border-indigo-400' },
  { key: 'negotiation', label: 'Negotiation', color: 'border-yellow-400' },
  { key: 'closed_won', label: 'Won', color: 'border-green-400' },
  { key: 'closed_lost', label: 'Lost', color: 'border-red-400' },
];

export function DealPipeline({ deals, onDealClick }: DealPipelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stages.map((stage) => {
        const stageDeals = deals.filter(d => d.stage === stage.key);
        const total = stageDeals.reduce((sum, d) => sum + Number(d.value), 0);

        return (
          <div key={stage.key} className={`border-t-4 ${stage.color} bg-white dark:bg-gray-800 rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{stage.label}</h3>
              <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-300">
                {stageDeals.length}
              </span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              ${total.toLocaleString()}
            </div>
            <div className="space-y-2">
              {stageDeals.map((deal) => (
                <div
                  key={deal.id}
                  onClick={() => onDealClick?.(deal.id)}
                  className="p-2 bg-gray-50 dark:bg-gray-700 rounded text-xs cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-white truncate">{deal.title}</div>
                  <div className="text-gray-500 dark:text-gray-400 mt-0.5">
                    ${Number(deal.value).toLocaleString()} · {deal.probability}%
                  </div>
                </div>
              ))}
              {stageDeals.length === 0 && (
                <div className="text-xs text-gray-400 dark:text-gray-500 text-center py-4">
                  No deals
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
