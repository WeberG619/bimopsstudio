import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <Layout
      title="Pricing - Professional Sheet Creator"
      description="Professional Sheet Creator pricing. Starting at $80/month. 14-day free trial."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Sheet Creator Pricing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Start your 14-day free trial. No credit card required.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Individual Plan */}
              <Card>
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-2">Individual</h2>
                  <div className="text-4xl font-bold text-[#4A9EFF] mb-6">
                    $80<span className="text-lg text-gray-500">/month</span>
                  </div>

                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>1 user</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>1 active project</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Batch sheet creation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Auto-populate title blocks</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>PDF/DWG export</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Email support</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="w-full">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Team Plan */}
              <Card className="ring-2 ring-[#4A9EFF] shadow-2xl scale-105">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-[#4A9EFF] text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    Most Popular
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Team</h2>
                  <div className="text-4xl font-bold text-[#4A9EFF] mb-6">
                    $200<span className="text-lg text-gray-500">/month</span>
                  </div>

                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Up to 5 users</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Unlimited projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>All Individual features</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Shared templates library</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Team collaboration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Priority support</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="w-full">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card>
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
                  <div className="text-4xl font-bold text-[#4A9EFF] mb-6">
                    Custom
                  </div>

                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Unlimited users</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Unlimited projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>All Team features</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Custom integrations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Dedicated support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>SLA guarantee</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full">
                      Contact Sales
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>14-day free trial</strong> • No credit card required • Cancel anytime
            </p>

            <Card>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4">Looking for BIMmemory?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Check out our AI-powered memory system for BIM professionals. Starting at $99/month.
                </p>
                <Link href="/products/bim-memory">
                  <Button size="lg" variant="outline">
                    View BIMmemory Pricing
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}