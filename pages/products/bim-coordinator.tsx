import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Users,
  GitBranch,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  AlertCircle,
  FileText,
  Settings,
  Clock,
  Shield,
  BarChart
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Multi-Model Coordination",
    description: "Automatically detect and resolve clashes between architectural, structural, and MEP models in real-time."
  },
  {
    icon: Users,
    title: "Team Collaboration Hub",
    description: "Centralized platform for tracking issues, assigning tasks, and monitoring resolution progress."
  },
  {
    icon: AlertCircle,
    title: "Intelligent Clash Detection",
    description: "AI-powered clash detection that prioritizes critical issues and suggests automated resolutions."
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    description: "Generate comprehensive coordination reports with one click, including visuals and resolution tracking."
  },
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description: "Track coordination metrics, team performance, and project health with interactive dashboards."
  },
  {
    icon: Settings,
    title: "Customizable Rules",
    description: "Define custom clash detection rules and tolerance levels for different project requirements."
  }
];

const benefits = [
  "Reduce coordination time by 75%",
  "Catch 99% of clashes before construction",
  "Eliminate manual report generation",
  "Improve team accountability",
  "Standardize coordination workflows",
  "Real-time project visibility"
];

const testimonials = [
  {
    quote: "BIM Coordinator transformed our coordination meetings from 4-hour marathons to 30-minute focused sessions.",
    author: "Jennifer Park",
    role: "VDC Manager",
    company: "Turner Construction",
    rating: 5
  },
  {
    quote: "The automated clash resolution suggestions alone save us 20 hours per week on large projects.",
    author: "Michael Torres",
    role: "BIM Director",
    company: "Skanska",
    rating: 5
  }
];

const pricingTiers = [
  {
    name: "Team",
    price: "$149",
    period: "per user/month",
    description: "For small coordination teams",
    features: [
      "Up to 10 active projects",
      "Basic clash detection",
      "Weekly reports",
      "Email support",
      "5GB cloud storage"
    ]
  },
  {
    name: "Professional",
    price: "$299",
    period: "per user/month",
    description: "For growing firms",
    features: [
      "Unlimited projects",
      "Advanced AI clash detection",
      "Real-time dashboards",
      "Priority support",
      "50GB cloud storage",
      "Custom rules engine"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "On-premise deployment",
      "API access",
      "Dedicated success manager",
      "Unlimited storage",
      "Custom integrations"
    ]
  }
];

export default function BIMCoordinator() {
  return (
    <Layout
      title="BIM Coordinator - Intelligent Model Coordination"
      description="AI-powered BIM coordination tool that automates clash detection, streamlines issue tracking, and accelerates project delivery."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
                <Zap className="w-4 h-4 mr-1" />
                AI-Powered Coordination
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                BIM <span className="text-lime-accent">Coordinator</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stop drowning in coordination meetings. Let AI handle clash detection 
                while you focus on solving complex design challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/pricing">
                  <Button size="lg" className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                  onClick={() => alert('Demo video would play here. In production, this would open a video modal.')}
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Coordination Made Intelligent
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leverage AI to automate tedious coordination tasks and focus on what matters most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Teams Choose BIM Coordinator
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Traditional coordination is broken. Hours wasted in meetings, 
                  critical clashes missed, and endless email chains. There's a better way.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </motion.li>
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
                    <BarChart className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Interactive Demo</p>
                    <p className="text-white/80">See BIM Coordinator in action</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
                  <div className="flex items-center">
                    <Clock className="w-8 h-8 text-electric-blue mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">75%</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Time Saved</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Trusted by Leading Firms
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how BIM Coordinator is transforming coordination workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-electric-blue font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and coordination needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${tier.popular ? 'ring-2 ring-electric-blue shadow-xl' : ''} dark:bg-gray-700`}>
                  <CardContent className="p-6">
                    {tier.popular && (
                      <Badge className="mb-4 bg-electric-blue text-white">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {tier.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/pricing">
                      <Button className={`w-full ${tier.popular ? 'bg-electric-blue hover:bg-electric-blue/90' : ''}`}>
                        Get Started
                      </Button>
                    </Link>
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
              Ready to Transform Your Coordination Process?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of teams already using BIM Coordinator to deliver projects 
              faster with fewer RFIs and zero coordination delays.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}