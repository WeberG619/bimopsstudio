import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Layers,
  FileText,
  FolderTree,
  Zap,
  ArrowRight,
  Star,
  Download,
  Users,
  Clock,
  CheckCircle,
  Wrench,
  Building,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "ReviTask Pro",
    tagline: "AI-Powered Task Automation",
    description: "Transform complex Revit workflows into simple, one-click operations. ReviTask learns your patterns and automates repetitive modeling tasks with unprecedented accuracy.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-400",
    price: "$49/month",
    features: [
      "Smart parameter batch updates",
      "Intelligent family placement", 
      "Automated view creation",
      "Custom workflow builder",
      "AI learning algorithms",
      "Error detection & correction",
      "Progress tracking dashboard",
      "Team collaboration tools"
    ],
    stats: {
      timeSaved: "85%",
      users: "500+",
      rating: 4.9
    },
    status: "available",
    category: "Automation",
    url: "/products/revitask-pro"
  },
  {
    name: "SmartSheetList",
    tagline: "Intelligent Sheet Management",
    description: "Generate complete sheet sets with views, schedules, and layouts in minutes. SmartSheetList understands your project standards and applies them consistently.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-400",
    price: "$39/month",
    features: [
      "Bulk sheet creation",
      "Automatic view placement",
      "Template-based generation",
      "Standard compliance checks",
      "Custom title blocks",
      "Revision management",
      "Export to multiple formats",
      "Quality assurance tools"
    ],
    stats: {
      timeSaved: "90%",
      users: "350+",
      rating: 4.8
    },
    status: "available",
    category: "Documentation",
    url: "/products/smartsheetlist"
  },
  {
    name: "Folder Structure Creator",
    tagline: "Project Organization Made Easy",
    description: "Build consistent, professional folder structures for all your BIM projects. Ensure team collaboration and file management follows industry best practices.",
    icon: FolderTree,
    gradient: "from-purple-500 to-pink-400",
    price: "$29/month",
    features: [
      "ISO 19650 compliance",
      "Custom template creation",
      "Bulk folder generation",
      "Permission management",
      "Naming conventions",
      "Project archiving",
      "Cloud storage integration",
      "Audit trails"
    ],
    stats: {
      timeSaved: "75%",
      users: "200+",
      rating: 4.7
    },
    status: "available",
    category: "Organization",
    url: "/products/folder-structure-creator"
  },
  {
    name: "BIM Coordinator Pro",
    tagline: "Multi-Model Management",
    description: "Coordinate multiple Revit models with ease. Detect clashes, manage links, and ensure all disciplines work together seamlessly across your project.",
    icon: Layers,
    gradient: "from-red-500 to-orange-400",
    price: "Coming Soon",
    features: [
      "Automated clash detection",
      "Link management",
      "Model synchronization",
      "Coordination reporting",
      "Issue tracking",
      "Progress monitoring",
      "Multi-discipline support",
      "Cloud collaboration"
    ],
    stats: {
      timeSaved: "70%",
      users: "Pre-order",
      rating: "New"
    },
    status: "coming-soon",
    category: "Coordination",
    url: "/products/bim-coordinator"
  },
  {
    name: "Revit Performance Optimizer",
    tagline: "Speed Up Your Models",
    description: "Analyze and optimize your Revit models for maximum performance. Identify bottlenecks, reduce file sizes, and improve team productivity.",
    icon: BarChart3,
    gradient: "from-indigo-500 to-purple-500",
    price: "$35/month",
    features: [
      "Model health analysis",
      "Performance optimization",
      "File size reduction",
      "Memory usage tracking",
      "Loading time improvement",
      "Cleanup automation",
      "Performance reports",
      "Best practice recommendations"
    ],
    stats: {
      timeSaved: "60%",
      users: "Beta",
      rating: 4.6
    },
    status: "beta",
    category: "Performance",
    url: "/products/performance-optimizer"
  },
  {
    name: "Family Manager Suite",
    tagline: "Intelligent Family Library",
    description: "Organize, optimize, and deploy Revit families across your projects. Smart categorization, version control, and quality assurance built-in.",
    icon: Building,
    gradient: "from-teal-500 to-green-500",
    price: "$45/month",
    features: [
      "Smart family organization",
      "Version control system",
      "Quality assurance checks",
      "Bulk family operations",
      "Parameter standardization",
      "Cloud library sync",
      "Usage analytics",
      "Team sharing tools"
    ],
    stats: {
      timeSaved: "80%",
      users: "150+",
      rating: 4.8
    },
    status: "available",
    category: "Content Management",
    url: "/products/family-manager"
  }
];

const categories = ["All", "Automation", "Documentation", "Organization", "Coordination", "Performance", "Content Management"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout
      title="Products - Revit Automation Tools"
      description="Discover our comprehensive suite of Revit automation tools designed to streamline your BIM workflows and boost productivity."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
                🚀 Professional BIM Tools
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Revit Tools That <span className="text-lime-accent">Actually Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professionally crafted automation tools designed by BIM experts, for BIM professionals. 
                Each tool solves real-world problems and delivers measurable time savings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category 
                    ? "bg-electric-blue text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-electric-blue hover:text-white shadow-md"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-700/50 overflow-hidden">
                  {/* Card Header with Gradient */}
                  <CardHeader className={`bg-gradient-to-r ${product.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge className={`${
                            product.status === 'available' ? 'bg-green-100 text-green-700' :
                            product.status === 'coming-soon' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {product.status === 'available' ? 'Available' :
                             product.status === 'coming-soon' ? 'Coming Soon' : 'Beta'}
                          </Badge>
                          <div className="text-white/90 font-bold text-lg mt-2">{product.price}</div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-white/90 text-lg">
                        {product.tagline}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {product.features.length > 6 && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            +{product.features.length - 6} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{product.stats.timeSaved}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Time Saved
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{product.stats.users}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center">
                          <Users className="w-3 h-3 mr-1" />
                          Users
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center">
                          {product.stats.rating}
                          {typeof product.stats.rating === 'number' && (
                            <Star className="w-3 h-3 ml-1 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Rating</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      {product.status === "coming-soon" ? (
                        <Button 
                          className="flex-1" 
                          disabled
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          Notify Me
                        </Button>
                      ) : (
                        <Link href="/pricing" className="flex-1">
                          <Button className="w-full">
                            {product.status === "beta" ? (
                              <>
                                <Download className="w-4 h-4 mr-2" />
                                Join Beta
                              </>
                            ) : (
                              <>
                                <Download className="w-4 h-4 mr-2" />
                                Try Free
                              </>
                            )}
                          </Button>
                        </Link>
                      )}
                      <Link href={product.url}>
                        <Button variant="outline" className="px-4">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your BIM Workflow?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start with any tool risk-free. 14-day free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-gray-900 !bg-transparent">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}