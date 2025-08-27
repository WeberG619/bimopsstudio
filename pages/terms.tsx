import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="BIM Ops Studio Terms of Service - Terms and conditions for using our services"
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Effective Date: August 2025
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using BIM Ops Studio software and services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of Professional Sheet Creator 
                for personal, non-commercial transitory viewing only during the beta period. This is 
                the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Beta Software</h2>
              <p className="mb-4">
                Professional Sheet Creator is currently in beta. The software is provided "as is" without 
                warranty of any kind. Beta users acknowledge that the software may contain bugs and may 
                not function as intended.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Pricing</h2>
              <p className="mb-4">
                Upon completion of the beta period, Professional Sheet Creator will be available at 
                $149/month per seat. Beta users may be eligible for founding-user pricing.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer</h2>
              <p className="mb-4">
                The materials on BIM Ops Studio's website and in our software are provided on an 'as is' 
                basis. BIM Ops Studio makes no warranties, expressed or implied, and hereby disclaims and 
                negates all other warranties including, without limitation, implied warranties or conditions 
                of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitations</h2>
              <p className="mb-4">
                In no event shall BIM Ops Studio or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use BIM Ops Studio software.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Autodesk Developer Network</h2>
              <p className="mb-4">
                BIM Ops Studio is an official Autodesk Developer Network Member (#USUS0234). Our software 
                is developed in accordance with ADN guidelines and best practices.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to us at weber@bimopsstudio.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}