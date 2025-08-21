import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Server,
  Shield,
  Terminal,
  Layers,
  FileCode,
  Zap,
  Network
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const apiComponents = [
  {
    name: "IExternalCommand",
    description: "Command execution interface for user-triggered actions"
  },
  {
    name: "IExternalApplication",
    description: "Application-level integration for ribbon customization"
  },
  {
    name: "IExternalEventHandler",
    description: "Modeless dialog operations and background processing"
  },
  {
    name: "DocumentChanged Events",
    description: "Real-time model monitoring and updates"
  },
  {
    name: "Transaction/TransactionGroup",
    description: "Atomic operations with rollback capability"
  },
  {
    name: "FilteredElementCollector",
    description: "Optimized element queries for large models"
  }
];

const performanceMetrics = [
  { metric: "Sheet Creation", value: "50-100", unit: "sheets/minute" },
  { metric: "View Placement", value: "200+", unit: "views/minute" },
  { metric: "Parameter Updates", value: "1000+", unit: "per second" },
  { metric: "Model Size Support", value: "800", unit: "MB tested" },
  { metric: "Concurrent Users", value: "100+", unit: "supported" },
  { metric: "Processing Threads", value: "Multi", unit: "threaded" }
];

const codeExample = `// Core Revit API namespaces
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;
using Autodesk.Revit.ApplicationServices;
using Autodesk.Revit.DB.Events;
using Autodesk.Revit.DB.ExtensibleStorage;

// Example: Automated Sheet Generation
public class SheetGenerator : IExternalCommand
{
    public Result Execute(
        ExternalCommandData commandData,
        ref string message,
        ElementSet elements)
    {
        UIDocument uidoc = commandData.Application.ActiveUIDocument;
        Document doc = uidoc.Document;
        
        using (Transaction trans = new Transaction(doc, "Generate Sheets"))
        {
            trans.Start();
            
            // Use FilteredElementCollector for efficient queries
            var titleBlocks = new FilteredElementCollector(doc)
                .OfClass(typeof(FamilySymbol))
                .OfCategory(BuiltInCategory.OST_TitleBlocks)
                .Cast<FamilySymbol>()
                .FirstOrDefault();
            
            // Create sheets with optimized ViewSheet.Create()
            for (int i = 0; i < 100; i++)
            {
                ViewSheet sheet = ViewSheet.Create(doc, titleBlocks.Id);
                sheet.SheetNumber = $"A-{i:D3}";
                sheet.Name = $"Floor Plan - Level {i}";
            }
            
            trans.Commit();
        }
        
        return Result.Succeeded;
    }
}`;

