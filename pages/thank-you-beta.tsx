import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <Layout
      title="Thank You - BIM Ops Studio"
      description="Thank you for contacting BIM Ops Studio!"
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
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
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We've received your message and will respond within 24-48 business hours.
              </p>
            </div>

            {/* What's Next Card */}
            <Card className="mb-8">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-6">What's Next?</h2>

                <div className="space-y-6 text-left">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Check Your Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We'll send you a response at the email address you provided.
                        Add info@bimopsstudio.com to your contacts to ensure delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4 flex-shrink-0">
                      <ExternalLink className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Ready to Purchase?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Professional Sheet Creator is available now on the Autodesk App Store
                        for $149 (one-time purchase).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View on Autodesk App Store
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/">
                <Button size="lg" variant="outline">
                  Return Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
