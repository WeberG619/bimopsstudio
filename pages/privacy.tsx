import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  AlertCircle
} from "lucide-react";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy - BIM Ops Studio"
      description="Learn how BIM Ops Studio protects your data and respects your privacy. Our commitment to data security and transparency."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
                Last Updated: January 2025
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Privacy <span className="text-lime-accent">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your privacy is fundamental to how we build and operate BIM Ops Studio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="mb-8 dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-electric-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-0">Our Commitment</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-0">
                    BIM Ops Studio is committed to protecting your privacy and ensuring the security of your data. 
                    This policy explains how we collect, use, and protect your information when you use our services.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-electric-blue mr-2" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Account Information</h3>
              <ul className="text-gray-600 dark:text-gray-300 mb-6">
                <li>Name and email address</li>
                <li>Company name and role</li>
                <li>Billing information (processed securely through Stripe)</li>
                <li>Account preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Usage Data</h3>
              <ul className="text-gray-600 dark:text-gray-300 mb-6">
                <li>Features and tools used within the platform</li>
                <li>Frequency and duration of usage</li>
                <li>Error logs and performance data</li>
                <li>Workflow patterns (anonymized)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Technical Information</h3>
              <ul className="text-gray-600 dark:text-gray-300 mb-8">
                <li>IP address and browser type</li>
                <li>Revit version and system specifications</li>
                <li>Device and operating system information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 text-electric-blue mr-2" />
                How We Use Your Information
              </h2>
              
              <ul className="text-gray-600 dark:text-gray-300 mb-8">
                <li><strong>Service Delivery:</strong> To provide and improve our BIM automation tools</li>
                <li><strong>Support:</strong> To respond to your requests and provide technical assistance</li>
                <li><strong>Communication:</strong> To send important updates, security alerts, and optional newsletters</li>
                <li><strong>Analytics:</strong> To understand usage patterns and improve our services</li>
                <li><strong>Security:</strong> To detect and prevent fraud or unauthorized access</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-electric-blue mr-2" />
                Data Protection
              </h2>
              
              <Card className="bg-gray-50 dark:bg-gray-800 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Security Measures</h3>
                  <ul className="text-gray-600 dark:text-gray-300">
                    <li>End-to-end encryption for all data transfers</li>
                    <li>256-bit AES encryption for data at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Compliance with SOC 2 Type II standards</li>
                    <li>Multi-factor authentication available</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-electric-blue mr-2" />
                Your Rights
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">You have the right to:</p>
              <ul className="text-gray-600 dark:text-gray-300 mb-8">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct your information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We retain your data only as long as necessary to provide our services and comply with legal obligations. 
                Account data is deleted 90 days after account closure. Usage logs are anonymized after 12 months.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">We use trusted third-party services for:</p>
              <ul className="text-gray-600 dark:text-gray-300 mb-8">
                <li><strong>Payment Processing:</strong> Stripe (PCI-DSS compliant)</li>
                <li><strong>Cloud Infrastructure:</strong> AWS (SOC 2 certified)</li>
                <li><strong>Analytics:</strong> Privacy-focused analytics that don't track individuals</li>
                <li><strong>Support:</strong> Zendesk for customer service tickets</li>
              </ul>

              <Card className="bg-blue-50 dark:bg-blue-900/20 border-electric-blue/20 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-electric-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Note</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-0">
                        We never sell, rent, or share your personal data with third parties for their marketing purposes. 
                        Your BIM project data remains your property and is never used to train AI models without explicit consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have questions about this privacy policy or how we handle your data, please contact us:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-8">
                <li>Email: privacy@bimops.studio</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Broadway, Suite 456, New York, NY 10001</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this privacy policy from time to time. We will notify you of significant changes 
                via email or through a prominent notice in our application. Continued use of our services after 
                changes constitutes acceptance of the updated policy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}