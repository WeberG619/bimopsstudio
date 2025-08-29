import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Clock, ArrowRight, Expand, Download, Eye, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ImageModal } from "@/components/ui/ImageModal";

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isViewPreviewModalOpen, setIsViewPreviewModalOpen] = useState(false);

  return (
    <Layout
      title="Professional Sheet Creator for Revit | BIM Ops Studio - ADN Member"
      description="Automate Revit sheet creation in 2 minutes. Built by Autodesk Developer Network Member. 95% time savings. Free trial available."
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
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Create 50+ sheets in 2 minutes using customizable templates
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
              Developed by Weber Gouin, Autodesk Developer Network Member #USUS0234
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
                  <span className="text-lg">Auto-populates title blocks from sheet configuration</span>
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
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Coming Soon
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div 
                className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg cursor-pointer relative group"
                onClick={() => setIsImageModalOpen(true)}
              >
                <img 
                  src="/professional-sheet-creator-screenshot.png" 
                  alt="Professional Sheet Creator interface in Revit"
                  className="w-full rounded transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                    <Expand className="w-6 h-6 text-gray-800 dark:text-white" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                Professional Sheet Creator interface showing batch sheet creation
                <span className="block text-xs mt-1">Click to enlarge</span>
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

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto border-4 border-[#4A9EFF]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-8 text-[#4A9EFF]">95% Time Reduction</h2>
            <div className="flex justify-center items-center space-x-8 text-3xl">
              <span className="text-gray-500 line-through">4 hours</span>
              <ArrowRight className="w-8 h-8 text-green-500" />
              <span className="text-green-600 font-bold">10 minutes</span>
            </div>
            <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
              Currently in beta with 3 architecture firms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">Free Tool: View Preview for Revit</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              While you wait for Professional Sheet Creator, try our View Preview tool
            </p>
            
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                Toggle between views instantly with a single click. See previews of your views without opening each one. 
                Perfect for navigating projects with 30+ views.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Eye className="w-12 h-12 text-[#4A9EFF] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">One-click preview</h3>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-[#4A9EFF] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Works with plans, sections, elevations & 3D</h3>
                </div>
                <div className="text-center">
                  <Download className="w-12 h-12 text-[#4A9EFF] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">No installation required</h3>
                </div>
              </div>

              {/* Preview Demo Image */}
              <div 
                className="mb-8 cursor-pointer group relative max-w-2xl mx-auto"
                onClick={() => setIsViewPreviewModalOpen(true)}
              >
                <img 
                  src="/images/view-preview-demo.png" 
                  alt="View Preview Tool Demo"
                  className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                    <Expand className="w-6 h-6 text-gray-800 dark:text-white" />
                  </div>
                </div>
              </div>
              
              <p className="text-center font-semibold text-green-600 mb-6">
                100% free for the Revit community
              </p>
              
              <div className="text-center">
                <Link href="/free-tools">
                  <Button size="lg" className="bg-[#4A9EFF] hover:bg-[#3A8EEF]">
                    Download Free Tool
                    <Download className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                  Version 1.0 - Released August 2025
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Available for Revit 2024, 2025, and 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Built by Industry Veterans</h2>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                BIM Ops Studio was founded by Weber Gouin, bringing 15 years of architecture experience to software development. 
                After seeing talented professionals waste hours on repetitive documentation tasks, he transitioned from 
                architecture to building the tools the industry desperately needs.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <img 
                  src="/ADN/autodesk-authorized-developer-logo/autodesk-authorized-developer-logo-rgb-black.png" 
                  alt="Autodesk Developer Network Member"
                  className="h-16 dark:invert"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Official Autodesk Developer Network Member since August 2025</p>
                  <p className="text-[#4A9EFF]">Member #USUS0234</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc="/professional-sheet-creator-screenshot.png"
        imageAlt="Professional Sheet Creator interface in Revit - Full View"
      />
      
      <ImageModal
        isOpen={isViewPreviewModalOpen}
        onClose={() => setIsViewPreviewModalOpen(false)}
        imageSrc="/images/view-preview-demo.png"
        imageAlt="View Preview Tool Demo - Full View"
      />
    </Layout>
  );
}