import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, FileCode, CheckCircle } from "lucide-react";

export default function Technical() {
  return (
    <Layout
      title="Technical Implementation - BIM Ops Studio"
      description="Technical details about BIM Ops Studio's AI-powered Revit automation and RevitMCPBridge implementation"
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Technical Implementation</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">RevitMCPBridge - AI-Powered BIM Automation</h2>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileCode className="w-6 h-6 mr-2 text-primary" />
                  Core Capabilities:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>AI-to-Revit communication via named pipes (no HTTP overhead)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Automated wall, room, view, and sheet creation from natural language</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Construction documentation production automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Custom workflow scripting for firm-specific processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Open-source core with enterprise implementation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code2 className="w-6 h-6 mr-2 text-primary" />
                  Revit API Integration:
                </h3>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`// Named Pipe Communication
NamedPipeServerStream pipe = new("RevitMCPBridge2026",
    PipeDirection.InOut, 1, PipeTransmissionMode.Byte,
    PipeOptions.Asynchronous);

// AI-Driven Element Creation
using (Transaction t = new Transaction(doc, "AI Create Elements"))
{
    t.Start();
    Wall.Create(doc, curve, levelId, false);
    ViewSheet.Create(doc, titleBlockId);
    t.Commit();
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Supported Versions:</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Revit 2025
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Revit 2026
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Implementation:</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Custom implementation packages starting at $5,000. 2-4 week delivery.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">ADN Compliance:</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This software is developed under the Autodesk Developer Network program.
                  All Autodesk software licenses are used strictly for add-in development,
                  testing, and marketing - not for production modeling or drafting.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
