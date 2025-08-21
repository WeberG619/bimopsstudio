import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Download
} from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <Layout
      title="Professional Sheet Creator - Revit Sheet Automation Tool"
      description="Create 50+ Revit sheets in 2 minutes. Automate sheet creation, view placement, and title block data from Excel."
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              REVIT ADD-IN
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Sheet Creator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The only Revit add-in you need for automated sheet generation. 
              Built with the Revit API for maximum reliability and performance.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Professional Sheet Creator</h2>
                      <p className="text-blue-100">Revit Sheet Automation Tool</p>
                    </div>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    BETA
                  </Badge>
                </div>

                <p className="text-lg mb-6">
                  Create 50+ Revit sheets in 2 minutes. Automate sheet creation, view placement, 
                  and title block data from Excel. Built for production teams on deadline.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Sheets in 2 min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm text-blue-100">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm text-blue-100">Beta Testers</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Batch creates sheets from Excel/CSV data</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Auto-populates title block parameters</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Places views on sheets according to templates</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Enforces company naming standards</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Exports to PDF/DWG with proper naming</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Built with ViewSheet.Create() API</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold mb-3">Technical Requirements</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Autodesk Revit 2024, 2025, or 2026</li>
                    <li>• Windows 10 or Windows 11</li>
                    <li>• .NET Framework 4.8 or .NET 8.0+</li>
                    <li>• 4GB RAM minimum (8GB recommended)</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/pricing" className="flex-1">
                    <Button size="lg" className="w-full">
                      View Pricing
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/technical" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full">
                      Technical Details
                      <FileText className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Currently in beta testing with 3 architecture firms
              </p>
              <p className="text-sm text-gray-500">
                Commercial release planned for Q4 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}