import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Mic,
  Search,
  Database,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
  Zap,
  MessageSquare,
  Grid3x3,
  Building,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function BIMMemoryPage() {
  return (
    <Layout
      title="BIMmemory - Never Lose Another Design Decision | BIM Ops Studio"
      description="Voice-first AI memory system for BIM professionals. Capture clash resolutions, RFI responses, and design decisions instantly. Save 5-10 hours/week."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6" variant="secondary">
              <Brain className="w-4 h-4 mr-2" />
              Now in Beta
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Never Lose Another
              <br />
              <span className="text-[#4A9EFF]">Design Decision</span>
            </h1>

            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Voice-first AI memory system for BIM professionals.
              <br />
              Capture, organize, and recall all project knowledge instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              By Weber Gouin, Autodesk Developer Network Member #USUS0234
            </p>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Sound Familiar?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div className="flex items-start">
                <div className="text-orange-500 mr-4 text-3xl">❌</div>
                <div>
                  <strong>Searching through 100+ emails</strong> for "what did we decide about Grid E4?"
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-500 mr-4 text-3xl">❌</div>
                <div>
                  <strong>Lost clash resolutions</strong> from coordination meetings 2 months ago
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-500 mr-4 text-3xl">❌</div>
                <div>
                  <strong>RFI responses buried</strong> in Navisworks comments and Slack threads
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-500 mr-4 text-3xl">❌</div>
                <div>
                  <strong>Knowledge walks out the door</strong> when team members leave
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-xl font-semibold text-gray-700 dark:text-gray-300">
              BIM coordinators spend <span className="text-[#4A9EFF]">10+ hours per week</span> searching for information that should be instant.
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#4A9EFF]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="w-10 h-10 text-[#4A9EFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Speak Naturally</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Call from your car or use the mobile app. Say: "Clash at Grid E4 Level 3, mechanical duct hits beam, rerouted 6 inches south"
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#4A9EFF]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-[#4A9EFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. AI Extracts & Organizes</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Understands BIM terminology: grids, levels, elements, disciplines. Auto-tags: clash, RFI, design decision, etc.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#4A9EFF]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-[#4A9EFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Instant Recall</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Ask: "What was the MEP solution on Level 3?" Get instant answers with full context and related decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Everything You Need</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#4A9EFF] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Perfect For</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  {useCase.description}
                </p>
                <div className="bg-[#4A9EFF]/5 p-4 rounded-lg">
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    <strong>Example:</strong> "{useCase.example}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-16">
            Start your free 14-day trial. No credit card required.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 ${
                  tier.popular ? "ring-2 ring-[#4A9EFF] shadow-2xl scale-105" : "shadow-lg"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tier.popular && (
                  <Badge className="mb-4">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {tier.price}
                  {tier.price !== "Custom" && <span className="text-lg text-gray-500">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full" size="lg" variant={tier.popular ? "default" : "outline"}>
                    {tier.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A9EFF]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Never Lose Another Decision?
          </h2>
          <p className="text-2xl mb-8 text-white opacity-90">
            Join BIM coordinators saving 10+ hours per week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Request Beta Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-white opacity-75">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}

// Feature data
const features = [
  {
    icon: <Mic className="w-10 h-10" />,
    title: "Voice Capture",
    description: "Call from anywhere or use mobile app. No typing, no forms - just speak naturally.",
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "BIM-Aware AI",
    description: "Understands grids, levels, elements, clashes, RFIs, and BIM terminology.",
  },
  {
    icon: <Search className="w-10 h-10" />,
    title: "Semantic Search",
    description: "Ask questions in plain English. Find related concepts, not just keywords.",
  },
  {
    icon: <Grid3x3 className="w-10 h-10" />,
    title: "Auto-Tagging",
    description: "Automatically tags by discipline, urgency, project phase, and element type.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Team Collaboration",
    description: "Share project knowledge across your team. Everyone stays in sync.",
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: "Export & Documentation",
    description: "Generate reports, export to PDF/Excel, integrate with your workflow.",
  },
];

// Use cases
const useCases = [
  {
    title: "Clash Coordination",
    description: "Track every clash resolution with full context. Never re-solve the same problem.",
    example: "Clash at Grid E4, mechanical duct hits beam, rerouted 6 inches south",
  },
  {
    title: "RFI Management",
    description: "Capture RFI responses instantly. Search by project, discipline, or question.",
    example: "RFI 024: Exterior brick should be Kawneer 1600 series, clear anodized",
  },
  {
    title: "Design Decisions",
    description: "Document why decisions were made, who approved, and what the impact was.",
    example: "Client approved beam increase from W18x50 to W21x62 for future equipment",
  },
  {
    title: "Material Specifications",
    description: "Instant recall of specified materials, finishes, and product selections.",
    example: "All Level 1 conference rooms use Armstrong Ultima ceiling tile",
  },
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Individual",
    price: "$99",
    popular: false,
    cta: "Start Free Trial",
    features: [
      "1 user",
      "Unlimited voice captures",
      "5 active projects",
      "AI search & extraction",
      "Mobile web app",
      "Export to PDF/Excel",
    ],
  },
  {
    name: "Team",
    price: "$299",
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Up to 5 users",
      "Unlimited projects",
      "Shared project memory",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    cta: "Contact Sales",
    features: [
      "Unlimited users",
      "On-premise option",
      "SSO integration",
      "Custom Revit plugins",
      "Dedicated support",
      "SLA guarantee",
    ],
  },
];

// FAQs
const faqs = [
  {
    question: "How does voice capture work?",
    answer: "Call our dedicated phone number from anywhere, or use the mobile web app. Speak naturally about your project - clashes, decisions, RFIs, anything. The AI transcribes and extracts structured data automatically. No forms, no typing required.",
  },
  {
    question: "What BIM terminology does it understand?",
    answer: "BIMmemory understands grids, levels, element families, disciplines (MEP, structural, architectural), clashes, RFIs, submittals, shop drawings, and more. It's trained specifically on BIM/AEC language and gets smarter over time.",
  },
  {
    question: "Can I integrate with Revit?",
    answer: "Yes! We're developing a Revit plugin that allows quick capture directly from Revit, with automatic element ID linking. Available for Enterprise plan users in Q2 2025.",
  },
  {
    question: "How secure is my project data?",
    answer: "Your data is encrypted at rest and in transit (AES-256 & TLS 1.3). We're SOC 2 compliant and offer on-premise deployment for Enterprise customers. Your data is never used to train AI models.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export all your data (full database dump or Excel/PDF format) anytime. We retain your data for 90 days after cancellation in case you return, then permanently delete it.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer: "No! If you can make a phone call, you can use BIMmemory. The interface is designed for busy BIM coordinators, not software engineers. Most users are capturing memories within 5 minutes of signing up.",
  },
];
