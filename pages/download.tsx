import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, AlertCircle, ExternalLink, Zap, Shield, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <Layout
      title="Download BIM Ops Connector - Free Revit Add-in | BIM Ops Studio"
      description="Download our free Revit add-in to instantly analyze your project and see personalized ROI. Works with Revit 2024-2026. No credit card required."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#4A9EFF]/10 text-[#4A9EFF] border-[#4A9EFF]/30">
                <Zap className="w-4 h-4 mr-2" />
                Free Revit Add-in
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                BIM Ops Connector for Revit
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get instant project analysis and personalized ROI calculations—right inside Revit. No web forms, no context switching.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <BarChart3 className="w-12 h-12 text-[#4A9EFF] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Instant Project Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automatically analyzes sheets, views, families, and team size from your current Revit project
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-[#4A9EFF] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personalized ROI</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    See exact time savings and annual cost savings based on YOUR project metrics—not generic estimates
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-[#4A9EFF] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Privacy-Focused</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Only collects project metadata (no geometry). Data never leaves your machine unless you start a trial
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-[#4A9EFF] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">One-Click Trial</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start your 14-day free trial directly from Revit—no forms, no credit card, no hassle
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Download Section */}
            <Card className="mb-12 border-2 border-[#4A9EFF]">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Download BIM Ops Connector</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Latest Version: 1.0.0 • Released: November 2025
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Revit 2024</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Revit 2025</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Revit 2026</span>
                    </div>
                  </div>

                  <Button size="lg" className="text-lg px-10 py-6 bg-[#4A9EFF] hover:bg-[#3A8EEF] mb-4">
                    <Download className="mr-2 w-5 h-5" />
                    Download for Revit (Coming Soon)
                  </Button>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    File size: ~2 MB • Windows only • Free forever
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Installation Instructions */}
            <Card className="mb-12">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6">Installation Instructions</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Download the Add-in</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Click the download button above to get the installer file (BIMOpsConnector_Setup.exe)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Run the Installer</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Double-click the downloaded file and follow the on-screen prompts. You may need administrator privileges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Launch Revit</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Open Revit 2024, 2025, or 2026. The add-in will automatically load.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Find the "BIM Ops" Tab</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Look for the new "BIM Ops" tab in the Revit ribbon. Click "Project Insights" to get started.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Analyze Your Project</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Open any Revit project and click the "Project Insights" button to see instant ROI analysis!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card className="mb-12">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6">System Requirements</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Minimum Requirements:</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>Windows 10 or later</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>Revit 2024, 2025, or 2026</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>.NET Framework 4.8 or later</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>20 MB free disk space</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span>Internet connection (for trial activation only)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Important Notes:</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Works with both standalone and network licenses</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Compatible with workshared projects</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>No admin rights required after installation</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                        <span>Works offline (except trial activation)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="mb-12">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Is the add-in really free?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes! The BIM Ops Connector add-in is completely free forever. It provides project analysis and ROI calculations at no cost. You only pay if you choose to start a trial of Professional Sheet Creator.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Does it send my project data anywhere?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No! The add-in only collects project metadata (sheet counts, view counts, etc.) and this data stays on your machine UNLESS you explicitly start a trial. We never collect geometry or project files.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">What Revit versions are supported?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      The add-in works with Revit 2024, 2025, and 2026. We'll add support for new versions as they're released.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Do I need internet to use it?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No! The project analysis works completely offline. You only need internet if you want to start a free trial.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">How do I uninstall it?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Go to Windows Settings → Apps → Find "BIM Ops Connector" → Click Uninstall. Or simply delete the files from %APPDATA%\Autodesk\Revit\Addins\2025\
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions or need installation support?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/technical">
                  <Button size="lg" className="bg-[#4A9EFF] hover:bg-[#3A8EEF]">
                    View Technical Docs
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
