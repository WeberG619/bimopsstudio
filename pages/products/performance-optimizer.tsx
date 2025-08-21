import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BarChart3,
  ArrowRight,
  Star,
  Download,
  Users,
  Clock,
  CheckCircle,
  Play,
  Zap,
  Shield,
  TrendingUp,
  Settings
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Model Health Analysis",
    description: "Comprehensive analysis of your Revit model performance with detailed reports and recommendations."
  },
  {
    icon: Zap,
    title: "Performance Optimization", 
    description: "Automated optimization tools that improve model speed and reduce memory usage."
  },
  {
    icon: TrendingUp,
    title: "Loading Time Improvement",
    description: "Optimize file loading times and reduce wait times for your team."
  },
  {
    icon: Settings,
    title: "Cleanup Automation",
    description: "Automatically remove unused elements, purge unused families, and optimize your model."
  }
];

export default function PerformanceOptimizer() {
  return (
    <Layout
      title="Revit Performance Optimizer - Speed Up Your Models"
      description="Analyze and optimize your Revit models for maximum performance. Identify bottlenecks, reduce file sizes, and improve team productivity."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                <BarChart3 className="w-4 h-4 mr-1" />
                Performance Optimization
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Performance <span className="text-purple-200">Optimizer</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Analyze and optimize your Revit models for maximum performance. 
                Identify bottlenecks, reduce file sizes, and improve team productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Join Beta Program
                  <Download className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Learn More
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
              Optimize Every Aspect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools to analyze, optimize, and maintain peak performance in your Revit models.
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
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">60%</div>
              <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Performance Improvement
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">Beta</div>
              <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Program Status
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center justify-center">
                4.6
                <Star className="w-6 h-6 ml-2 text-yellow-500 fill-current" />
              </div>
              <div className="text-gray-600 dark:text-gray-300">Early User Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beta Program CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Join Our Beta Program
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Starting at <span className="font-bold text-2xl">$35/month</span> when launched
            </p>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the next generation of Revit performance optimization. 
              Beta users get lifetime discounts and priority support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Join Beta Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Get Notified
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}