import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    revitVersion: '',
    seats: '',
    timeline: ''
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
          access_key: '6a361fd9-4582-4fc6-9b17-19222400caca', // TODO: Replace with your actual Web3Forms access key
          name: formData.name,
          email: formData.email,
          company: formData.company,
          company_size: formData.companySize,
          revit_version: formData.revitVersion,
          seats: formData.seats,
          timeline: formData.timeline,
          subject: 'Early Access Request - Professional Sheet Creator',
          from_name: 'BIM Ops Studio Website',
          replyto: formData.email,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fallback to mailto on any error
      const subject = encodeURIComponent('Early Access Request - Professional Sheet Creator');
      const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Company Size: ${formData.companySize}
Revit Version: ${formData.revitVersion}
Number of Seats: ${formData.seats}
Implementation Timeline: ${formData.timeline}`
      );
      
      // Open email client with pre-filled information
      window.location.href = `mailto:weber@bimopsstudio.com?subject=${subject}&body=${body}`;
      
      // Show success message after a short delay
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Layout
        title="Early Access - Professional Sheet Creator"
        description="Request early access to Professional Sheet Creator for Revit"
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
                    Your early access request has been sent successfully!
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    We'll get back to you at <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-left text-sm mt-4">
                    <p className="font-semibold mb-2">Your Request Details:</p>
                    <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Company:</strong> {formData.company}</p>
                      <p><strong>Company Size:</strong> {formData.companySize}</p>
                      <p><strong>Revit Version:</strong> {formData.revitVersion}</p>
                      <p><strong>Seats:</strong> {formData.seats}</p>
                      <p><strong>Timeline:</strong> {formData.timeline}</p>
                    </div>
                  </div>
                  <Button 
                    className="mt-6"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        companySize: '',
                        revitVersion: '',
                        seats: '',
                        timeline: ''
                      });
                    }}
                  >
                    Submit Another Request
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
      title="Early Access - Professional Sheet Creator"
      description="Request early access to Professional Sheet Creator for Revit"
    >
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8">Request Early Access</h1>
            
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

                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    required
                  />
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    required
                  >
                    <option value="" className="text-gray-900 dark:text-gray-300">Company Size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-20">6-20 employees</option>
                    <option value="21-50">21-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                  <select
                    name="revitVersion"
                    value={formData.revitVersion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
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
                    name="seats"
                    placeholder="Number of Seats"
                    min="1"
                    value={formData.seats}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    required
                  />
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                    required
                  >
                    <option value="">Implementation Timeline</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="evaluating">Just evaluating</option>
                  </select>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Early Access
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="mt-4 text-sm text-gray-500">
                  Or email directly: weber@bimopsstudio.com
                </p>
              </CardContent>
            </Card>

            <p className="text-gray-600 dark:text-gray-300">
              Beta program launching soon for select firms
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );

}
