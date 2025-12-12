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
  "Pricing",
];

const faqs = [
  {
    category: "Getting Started",
    question: "How quickly can I get started with Professional Sheet Creator?",
    answer: "You can start using Professional Sheet Creator immediately after purchase. Simply download from the Autodesk App Store, install the add-in, and you're ready to create sheets in Revit."
  },
  {
    category: "Getting Started",
    question: "Do I need any special training to use your tools?",
    answer: "No special training is required. If you know how to use Revit, you can use our tools. The interface is intuitive with 71 pre-configured templates to get you started immediately."
  },
  {
    category: "Technical Support",
    question: "What Revit versions do you support?",
    answer: "We support Revit 2024, 2025, and 2026. We typically add support for new Revit versions within 30 days of their release."
  },
  {
    category: "Technical Support",
    question: "What happens if I encounter a bug or issue?",
    answer: "Contact us at info@bimopsstudio.com. We respond within 24-48 business hours for all support requests."
  },
  {
    category: "Pricing",
    question: "Is this a subscription?",
    answer: "No. Professional Sheet Creator is a one-time purchase of $149 USD. You own the license permanently with no recurring fees."
  },
  {
    category: "Pricing",
    question: "Where can I purchase?",
    answer: "Professional Sheet Creator is available exclusively on the Autodesk App Store. Payment is processed securely through Autodesk."
  },
  {
    category: "Pricing",
    question: "Do you offer educational discounts?",
    answer: "Contact us at info@bimopsstudio.com to discuss educational pricing options."
  },
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
              <Badge variant="secondary" className="mb-6 bg-blue-100/10 text-blue-300 border-blue-300/20">
                <HelpCircle className="w-4 h-4 mr-1" />
                Help Center
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Frequently Asked <span className="text-blue-400">Questions</span>
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
      <section className="py-20 bg-blue-600 text-white">
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