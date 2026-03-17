import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Calculator, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const tiers = [
  {
    name: "Assessment",
    price: "Free",
    description: "Understand your automation potential",
    features: [
      "30-minute workflow evaluation call",
      "Identify automation opportunities",
      "Custom ROI estimate for your team",
      "No obligation",
    ],
    cta: "Book a Call",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Implementation",
    price: "$5,000",
    priceNote: "Starting at",
    description: "Full system setup, configured to your workflow",
    features: [
      "Full system setup and configuration",
      "RevitMCPBridge installation",
      "AI pipeline integration",
      "Custom template configuration",
      "2 weeks of hands-on support",
      "Team training session",
    ],
    cta: "Get Started",
    href: "/contact",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Ongoing Support",
    price: "$2,000",
    priceNote: "/month",
    description: "Continuous optimization and priority access",
    features: [
      "Dedicated support channel",
      "System optimization and tuning",
      "Monthly training sessions",
      "Priority updates and new features",
    ],
    cta: "Contact Us",
    href: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What's included in the implementation?",
    a: "We install and configure RevitMCPBridge on your systems, integrate it with your existing Revit templates and standards, set up the AI pipeline for your specific CD workflow, and train your team. The 2-week support period covers any adjustments needed as your team ramps up.",
  },
  {
    q: "How long until we see ROI?",
    a: "Most firms see measurable time savings within the first week of production use. The assessment call includes a custom ROI projection based on your team size and current workflow.",
  },
  {
    q: "Can we try it on one project first?",
    a: "Yes, we recommend a pilot project. It lets your team build confidence with the system on a real deliverable before rolling it out firm-wide.",
  },
  {
    q: "What if it doesn't work for our workflow?",
    a: "The assessment is free, so there's zero risk in exploring the fit. Implementation includes a satisfaction guarantee -- if the system doesn't deliver measurable improvement during the 2-week support period, we'll work with you until it does.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout
      title="Pricing - AI BIM Workflow Implementation | BIM Ops Studio"
      description="AI-powered BIM workflow implementation for AEC firms. Free assessment, implementation starting at $5,000, ongoing support at $2,000/month."
    >
      {/* Hero with background image */}
      <section className="relative pt-32 pb-8 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/conference-room.jpg"
            alt="Conference room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/85" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Investment That Pays for Itself in Week One
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cut CD production time by 75%. The math speaks for itself.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col ${
                  tier.highlight
                    ? "border-2 border-blue-600 shadow-2xl scale-[1.02]"
                    : "border border-gray-200 dark:border-gray-700"
                }`}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                    {tier.badge}
                  </Badge>
                )}

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{tier.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  {tier.priceNote && tier.priceNote !== "/month" && (
                    <span className="text-sm text-gray-500 block">{tier.priceNote}</span>
                  )}
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                  {tier.priceNote === "/month" && (
                    <span className="text-gray-500 ml-1">/month</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.href}>
                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Math</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">100</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Hours/month on CDs</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">75%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Time reduction</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">$85</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Average hourly rate</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl border-2 border-blue-600">
                  <p className="text-3xl font-bold text-green-600">$6,375</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Saved monthly</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-center">
                If your team spends 100 hours/month on construction documents and we cut that by 75%, at $85/hr that&apos;s{" "}
                <span className="font-bold text-green-600">$6,375 saved every month</span>. The implementation pays for itself before the support period ends.
              </p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="font-semibold text-lg pr-4 text-gray-900 dark:text-white">{faq.q}</h3>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
