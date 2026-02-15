import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  CreditCard,
  Clock,
  Mail,
  ArrowLeft,
  UserCheck,
} from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/leads', label: 'Leads', icon: Users },
  { href: '/admin/deals', label: 'Deals', icon: Briefcase },
  { href: '/admin/customers', label: 'Customers', icon: UserCheck },
  { href: '/admin/subscriptions', label: 'Subscriptions', icon: CreditCard },
  { href: '/admin/trials', label: 'Trials', icon: Clock },
  { href: '/admin/email-logs', label: 'Email Logs', icon: Mail },
];

export function AdminSidebar() {
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-deep-navy text-white hidden md:flex flex-col z-40">
      <div className="p-6 border-b border-white/10">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="BIM Ops Studio" className="w-8 h-8" />
          <div>
            <div className="font-heading font-bold text-lg">BIM Ops</div>
            <div className="text-xs text-gray-400">Admin Dashboard</div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href ||
            (item.href !== '/admin' && router.pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-electric-blue/20 text-electric-blue border-r-2 border-electric-blue'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} className="mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Site
        </Link>
      </div>
    </aside>
  );
}
