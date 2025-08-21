import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  Building,
  Globe,
  Shield,
  Code2,
  Database,
  Cpu,
  GitBranch,
  Server,
  Zap,
  FileText,
  Layers
} from "lucide-react";

const techStack = [
  {
    category: "Core Platform",
    icon: Cpu,
    technologies: [
      { name: "Autodesk Revit", versions: "2024, 2025, 2026" },
      { name: ".NET Framework", versions: "4.8 / .NET 8.0+" },
      { name: "C#", versions: "11.0" },
      { name: "WPF", versions: "MVVM Pattern" }
    ]
  },
  {
    category: "Revit API Integration",
    icon: Code2,
    technologies: [
      { name: "IExternalCommand", versions: "Command Execution" },
      { name: "IExternalApplication", versions: "App Integration" },
      { name: "DocumentChanged", versions: "Real-time Events" },
      { name: "FilteredElementCollector", versions: "Optimized Queries" }
    ]
  },
  {
    category: "Data & Storage",
    icon: Database,
    technologies: [
      { name: "SQLite", versions: "Local Configuration" },
      { name: "JSON", versions: "Data Exchange" },
      { name: "Excel Interop", versions: "Import/Export" },
      { name: "XML", versions: "Settings Storage" }
    ]
  },
  {
    category: "Performance",
    icon: Zap,
    technologies: [
      { name: "Multi-threading", versions: "Batch Processing" },
      { name: "Async Operations", versions: "UI Responsiveness" },
      { name: "Lazy Loading", versions: "Large Models" },
      { name: "Caching", versions: "Frequent Queries" }
    ]
  }
];

const milestones = [
  {
    year: "2020",
    title: "Project Inception",
    description: "Identified the need for construction documentation automation in Revit"
  },
  {
    year: "2021",
    title: "First Prototype",
    description: "Developed initial sheet generation engine with 10 sheets/minute capability"
  },
  {
    year: "2022",
    title: "Enterprise Launch",
    description: "Released Revit Pro Tools v1.0 with full API integration"
  },
  {
    year: "2023",
    title: "Scale Achievement",
    description: "Reached 50-100 sheets/minute performance milestone"
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "500+ implementations across architecture firms globally"
  }
];

const leadership = [
  {
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    bio: "15+ years in AEC technology. Former Autodesk API developer.",
    expertise: ["Revit API", "Enterprise Architecture", "Product Strategy"]
  },
  {
    name: "Dr. Sarah Chen",
    role: "CTO",
    bio: "PhD in Computer Science. Expert in CAD/BIM optimization algorithms.",
    expertise: [".NET Development", "Performance Optimization", "AI/ML"]
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    bio: "Former lead developer at major BIM software company.",
    expertise: ["Software Architecture", "Team Leadership", "Quality Assurance"]
  }
];

export default function AboutTechnical() {
  return (
    <Layout
      title="About BIM Ops Studio - Technical Excellence in Revit Automation"
      description="Learn about BIM Ops Studio's technical architecture, team expertise, and commitment to advancing construction documentation automation with Revit Pro Tools."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
              Engineering Excellence Since 2020
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Built by <span className="text-lime-accent">Engineers</span>
              <br />
              For <span className="text-electric-blue">Engineers</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              BIM Ops Studio combines deep Revit API expertise with cutting-edge software 
              engineering to deliver the most advanced documentation automation platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-electric-blue">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  To revolutionize construction documentation by eliminating repetitive tasks 
                  and empowering BIM professionals to focus on what matters most - design excellence.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Revit Pro Tools represents our commitment to this mission, offering enterprise-grade 
                  automation that saves 80% of documentation time while maintaining 99.9% accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-electric-blue">50-100</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Sheets/Minute</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-electric-blue">10K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Elements/Model</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-electric-blue">800MB</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Model Size</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-electric-blue">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-electric-blue/10 to-indigo-600/10 rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Why We Built Revit Pro Tools
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileText className="w-5 h-5 mr-3 mt-1 text-lime-accent flex-shrink-0" />
                      <span>Manual sheet creation wastes 60% of documentation time</span>
                    </li>
                    <li className="flex items-start">
                      <Layers className="w-5 h-5 mr-3 mt-1 text-lime-accent flex-shrink-0" />
                      <span>Inconsistent standards lead to costly rework</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-3 mt-1 text-lime-accent flex-shrink-0" />
                      <span>Human errors in repetitive tasks impact project delivery</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-3 mt-1 text-lime-accent flex-shrink-0" />
                      <span>Existing tools lack deep Revit API integration</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-electric-blue">Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on enterprise-grade technology stack for maximum performance and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-indigo-600 
                        rounded-lg flex items-center justify-center mr-3">
                        <stack.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading text-lg font-bold">{stack.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, i) => (
                        <li key={i} className="flex justify-between items-center text-sm">
                          <span className="font-medium">{tech.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {tech.versions}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-electric-blue">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-start mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <Badge className="bg-electric-blue text-white">
                    {milestone.year}
                  </Badge>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-lime-accent rounded-full mt-1 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-0.5 h-16 bg-gray-300 dark:bg-gray-600" />
                  )}
                </div>
                <div className="ml-6">
                  <h3 className="font-heading text-xl font-bold mb-1">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Leadership <span className="text-electric-blue">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry veterans with deep expertise in Revit API and enterprise software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-electric-blue to-indigo-600 
                      rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-electric-blue font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{leader.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Join the Documentation Revolution
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the power of Revit Pro Tools and see why 500+ firms trust 
              BIM Ops Studio for their automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/technical-specs">
                <Button 
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold"
                >
                  View Technical Specs
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  See Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}