export default function TechnicalSpecs() {
  return (
    <Layout
      title="Technical Specifications - Revit Pro Tools"
      description="Deep dive into ReviTask Pro's technical architecture, Revit API integration, performance metrics, and implementation details."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
              Enterprise-Grade Revit Add-in
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Technical <span className="text-lime-accent">Specifications</span>
            </h1>
            
            <p className="text-xl text-blue-100">
              Built on native Revit API for maximum performance and reliability. 
              Deep integration with Autodesk's architecture for seamless automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="api" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="api">API Integration</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="code">Code Examples</TabsTrigger>
            </TabsList>

            {/* API Integration Tab */}
            <TabsContent value="api">
              <div className="space-y-8">
                {/* Core API Components */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
                        <Code2 className="w-6 h-6 mr-3 text-electric-blue" />
                        Core API Components
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {apiComponents.map((component, index) => (
                          <motion.div
                            key={component.name}
                            className="border-l-4 border-electric-blue pl-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <h3 className="font-mono text-lg font-semibold text-deep-navy dark:text-white">
                              {component.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {component.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Supported Versions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
                        <Layers className="w-6 h-6 mr-3 text-electric-blue" />
                        Supported Revit Versions
                      </h2>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-3xl font-bold text-electric-blue mb-2">2024</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">API version 24.0</div>
                          <Badge className="mt-2">Stable</Badge>
                        </div>
                        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-3xl font-bold text-electric-blue mb-2">2025</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">API version 25.0</div>
                          <Badge className="mt-2">Stable</Badge>
                        </div>
                        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-3xl font-bold text-electric-blue mb-2">2026</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">API version 26.0</div>
                          <Badge className="mt-2">Beta</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* API Methods */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
                        <FileCode className="w-6 h-6 mr-3 text-electric-blue" />
                        Primary Classes & Interfaces
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-3">Document Management</h4>
                          <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              Document
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              Transaction
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              FilteredElementCollector
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">View Operations</h4>
                          <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              ViewSheet
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              ViewPlan, ViewSection
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              ViewSchedule
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Element Handling</h4>
                          <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              FamilyInstance
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              FamilySymbol
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              BuiltInParameter
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Event Handling</h4>
                          <ul className="space-y-2 font-mono text-sm">
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              IExternalEventHandler
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              ExternalEvent
                            </li>
                            <li className="flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-lime-accent" />
                              WorksharingUtils
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl font-bold mb-8 flex items-center">
                      <Gauge className="w-6 h-6 mr-3 text-electric-blue" />
                      Performance Metrics
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {performanceMetrics.map((metric, index) => (
                        <motion.div
                          key={metric.metric}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="text-3xl font-bold text-electric-blue mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {metric.unit}
                          </div>
                          <div className="text-lg font-semibold mt-2">
                            {metric.metric}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-electric-blue" />
                        Performance Optimizations
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 mr-2 mt-0.5 text-lime-accent flex-shrink-0" />
                          <span>Multi-threaded batch processing for non-blocking operations</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 mr-2 mt-0.5 text-lime-accent flex-shrink-0" />
                          <span>Lazy loading and caching for frequently accessed elements</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 mr-2 mt-0.5 text-lime-accent flex-shrink-0" />
                          <span>Optimized FilteredElementCollector queries with early filtering</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 mr-2 mt-0.5 text-lime-accent flex-shrink-0" />
                          <span>Batch API calls to minimize Revit overhead</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Architecture Tab */}
            <TabsContent value="architecture">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
                        <Server className="w-6 h-6 mr-3 text-electric-blue" />
                        Technical Architecture
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-semibold text-lg mb-4 flex items-center">
                            <Database className="w-5 h-5 mr-2 text-electric-blue" />
                            Core Technologies
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <span className="font-medium">.NET Integration</span>
                              <Badge variant="outline">.NET 4.8 & 8.0+</Badge>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <span className="font-medium">Programming Language</span>
                              <Badge variant="outline">C# 11.0</Badge>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <span className="font-medium">UI Framework</span>
                              <Badge variant="outline">WPF/MVVM</Badge>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <span className="font-medium">Database</span>
                              <Badge variant="outline">SQLite</Badge>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-lg mb-4 flex items-center">
                            <GitBranch className="w-5 h-5 mr-2 text-electric-blue" />
                            System Features
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <Network className="w-5 h-5 mr-3 mt-0.5 text-lime-accent flex-shrink-0" />
                              <div>
                                <div className="font-medium">Multi-threading</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  Parallel batch processing operations
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <Shield className="w-5 h-5 mr-3 mt-0.5 text-lime-accent flex-shrink-0" />
                              <div>
                                <div className="font-medium">Error Handling</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  Comprehensive logging & recovery
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <Cpu className="w-5 h-5 mr-3 mt-0.5 text-lime-accent flex-shrink-0" />
                              <div>
                                <div className="font-medium">Transaction Safety</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  Full rollback capability
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Deployment Architecture */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="font-heading text-2xl font-bold mb-6">
                        Deployment Architecture
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="p-4 border-l-4 border-electric-blue">
                          <h4 className="font-semibold mb-2">Local Installation</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Direct installation to Revit addins folder with automatic version detection
                          </p>
                        </div>
                        <div className="p-4 border-l-4 border-lime-accent">
                          <h4 className="font-semibold mb-2">Network Deployment</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Centralized deployment supporting 100+ concurrent users via shared network location
                          </p>
                        </div>
                        <div className="p-4 border-l-4 border-indigo-500">
                          <h4 className="font-semibold mb-2">Configuration Management</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            SQLite database for user preferences and shared team templates
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Code Examples Tab */}
            <TabsContent value="code">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl font-bold mb-6 flex items-center">
                      <Code2 className="w-6 h-6 mr-3 text-electric-blue" />
                      Implementation Example
                    </h2>
                    
                    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>{codeExample}</code>
                      </pre>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm">
                        <strong>Key Implementation Details:</strong>
                      </p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Transaction-based operations ensure data integrity</li>
                        <li>• FilteredElementCollector provides optimized queries</li>
                        <li>• Batch operations can process 50-100 sheets per minute</li>
                        <li>• Full error handling and rollback capability included</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Enterprise-Grade Automation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See how Revit Pro Tools' technical capabilities can transform your documentation workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/api-docs" 
                className="inline-flex items-center px-6 py-3 bg-white text-deep-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FileCode className="w-5 h-5 mr-2" />
                View API Documentation
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-deep-navy transition-colors"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Request Technical Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}