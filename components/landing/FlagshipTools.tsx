import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Layers,
  FileText,
  FolderTree,
  Zap,
  ArrowRight,
  Star,
  Download,
  Users,
  Clock
} from "lucide-react";

const tools = [
  {
    name: "ReviTask",
    tagline: "AI-Powered Task Automation",
    description: "Transform complex Revit workflows into simple, one-click operations. ReviTask learns your patterns and automates repetitive modeling tasks with unprecedented accuracy.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-400",
    features: [
      "Smart parameter batch updates",
      "Intelligent family placement",
      "Automated view creation",
      "Custom workflow builder"
    ],
    stats: {
      timeSaved: "85%",
      users: "500+",
      rating: 4.9
    },
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    slug: "revitask"
  },
  {
    name: "SmartSheetList",
    tagline: "Intelligent Sheet Management",
    description: "Generate complete sheet sets with views, schedules, and layouts in minutes. SmartSheetList understands your project standards and applies them consistently.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-400",
    features: [
      "Bulk sheet creation",
      "Automatic view placement",
      "Template-based generation",
      "Standard compliance checks"
    ],
    stats: {
      timeSaved: "90%",
      users: "350+",
      rating: 4.8
    },
    badge: "Time Saver",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    slug: "smartsheetlist"
  },
  {
    name: "Folder Structure Creator",
    tagline: "Project Organization Made Easy",
    description: "Build consistent, professional folder structures for all your BIM projects. Ensure team collaboration and file management follows industry best practices.",
    icon: FolderTree,
    gradient: "from-purple-500 to-pink-400",
    features: [
      "ISO 19650 compliance",
      "Custom template creation",
      "Bulk folder generation",
      "Permission management"
    ],
    stats: {
      timeSaved: "75%",
      users: "200+",
      rating: 4.7
    },
    badge: "Standards Compliant",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    slug: "folder-structure-creator"
  },
  {
    name: "BIM Coordinator",
    tagline: "Multi-Model Management",
    description: "Coordinate multiple Revit models with ease. Detect clashes, manage links, and ensure all disciplines work together seamlessly across your project.",
    icon: Layers,
    gradient: "from-red-500 to-orange-400",
    features: [
      "Automated clash detection",
      "Link management",
      "Model synchronization",
      "Coordination reporting"
    ],
    stats: {
      timeSaved: "70%",
      users: "150+",
      rating: 4.6
    },
    badge: "Coming Soon",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    slug: "bim-coordinator"
  }
];

export function FlagshipTools() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-electric-blue/10 text-electric-blue border-electric-blue/20">
            Our Flagship Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tools That <span className="text-electric-blue">Actually Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Each tool is designed by BIM professionals, for BIM professionals. 
            No generic automation here—just powerful solutions for real-world challenges.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/50 overflow-hidden">
                {/* Card Header with Gradient */}
                <CardHeader className={`bg-gradient-to-r ${tool.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={tool.badgeColor}>
                        {tool.badge}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold mb-2">{tool.name}</CardTitle>
                    <CardDescription className="text-white/90 text-lg">
                      {tool.tagline}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-6 dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{tool.stats.timeSaved}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Time Saved
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{tool.stats.users}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center">
                        <Users className="w-3 h-3 mr-1" />
                        Active Users
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center">
                        {tool.stats.rating}
                        <Star className="w-3 h-3 ml-1 text-yellow-500 fill-current" />
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">User Rating</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    {tool.badge === "Coming Soon" ? (
                      <Button 
                        className="flex-1" 
                        disabled={true}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Notify Me
                      </Button>
                    ) : (
                      <Link href="/pricing">
                        <Button className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Try Free
                        </Button>
                      </Link>
                    )}
                    <Link href={`/products/${tool.slug}`}>
                      <Button variant="outline" className="px-4">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-electric-blue/5 to-lime-accent/5 dark:from-electric-blue/10 dark:to-lime-accent/10 rounded-2xl p-8 border border-electric-blue/10 dark:border-electric-blue/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your BIM Workflow?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of BIM professionals who have already automated their most time-consuming tasks. 
            Start your free trial today and see the difference in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Tools
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
