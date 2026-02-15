import { AccountLayout } from '@/components/account/AccountLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Download, CheckCircle } from 'lucide-react';

const products = [
  {
    slug: 'psc',
    name: 'Professional Sheet Creator',
    version: '1.0.0',
    size: '~15 MB',
    description: 'Batch sheet creation, auto title blocks, PDF/DWG export',
    requiresSub: true,
  },
  {
    slug: 'bimmemory',
    name: 'BIMmemory',
    version: '1.0.0',
    size: '~20 MB',
    description: 'AI-powered memory system for BIM professionals',
    requiresSub: true,
  },
  {
    slug: 'connector',
    name: 'BIM Ops Connector',
    version: '1.0.0',
    size: '~2 MB',
    description: 'Free project analysis and ROI calculator',
    requiresSub: false,
  },
];

export default function DownloadsPage() {
  const { user } = useAuth();

  const handleDownload = async (productSlug: string, version: string) => {
    // Log the download
    if (user) {
      await supabase.from('downloads').insert({
        user_id: user.id,
        product: productSlug === 'connector' ? 'psc' : productSlug,
        version,
      });
    }

    // Trigger download (replace with actual download URLs)
    // window.location.href = `/downloads/${productSlug}-${version}.exe`;
    alert(`Download for ${productSlug} v${version} will be available once the installer is uploaded.`);
  };

  return (
    <AccountLayout title="Downloads">
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.slug}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>v{product.version}</span>
                    <span>{product.size}</span>
                    <span>Windows only</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={() => handleDownload(product.slug, product.version)}
                >
                  <Download size={14} className="mr-1.5" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AccountLayout>
  );
}
