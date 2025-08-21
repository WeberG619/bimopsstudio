import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  FolderTree,
  Download,
  ArrowRight,
  Star,
  Play,
  Shield,
  CheckCircle,
  Settings,
  Users
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ISO 19650 Compliance",
    description: "Built-in templates that meet international BIM standards and information management requirements."
  },
  {
    icon: Settings,
    title: "Custom Template Creation",
    description: "Create your own folder templates or modify existing ones to match your company standards."
  },
  {
    icon: FolderTree,
    title: "Bulk Folder Generation",
    description: "Generate complete project folder structures for multiple projects simultaneously."
  },
  {
    icon: Users,
    title: "Permission Management",
    description: "Set up proper access controls and permissions as folders are created."
  }
];

const benefits = [
  { title: "75% Time Savings", description: "Reduce setup time for new projects" },
  { title: "200+ Active Users", description: "Trusted by project managers" },
  { title: "4.7★ Rating", description: "Highly rated for reliability" },
  { title: "100% Compliant", description: "Meets international standards" }
];

const standards = [
  {
    name: "ISO 19650",
    description: "International standard for managing information over the whole life cycle of a built asset using BIM"
  },
  {
    name: "AIA Standards",
    description: "American Institute of Architects project delivery and digital practice documents"
  },
  {
    name: "RIBA Plan of Work",
    description: "Royal Institute of British Architects framework for project stages and information exchanges"
  }
];

export default function FolderStructureCreator() {
  return (
    <Layout
      title="Folder Structure Creator - Project Organization | BIM Ops Studio"
      description="Build consistent, professional folder structures for all your BIM projects. Ensure team collaboration follows industry best practices."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-purple-500 via-pink-400 to-purple-600 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                <Shield className="w-4 h-4 mr-1" />
                Standards Compliant
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Folder Structure Creator
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build consistent, professional folder structures for all your BIM projects. 
                Ensure team collaboration and file management follows industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/pricing">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold">
                    <Download className="mr-2 w-5 h-5" />
                    Try Free for 14 Days
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
                  {benefit.title}
                </div>
                <div className="text-gray-600 text-sm">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Project Organization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start every project with a proper foundation using industry-standard folder structures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Industry Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our templates are designed to meet the most demanding industry requirements and certification standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{standard.name}</h3>
                    </div>
                    <p className="text-gray-600">{standard.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Proper Organization Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-organized project structure is the foundation of successful BIM delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Improved Collaboration</h3>
                  <p className="text-gray-600">Team members can find files quickly and work more efficiently with consistent organization.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reduced Errors</h3>
                  <p className="text-gray-600">Standardized naming and organization reduce the risk of using outdated or incorrect files.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Onboarding</h3>
                  <p className="text-gray-600">New team members can get up to speed quickly with familiar, standardized project structures.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Start Every Project Right
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 200+ project managers who ensure consistent, professional project organization with Folder Structure Creator.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}