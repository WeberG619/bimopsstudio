import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      title="Professional Sheet Creator - Revit Sheet Automation Add-in"
      description="Create 50+ Revit sheets in 2 minutes from Excel data. Built with Revit API 2024-2026."
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Professional Sheet Creator for Revit
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12">
              Create 50+ sheets in 2 minutes from Excel data
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">What it does:</h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-lg">Batch creates sheets with proper numbering</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-lg">Auto-populates title blocks from Excel/CSV</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-lg">Places views on sheets by template</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <span className="text-lg">Exports to PDF with correct naming</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Technical</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with Revit API 2024-2026
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Status</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Beta testing - 15 day free trial
                </p>
              </div>
            </div>

            <div className="mb-8">
              <img 
                src="/professional-sheet-creator-screenshot.png" 
                alt="Professional Sheet Creator interface in Revit"
                className="rounded-lg shadow-xl w-full"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional Sheet Creator interface showing batch sheet creation
              </p>
            </div>

            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                REQUEST BETA ACCESS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <p className="mt-2 text-gray-500 text-xs">
              Founding-user pricing available after the trial.
            </p>

            <p className="mt-8 text-gray-500 text-sm">
              In development • Beta testing coming soon
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}