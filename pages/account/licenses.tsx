import { useEffect, useState } from 'react';
import { AccountLayout } from '@/components/account/AccountLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { PRODUCT_DISPLAY } from '@/lib/stripe';
import { formatDate } from '@/lib/utils';
import type { LicenseKey } from '@/types';
import { Key, Copy, CheckCircle } from 'lucide-react';

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  revoked: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  expired: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
};

export default function LicensesPage() {
  const { user } = useAuth();
  const [licenses, setLicenses] = useState<LicenseKey[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) {
      supabase
        .from('license_keys')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .then(({ data }) => {
          setLicenses((data as LicenseKey[]) ?? []);
          setIsLoading(false);
        });
    }
  }, [user]);

  const copyKey = (id: string, key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <AccountLayout title="Licenses">
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue" />
        </div>
      ) : licenses.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center py-12">
            <Key className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No License Keys</h3>
            <p className="text-gray-500 dark:text-gray-400">
              License keys are generated when you start a trial or subscribe.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {licenses.map((license) => (
            <Card key={license.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {PRODUCT_DISPLAY[license.product as keyof typeof PRODUCT_DISPLAY] || license.product}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[license.status] || ''}`}>
                        {license.status}
                      </span>
                    </div>
                    {license.activated_at && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Activated: {formatDate(license.activated_at)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-3">
                  <code className="flex-1 text-sm font-mono text-gray-900 dark:text-white select-all">
                    {license.key}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyKey(license.id, license.key)}
                    className="flex-shrink-0"
                  >
                    {copiedId === license.id ? (
                      <CheckCircle size={14} className="text-green-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </Button>
                </div>

                {license.machine_id && (
                  <p className="text-xs text-gray-400 mt-2">
                    Bound to machine: {license.machine_id.slice(0, 12)}...
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </AccountLayout>
  );
}
