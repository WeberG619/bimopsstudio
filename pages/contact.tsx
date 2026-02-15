import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { trackFormSubmit } from "@/components/GoogleAnalytics";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track lead in Supabase CRM
      supabase.from('leads').insert({
        email: formData.email,
        full_name: formData.name,
        source: 'contact_form',
        status: 'new',
      }).then(() => {});

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
          message: formData.message,
          subject: 'Contact Form - BIM Ops Studio',
          from_name: 'BIM Ops Studio Website',
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        trackFormSubmit('Contact Form');
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const subject = encodeURIComponent('Contact from BIM Ops Studio Website');
      const body = encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`
      );
      window.location.href = `mailto:info@bimopsstudio.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Layout
        title="Contact Us - BIM Ops Studio"
        description="Get in touch with BIM Ops Studio for support or inquiries"
      >
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. We'll get back to you within 24-48 business hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                  >
                    Send Another Message
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
      title="Contact Us - BIM Ops Studio"
      description="Get in touch with BIM Ops Studio for support or inquiries"
    >
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Questions about Professional Sheet Creator? We're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 resize-none"
                      required
                    />
                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Direct Contact</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:info@bimopsstudio.com" className="text-blue-600 hover:underline">
                            info@bimopsstudio.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Purchase</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Professional Sheet Creator is available on the Autodesk App Store for $149.
                    </p>
                    <a
                      href="https://apps.autodesk.com/RVT/en/Detail/Index?id=638315571284916006"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View on Autodesk App Store
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Support</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      For technical support, email us and we'll respond within 24-48 business hours.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
