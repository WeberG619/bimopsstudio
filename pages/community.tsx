import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Users,
  MessageSquare,
  Calendar,
  Award,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Star,
  TrendingUp,
  Heart,
  Globe
} from "lucide-react";

const communityStats = [
  { value: "1,000+", label: "Active Members", icon: Users },
  { value: "500+", label: "Discussions", icon: MessageSquare },
  { value: "50+", label: "Expert Contributors", icon: Award },
  { value: "15+", label: "Countries", icon: Globe }
];

const communityChannels = [
  {
    name: "GitHub Discussions",
    description: "Technical discussions, feature requests, and open-source contributions.",
    icon: Github,
    link: "https://github.com/bimopsstudio/discussions",
    members: "450+ developers",
    activity: "Daily"
  },
  {
    name: "LinkedIn Group",
    description: "Professional networking, industry insights, and career opportunities.",
    icon: Linkedin,
    link: "https://linkedin.com/groups/bimopsstudio",
    members: "800+ professionals",
    activity: "Weekly"
  },
  {
    name: "Discord Server",
    description: "Real-time chat, support, and community events.",
    icon: MessageSquare,
    link: "https://discord.gg/bimopsstudio",
    members: "350+ online",
    activity: "24/7"
  },
  {
    name: "Twitter Community",
    description: "Latest updates, tips, and BIM automation trends.",
    icon: Twitter,
    link: "https://twitter.com/bimopsstudio",
    members: "2,500+ followers",
    activity: "Daily"
  }
];

const topContributors = [
  {
    name: "Alex Chen",
    role: "BIM Manager",
    contributions: 127,
    expertise: "Revit API, Dynamo",
    avatar: "AC"
  },
  {
    name: "Maria Rodriguez",
    role: "Senior Architect",
    contributions: 98,
    expertise: "Workflow Automation",
    avatar: "MR"
  },
  {
    name: "James Wilson",
    role: "Software Developer",
    contributions: 85,
    expertise: "Custom Add-ins",
    avatar: "JW"
  },
  {
    name: "Sophie Laurent",
    role: "BIM Coordinator",
    contributions: 72,
    expertise: "Standards, Templates",
    avatar: "SL"
  }
];

const recentDiscussions = [
  {
    title: "Best practices for automating sheet creation in large projects",
    author: "David Park",
    replies: 23,
    views: 450,
    category: "Automation",
    time: "2 hours ago"
  },
  {
    title: "Dynamo vs C# for Revit automation - pros and cons",
    author: "Emma Thompson",
    replies: 45,
    views: 1200,
    category: "Development",
    time: "5 hours ago"
  },
  {
    title: "How to implement BIM standards across multiple offices",
    author: "Michael Chen",
    replies: 18,
    views: 320,
    category: "Standards",
    time: "1 day ago"
  },
  {
    title: "Performance optimization tips for complex Revit models",
    author: "Lisa Anderson",
    replies: 31,
    views: 890,
    category: "Performance",
    time: "2 days ago"
  }
];

export default function Community() {
  return (
    <Layout
      title="Community - Join the BIM Automation Movement"
      description="Connect with thousands of BIM professionals, share knowledge, and learn from experts in our global community."
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
                <Heart className="w-4 h-4 mr-1" />
                Join 1,000+ Members
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The BIM Automation <span className="text-lime-accent">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Learn, share, and grow with fellow BIM professionals. 
                Get help, contribute to discussions, and shape the future of BIM automation together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90"
                  onClick={() => window.open('https://discord.gg/bimopsstudio', '_blank')}
                >
                  Join Discord Server
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                  onClick={() => window.open('https://github.com/bimopsstudio/discussions', '_blank')}
                >
                  Browse Discussions
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white dark:bg-gray-800 shadow-lg">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
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
              Join the Conversation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose your preferred platform and connect with the BIM automation community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {communityChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                        <channel.icon className="w-6 h-6 text-electric-blue" />
                      </div>
                      <Badge variant="secondary">{channel.activity}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {channel.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {channel.members}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(channel.link, '_blank')}
                      >
                        Join Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
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
              Top Contributors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recognize our most active community members who help make BIM automation accessible to everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-lime-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {contributor.avatar}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {contributor.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {contributor.role}
                    </p>
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {contributor.contributions} contributions
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {contributor.expertise}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
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
              Recent Discussions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what the community is talking about and join the conversation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {recentDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer dark:bg-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{discussion.category}</Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {discussion.time}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {discussion.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          by {discussion.author}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {discussion.replies} replies
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {discussion.views} views
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://github.com/bimopsstudio/discussions', '_blank')}
            >
              View All Discussions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with BIM professionals worldwide, get help with your projects, 
              and contribute to the future of BIM automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100"
                onClick={() => window.open('https://discord.gg/bimopsstudio', '_blank')}
              >
                Join Discord Server
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                onClick={() => window.open('https://github.com/bimopsstudio/discussions', '_blank')}
              >
                GitHub Discussions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}