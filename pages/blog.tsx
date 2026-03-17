import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const featuredPost = {
  title: "How AI Controls Revit Through Named Pipes — And Why It Matters",
  excerpt:
    "A technical deep-dive into RevitMCPBridge: how we built a named-pipe IPC bridge that lets AI models create walls, sheets, and views in Revit without HTTP overhead.",
  author: "Weber Gouin",
  date: "February 26, 2026",
  readTime: "8 min read",
  category: "Technical",
  image: "/images/blueprint-detail.jpg",
  slug: "ai-controls-revit-named-pipes",
};

const posts = [
  {
    title: "From 3 Hours to 2 Minutes: Automating CD Production",
    excerpt:
      "A practical walkthrough of how AI-driven sheet generation replaces manual construction document workflows.",
    author: "Weber Gouin",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Case Studies",
    image: "/images/construction-docs.jpg",
    slug: "automating-cd-production",
  },
  {
    title: "Why MCP Is the Protocol That Connects AI to Your Design Tools",
    excerpt:
      "The Model Context Protocol is becoming the standard for AI-to-application communication. Here's what AEC firms need to know.",
    author: "Weber Gouin",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "/images/modern-office.jpg",
    slug: "mcp-protocol-design-tools",
  },
  {
    title: "Getting Started with RevitMCPBridge: A Quickstart Guide",
    excerpt:
      "Step-by-step setup guide for connecting Claude or any MCP-compatible AI to Revit 2025/2026.",
    author: "Weber Gouin",
    date: "February 28, 2026",
    readTime: "10 min read",
    category: "Tutorials",
    image: "/images/tech-workspace.jpg",
    slug: "revitmcpbridge-quickstart",
  },
];

export default function Blog() {
  return (
    <Layout
      title="Blog - BIM Automation Insights | BIM Ops Studio"
      description="Practical insights on BIM automation, Revit API development, and AI-powered construction documentation from Weber Gouin."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#0A1B2A] via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20"
              >
                <BookOpen className="w-4 h-4 mr-1.5 inline-block" />
                Blog
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                BIM <span className="text-amber-500">Insights</span> & Updates
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Practical notes on BIM automation, Revit API development, and
                building AI tools for architecture.
              </p>
            </motion.div>
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
              Featured
            </Badge>

            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow dark:bg-gray-700">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
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

                  <Badge variant="outline" className="text-sm">
                    Coming Soon
                  </Badge>
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
              Practical insights from the field — what works, what doesn&apos;t,
              and what&apos;s next.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800 overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3" variant="secondary">
                      {post.category}
                    </Badge>
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

                    <Badge variant="outline" className="text-xs">
                      Coming Soon
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get notified when new articles drop — BIM automation, Revit API
              tips, and AI workflow updates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
