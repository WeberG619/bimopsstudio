import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DownloadPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to free-tools page
    router.replace("/free-tools");
  }, [router]);

  return (
    <Layout
      title="Download - BIM Ops Studio"
      description="Download free Revit tools from BIM Ops Studio"
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Taking you to our free tools page.
            </p>
            <Link href="/free-tools">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Go to Free Tools
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
