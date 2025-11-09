import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { FileText, Brain, Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <Layout
      title="Products | BIM Ops Studio - Complete BIM Workflow Automation"
      description="Professional automation tools for BIM professionals. Professional Sheet Creator and BIMmemory - streamline your entire BIM workflow."
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
            <div className="inline-flex items-center gap-2 bg-[#4A9EFF]/10 text-[#4A9EFF] px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Complete BIM Automation Suite</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Automate Your Entire
              <br />
              <span className="text-[#4A9EFF]">BIM Workflow</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Two powerful tools designed to save you time and eliminate repetitive tasks.
              From documentation to knowledge management, we've got you covered.
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400">
              Built by <span className="font-semibold">Weber Gouin</span>, Autodesk Developer Network Member #USUS0234
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Professional Sheet Creator */}
            <ProductCard
              title="Professional Sheet Creator"
              description="Automate Revit sheet creation from hours to minutes. Batch-create 50+ sheets with templates, auto-populate title blocks, and export to PDF."
              features={[
                "Starting at $80/month",
                "Batch creates sheets with proper numbering",
                "Auto-populates title blocks",
                "Places views by template",
                "Exports to PDF automatically",
                "95% time reduction (4 hours → 10 minutes)"
              ]}
              href="/technical"
              ctaText="Learn More"
              icon={<FileText className="w-12 h-12" />}
            />

            {/* BIMmemory */}
            <ProductCard
              title="BIMmemory"
              description="Never lose another design decision. Voice-first AI memory system that captures, organizes, and recalls all project knowledge instantly."
              features={[
                "Starting at $99/month",
                "Voice capture (call or mobile app)",
                "AI understands BIM terminology",
                "Instant recall with natural language",
                "Tracks clashes, RFIs, design decisions",
                "Save 5-10 hours/week searching"
              ]}
              href="/products/bim-memory"
              badge="Beta"
              badgeVariant="secondary"
              ctaText="Request Beta Access"
              icon={<Brain className="w-12 h-12" />}
              highlight={true}
            />
          </div>

          {/* Bundle Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 text-center border-2 border-[#4A9EFF]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Complete Automation Suite</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get both tools and automate your entire workflow - from documentation to knowledge management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold">$161<span className="text-lg text-gray-500">/month</span></div>
                <div className="text-sm text-gray-500">Individual Bundle</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Save $18 (10% off)</div>
              </div>
              <div className="hidden sm:block text-2xl text-gray-400">•</div>
              <div className="text-center">
                <div className="text-3xl font-bold">$449<span className="text-lg text-gray-500">/month</span></div>
                <div className="text-sm text-gray-500">Team Bundle (5 users)</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Save $50 (10% off)</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get both Professional Sheet Creator and BIMmemory together and save 10%
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Why BIM Ops Studio?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-[#4A9EFF] mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Time Savings</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Automate tasks that used to take hours
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#4A9EFF] mb-2">ADN</div>
                <div className="text-lg font-semibold mb-2">Verified Developer</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Official Autodesk Developer Network Member
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#4A9EFF] mb-2">15+</div>
                <div className="text-lg font-semibold mb-2">Years Experience</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Built by architects, for architects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
