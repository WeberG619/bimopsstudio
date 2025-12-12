import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <Layout
      title="Pricing - Professional Sheet Creator for Revit | BIM Ops Studio"
      description="Get Professional Sheet Creator for Revit - $149 one-time purchase on Autodesk App Store. 71 templates, Excel import, auto title block detection."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                Now Available on Autodesk App Store
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                One-time purchase. Perpetual license. No subscriptions.
              </p>
            </div>

            {/* Main Product Card */}
            <div className="max-w-lg mx-auto mb-16">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border-2 border-blue-600"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Professional Sheet Creator</h2>
                  <p className="text-gray-600 dark:text-gray-300">For Revit 2024, 2025, 2026</p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">$149</span>
                  <span className="text-gray-500 ml-2">USD</span>
                  <p className="text-sm text-gray-500 mt-2">One-time purchase</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>71 pre-configured sheet templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Smart title block auto-detection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Excel/CSV import and export</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Find & Replace across all sheets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Project presets for quick setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Real-time sheet preview</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Load existing sheets from project</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>

                <a
                  href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700">
                    Purchase on Autodesk App Store
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Secure payment via Autodesk App Store
                </p>
              </motion.div>
            </div>

            {/* Why Buy Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Why Professionals Choose Us</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">95% Time Savings</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    What takes 2-3 hours manually takes just 2 minutes with our tool
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="font-semibold text-lg mb-2">Built for Pros</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Templates for Commercial, Residential, Educational, and Healthcare
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="font-semibold text-lg mb-2">ADN Member</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Official Autodesk Developer Network Member #USUS0234
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mt-20">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-lg mb-2">Is this a subscription?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No. Professional Sheet Creator is a one-time purchase of $149. You own the license permanently.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-lg mb-2">Which Revit versions are supported?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The add-in supports Revit 2024, 2025, and 2026.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-lg mb-2">How do I get support?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Contact us at info@bimopsstudio.com. We respond within 24-48 business hours.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-lg mb-2">Can I try before buying?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Check out our free View Preview tool to see the quality of our Revit add-ins.
                    We also have screenshots and details on the Autodesk App Store page.
                  </p>
                </div>
              </div>
            </div>

            {/* Free Tools CTA */}
            <div className="max-w-3xl mx-auto mt-20 text-center">
              <h2 className="text-2xl font-bold mb-4">Looking for Free Tools?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try our View Preview tool - 100% free for the Revit community.
              </p>
              <Link href="/free-tools">
                <Button variant="outline" size="lg">
                  View Free Tools
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
