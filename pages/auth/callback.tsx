import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Supabase handles the OAuth callback automatically via the URL hash
    // We just need to wait for the session to be established
    const handleCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Auth callback error:', error);
        router.replace('/auth/login?error=callback_failed');
        return;
      }

      if (session) {
        router.replace('/');
      } else {
        // Give Supabase a moment to process the hash fragment
        setTimeout(async () => {
          const { data: { session } } = await supabase.auth.getSession();
          router.replace(session ? '/' : '/auth/login');
        }, 1000);
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-300">Completing sign in...</p>
      </div>
    </div>
  );
}
