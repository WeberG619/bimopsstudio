import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { 
  BookOpen,
  Video,
  Download,
  Users,
  ArrowRight,
  Calendar,
  Star,
  Clock,
  FileText,
  Lightbulb,
  Wrench,
  GraduationCap
} from "lucide-react";

const resourceCategories = [
  {
    name: "Documentation",
    icon: BookOpen,
    count: "25+ Guides",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Video Tutorials", 
    icon: Video,
    count: "50+ Videos",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "Downloads",
    icon: Download,
    count: "15+ Tools",
    color: "from-green-500 to-emerald-400"
  },
  {
    name: "Community",
    icon: Users,
    count: "1000+ Members",
    color: "from-orange-500 to-red-400"
  }
];

const featuredResources = [
  {
    title: "Complete BIM Automation Guide",
    description: "Comprehensive 50-page guide covering everything from basic automation to advanced workflows.",
    type: "Guide",
    duration: "2 hour read",
    rating: 4.9,
    downloads: "5,200+",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400",
    featured: true
  },
  {
    title: "Revit API Masterclass Series",
    description: "12-part video series teaching you how to build custom Revit add-ins from scratch.",
    type: "Video Series",
    duration: "8 hours",
    rating: 4.8,
    downloads: "2,800+",
    icon: Video,
    color: "from-purple-500 to-pink-400",
    featured: true
  },
  {
    title: "BIM Standards Template Pack",
    description: "Professional BIM standards templates for architecture, engineering, and construction projects.",
    type: "Template Pack",
    duration: "Instant download",
    rating: 4.7,
    downloads: "3,100+",
    icon: Download,
    color: "from-green-500 to-emerald-400",
    featured: true
  }
];

const allResources = [
  {
    title: "Dynamo for BIM Managers",
    description: "Learn visual programming for Revit automation without coding.",
    type: "Tutorial",
    category: "Automation",
    duration: "45 min",
    level: "Intermediate",
    icon: Wrench,
    url: "/resources/dynamo-for-bim-managers"
  },
  {
    title: "Sheet Creation Best Practices",
    description: "Professional techniques for efficient sheet management.",
    type: "Guide",
    category: "Documentation", 
    duration: "20 min read",
    level: "Beginner",
    icon: FileText,
    url: "/resources/sheet-creation-best-practices"
  },
  {
    title: "BIM Coordination Workflows",
    description: "Streamline multi-disciplinary coordination processes.",
    type: "Webinar",
    category: "Coordination",
    duration: "1 hour",
    level: "Advanced",
    icon: Users,
    url: "/resources/bim-coordination-workflows"
  },
  {
    title: "Performance Optimization Tips",
    description: "Speed up your Revit models and improve team productivity.",
    type: "Checklist",
    category: "Performance",
    duration: "15 min",
    level: "Intermediate",
    icon: Lightbulb,
    url: "#"
  },
  {
    title: "Custom Family Development",
    description: "Create intelligent Revit families for your projects.",
    type: "Workshop",
    category: "Modeling",
    duration: "2 hours",
    level: "Advanced",
    icon: GraduationCap,
    url: "#"
  },
  {
    title: "API Integration Examples",
    description: "Real-world examples of Revit API implementations.",
    type: "Code Samples",
    category: "Development",
    duration: "Various",
    level: "Expert",
    icon: Download,
    url: "#"
  }
];

const upcomingEvents = [
  {
    title: "BIM Automation Masterclass",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    type: "Live Webinar",
    attendees: "250+ registered"
  },
  {
    title: "Revit API Workshop",
    date: "March 22, 2024", 
    time: "10:00 AM EST",
    type: "Hands-on Workshop",
    attendees: "50 spots available"
  },
  {
    title: "Community Q&A Session",
    date: "March 29, 2024",
    time: "1:00 PM EST", 
    type: "Community Event",
    attendees: "Open to all"
  }
];

export default function Resources() {
  const router = useRouter();
  const [showAllResources, setShowAllResources] = useState(false);
  const [visibleResources, setVisibleResources] = useState(6);
  
  const handleLoadMore = () => {
    setVisibleResources(prev => prev + 6);
  };
  return (
    <Layout
      title="Resources - BIM Learning Hub"
      description="Free resources, tutorials, guides, and tools to help you master BIM automation and boost your productivity."
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
              <Badge variant="secondary" className="mb-6 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
                📚 Free Learning Resources
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master BIM <span className="text-lime-accent">Automation</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Access our comprehensive library of guides, tutorials, templates, and tools. 
                Everything you need to become a BIM automation expert.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90"
                  onClick={() => {
                    document.getElementById('all-resources')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Browse All Resources
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/community">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                    Join Community
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer dark:bg-gray-700"
                  onClick={() => {
                    if (category.name === "Community") {
                      router.push('/community');
                    } else {
                      document.getElementById('all-resources')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{category.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
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
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our most popular and comprehensive resources to accelerate your BIM automation journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden dark:bg-gray-800">
                  <CardHeader className={`bg-gradient-to-r ${resource.color} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <resource.icon className="w-8 h-8" />
                        <Badge className="bg-white/20 text-white">
                          {resource.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-white/90">
                        {resource.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {resource.rating}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{resource.downloads} downloads</span>
                    </div>

                    <Button 
                      className="w-full"
                      onClick={() => {
                        // In a real app, this would link to individual resource pages
                        // For now, we'll show an alert
                        alert(`Accessing ${resource.title}. In production, this would download or open the resource.`);
                      }}
                    >
                      Access Resource
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section id="all-resources" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse our complete library of tutorials, guides, and tools organized by category and skill level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResources.slice(0, visibleResources).map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={resource.url || '#'}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <resource.icon className="w-6 h-6 text-electric-blue flex-shrink-0" />
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {resource.level}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{resource.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{resource.category}</span>
                        <span>{resource.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {visibleResources < allResources.length && (
            <div className="text-center mt-12">
              <Button size="lg" onClick={handleLoadMore}>
                Load More Resources
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our live webinars, workshops, and community events to learn from experts and connect with peers.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4 hover:shadow-lg transition-all duration-300 dark:bg-gray-800"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-electric-blue mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{event.attendees}</div>
                    <Button
                      onClick={() => {
                        alert(`Registering for ${event.title}. In production, this would open a registration form.`);
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Join Our Learning Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get access to exclusive resources, connect with other BIM professionals, 
              and stay updated with the latest automation techniques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/community">
                <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                  Join Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/newsletter">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Newsletter Signup
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}