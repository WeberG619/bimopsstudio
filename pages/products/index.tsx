import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Check, ExternalLink, Download } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <Layout
      title="Products | BIM Ops Studio - Professional Sheet Creator for Revit"
      description="Professional Sheet Creator for Revit - Create 50+ sheets in 2 minutes. 71 templates, Excel import, auto title block detection. Available on Autodesk App Store."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              Now Available on Autodesk App Store
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Sheet Creator
              <br />
              <span className="text-blue-600">for Revit</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Create entire sheet sets in seconds. 71 templates, Excel import, auto title block detection.
              Turn hours of work into minutes.
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400">
              Built by <span className="font-semibold">Weber Gouin</span>, Autodesk Developer Network Member #USUS0234
            </p>
          </motion.div>

          {/* Main Product Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Features */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-10 h-10 text-blue-600 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">Professional Sheet Creator</h2>
                    <p className="text-gray-500">For Revit 2024, 2025, 2026</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
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
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Template Categories</div>
                  <div className="text-sm text-blue-700 dark:text-blue-400">
                    Commercial • Residential • Educational • Healthcare
                  </div>
                </div>
              </div>

              {/* Right - Pricing & CTA */}
              <div className="flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">$149</div>
                  <div className="text-gray-500">USD - One-time purchase</div>
                  <div className="text-sm text-gray-400 mt-2">Perpetual license</div>
                </div>

                <a
                  href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4"
                >
                  <Button size="lg" className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700">
                    Purchase on Autodesk App Store
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>

                <p className="text-center text-sm text-gray-500">
                  Secure payment via Autodesk
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center text-sm text-gray-500 mb-3">Time Savings</div>
                  <div className="flex justify-center items-center space-x-4 text-lg">
                    <span className="text-gray-400 line-through">2-3 hours</span>
                    <span className="text-blue-600">→</span>
                    <span className="text-blue-600 font-bold">2 minutes</span>
                  </div>
                  <div className="text-center text-sm text-blue-600 font-semibold mt-2">95% faster</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Why Professionals Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Time Savings</div>
                <div className="text-gray-600 dark:text-gray-400">
                  What takes 2-3 hours manually now takes 2 minutes
                </div>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">ADN</div>
                <div className="text-lg font-semibold mb-2">Verified Developer</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Official Autodesk Developer Network Member #USUS0234
                </div>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-lg font-semibold mb-2">Years Experience</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Built by architects, for architects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Free Tools Section */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Looking for Free Tools?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Try our View Preview tool - toggle between Revit views instantly with a single click.
              100% free for the Revit community.
            </p>
            <Link href="/free-tools">
              <Button size="lg" variant="outline">
                <Download className="mr-2 w-5 h-5" />
                View Free Tools
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
