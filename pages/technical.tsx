import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, FileCode, CheckCircle } from "lucide-react";

export default function Technical() {
  return (
    <Layout
      title="Technical Implementation - Professional Sheet Creator"
      description="Technical details and Revit API implementation of Professional Sheet Creator add-in"
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Technical Implementation</h1>
            <h2 className="text-2xl text-gray-600 mb-8">Professional Sheet Creator - Revit Add-in</h2>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileCode className="w-6 h-6 mr-2 text-primary" />
                  Core Functionality:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Batch creates sheets from Excel/CSV data (50-100 sheets per minute)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Auto-populates title block parameters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Places views on sheets according to templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Enforces company naming standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Exports to PDF/DWG with proper naming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code2 className="w-6 h-6 mr-2 text-primary" />
                  Revit API Methods:
                </h3>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{`// Sheet Creation
ViewSheet.Create(document, titleBlockId)
ViewSheet.SheetNumber = data.SheetNumber
ViewSheet.Name = data.SheetName

// View Placement
Viewport.Create(document, sheetId, viewId, XYZ)
FilteredElementCollector(document).OfClass(typeof(ViewPlan))

// Transaction Management  
using (Transaction t = new Transaction(doc, "Create Sheets"))
{
    t.Start();
    // Operations
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
                      Revit 2024
                    </li>
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
                  <h3 className="text-lg font-semibold mb-3">Beta Program Status:</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    In active development. Beta testing will begin with select architecture firms.
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