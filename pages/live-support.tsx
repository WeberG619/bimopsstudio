import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { 
  MessageSquare,
  Send,
  Clock,
  Users,
  ArrowLeft,
  CheckCircle,
  Mail,
  Phone
} from "lucide-react";
import { useState, useEffect } from "react";

const supportHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" }, 
  { day: "Sunday", hours: "Closed" }
];

const quickHelp = [
  "How do I install the Revit add-in?",
  "Pricing and billing questions",
  "Technical support for automation tools",
  "Account and license management",
  "Training and onboarding help",
  "Enterprise and team setup"
];

export default function LiveSupport() {
  const [message, setMessage] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isChatStarted, setIsChatStarted] = useState(false);

  useEffect(() => {
    // Check if support is currently online (9 AM - 6 PM EST, Mon-Fri)
    const now = new Date();
    const estTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const hour = estTime.getHours();
    const day = estTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Monday to Friday, 9 AM to 6 PM EST
    const isBusinessHours = (day >= 1 && day <= 5) && (hour >= 9 && hour < 18);
    setIsOnline(isBusinessHours);
    
    // Update current time
    setCurrentTime(estTime.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short"
    }));
  }, []);

  const handleStartChat = () => {
    if (!isOnline) {
      // If offline, redirect to email support
      const emailContent = `
Hi BIM Ops Support Team,

I tried to access live chat but you're currently offline. Please contact me regarding:

${message || "General inquiry"}

Thank you!
      `.trim();
      
      const mailtoLink = `mailto:support@bimops.studio?subject=Live Chat Request&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;
      return;
    }
    
    // If online, show chat interface
    setIsChatStarted(true);
  };

  const handleQuickHelp = (topic: string) => {
    const emailContent = `
Hi BIM Ops Support Team,

I need help with: ${topic}

Please provide information or schedule a call to discuss this.

Thank you!
    `.trim();
    
    const mailtoLink = `mailto:support@bimops.studio?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout
      title="Live Support - BIM Ops Studio"
      description="Get instant help from our BIM automation experts. Live chat support available during business hours."
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
                <MessageSquare className="w-4 h-4 mr-1" />
                {isOnline ? "🟢 Online Now" : "🔴 Currently Offline"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Live <span className="text-lime-accent">Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get instant help from our BIM automation experts. 
                {isOnline ? "We're online and ready to help!" : "We're currently offline, but we'll respond to your message quickly."}
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <Clock className="w-5 h-5 text-lime-accent" />
                <span className="text-blue-100">Current Time: {currentTime}</span>
              </div>
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

      {/* Support Hours */}
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
              Support Hours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our expert support team is available during these hours
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {supportHours.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4 dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-white">{schedule.day}</span>
                      <span className="text-gray-600 dark:text-gray-300">{schedule.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface or Message Form */}
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
                  <CardTitle className="text-2xl text-gray-900 dark:text-white text-center flex items-center justify-center">
                    <MessageSquare className="mr-3 w-8 h-8" />
                    {isOnline ? "Start Live Chat" : "Send Us a Message"}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {isOnline 
                      ? "Our support team is online and ready to help you right now!"
                      : "We're currently offline, but we'll respond to your message within 4 hours."
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  {isChatStarted ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Chat Started!</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Your default email client will open with your message. Our support team will respond promptly.
                      </p>
                      <Button onClick={() => setIsChatStarted(false)}>
                        Start Another Chat
                      </Button>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          How can we help you?
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describe your question or issue..."
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                        />
                      </div>

                      <Button
                        onClick={handleStartChat}
                        size="lg"
                        className="w-full"
                      >
                        {isOnline ? (
                          <>
                            <MessageSquare className="mr-2 w-5 h-5" />
                            Start Live Chat
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          Or choose from these common topics:
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {quickHelp.map((topic, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickHelp(topic)}
                              className="text-left px-4 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-electric-blue hover:text-white transition-colors rounded-md text-sm"
                            >
                              {topic}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you need urgent assistance, these alternatives are always available
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100"
                onClick={() => window.location.href = 'mailto:support@bimops.studio?subject=Urgent Support Request'}
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Support
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="!border-white !text-white hover:!bg-white hover:!text-gray-900 !bg-transparent"
                onClick={() => window.location.href = 'tel:+15551234567'}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}