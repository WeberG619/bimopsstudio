import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  FileText,
  CheckCircle,
  ArrowRight,
  Download,
  Clock,
  User,
  BookOpen,
  Lightbulb,
  Target,
  AlertTriangle,
  Settings,
  Layout as LayoutIcon
} from "lucide-react";

const tableOfContents = [
  { title: "Planning Your Sheet Strategy", anchor: "planning" },
  { title: "Naming Conventions", anchor: "naming" },
  { title: "Template Setup", anchor: "templates" },
  { title: "View Management", anchor: "views" },
  { title: "Title Block Best Practices", anchor: "titleblocks" },
  { title: "Common Mistakes to Avoid", anchor: "mistakes" },
  { title: "Automation Opportunities", anchor: "automation" }
];

const bestPractices = [
  {
    icon: Target,
    title: "Consistent Naming",
    description: "Use standardized naming conventions across all sheets for easy identification and sorting."
  },
  {
    icon: LayoutIcon,
    title: "Template Standardization",
    description: "Create and maintain consistent sheet templates with proper title blocks and layouts."
  },
  {
    icon: Settings,
    title: "View Organization",
    description: "Organize views logically in the project browser before placing them on sheets."
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Implement systematic checks for sheet completeness and accuracy before publishing."
  }
];

const commonMistakes = [
  {
    title: "Inconsistent Sheet Numbering",
    description: "Using different numbering systems across disciplines leads to confusion.",
    solution: "Establish a project-wide sheet numbering standard early in the project."
  },
  {
    title: "Overloaded Sheets",
    description: "Cramming too much information on a single sheet reduces readability.",
    solution: "Follow industry standards for drawing density and create additional sheets when needed."
  },
  {
    title: "Missing Title Block Information",
    description: "Incomplete or inconsistent title block data causes coordination issues.",
    solution: "Use shared parameters and project standards to ensure complete title block data."
  },
  {
    title: "Poor View Placement",
    description: "Views placed without consideration for sheet composition and hierarchy.",
    solution: "Plan sheet layouts with proper view hierarchy and logical information flow."
  }
];

export default function SheetCreationBestPractices() {
  return (
    <Layout
      title="Sheet Creation Best Practices - BIM Resources"
      description="Professional techniques for efficient Revit sheet management, naming conventions, and template standardization."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/resources" className="inline-flex items-center text-lime-accent hover:text-lime-accent/80 mb-6">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Resources
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lime-accent/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-lime-accent" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-lime-accent/10 text-lime-accent border-lime-accent/20 mb-2">
                    Best Practices Guide
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      20 min read
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Beginner Level
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sheet Creation <span className="text-lime-accent">Best Practices</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                Master professional sheet management techniques to create consistent, 
                well-organized construction documents that meet industry standards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90">
                  <Download className="mr-2 w-5 h-5" />
                  Download PDF Guide
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  <BookOpen className="mr-2 w-5 h-5" />
                  View Template Files
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tableOfContents.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={`#${item.anchor}`}
                  className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-electric-blue dark:hover:border-electric-blue transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-6 h-6 bg-electric-blue/10 rounded flex items-center justify-center text-electric-blue text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 hover:text-electric-blue">
                    {item.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key Principles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Four fundamental principles that form the foundation of professional sheet management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <practice.icon className="w-6 h-6 text-electric-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {practice.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {practice.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="planning" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Planning Your Sheet Strategy
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Before creating your first sheet, establish a comprehensive sheet strategy that aligns 
                with your project requirements and industry standards. This upfront planning will save 
                countless hours throughout the project lifecycle.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" id="naming">
                Naming Conventions
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Consistent sheet naming is crucial for project organization and coordination:
              </p>

              <Card className="mb-6 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Recommended Naming Structure:</h4>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                    <div className="mb-2">[Discipline][Sheet Type][Sequential Number] - [Sheet Title]</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Examples:<br/>
                      • A101 - Floor Plans<br/>
                      • S201 - Foundation Plan<br/>
                      • M301 - HVAC Plans
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" id="templates">
                Template Setup
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Well-designed sheet templates ensure consistency and save significant time during sheet creation:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>Create templates for different sheet sizes (24x36, 30x42, etc.)</li>
                <li>Include standard title blocks with project parameters</li>
                <li>Set up consistent viewport templates</li>
                <li>Define standard text styles and dimensions</li>
                <li>Include revision tracking areas</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" id="views">
                View Management
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Organize your views systematically before placing them on sheets:
              </p>

              <Card className="mb-6 dark:bg-gray-800">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">View Organization Strategy:</h4>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Group views by discipline and type</li>
                    <li>Use consistent view naming conventions</li>
                    <li>Set up view templates for standardization</li>
                    <li>Configure appropriate scales and detail levels</li>
                    <li>Review and clean up views before sheet placement</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="mistakes" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Common Mistakes to Avoid
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Learn from common pitfalls and implement solutions that prevent these issues.
              </p>
            </motion.div>

            <div className="space-y-6">
              {commonMistakes.map((mistake, index) => (
                <motion.div
                  key={mistake.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {mistake.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {mistake.description}
                          </p>
                          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                            <div className="flex items-start">
                              <Lightbulb className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                              <p className="text-green-800 dark:text-green-200 text-sm">
                                <strong>Solution:</strong> {mistake.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Automation Opportunities
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Take your sheet management to the next level with automation tools and workflows 
                that eliminate repetitive tasks and ensure consistency.
              </p>

              <Card className="mb-8 bg-gradient-to-r from-electric-blue/5 to-lime-accent/5 border-electric-blue/20 dark:bg-gradient-to-r dark:from-electric-blue/10 dark:to-lime-accent/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Recommended Automation Tools
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sheet Creation</h4>
                      <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li>• Automated sheet creation from view lists</li>
                        <li>• Batch sheet setup with templates</li>
                        <li>• View placement automation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Control</h4>
                      <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                        <li>• Sheet completeness checking</li>
                        <li>• Title block data validation</li>
                        <li>• Naming convention enforcement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    BIM Standards Template Pack
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Professional templates and standards for consistent project delivery.
                  </p>
                  <Button variant="outline" size="sm">
                    View Resource
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Dynamo for BIM Managers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Learn visual programming for Revit automation without coding.
                  </p>
                  <Button variant="outline" size="sm">
                    View Resource
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement These Best Practices?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get our complete sheet management toolkit including templates, checklists, 
              and automation scripts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                <Download className="mr-2 w-5 h-5" />
                Download Complete Toolkit
              </Button>
              <Link href="/community">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Join Community Discussion
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}