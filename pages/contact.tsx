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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = "Early Access Request - Professional Sheet Creator";
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Company Size: ${formData.companySize}
Revit Version: ${formData.revitVersion}
Number of Seats: ${formData.seats}
Timeline: ${formData.timeline}

This is an early access request submitted from bimopsstudio.com
    `.trim();

    // Encode for URL
    const mailtoLink = `mailto:weber@bimopsstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
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
                    Your email client should now be open with your early access request.
                  </p>
                  <p className="text-sm text-gray-500">
                    If your email client didn't open, please email directly to:
                    <br />
                    <strong>weber@bimopsstudio.com</strong>
                  </p>
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
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
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
                    name="revitVersion"
                    value={formData.revitVersion}
                    onChange={handleChange}
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
                    name="seats"
                    placeholder="Number of Seats"
                    min="1"
                    value={formData.seats}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
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

                  <Button type="submit" size="lg" className="w-full">
                    Request Early Access
                    <ArrowRight className="ml-2 w-4 h-4" />
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