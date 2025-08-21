import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Building,
  ArrowRight,
  Star,
  Download,
  Users,
  Clock,
  CheckCircle,
  Play,
  FolderOpen,
  Shield,
  RefreshCw,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: FolderOpen,
    title: "Smart Family Organization",
    description: "Automatically categorize and organize your family library with intelligent sorting algorithms."
  },
  {
    icon: RefreshCw,
    title: "Version Control System", 
    description: "Track family versions, manage updates, and maintain consistency across all your projects."
  },
  {
    icon: Shield,
    title: "Quality Assurance Checks",
    description: "Automated quality checks ensure your families meet standards before deployment."
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Understand which families are most used and optimize your library accordingly."
  }
];

export default function FamilyManager() {
  return (
    <Layout
      title="Family Manager Suite - Intelligent Family Library"
      description="Organize, optimize, and deploy Revit families across your projects with smart categorization, version control, and quality assurance."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-teal-500 via-green-500 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                <Building className="w-4 h-4 mr-1" />
                Content Management
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Family Manager <span className="text-teal-200">Suite</span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Organize, optimize, and deploy Revit families across your projects. 
                Smart categorization, version control, and quality assurance built-in.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                  Start Free Trial
                  <Download className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Watch Demo
                  <Play className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Family Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to organize, manage, and optimize your Revit family library.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">80%</div>
              <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Time Saved
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Active Users
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2 flex items-center justify-center">
                4.8
                <Star className="w-6 h-6 ml-2 text-yellow-500 fill-current" />
              </div>
              <div className="text-gray-600 dark:text-gray-300">User Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Organize Your Family Library Today
            </h2>
            <p className="text-xl text-teal-100 mb-6">
              Starting at <span className="font-bold text-2xl">$45/month</span>
            </p>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
              Join 150+ professionals who have transformed their family management workflow. 
              14-day free trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
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