import { Layout } from '@/components/layout/Layout';
import { AuthForm, AuthFormData } from '@/components/auth/AuthForm';
import { Card, CardContent } from '@/components/ui/card';
import { signUp, signInWithGoogle } from '@/lib/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserPlus, CheckCircle } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = async (data: AuthFormData) => {
    setIsLoading(true);
    setError(null);

    const { error } = await signUp(data.email, data.password, {
      full_name: data.fullName,
      company: data.company,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setIsSuccess(true);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    await signInWithGoogle();
  };

  if (isSuccess) {
    return (
      <Layout title="Check Your Email - BIM Ops Studio" description="Verify your email to complete signup">
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-8 pb-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We've sent a confirmation link to your email address. Click the link to activate your account.
                  </p>
                  <Link
                    href="/auth/login"
                    className="text-electric-blue hover:underline font-medium"
                  >
                    Back to Sign In
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title="Create Account - BIM Ops Studio" description="Create your BIM Ops Studio account">
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-electric-blue" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Start your 14-day free trial
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 pb-6">
                <AuthForm
                  mode="signup"
                  onSubmit={handleSignup}
                  onGoogleAuth={handleGoogle}
                  isLoading={isLoading}
                  error={error}
                />
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-electric-blue hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
