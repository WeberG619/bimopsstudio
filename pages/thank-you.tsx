import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Clock, Download, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <Layout
      title="Thank You - Request Received"
      description="Thank you for your interest in BIM Ops Studio. We'll be in touch soon!"
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We've received your request and we're excited to connect with you.
              </p>
            </div>

            {/* What Happens Next */}
            <Card className="mb-8 text-left">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF]/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#4A9EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Check Your Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        You'll receive a confirmation email from <strong>weber@bimopsstudio.com</strong> shortly.
                        Please add this email to your contacts to ensure you don't miss our response.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF]/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#4A9EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">We'll Respond Within 24 Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our team will review your request and get back to you with next steps,
                        pricing details, and answers to any questions you may have.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF]/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <FileText className="w-6 h-6 text-[#4A9EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Schedule Your Demo</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We'll schedule a personalized demo to show you exactly how Professional Sheet Creator
                        can save your team 4+ hours on every project delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meanwhile Section */}
            <Card className="mb-8 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6">Meanwhile, Explore Our Resources</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/free-tools">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                      <Download className="w-10 h-10 text-[#4A9EFF] mb-4 mx-auto" />
                      <h3 className="font-semibold mb-2">Free Tools</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Download our free View Preview tool for Revit
                      </p>
                    </div>
                  </Link>

                  <Link href="/technical">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                      <FileText className="w-10 h-10 text-[#4A9EFF] mb-4 mx-auto" />
                      <h3 className="font-semibold mb-2">Technical Details</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Learn about our Revit API implementation
                      </p>
                    </div>
                  </Link>

                  <Link href="/pricing">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                      <ArrowRight className="w-10 h-10 text-[#4A9EFF] mb-4 mx-auto" />
                      <h3 className="font-semibold mb-2">View Pricing</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        See our transparent pricing and plans
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Additional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" variant="outline">
                  Back to Homepage
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg">
                  Explore All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Have an urgent question? Email us directly at{" "}
              <a href="mailto:weber@bimopsstudio.com" className="text-[#4A9EFF] hover:underline">
                weber@bimopsstudio.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
