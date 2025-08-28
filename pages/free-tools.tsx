import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Eye, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { trackDownload, trackFormSubmit } from "@/components/GoogleAnalytics";

export default function FreeTools() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6a361fd9-4582-4fc6-9b17-19222400caca',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: 'Free Tool Download - View Preview for Revit',
          from_name: 'BIM Ops Studio Website',
          replyto: formData.email,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Track form submission
        trackFormSubmit('Free Tool Download Form');
        
        // Trigger the download
        const link = document.createElement('a');
        link.href = '/downloads/ViewPreviewTool_Setup_MultiVersion.exe';
        link.download = 'ViewPreviewTool_Setup_MultiVersion.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Track download
        trackDownload('ViewPreviewTool_Setup_MultiVersion.exe');
        
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fallback - just download directly
      const link = document.createElement('a');
      link.href = '/downloads/ViewPreviewTool_Setup_MultiVersion.exe';
      link.download = 'ViewPreviewTool_Setup_MultiVersion.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => setIsSubmitted(true), 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Layout
        title="Free Tools - View Preview for Revit"
        description="Download our free View Preview tool for Revit. Toggle between views instantly without opening each one."
      >
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-8">
                <CardContent className="pt-8 pb-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">
                    Thank You!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Check your email for the download link.
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Your download should start automatically. If not, <a href="/downloads/ViewPreviewTool_Setup_MultiVersion.exe" className="text-blue-600 hover:text-blue-800 underline">click here</a>.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-left text-sm mt-4">
                    <p className="font-semibold mb-2">Installation Instructions:</p>
                    <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Extract the downloaded ZIP file</li>
                      <li>Copy the folder to your Revit Add-ins directory</li>
                      <li>Restart Revit</li>
                      <li>Find View Preview in your Add-ins ribbon</li>
                    </ol>
                  </div>
                  <Button 
                    className="mt-6"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '' });
                    }}
                  >
                    Download Another Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      title="Free Tools - View Preview for Revit"
      description="Download our free View Preview tool for Revit. Toggle between views instantly without opening each one."
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Free Tool: View Preview for Revit
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                While you wait for Professional Sheet Creator, try our View Preview tool
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="pt-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">What is View Preview?</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        View Preview is a free Revit add-in that lets you quickly navigate through your project views 
                        with a single click preview, without the delay of opening each one. Perfect for projects with 30+ views 
                        where finding the right view becomes time-consuming.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Click once on any view to see instant preview</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Works with floor plans, sections, elevations, and 3D views (not schedules or family images)</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Compatible with Revit 2024, 2025, and 2026</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>100% free - No license required</span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          <strong>Version 1.0</strong> - Released August 2025<br />
                          Developed by BIM Ops Studio
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Get Your Free Copy</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                          required
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company (Optional)"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                        />
                        
                        <Button type="submit" size="lg" className="w-full bg-[#4A9EFF] hover:bg-[#3A8EEF]" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Download Free Tool
                              <Download className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>

                      <p className="mt-4 text-sm text-gray-500 text-center">
                        Download will start immediately after submitting
                      </p>
                      <p className="mt-2 text-xs text-gray-400 text-center">
                        Or <a href="/downloads/ViewPreviewTool_Setup_MultiVersion.exe" className="text-blue-600 hover:text-blue-800 underline">download directly</a> without form
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Eye className="w-16 h-16 text-[#4A9EFF] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">One-Click Preview</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    See view contents with a single click
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Zap className="w-16 h-16 text-[#4A9EFF] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Fast Navigation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Find the right view in seconds, not minutes
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Download className="w-16 h-16 text-[#4A9EFF] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Easy Install</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Simple drag-and-drop installation
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}