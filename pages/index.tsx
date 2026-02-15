import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Clock, ArrowRight, Expand, Download, Eye, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ImageModal } from "@/components/ui/ImageModal";

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isViewPreviewModalOpen, setIsViewPreviewModalOpen] = useState(false);

  return (
    <Layout
      title="Professional Sheet Creator for Revit | BIM Ops Studio - ADN Member"
      description="Automate Revit sheet creation in 2 minutes. 71 templates, Excel import, auto title block detection. Now available on Autodesk App Store. Built by Autodesk Developer Network Member."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Autodesk App Store Badge */}
            <div className="mb-6">
              <a
                href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <span className="mr-2">Now Available on Autodesk App Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Professional Sheet Creator for Revit
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Create 50+ sheets in 2 minutes using 71 customizable templates
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
              Developed by Weber Gouin, Autodesk Developer Network Member #USUS0234
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Key Features:</h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg">71 pre-configured sheet templates</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg">Smart title block auto-detection</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg">Excel/CSV import and export</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg">Find & Replace across all sheets</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg">Project presets for quick setup</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg">Real-time sheet preview</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Compatible With</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Revit 2024, 2025, 2026
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  $149 one-time purchase
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  via Autodesk App Store
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

            <a
              href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                Get it on Autodesk App Store
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>

            <p className="mt-4 text-gray-500 text-sm">
              $149 USD - One-time purchase - Perpetual license
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-8 text-blue-600">95% Time Reduction</h2>
            <div className="flex justify-center items-center space-x-8 text-3xl">
              <span className="text-gray-500 line-through">2-3 hours</span>
              <ArrowRight className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-bold">2 minutes</span>
            </div>
            <div className="text-center mt-8 space-y-3">
              <p className="text-gray-600 dark:text-gray-300 font-semibold">
                Trusted by architecture and engineering professionals
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Autodesk Developer Network Member #USUS0234
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  71 Sheet Templates
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
                  Excel Import
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  Auto Title Block
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">Free Tool: View Preview for Revit</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              Try our free View Preview tool for navigating complex projects
            </p>

            <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl p-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                Toggle between views instantly with a single click. See previews of your views without opening each one.
                Perfect for navigating projects with 30+ views.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">One-click preview</h3>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Plans, sections, elevations & 3D</h3>
                </div>
                <div className="text-center">
                  <Download className="w-12 h-12 text-blue-600 mx-auto mb-3" />
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

              <p className="text-center font-semibold text-blue-600 mb-6">
                100% free for the Revit community
              </p>

              <div className="text-center">
                <Link href="/free-tools">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Download Free Tool
                    <Download className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                  Available for Revit 2024, 2025, and 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Built by Industry Veterans</h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                BIM Ops Studio was founded by Weber Gouin, bringing 15 years of architecture experience to software development.
                After seeing talented professionals waste hours on repetitive documentation tasks, he transitioned from
                architecture to building the tools the industry needs.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <img
                  src="/ADN/autodesk-authorized-developer-logo/autodesk-authorized-developer-logo-rgb-black.png"
                  alt="Autodesk Developer Network Member"
                  className="h-16 dark:invert"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Official Autodesk Developer Network Member</p>
                  <p className="text-blue-600">Member #USUS0234</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Save Hours on Every Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional Sheet Creator is available now on the Autodesk App Store.
              One-time purchase, perpetual license.
            </p>
            <a
              href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-10 py-6 bg-white text-blue-600 hover:bg-gray-100">
                Purchase on Autodesk App Store - $149
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
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
