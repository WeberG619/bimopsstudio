import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  TrendingUp
} from "lucide-react";

const featuredPost = {
  title: "The Future of BIM Automation: AI-Driven Workflows in 2025",
  excerpt: "Explore how artificial intelligence is revolutionizing BIM workflows and what it means for the future of construction technology.",
  author: "Sarah Chen",
  date: "January 15, 2025",
  readTime: "8 min read",
  category: "Industry Insights",
  image: "/api/placeholder/800/400",
  slug: "future-of-bim-automation-ai-2025"
};

const posts = [
  {
    title: "10 Revit Shortcuts That Will Transform Your Productivity",
    excerpt: "Master these essential Revit shortcuts and watch your modeling speed increase by 50%.",
    author: "Michael Rodriguez",
    date: "January 12, 2025",
    readTime: "5 min read",
    category: "Tips & Tricks",
    image: "/api/placeholder/400/250",
    slug: "revit-shortcuts-productivity"
  },
  {
    title: "How to Implement BIM Standards Across Your Organization",
    excerpt: "A comprehensive guide to establishing and maintaining consistent BIM standards for teams of any size.",
    author: "Emma Thompson",
    date: "January 10, 2025",
    readTime: "12 min read",
    category: "Best Practices",
    image: "/api/placeholder/400/250",
    slug: "implement-bim-standards-organization"
  },
  {
    title: "From Manual to Automated: A Case Study",
    excerpt: "See how one architecture firm reduced their modeling time by 80% using BIM Ops Studio automation tools.",
    author: "David Park",
    date: "January 8, 2025",
    readTime: "7 min read",
    category: "Case Studies",
    image: "/api/placeholder/400/250",
    slug: "manual-to-automated-case-study"
  },
  {
    title: "Dynamo vs. Custom Add-ins: Which Is Right for You?",
    excerpt: "Compare the pros and cons of Dynamo scripts versus custom Revit add-ins for your automation needs.",
    author: "Sarah Chen",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Technical",
    image: "/api/placeholder/400/250",
    slug: "dynamo-vs-custom-addins"
  },
  {
    title: "The Complete Guide to Revit Families Automation",
    excerpt: "Learn how to automate family creation, modification, and management for consistent project delivery.",
    author: "Michael Rodriguez",
    date: "January 3, 2025",
    readTime: "10 min read",
    category: "Tutorials",
    image: "/api/placeholder/400/250",
    slug: "complete-guide-revit-families-automation"
  },
  {
    title: "BIM Coordination in the Cloud: Best Practices for 2025",
    excerpt: "Discover the latest strategies for cloud-based BIM coordination and collaboration.",
    author: "Emma Thompson",
    date: "December 30, 2024",
    readTime: "9 min read",
    category: "Industry Insights",
    image: "/api/placeholder/400/250",
    slug: "bim-coordination-cloud-best-practices"
  }
];

const categories = [
  "All Posts",
  "Industry Insights",
  "Tips & Tricks",
  "Best Practices",
  "Case Studies",
  "Technical",
  "Tutorials"
];

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };
  return (
    <Layout
      title="BIM Ops Studio Blog - BIM Automation Insights & Tips"
      description="Stay updated with the latest BIM automation trends, Revit tips, and industry insights from the BIM Ops Studio team."
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
                📚 Knowledge Hub
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                BIM <span className="text-lime-accent">Insights</span> & Updates
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights, practical tips, 
                and the latest trends in BIM automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  size="sm"
                  className={category === "All Posts" ? "bg-electric-blue" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              <TrendingUp className="w-4 h-4 mr-1" />
              Featured Article
            </Badge>
            
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow dark:bg-gray-700">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-electric-blue to-lime-accent"></div>
                <CardContent className="p-8 lg:p-12">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button 
                    size="lg"
                    onClick={() => {
                      alert(`Opening featured article: ${featuredPost.title}. In production, this would navigate to the full article page.`);
                    }}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Practical insights and expert tips to help you master BIM automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, visiblePosts).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300"></div>
                  <CardContent className="p-6">
                    <Badge className="mb-3" variant="secondary">{post.category}</Badge>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => {
                        // In production, this would navigate to /blog/[slug]
                        alert(`Opening article: ${post.title}. In production, this would navigate to the full article page.`);
                      }}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {visiblePosts < posts.length && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest BIM automation insights, tips, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}