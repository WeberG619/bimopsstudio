import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Layout } from '@/components/layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { User, CreditCard, Download, Key } from 'lucide-react';

const navItems = [
  { href: '/account', label: 'Profile', icon: User },
  { href: '/account/subscriptions', label: 'Subscriptions', icon: CreditCard },
  { href: '/account/downloads', label: 'Downloads', icon: Download },
  { href: '/account/licenses', label: 'Licenses', icon: Key },
];

interface AccountLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AccountLayout({ children, title }: AccountLayoutProps) {
  const router = useRouter();

  return (
    <ProtectedRoute>
      <Layout title={`${title} - My Account | BIM Ops Studio`} description="Manage your BIM Ops Studio account">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8">My Account</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isActive = router.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-electric-blue/10 text-electric-blue'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon size={16} className="mr-3" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Content */}
              <div className="md:col-span-3">
                {children}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ProtectedRoute>
  );
}
