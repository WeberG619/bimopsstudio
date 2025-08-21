import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Users,
  Headphones,
  Calendar,
  CheckCircle,
  Send
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help with technical questions and account issues",
    contact: "support@bimops.studio",
    responseTime: "< 4 hours",
    color: "from-blue-500 to-cyan-400",
    action: "mailto:support@bimops.studio?subject=BIM%20Support%20Request"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our BIM experts",
    contact: "+1 (555) 123-4567",
    responseTime: "Mon-Fri 9AM-6PM EST",
    color: "from-green-500 to-emerald-400",
    action: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant help for quick questions",
    contact: "Available on website",
    responseTime: "24/7 availability",
    color: "from-purple-500 to-pink-400",
    action: "/live-support"
  },
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a personalized demo with our team",
    contact: "Free 30-minute session",
    responseTime: "Same day booking",
    color: "from-orange-500 to-red-400",
    action: "/book-consultation"
  }
];

const officeLocations = [
  {
    city: "New York",
    address: "123 Broadway, Suite 456",
    address2: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@bimops.studio"
  },
  {
    city: "London",
    address: "45 Canary Wharf",
    address2: "London E14 5AB, UK",
    phone: "+44 20 7123 4567",
    email: "london@bimops.studio"
  },
  {
    city: "Sydney",
    address: "88 Harbour Street",
    address2: "Sydney NSW 2000, Australia",
    phone: "+61 2 9123 4567",
    email: "sydney@bimops.studio"
  }
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "You can start using our tools immediately after signing up. Most users are productive within their first day."
  },
  {
    question: "Do you offer training for teams?",
    answer: "Yes! We provide comprehensive training programs for teams of all sizes, including custom workshops and ongoing support."
  },
  {
    question: "What Revit versions do you support?",
    answer: "We support Revit 2020, 2021, 2022, 2023, 2024, and 2025. Both subscription and perpetual licenses are compatible."
  },
  {
    question: "Can I integrate with other software?",
    answer: "Absolutely! We have native integrations with Dynamo, Navisworks, AutoCAD, and APIs for custom integrations."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContactMethodClick = (action: string) => {
    if (action.startsWith('mailto:') || action.startsWith('tel:')) {
      window.location.href = action;
    } else if (action.startsWith('http')) {
      window.open(action, '_blank');
    } else if (action.startsWith('/')) {
      // Internal page navigation
      window.location.href = action;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Create email content
      const emailContent = {
        to: 'support@bimops.studio',
        subject: `New Contact Form Submission: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from BIM Ops Studio Contact Form
        `.trim()
      };

      // Use mailto as fallback since we don't have a backend
      const mailtoLink = `mailto:support@bimops.studio?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message after short delay
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try emailing us directly at support@bimops.studio');
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout
      title="Contact Us - Get Expert BIM Support"
      description="Get in touch with our BIM automation experts. We're here to help you succeed with personalized support and consulting."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
                💬 Expert Support
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Get the <span className="text-lime-accent">Help You Need</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our team of BIM experts is here to support your success. Whether you need technical help, 
                custom development, or strategic consulting, we're just a message away.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer multiple ways to get in touch, ensuring you get the support you need when you need it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer dark:bg-gray-800 dark:shadow-gray-700/50"
                  onClick={() => handleContactMethodClick(method.action)}
                >
                  <CardHeader className={`bg-gradient-to-r ${method.color} text-white rounded-t-lg`}>
                    <method.icon className="w-8 h-8 mb-2" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 dark:text-white">{method.contact}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {method.responseTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl dark:bg-gray-800 dark:shadow-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Send Us a Message</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for reaching out. We'll respond within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project, questions, or how we can help..."
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Locations & FAQs */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Office Locations */}
              <Card className="shadow-lg dark:bg-gray-800 dark:shadow-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-electric-blue" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {officeLocations.map((office, index) => (
                      <div key={office.city} className="border-b border-gray-200 dark:border-gray-600 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{office.city}</h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          <div>{office.address}</div>
                          <div>{office.address2}</div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            <a 
                              href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                              className="hover:text-electric-blue transition-colors"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            <a 
                              href={`mailto:${office.email}?subject=BIM%20Services%20Inquiry`}
                              className="hover:text-electric-blue transition-colors"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQs */}
              <Card className="shadow-lg dark:bg-gray-800 dark:shadow-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-600 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/faq">
                    <Button variant="outline" className="mt-6 w-full">
                      View All FAQs
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your BIM workflows. Start your free trial today 
              or schedule a personalized demo with our experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="!border-white !text-white hover:!bg-white hover:!text-gray-900 !bg-transparent"
                onClick={() => handleContactMethodClick('/book-consultation')}
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}