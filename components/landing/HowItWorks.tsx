import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Download,
  Settings,
  Play,
  CheckCircle,
  ArrowRight,
  MousePointer,
  Lightbulb,
  Rocket
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install & Connect",
    description: "Download our Revit add-in and connect to your BIM Ops Studio account. Setup takes less than 2 minutes.",
    icon: Download,
    details: [
      "One-click installer for Revit 2020-2025",
      "Automatic license activation",
      "Cloud-based configuration sync",
      "Works with existing workflows"
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    number: "02", 
    title: "Configure Your Workflow",
    description: "Tell us about your project standards, naming conventions, and preferred templates. Our AI learns your patterns.",
    icon: Settings,
    details: [
      "Import existing project templates",
      "Set naming conventions and standards",
      "Define custom automation rules",
      "Train AI on your specific workflows"
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    number: "03",
    title: "Execute with One Click",
    description: "Select your task, click execute, and watch hours of work complete in seconds. No manual intervention required.",
    icon: Play,
    details: [
      "Choose from 50+ pre-built automations",
      "Create custom workflow combinations",
      "Real-time progress monitoring",
      "Automatic error detection and correction"
    ],
    color: "from-green-500 to-emerald-400"
  },
  {
    number: "04",
    title: "Review & Refine",
    description: "Inspect the results, make any adjustments, and save the workflow for future projects. Each use makes it smarter.",
    icon: CheckCircle,
    details: [
      "Comprehensive result validation",
      "Easy rollback if needed",
      "Performance analytics and insights",
      "Continuous AI improvement"
    ],
    color: "from-orange-500 to-red-400"
  }
];

const benefits = [
  {
    icon: MousePointer,
    title: "Point & Click Simplicity",
    description: "No scripting, no coding, no complex setup. If you can use Revit, you can use BIM Ops Studio."
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Intelligence", 
    description: "Our machine learning algorithms understand your patterns and suggest optimizations automatically."
  },
  {
    icon: Rocket,
    title: "Instant Results",
    description: "See immediate time savings from day one. Most users recover their investment in the first week."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
            Simple Process, Powerful Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            From Setup to <span className="text-electric-blue">Success</span> in 4 Steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Getting started with BIM automation has never been easier. 
            Follow our proven process and start saving hours on your very first day.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col lg:flex-row items-center mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Number and Icon */}
              <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
                <div className={`relative w-32 h-32 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                  <div className="relative z-10">
                    <step.icon className="w-12 h-12 text-white mb-2" />
                    <div className="text-white font-bold text-sm">{step.number}</div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow text-center lg:text-left">
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 mt-48"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-8 h-8 text-electric-blue transform rotate-90" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why BIM Professionals Choose Our Process
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our approach is designed specifically for busy BIM teams who need results fast, 
              without compromising on quality or control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/10 to-lime-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-electric-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-electric-blue to-lime-accent rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join over 1,000 BIM professionals who have already transformed their workflows. 
            Your first automation is just minutes away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button 
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100 font-bold"
              >
                Start Free Trial Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
