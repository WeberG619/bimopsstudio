import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Zap,
  ArrowRight,
  Star,
  Download,
  Users,
  Clock,
  CheckCircle,
  Play,
  Award,
  BarChart3,
  Settings,
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Smart Parameter Updates",
    description: "Batch update parameters across multiple families and elements with intelligent pattern recognition."
  },
  {
    icon: Lightbulb,
    title: "AI Learning Algorithms",
    description: "The more you use ReviTask, the smarter it becomes at predicting your workflow needs."
  },
  {
    icon: CheckCircle,
    title: "Error Detection & Correction", 
    description: "Automatically detect and fix common modeling errors before they become problems."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking Dashboard",
    description: "Monitor automation progress and analyze time savings with detailed analytics."
  }
];

const testimonials = [
  {
    quote: "ReviTask has revolutionized our modeling process. What used to take hours now takes minutes.",
    author: "Sarah Johnson",
    role: "BIM Manager",
    company: "AECOM",
    rating: 5
  },
  {
    quote: "The AI learns our specific workflows incredibly well. It's like having an expert assistant.",
    author: "Michael Chen",
    role: "Senior Architect", 
    company: "Gensler",
    rating: 5
  },
  {
    quote: "Our productivity increased by 300% in the first month. The ROI is incredible.",
    author: "Emma Rodriguez",
    role: "BIM Coordinator",
    company: "HOK",
    rating: 5
  }
];

export default function ReviTaskPro() {
  return (
    <Layout
      title="ReviTask Pro - AI-Powered Revit Automation"
      description="Transform complex Revit workflows into simple, one-click operations with ReviTask Pro's AI-powered automation tools."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                <Zap className="w-4 h-4 mr-1" />
                AI-Powered Automation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ReviTask <span className="text-blue-100">Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform complex Revit workflows into simple, one-click operations. 
                Our AI learns your patterns and automates repetitive tasks with unprecedented accuracy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the advanced capabilities that make ReviTask Pro the leading automation tool for Revit professionals.
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
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Average Time Saved
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
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
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center justify-center">
                4.9
                <Star className="w-6 h-6 ml-2 text-yellow-500 fill-current" />
              </div>
              <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how ReviTask Pro is transforming BIM workflows for professionals worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Starting at <span className="font-bold text-2xl">$49/month</span>
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ professionals who have already transformed their BIM workflows. 
              Start your 14-day free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
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