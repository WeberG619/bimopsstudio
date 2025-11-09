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
  Crown
} from "lucide-react";

const plans = [
  {
    name: "Individual",
    description: "Perfect for individual BIM professionals",
    price: "$80",
    period: "per month",
    icon: Users,
    color: "from-blue-500 to-cyan-400",
    popular: false,
    features: [
      { name: "1 user", included: true },
      { name: "1 active project", included: true },
      { name: "Batch sheet creation", included: true },
      { name: "Auto-populate title blocks", included: true },
      { name: "PDF/DWG export", included: true },
      { name: "Email support", included: true },
      { name: "Priority support", included: false },
      { name: "Team collaboration", included: false },
      { name: "Advanced analytics", included: false }
    ],
    cta: "Start Free Trial",
    savings: null
  },
  {
    name: "Team",
    description: "Most popular for BIM teams and consultants",
    price: "$200",
    period: "per month",
    icon: Building,
    color: "from-electric-blue to-lime-accent",
    popular: true,
    features: [
      { name: "Up to 5 users", included: true },
      { name: "Unlimited projects", included: true },
      { name: "All Individual features", included: true },
      { name: "Shared templates library", included: true },
      { name: "Team collaboration tools", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom integrations", included: false },
      { name: "SLA guarantee", included: false }
    ],
    cta: "Start Free Trial",
    savings: null
  },
  {
    name: "Enterprise",
    description: "For large firms and organizations",
    price: "Custom",
    period: "contact us", 
    icon: Crown,
    color: "from-purple-500 to-pink-400",
    popular: false,
    features: [
      { name: "Unlimited everything", included: true },
      { name: "Custom templates & workflows", included: true },
      { name: "Dedicated support manager", included: true },
      { name: "Unlimited user licenses", included: true },
      { name: "On-premise deployment option", included: true },
      { name: "Custom integrations", included: true },
      { name: "Advanced team management", included: true },  
      { name: "Complete analytics suite", included: true },
      { name: "SLA guarantee", included: true }
    ],
    cta: "Contact Sales",
    savings: "Volume discounts available"
  }
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans include a 14-day free trial with full access to features. No credit card required."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account dashboard."
  },
  {
    question: "What Revit versions are supported?",
    answer: "We support Revit 2020, 2021, 2022, 2023, 2024, and 2025. Both subscription and perpetual licenses."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Yes! Students and educators get 50% off all plans. Contact us with your .edu email for verification."
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
            Plans That Scale <span className="text-electric-blue">With You</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start free, pay only when you're ready. All plans include our core automation tools 
            and 14-day free trial. <span className="text-electric-blue font-semibold">No setup fees, no contracts.</span>
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
                        {plan.period !== "contact us" && (
                          <span className="text-white/80 ml-2">/{plan.period}</span>
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

                    {plan.name !== "Enterprise" && (
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                        14-day free trial • No credit card required
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
          {/* Money Back Guarantee */}
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Not satisfied? Get a full refund within 30 days, no questions asked. 
              We're confident you'll love the time savings.
            </p>
          </div>

          {/* Volume Discounts */}
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <Zap className="w-8 h-8 text-electric-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Volume Discounts Available</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Need more licenses? We offer significant discounts for teams of 10+ users. 
              Contact our sales team for custom pricing.
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
              <Button variant="link" className="p-0 ml-1 text-electric-blue">
                Contact our support team
              </Button>
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
