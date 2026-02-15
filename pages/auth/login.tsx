import { Layout } from '@/components/layout/Layout';
import { AuthForm, AuthFormData } from '@/components/auth/AuthForm';
import { Card, CardContent } from '@/components/ui/card';
import { signIn, signInWithGoogle } from '@/lib/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const redirect = (router.query.redirect as string) || '/';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: AuthFormData) => {
    setIsLoading(true);
    setError(null);

    const { error } = await signIn(data.email, data.password);

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      router.push(redirect);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    await signInWithGoogle();
  };

  return (
    <Layout title="Sign In - BIM Ops Studio" description="Sign in to your BIM Ops Studio account">
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-electric-blue" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 pb-6">
                <AuthForm
                  mode="login"
                  onSubmit={handleLogin}
                  onGoogleAuth={handleGoogle}
                  isLoading={isLoading}
                  error={error}
                />

                <div className="mt-4 text-center text-sm">
                  <Link
                    href="/auth/forgot-password"
                    className="text-electric-blue hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-electric-blue hover:underline font-medium">
                Create one
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
