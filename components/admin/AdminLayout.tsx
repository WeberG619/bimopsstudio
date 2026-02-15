import { AdminRoute } from '@/components/auth/AdminRoute';
import { AdminSidebar } from './AdminSidebar';
import Head from 'next/head';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <AdminRoute>
      <Head>
        <title>{title} - Admin | BIM Ops Studio</title>
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminSidebar />
        <div className="md:ml-64">
          <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
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
