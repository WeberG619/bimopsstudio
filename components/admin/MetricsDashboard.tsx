import { useEffect, useState } from 'react';
import { getLeadFunnel, getLeadsTimeSeries, getPipelineByStage } from '@/lib/api';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

const funnelColors: Record<string, string> = {
  new: '#3B82F6',
  contacted: '#EAB308',
  qualified: '#A855F7',
  proposal: '#6366F1',
  won: '#22C55E',
  lost: '#EF4444',
};

export function MetricsDashboard() {
  const [funnel, setFunnel] = useState<Record<string, number>>({});
  const [timeSeries, setTimeSeries] = useState<{ date: string; leads: number }[]>([]);
  const [pipeline, setPipeline] = useState<{ stage: string; value: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getLeadFunnel(), getLeadsTimeSeries(), getPipelineByStage()]).then(
      ([f, ts, p]) => {
        setFunnel(f);
        setTimeSeries(ts);
        setPipeline(p);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 h-72 animate-pulse" />
        ))}
      </div>
    );
  }

  const funnelData = Object.entries(funnel).map(([status, count]) => ({
    status: status.charAt(0).toUpperCase() + status.slice(1),
    count,
    key: status,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Lead Funnel */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Lead Funnel</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={funnelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="status" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" allowDecimals={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {funnelData.map((entry) => (
                <Cell key={entry.key} fill={funnelColors[entry.key] || '#6B7280'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pipeline Value by Stage */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Pipeline Value by Stage</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={pipeline} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis type="number" tick={{ fontSize: 12 }} stroke="#9CA3AF" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <YAxis type="category" dataKey="stage" tick={{ fontSize: 12 }} stroke="#9CA3AF" width={90} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
            />
            <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Leads Over Time */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 lg:col-span-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Leads — Last 30 Days</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={timeSeries}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="#9CA3AF" interval="preserveStartEnd" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9CA3AF" allowDecimals={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Line type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
