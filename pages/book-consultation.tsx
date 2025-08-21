import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  Clock,
  CheckCircle,
  Send,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const consultationTypes = [
  {
    title: "Product Demo",
    duration: "30 minutes",
    description: "See our tools in action with a personalized demo"
  },
  {
    title: "Technical Consultation",
    duration: "45 minutes", 
    description: "Discuss your specific BIM challenges and solutions"
  },
  {
    title: "Enterprise Planning",
    duration: "60 minutes",
    description: "Strategic planning for large-scale BIM automation"
  }
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    consultationType: "Product Demo",
    preferredDate: "",
    preferredTime: "",
    message: "",
    timezone: "EST"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Create email content for booking request
      const emailContent = {
        to: 'bookings@bimops.studio',
        subject: `Consultation Request: ${formData.consultationType} - ${formData.name}`,
        body: `
New consultation booking request:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Consultation Type: ${formData.consultationType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime} (${formData.timezone})

Message:
${formData.message}

---
Please respond to confirm the appointment or suggest alternative times.
Sent from BIM Ops Studio Booking System
        `.trim()
      };

      // Use mailto to send booking request
      const mailtoLink = `mailto:bookings@bimops.studio?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking request. Please try emailing us directly at bookings@bimops.studio');
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout
      title="Book a Consultation - BIM Ops Studio"
      description="Schedule a free consultation with our BIM automation experts. Get personalized advice and see our tools in action."
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
                <Calendar className="w-4 h-4 mr-1" />
                Free Consultation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Book Your <span className="text-lime-accent">Expert</span> Consultation
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get personalized advice from our BIM automation experts. 
                We'll show you how to transform your workflows and save hours every day.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-gray-900 !bg-transparent">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Contact
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Consultation Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Select the type of consultation that best fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-electric-blue" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{type.title}</CardTitle>
                    <p className="text-electric-blue font-semibold">{type.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white text-center">
                    Schedule Your Consultation
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Fill out the form below and we'll confirm your appointment within 24 hours.
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
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Booking Request Sent!</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for your consultation request. We'll confirm your appointment within 24 hours via email.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Book Another Consultation
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <User className="w-4 h-4 inline mr-1" />
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
                            <Mail className="w-4 h-4 inline mr-1" />
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
                            <Building className="w-4 h-4 inline mr-1" />
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
                            <Phone className="w-4 h-4 inline mr-1" />
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
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Consultation Type *
                        </label>
                        <select
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                        >
                          {consultationTypes.map(type => (
                            <option key={type.title} value={type.title}>
                              {type.title} ({type.duration})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Preferred Date *
                          </label>
                          <Input
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-1" />
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your BIM challenges, current tools, team size, or any specific questions..."
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
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
                            Sending Request...
                          </div>
                        ) : (
                          <>
                            Book Consultation
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        All consultations are free and completely confidential. 
                        We'll never share your information with third parties.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}