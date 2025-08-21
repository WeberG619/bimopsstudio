import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Wrench,
  ArrowRight,
  Download,
  Clock,
  User,
  BookOpen,
  Play,
  Code,
  Settings,
  Zap,
  Target,
  Lightbulb,
  CheckCircle
} from "lucide-react";

const learningPath = [
  {
    title: "Getting Started with Dynamo",
    duration: "2 hours",
    topics: ["Dynamo Interface", "Basic Nodes", "Data Flow Concepts"],
    difficulty: "Beginner"
  },
  {
    title: "Working with Geometry",
    duration: "3 hours", 
    topics: ["Points & Vectors", "Lines & Curves", "Surfaces & Solids"],
    difficulty: "Beginner"
  },
  {
    title: "Lists and Data Management",
    duration: "2.5 hours",
    topics: ["List Operations", "Data Structures", "Filtering & Sorting"],
    difficulty: "Intermediate"
  },
  {
    title: "Revit Integration",
    duration: "4 hours",
    topics: ["Element Selection", "Parameter Management", "Family Creation"],
    difficulty: "Intermediate"
  },
  {
    title: "Advanced Workflows",
    duration: "3.5 hours",
    topics: ["Custom Nodes", "Error Handling", "Performance Optimization"],
    difficulty: "Advanced"
  }
];

const practicalExamples = [
  {
    icon: Target,
    title: "Room Data Export",
    description: "Extract room information and export to Excel for facility management.",
    complexity: "Intermediate",
    timeToComplete: "30 min"
  },
  {
    icon: Settings,
    title: "Parameter Bulk Update",
    description: "Update multiple element parameters based on naming conventions.",
    complexity: "Beginner",
    timeToComplete: "15 min"
  },
  {
    icon: Zap,
    title: "Adaptive Component Placement",
    description: "Automatically place adaptive components along curves or surfaces.",
    complexity: "Advanced",
    timeToComplete: "45 min"
  },
  {
    icon: CheckCircle,
    title: "Model Quality Checker",
    description: "Create automated quality control checks for common modeling issues.",
    complexity: "Intermediate", 
    timeToComplete: "60 min"
  }
];

const benefits = [
  "No coding experience required",
  "Visual programming interface",
  "Direct Revit integration",
  "Thousands of pre-built nodes",
  "Active community support",
  "Scalable from simple to complex tasks"
];

export default function DynamoForBIMManagers() {
  return (
    <Layout
      title="Dynamo for BIM Managers - Visual Programming Tutorial"
      description="Learn visual programming for Revit automation without coding. Complete tutorial series for BIM managers and coordinators."
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
                  <Wrench className="w-8 h-8 text-lime-accent" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-lime-accent/10 text-lime-accent border-lime-accent/20 mb-2">
                    Interactive Tutorial
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      45 min tutorial
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Intermediate Level
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Dynamo for <span className="text-lime-accent">BIM Managers</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                Master visual programming for Revit automation without writing code. 
                Learn to create powerful workflows that eliminate repetitive tasks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90">
                  <Play className="mr-2 w-5 h-5" />
                  Start Tutorial
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  <Download className="mr-2 w-5 h-5" />
                  Download Files
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Dynamo Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
                Why Learn Dynamo?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Dynamo bridges the gap between design intent and execution, allowing BIM managers 
                to automate complex workflows without programming knowledge.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={benefit} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video bg-gradient-to-br from-electric-blue to-lime-accent rounded-xl shadow-2xl flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <Code className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Visual Programming</p>
                    <p className="text-white/80">No code required</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
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
                Complete Learning Path
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Structured curriculum that takes you from Dynamo basics to advanced automation workflows.
              </p>
            </motion.div>

            <div className="space-y-6">
              {learningPath.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {module.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {module.duration}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {module.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Start Module
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
                Practical Examples
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real-world Dynamo workflows that solve common BIM management challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {practicalExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <example.icon className="w-6 h-6 text-electric-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {example.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {example.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="outline"
                          className={
                            example.complexity === "Beginner"
                              ? "border-green-200 text-green-700"
                              : example.complexity === "Intermediate"
                              ? "border-yellow-200 text-yellow-700"
                              : "border-red-200 text-red-700"
                          }
                        >
                          {example.complexity}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {example.timeToComplete}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View Example
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Prerequisites & Setup
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="dark:bg-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      What You'll Need
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Revit 2020 or newer</li>
                      <li>• Dynamo (included with Revit)</li>
                      <li>• Basic Revit knowledge</li>
                      <li>• Sample project files (provided)</li>
                      <li>• 2-3 hours of dedicated time</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="dark:bg-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Learning Format
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Step-by-step video tutorials</li>
                      <li>• Downloadable Dynamo scripts</li>
                      <li>• Practice exercises</li>
                      <li>• Community discussion forum</li>
                      <li>• Certificate of completion</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
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
              Ready to Automate Your BIM Workflows?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your Dynamo journey today and join thousands of BIM professionals 
              who have transformed their productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                <Play className="mr-2 w-5 h-5" />
                Begin Free Tutorial
              </Button>
              <Link href="/community">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Join Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}