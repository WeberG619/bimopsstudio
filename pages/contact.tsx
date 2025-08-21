import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Layout
      title="Contact - Professional Sheet Creator"
      description="Request beta access to Professional Sheet Creator for Revit"
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8">Request Beta Access</h1>
            
            <Card className="mb-8">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <Mail className="w-16 h-16 mx-auto text-primary mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">
                    Professional Sheet Creator Beta
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    15 day free trial • Founding-user pricing available
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <select
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Company Size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-20">6-20 employees</option>
                    <option value="21-50">21-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                  <select
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Revit Version</option>
                    <option value="2024">Revit 2024</option>
                    <option value="2025">Revit 2025</option>
                    <option value="2026">Revit 2026</option>
                    <option value="multiple">Multiple versions</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Number of Seats"
                    min="1"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <select
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Implementation Timeline</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="evaluating">Just evaluating</option>
                  </select>
                </div>

                <Button size="lg" className="w-full">
                  Request Beta Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="mt-4 text-sm text-gray-500">
                  Or email directly: contact@bimops.studio
                </p>
              </CardContent>
            </Card>

            <p className="text-gray-600 dark:text-gray-300">
              Currently testing with 3 architecture firms • ADN Member
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}