import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  Building,
  HeadphonesIcon,
  Database,
  Clock,
  FileText
} from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Professional",
    price: "$149",
    period: "/month per seat",
    description: "Perfect for individual professionals and small teams",
    popular: true,
    features: [
      "Full Revit Pro Tools Suite",
      "Generate 50-100 sheets/minute",
      "Automated view placement",
      "Quality control validation",
      "DWG/PDF batch export",
      "Email support",
      "Monthly updates",
      "1 user license"
    ],
    cta: "Start Free Trial",
    href: "/book-consultation"
  },
  {
    name: "Team",
    price: "$129",
    period: "/month per seat (5-9 seats)",
    description: "Ideal for growing architecture firms",
    features: [
      "Everything in Professional",
      "Volume discount pricing",
      "Priority email support",
      "Team collaboration tools",
      "Shared templates library",
      "Training webinars",
      "Quarterly business reviews",
      "5-9 user licenses"
    ],
    cta: "Contact Sales",
    href: "/contact"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing for 10+ seats",
    description: "For large firms requiring advanced features",
    features: [
      "Everything in Team",
      "Custom pricing for 10+ seats",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "On-site training available",
      "SLA guarantees",
      "API access for partners",
      "BIM 360 integration (Q1 2025)",
      "Power BI connectors"
    ],
    cta: "Schedule Demo",
    href: "/contact"
  }
];

const techFeatures = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Multi-threaded processing handles 10,000+ elements efficiently"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption with role-based access control"
  },
  {
    icon: Database,
    title: "Large Model Support",
    description: "Optimized for Revit models up to 800MB with 500+ sheets"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce documentation time by 80% with intelligent automation"
  }
];

const comparisonData = [
  { feature: "Sheet Generation Speed", manual: "1-2 sheets/hour", revitPro: "50-100 sheets/minute" },
  { feature: "Error Rate", manual: "5-10%", revitPro: "<0.1%" },
  { feature: "Parameter Validation", manual: "Manual checks", revitPro: "Automated IBC/AIA compliance" },
  { feature: "View Placement", manual: "Manual positioning", revitPro: "AI-powered optimization" },
  { feature: "Export Process", manual: "One by one", revitPro: "Batch DWG/PDF with naming" },
  { feature: "Quality Control", manual: "Spot checks", revitPro: "100% automated validation" }
];

export default function PricingRevitPro() {
  return (
    <Layout
      title="Revit Pro Tools Pricing - Flexible Plans for Every Firm"
      description="Choose the perfect Revit Pro Tools plan for your team. Professional at $149/month, Team pricing for 5-9 seats, or custom Enterprise solutions."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
              30-Day Free Trial • No Credit Card Required
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Revit Pro Tools <span className="text-lime-accent">Pricing</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Invest in automation that pays for itself in the first project. 
              Join architecture firms saving 80% of their documentation time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-lime-accent shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-lime-accent text-deep-navy">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-deep-navy dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {plan.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-lime-accent mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={plan.href}>
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-lime-accent text-deep-navy hover:bg-lime-accent/90' 
                            : ''
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Manual vs. <span className="text-electric-blue">Revit Pro Tools</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the dramatic difference automation makes
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-deep-navy to-indigo-900 text-white">
                <tr>
                  <th className="text-left p-6">Feature</th>
                  <th className="text-center p-6">Manual Process</th>
                  <th className="text-center p-6">With Revit Pro Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center text-red-600">{row.manual}</td>
                    <td className="p-6 text-center text-green-600 font-semibold">{row.revitPro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade <span className="text-electric-blue">Technology</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-blue to-indigo-600 rounded-xl mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Documentation Process?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of firms already saving 80% of their documentation time. 
              Start your 30-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button 
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
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