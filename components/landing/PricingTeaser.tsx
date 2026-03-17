import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  Star,
  ArrowRight,
  Users,
  Building,
  Zap,
  Crown,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "View Preview",
    description: "Free tool for the Revit community",
    price: "Free",
    period: "",
    icon: Users,
    color: "from-gray-600 to-gray-500",
    popular: false,
    features: [
      { name: "Real-time view previews", included: true },
      { name: "Zoom-to-cursor navigation", included: true },
      { name: "All view types supported", included: true },
      { name: "Revit 2024, 2025 & 2026", included: true },
      { name: "AI-powered automation", included: false },
      { name: "Custom workflow scripts", included: false },
      { name: "Team training", included: false },
      { name: "Dedicated support", included: false },
    ],
    cta: "Download Free",
    ctaHref: "/free-tools",
    savings: null
  },
  {
    name: "Implementation",
    description: "AI-powered BIM automation for your team",
    price: "$5,000",
    period: "starting at",
    icon: Building,
    color: "from-electric-blue to-lime-accent",
    popular: true,
    features: [
      { name: "RevitMCPBridge setup & config", included: true },
      { name: "Custom CD production automation", included: true },
      { name: "AI-powered sheet & view creation", included: true },
      { name: "Workflow discovery & optimization", included: true },
      { name: "Team training sessions", included: true },
      { name: "30 days post-launch support", included: true },
      { name: "Revit 2025 & 2026 support", included: true },
      { name: "Email & video call support", included: true },
    ],
    cta: "Schedule Discovery Call",
    ctaHref: "/contact",
    savings: null
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large firms",
    price: "Custom",
    period: "contact us",
    icon: Crown,
    color: "from-purple-500 to-pink-400",
    popular: false,
    features: [
      { name: "Multi-team deployment", included: true },
      { name: "Custom automation development", included: true },
      { name: "Dedicated support manager", included: true },
      { name: "On-premise deployment option", included: true },
      { name: "Custom integrations", included: true },
      { name: "AI-powered BIM automation", included: true },
      { name: "Priority SLA guarantee", included: true },
      { name: "Ongoing training included", included: true },
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    savings: "Volume discounts available"
  }
];

const faqs = [
  {
    question: "What is RevitMCPBridge?",
    answer: "RevitMCPBridge is our open-source tool that connects AI assistants to Revit via named pipes. It's the foundation of our automation services and enables AI-powered BIM workflows."
  },
  {
    question: "How long does implementation take?",
    answer: "Most implementations are completed in 2-4 weeks. We work in sprints so your team sees results quickly."
  },
  {
    question: "What Revit versions are supported?",
    answer: "We support Revit 2025 and 2026 with RevitMCPBridge."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! After implementation, we offer monthly retainers for workflow optimization, new automations, and priority support. Contact us for details."
  }
];

export function PricingTeaser() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700 border-green-200">
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI-Powered BIM. <span className="text-electric-blue">Real Results.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From free open-source tools to full enterprise implementations.
            <span className="text-electric-blue font-semibold"> Choose what fits your team.</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-electric-blue text-white px-4 py-1 text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full ${plan.popular ? 'ring-2 ring-electric-blue shadow-2xl scale-105' : 'shadow-lg'} transition-all duration-300 hover:shadow-xl dark:bg-gray-800`}>
                  {/* Header */}
                  <CardHeader className={`bg-gradient-to-r ${plan.color} text-white rounded-t-lg relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <plan.icon className="w-8 h-8" />
                        {plan.savings && (
                          <Badge className="bg-white/20 text-white text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                      <p className="text-white/90 mb-4">{plan.description}</p>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && plan.period !== "contact us" && (
                          <span className="text-white/80 ml-2">{plan.period}</span>
                        )}
                        {plan.period === "contact us" && (
                          <span className="text-white/80 ml-2 text-lg">{plan.period}</span>
                        )}
                      </div>
                      {plan.savings && (
                        <p className="text-white/80 text-sm mt-2">{plan.savings}</p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    {plan.ctaHref.startsWith('http') ? (
                      <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                          size="lg"
                          className={`w-full text-white ${plan.popular
                            ? 'bg-electric-blue hover:bg-electric-blue/90'
                            : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
                          }`}
                        >
                          {plan.cta}
                          <ExternalLink className="ml-2 w-5 h-5" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={plan.ctaHref}>
                        <Button
                          size="lg"
                          className={`w-full text-white ${plan.popular
                            ? 'bg-electric-blue hover:bg-electric-blue/90'
                            : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
                          }`}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    )}

                    {plan.popular && (
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                        2-4 week delivery &middot; 30 days support included
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* ADN Member */}
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">ADN Member #USUS0234</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Official Autodesk Developer Network member. Built with full API compliance
              and deep Revit expertise.
            </p>
          </div>

          {/* Enterprise */}
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <Zap className="w-8 h-8 text-electric-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enterprise Solutions Available</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Need automation for your whole team? Contact us for multi-team
              deployments and custom enterprise solutions.
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions? We have answers. Can't find what you're looking for?
              <Link href="/contact">
                <Button variant="link" className="p-0 ml-1 text-electric-blue">
                  Contact our team
                </Button>
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 shadow-md dark:bg-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
