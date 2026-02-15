import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { 
  Mail,
  CheckCircle,
  Send,
  Sparkles,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  Bell
} from "lucide-react";

const newsletterBenefits = [
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description: "Stay ahead with the latest BIM automation trends and best practices"
  },
  {
    icon: Lightbulb,
    title: "Pro Tips & Tricks",
    description: "Exclusive workflow optimization techniques from industry experts"
  },
  {
    icon: BookOpen,
    title: "Free Resources",
    description: "Access to premium guides, templates, and tools before anyone else"
  },
  {
    icon: Calendar,
    title: "Event Invites",
    description: "Early access to webinars, workshops, and community events"
  }
];

const pastNewsletters = [
  {
    title: "10 Game-Changing Revit Shortcuts You're Not Using",
    date: "January 15, 2025",
    category: "Tips & Tricks",
    readTime: "5 min read",
    highlights: ["Keyboard shortcuts", "Custom macros", "Workflow optimization"]
  },
  {
    title: "The Future of AI in BIM: 2025 Predictions",
    date: "January 8, 2025",
    category: "Industry Insights",
    readTime: "8 min read",
    highlights: ["AI automation", "Machine learning", "Future trends"]
  },
  {
    title: "Case Study: 80% Time Savings with Smart Automation",
    date: "January 1, 2025",
    category: "Case Studies",
    readTime: "6 min read",
    highlights: ["Real results", "Implementation guide", "ROI analysis"]
  },
  {
    title: "New Year, New BIM Workflows: Resolution Guide",
    date: "December 25, 2024",
    category: "Best Practices",
    readTime: "7 min read",
    highlights: ["Goal setting", "Process improvement", "Team efficiency"]
  }
];

const testimonials = [
  {
    quote: "The BIM Ops newsletter is my go-to resource for staying current. The tips have saved me countless hours.",
    author: "Sarah Mitchell",
    role: "BIM Manager",
    company: "HOK"
  },
  {
    quote: "I love the practical, actionable content. Every issue has something I can implement immediately.",
    author: "Carlos Rodriguez",
    role: "Senior Architect",
    company: "Gensler"
  },
  {
    quote: "The case studies and real-world examples are invaluable. It's like having a mentor in my inbox.",
    author: "Emily Chen",
    role: "BIM Coordinator",
    company: "AECOM"
  }
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("weekly");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: dbError } = await supabase.from('newsletter_subscribers').insert({
        email,
        frequency,
      });

      if (dbError) {
        if (dbError.code === '23505') {
          // Unique constraint — already subscribed
          setError('This email is already subscribed!');
        } else {
          throw dbError;
        }
      } else {
        setIsSubscribed(true);
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Newsletter - BIM Automation Insights Delivered"
      description="Subscribe to get the latest BIM automation tips, industry insights, and exclusive resources delivered to your inbox."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-blue-100/10 text-blue-300 border-blue-300/20">
                <Mail className="w-4 h-4 mr-1" />
                Stay Updated
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                BIM Insights <span className="text-blue-400">Delivered</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get weekly tips, industry insights, and exclusive resources to 
                accelerate your BIM automation journey. No spam, just value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section id="newsletter-form" className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {!isSubscribed ? (
              <Card className="shadow-2xl dark:bg-gray-800">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Subscribe to Our Newsletter
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Choose your preferred frequency and start receiving valuable content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Frequency Preference
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFrequency("weekly")}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            frequency === "weekly"
                              ? "border-electric-blue bg-electric-blue/10 text-electric-blue"
                              : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <Bell className="w-5 h-5 mx-auto mb-1" />
                          Weekly Digest
                        </button>
                        <button
                          type="button"
                          onClick={() => setFrequency("monthly")}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            frequency === "monthly"
                              ? "border-electric-blue bg-electric-blue/10 text-electric-blue"
                              : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <Calendar className="w-5 h-5 mx-auto mb-1" />
                          Monthly Roundup
                        </button>
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      By subscribing, you agree to receive emails from BIM Ops Studio.
                      You can unsubscribe at any time.
                    </p>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-2xl text-center dark:bg-gray-800">
                <CardContent className="py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Welcome to the Community!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                    You're all set! Check your email for a confirmation message and your first newsletter.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubscribed(false)}
                  >
                    Subscribe Another Email
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our newsletter is packed with actionable insights to help you work smarter, not harder.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsletterBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Newsletters */}
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
              Recent Newsletters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what you've been missing. Browse our recent newsletter issues.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastNewsletters.map((newsletter, index) => (
              <motion.div
                key={newsletter.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{newsletter.category}</Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {newsletter.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {newsletter.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {newsletter.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {newsletter.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Subscribers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of BIM professionals who rely on our newsletter for insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Don't Miss Out on BIM Innovation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 5,000+ BIM professionals getting weekly insights and resources. 
              Subscribe now and transform your workflow.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-electric-blue hover:bg-gray-100"
              onClick={() => {
                document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}