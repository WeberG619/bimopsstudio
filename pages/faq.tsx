import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  HelpCircle,
  ArrowRight,
  Search,
  MessageSquare,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  "All",
  "Getting Started", 
  "Technical Support",
  "Billing & Pricing",
  "Integrations",
  "Training",
  "Enterprise"
];

const faqs = [
  {
    category: "Getting Started",
    question: "How quickly can I get started with BIM Ops Studio?",
    answer: "You can start using our tools immediately after signing up. Most users are productive within their first day. Our onboarding process includes guided tutorials and sample projects to help you get familiar with the interface."
  },
  {
    category: "Getting Started",
    question: "Do I need any special training to use your tools?",
    answer: "No special training is required. If you know how to use Revit, you can use our tools. However, we do offer comprehensive training programs for teams who want to maximize their productivity."
  },
  {
    category: "Technical Support",
    question: "What Revit versions do you support?",
    answer: "We support Revit 2020, 2021, 2022, 2023, 2024, and 2025. Both subscription and perpetual licenses are compatible. We typically add support for new Revit versions within 30 days of their release."
  },
  {
    category: "Technical Support", 
    question: "Can I use your tools with other BIM software?",
    answer: "Currently, our primary focus is Revit automation. However, we have native integrations with Dynamo, Navisworks, AutoCAD, and provide APIs for custom integrations with other software platforms."
  },
  {
    category: "Technical Support",
    question: "What happens if I encounter a bug or issue?",
    answer: "Our support team responds to technical issues within 4 hours during business days. For enterprise customers, we provide 24/7 priority support. You can report issues through email, live chat, or our support portal."
  },
  {
    category: "Billing & Pricing",
    question: "Is there a free trial available?",
    answer: "Yes! All plans include a 14-day free trial with full access to features. No credit card is required to start your trial. You can cancel anytime during the trial period with no charges."
  },
  {
    category: "Billing & Pricing",
    question: "Can I change or cancel my subscription anytime?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account dashboard. Changes take effect at the next billing cycle, and we provide prorated refunds when applicable."
  },
  {
    category: "Billing & Pricing",
    question: "Do you offer educational discounts?",
    answer: "Yes! Students and educators get 50% off all plans. Contact us with your .edu email address for verification and discount code. We also offer special pricing for educational institutions."
  },
  {
    category: "Integrations",
    question: "How does the Dynamo integration work?",
    answer: "Our tools can export workflows as Dynamo scripts, and you can import existing Dynamo definitions into our workflow builder. This allows you to leverage your existing Dynamo investments while gaining the benefits of our AI-powered automation."
  },
  {
    category: "Integrations",
    question: "Can I integrate with project management tools?",
    answer: "Yes, we offer integrations with popular project management platforms like Monday.com, Asana, and Microsoft Project. You can automatically create tasks, update project status, and sync completion data."
  },
  {
    category: "Training",
    question: "Do you offer training for teams?",
    answer: "Yes! We provide comprehensive training programs for teams of all sizes, including custom workshops, ongoing support, and certification programs. Training can be conducted remotely or on-site depending on your needs."
  },
  {
    category: "Training",
    question: "What training resources are available?",
    answer: "We offer video tutorials, documentation, webinars, sample projects, and one-on-one training sessions. All customers have access to our knowledge base and community forums."
  },
  {
    category: "Enterprise",
    question: "What's included in Enterprise plans?",
    answer: "Enterprise plans include unlimited users, on-premise deployment options, custom integrations, dedicated support manager, SLA guarantees, advanced security features, and priority feature requests."
  },
  {
    category: "Enterprise", 
    question: "Do you offer on-premise deployment?",
    answer: "Yes, Enterprise customers can choose on-premise deployment for enhanced security and control. We provide full installation, configuration, and maintenance support for on-premise installations."
  },
  {
    category: "Enterprise",
    question: "What security measures do you have in place?",
    answer: "We employ enterprise-grade security including end-to-end encryption, SOC 2 Type II compliance, regular security audits, and GDPR compliance. Enterprise customers get additional security features like SSO and advanced access controls."
  }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Frequently Asked Questions - BIM Ops Studio"
      description="Find answers to common questions about BIM Ops Studio's automation tools, pricing, support, and integrations."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
                <HelpCircle className="w-4 h-4 mr-1" />
                Help Center
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Frequently Asked <span className="text-lime-accent">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our BIM automation tools, 
                pricing, support, and integrations. Can't find what you're looking for?
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue dark:bg-gray-700 dark:text-white text-lg"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-electric-blue text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-electric-blue hover:text-white shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No FAQs Found</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant="secondary" className="mb-3 text-xs">
                              {faq.category}
                            </Badge>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">
                              {faq.question}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert support team is here to help. Get in touch and we'll respond within 4 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Contact Support
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-gray-900 !bg-transparent">
                <Phone className="mr-2 w-5 h-5" />
                Schedule Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}