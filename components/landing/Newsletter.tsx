import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Lightbulb,
  Star,
  Gift
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Weekly BIM Tips",
    description: "Insider secrets and pro tips from industry experts"
  },
  {
    icon: TrendingUp,
    title: "New Features First",
    description: "Early access to beta features and product updates"
  },
  {
    icon: Users,
    title: "Community Spotlight",
    description: "Success stories and workflow innovations from our users"
  },
  {
    icon: Gift,
    title: "Exclusive Discounts",
    description: "Special pricing and limited-time offers for subscribers"
  }
];

const stats = [
  { value: "12,000+", label: "Subscribers" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "Weekly", label: "Newsletter" }
];

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <section className="py-24 bg-gradient-to-r from-electric-blue to-lime-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white-05" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome to the Community! 🎉</h2>
            <p className="text-white/90 text-xl mb-8">
              Thanks for subscribing! Check your inbox for a special welcome gift and your first 
              weekly BIM automation tip.
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-r from-electric-blue to-lime-accent text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white-05" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              📧 Join 12,000+ BIM Professionals
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stay Ahead of the 
              <span className="block">BIM Automation Curve</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get weekly insights, automation tips, and exclusive content delivered straight to your inbox. 
              Plus, get a <strong>free Revit automation checklist</strong> when you subscribe.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/95">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-lime-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Free Automation Checklist
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of BIM professionals getting weekly automation insights
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 text-lg"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-electric-blue hover:bg-electric-blue/90 text-lg h-12"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <>
                        Get Free Checklist
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-4">
                  No spam, ever. Unsubscribe with one click. 
                  <br />
                  We respect your privacy and will never share your email.
                </p>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>4.8/5 rated</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-electric-blue mr-1" />
                      <span>12,000+ subscribers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 text-sm mb-2">
                "The weekly tips alone have saved me hours each week. Best BIM newsletter out there!"
              </p>
              <p className="text-white/60 text-xs">
                — Sarah M., BIM Manager at Turner Construction
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
