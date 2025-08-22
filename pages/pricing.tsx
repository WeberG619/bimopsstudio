import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <Layout
      title="Early Access - Professional Sheet Creator"
      description="Request early access to Professional Sheet Creator. 15 day free trial."
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8">Early Access Program</h1>
            
            <Card className="mb-8">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-2">Professional Sheet Creator</h2>
                <div className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
                  Founding-user pricing available
                </div>
                
                <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Create 50+ sheets in 2 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Built-in template configuration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Automatic view placement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>PDF/DWG batch export</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>15 day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Direct support from development team</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="w-full max-w-sm">
                    Request Early Access
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <p className="text-gray-600 dark:text-gray-300">
              Limited spots available • Beta program starting soon
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}