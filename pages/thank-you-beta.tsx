import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket, Calendar, Mail, Users, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function ThankYouBeta() {
  return (
    <Layout
      title="Welcome to Beta - BIM Ops Studio"
      description="Thank you for joining our beta program! Here's what to expect next."
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Animation */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to the Beta Program! 🎉
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                You're now on our exclusive early access list
              </p>
            </div>

            {/* Beta Program Details */}
            <Card className="mb-8 text-left bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 border-2 border-[#4A9EFF]">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Beta Access Confirmed</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF]/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Rocket className="w-6 h-6 text-[#4A9EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Beta Program Launch</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>Expected Start:</strong> January 2026
                        <br />
                        You'll be in the first group to access Professional Sheet Creator and test it with real projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4 flex-shrink-0">
                      <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">14-Day Free Trial Included</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Your beta access includes a full 14-day trial with all features unlocked.
                        No credit card required to start.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF]/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#4A9EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Login Credentials Coming Soon</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We'll email you at the address you provided with:
                      </p>
                      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Your unique login credentials</li>
                        <li>Installation instructions</li>
                        <li>Quick-start guide</li>
                        <li>Direct support contact</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#4A9EFF]/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-[#4A9EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Priority Support</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        As a beta tester, you get:
                      </p>
                      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-1">
                        <li>Direct access to our development team</li>
                        <li>Priority bug fixes and feature requests</li>
                        <li>Exclusive beta community Slack channel</li>
                        <li>Weekly office hours with the founder</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect Timeline */}
            <Card className="mb-8 text-left">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Beta Program Timeline</h2>

                <div className="space-y-4">
                  <div className="flex items-center border-l-4 border-[#4A9EFF] pl-4">
                    <Calendar className="w-5 h-5 text-[#4A9EFF] mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Now - December 2025</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Final development and testing. You'll receive progress updates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center border-l-4 border-[#4A9EFF] pl-4">
                    <Calendar className="w-5 h-5 text-[#4A9EFF] mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">January 2026</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Beta access launches! You receive login credentials and onboarding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center border-l-4 border-gray-300 pl-4">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">February - March 2026</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Beta testing period. Your feedback shapes the final product.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center border-l-4 border-gray-300 pl-4">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">April 2026</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Official launch! Beta users get lifetime founding-member pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preparation Checklist */}
            <Card className="mb-8 text-left">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">How to Prepare</h2>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Add weber@bimopsstudio.com to your contacts</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Ensure you don't miss any beta updates or login credentials
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Verify your Revit version</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We support Revit 2024, 2025, and 2026. Check which version you're running.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Identify a test project</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Think about an upcoming project where you'll create 20+ sheets (perfect for testing)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Review our technical documentation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Familiarize yourself with how the tool works before launch day
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/technical">
                <Button size="lg" className="bg-[#4A9EFF] hover:bg-[#3A8EEF]">
                  View Technical Docs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  Review Pricing Plans
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <p className="font-semibold mb-2">Questions About the Beta Program?</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Email us directly and we'll respond within 24 hours:
              </p>
              <a
                href="mailto:weber@bimopsstudio.com"
                className="text-[#4A9EFF] hover:underline font-semibold"
              >
                weber@bimopsstudio.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
