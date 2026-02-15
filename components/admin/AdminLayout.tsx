import { useState } from 'react';
import { AdminRoute } from '@/components/auth/AdminRoute';
import { AdminSidebar } from './AdminSidebar';
import Head from 'next/head';
import { Menu } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AdminRoute>
      <Head>
        <title>{title} - Admin | BIM Ops Studio</title>
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <div className="md:ml-64">
          <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
          </header>
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </AdminRoute>
  );
}
