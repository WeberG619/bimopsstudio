import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function ProfessionalSheetCreatorPrivacy() {
  return (
    <Layout
      title="Privacy Policy - Professional Sheet Creator for Revit"
      description="Privacy Policy for Professional Sheet Creator for Revit - BIM Ops Studio"
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-8">Professional Sheet Creator for Revit</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Last updated: December 2025
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-8">
                <p className="font-semibold mb-2">Summary</p>
                <p>
                  Professional Sheet Creator does NOT collect, transmit, or store any personal data.
                  The App operates entirely offline within your local Autodesk Revit environment.
                </p>
              </div>

              <p className="mb-6">
                BIM Ops Studio ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how Professional Sheet Creator for Revit ("the App") handles information.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
              <p className="mb-4">
                Professional Sheet Creator for Revit is designed with privacy in mind. The App:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Does NOT collect</strong> any personal information</li>
                <li><strong>Does NOT collect</strong> usage data or analytics</li>
                <li><strong>Does NOT collect</strong> project data or file contents</li>
                <li><strong>Does NOT transmit</strong> any data over the internet</li>
                <li><strong>Does NOT require</strong> an internet connection to function</li>
                <li><strong>Does NOT use</strong> cookies, tracking pixels, or similar technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Local Data Storage</h3>
              <p className="mb-4">
                The App may store the following data locally on your computer only:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>User Preferences:</strong> Your saved presets and template configurations are stored in your local Windows AppData folder</li>
                <li><strong>Recent Settings:</strong> Last-used title block selection and sheet configuration options</li>
              </ul>
              <p className="mb-4">
                This data never leaves your computer and is not accessible to BIM Ops Studio or any third party.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Third-Party Data Sharing</h2>
              <p className="mb-4">
                Since Professional Sheet Creator does not collect any data, there is no data to share with third parties.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>We do NOT share data with analytics providers</li>
                <li>We do NOT share data with advertising networks</li>
                <li>We do NOT use third-party SDKs that collect data</li>
                <li>We do NOT share data with affiliates, subsidiaries, or related entities</li>
              </ul>
              <p className="mb-4">
                In the unlikely event that we ever modify the App to collect data in the future, any third party
                receiving such data would be required to provide the same level of protection as stated in this privacy policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Retention and Deletion</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Retention</h3>
              <p className="mb-4">
                Since we do not collect any data from you, there is no data retained on our servers or systems.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Local Data</h3>
              <p className="mb-4">
                Locally stored preferences and settings remain on your computer until:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You uninstall the App (which removes all local data)</li>
                <li>You manually delete the App's data folder</li>
                <li>You use the "Reset to Defaults" option within the App</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Deletion</h3>
              <p className="mb-4">
                To delete all locally stored App data:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Uninstall Professional Sheet Creator via Windows Settings &gt; Apps &gt; Apps &amp; Features</li>
                <li>The uninstaller will remove all App files and local settings</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Consent Revocation and Data Deletion Requests</h2>
              <p className="mb-4">
                Since Professional Sheet Creator does not collect personal data, there is no consent to revoke
                and no data deletion request necessary.
              </p>
              <p className="mb-4">
                However, if you have any concerns or questions about your data, you may contact us:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Email:</strong> <a href="mailto:info@bimopsstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@bimopsstudio.com</a></li>
                <li><strong>Website:</strong> <a href="https://www.bimopsstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">www.bimopsstudio.com</a></li>
              </ul>
              <p className="mb-4">
                We will respond to all inquiries within 30 days.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
              <p className="mb-4">
                Professional Sheet Creator is a professional software tool designed for architects, engineers,
                and BIM professionals. It is not intended for use by children under 13 years of age.
                We do not knowingly collect any information from children.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated "Last Updated" date. If we make material changes to how we handle personal data,
                we will notify users through the App or via email.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                <p className="font-semibold">BIM Ops Studio</p>
                <p>Email: <a href="mailto:info@bimopsstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@bimopsstudio.com</a></p>
                <p>Website: <a href="https://www.bimopsstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">www.bimopsstudio.com</a></p>
              </div>

              <hr className="my-8" />

              <p className="text-sm text-gray-500 dark:text-gray-400">
                This privacy policy applies specifically to Professional Sheet Creator for Revit distributed through the Autodesk App Store.
                For our general company privacy policy, please visit <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">bimopsstudio.com/privacy</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
