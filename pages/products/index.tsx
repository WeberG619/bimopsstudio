import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Check, ArrowRight, Download, Bot, Cpu } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <Layout
      title="Services & Tools | BIM Ops Studio - AI-Powered BIM Automation"
      description="AI-powered BIM automation services. RevitMCPBridge implementation, CD production automation, and workflow consulting for architecture and construction firms."
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
              ADN Member #USUS0234
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered BIM
              <br />
              <span className="text-blue-600">Services & Tools</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Automate your BIM workflows with AI. From CD production to custom Revit automation,
              we help architecture firms ship faster with fewer errors.
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400">
              Built by <span className="font-semibold">Weber Gouin</span>, Autodesk Developer Network Member #USUS0234
            </p>
          </motion.div>

          {/* Main Services Card */}
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
                  <Bot className="w-10 h-10 text-blue-600 mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">Implementation Package</h2>
                    <p className="text-gray-500">RevitMCPBridge + Custom Automation</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>RevitMCPBridge setup and configuration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom CD production automation scripts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>AI-powered sheet and view creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Workflow discovery and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Team training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>30 days post-launch support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Revit 2025 and 2026 support</span>
                  </li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Typical Use Cases</div>
                  <div className="text-sm text-blue-700 dark:text-blue-400">
                    Sheet Sets &bull; View Automation &bull; Title Block Data &bull; CD Production
                  </div>
                </div>
              </div>

              {/* Right - Pricing & CTA */}
              <div className="flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="text-lg text-gray-500 mb-1">Starting at</div>
                  <div className="text-5xl font-bold mb-2">$5,000</div>
                  <div className="text-gray-500">Implementation package</div>
                  <div className="text-sm text-gray-400 mt-2">2-4 week delivery</div>
                </div>

                <Link href="/contact" className="block mb-4">
                  <Button size="lg" className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700">
                    Schedule Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <p className="text-center text-sm text-gray-500">
                  Custom scoping &middot; No commitment until proposal
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center text-sm text-gray-500 mb-3">Time Savings</div>
                  <div className="flex justify-center items-center space-x-4 text-lg">
                    <span className="text-gray-400 line-through">2-3 hours</span>
                    <span className="text-blue-600">&rarr;</span>
                    <span className="text-blue-600 font-bold">2 minutes</span>
                  </div>
                  <div className="text-center text-sm text-blue-600 font-semibold mt-2">95% faster CD production</div>
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
            <h2 className="text-3xl font-bold mb-8">Why Firms Choose BIM Ops Studio</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Time Savings</div>
                <div className="text-gray-600 dark:text-gray-400">
                  What takes 2-3 hours manually now takes 2 minutes with AI automation
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
                  Built by a BIM specialist, for AEC teams
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
            <h2 className="text-2xl font-bold mb-4">Open Source Tools</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              RevitMCPBridge is open source. Try our View Preview tool for free -- toggle between
              Revit views instantly with a single click.
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
