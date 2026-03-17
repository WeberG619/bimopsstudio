import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPrivacyAddendum() {
  return (
    <Layout
      title="Privacy Addendum - BIM Ops Studio Services"
      description="Privacy addendum for BIM Ops Studio implementation and consulting services"
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Privacy Addendum</h1>
            <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-8">BIM Ops Studio Services</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Last updated: March 2026
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-8">
                <p className="font-semibold mb-2">Summary</p>
                <p>
                  BIM Ops Studio services (including RevitMCPBridge implementations) operate locally
                  within your environment. We do not collect, transmit, or store your project data.
                </p>
              </div>

              <p className="mb-6">
                This addendum supplements the{" "}
                <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                  BIM Ops Studio Privacy Policy
                </Link>{" "}
                and applies specifically to our consulting and implementation services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Data Handling</h2>
              <p className="mb-4">
                During implementation engagements, BIM Ops Studio may access your Revit environment
                to configure automation workflows. All configuration is performed locally on your systems.
                We do not copy, transmit, or retain any project files or model data.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. RevitMCPBridge</h2>
              <p className="mb-4">
                RevitMCPBridge is open-source software that communicates with Revit via local named pipes.
                It does not transmit data over the internet and does not collect analytics or telemetry.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Contact Information</h2>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                <p className="font-semibold">BIM Ops Studio</p>
                <p>Email: <a href="mailto:info@bimopsstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@bimopsstudio.com</a></p>
                <p>Website: <a href="https://www.bimopsstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">www.bimopsstudio.com</a></p>
              </div>

              <hr className="my-8" />

              <p className="text-sm text-gray-500 dark:text-gray-400">
                For our general company privacy policy, please visit{" "}
                <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                  bimopsstudio.com/privacy
                </Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
