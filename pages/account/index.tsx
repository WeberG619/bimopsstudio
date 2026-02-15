import { useState } from 'react';
import { AccountLayout } from '@/components/account/AccountLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { updateProfile } from '@/lib/auth';
import { Save, CheckCircle } from 'lucide-react';

export default function AccountPage() {
  const { user, profile, refreshProfile } = useAuth();
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    company: profile?.company || '',
    role: profile?.role || '',
    revit_version: profile?.revit_version || '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsLoading(true);
    setSaved(false);

    await updateProfile(user.id, formData);
    await refreshProfile();

    setIsLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm";

  return (
    <AccountLayout title="Profile">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-6">Profile Information</h2>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" value={user?.email || ''} disabled className={`${inputClass} opacity-60 cursor-not-allowed`} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
              <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="e.g. BIM Manager" className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Revit Version</label>
              <select name="revit_version" value={formData.revit_version} onChange={handleChange} className={inputClass}>
                <option value="">Select version</option>
                <option value="2024">Revit 2024</option>
                <option value="2025">Revit 2025</option>
                <option value="2026">Revit 2026</option>
                <option value="multiple">Multiple versions</option>
              </select>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={isLoading}>
                <Save size={16} className="mr-1.5" />
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
              {saved && (
                <span className="text-green-600 dark:text-green-400 text-sm flex items-center">
                  <CheckCircle size={14} className="mr-1" />
                  Saved
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </AccountLayout>
  );
}
