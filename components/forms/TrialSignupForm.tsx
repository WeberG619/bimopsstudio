import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { signUp, signInWithGoogle } from '@/lib/auth';
import { createCheckoutSession } from '@/lib/stripe';
import type { ProductSlug, PlanTier } from '@/types';
import { ArrowRight, Loader2 } from 'lucide-react';

interface TrialSignupFormProps {
  product: ProductSlug;
  plan: PlanTier;
  buttonText?: string;
}

export function TrialSignupForm({ product, plan, buttonText = 'Start Free Trial' }: TrialSignupFormProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!user) {
        // Not logged in — redirect to signup with return URL
        router.push(`/auth/signup?redirect=/pricing&product=${product}&plan=${plan}`);
        return;
      }

      // Already logged in — create checkout session
      const { url } = await createCheckoutSession(product, plan);
      window.location.href = url;
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        size="lg"
        className="w-full"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 size={16} className="animate-spin mr-2" />
        ) : (
          <ArrowRight size={16} className="mr-2" />
        )}
        {isLoading ? 'Setting up...' : buttonText}
      </Button>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
