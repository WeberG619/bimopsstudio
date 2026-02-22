import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Cpu,
  Zap,
  Brain,
  Wrench,
  Github,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";

const techStack = [
  {
    category: "Revit Integration",
    icon: Cpu,
    technologies: [
      { name: "Revit API (C#)", versions: "2024–2026" },
      { name: ".NET / WPF", versions: "DockablePane UIs" },
      { name: "pyRevit", versions: "Extensions" },
      { name: "Dynamo", versions: "Scripts" }
    ]
  },
  {
    category: "AI / ML",
    icon: Brain,
    technologies: [
      { name: "Claude API", versions: "LLM Orchestration" },
      { name: "Classification", versions: "BIM Elements" },
      { name: "NLP", versions: "Natural Language" },
      { name: "MCP", versions: "Model Context Protocol" }
    ]
  },
  {
    category: "Automation",
    icon: Wrench,
    technologies: [
      { name: "Named Pipes", versions: "Real-time Bridge" },
      { name: "MCP Servers", versions: "17+ Custom" },
      { name: "CDP", versions: "Browser Automation" },
      { name: "Agent Framework", versions: "50+ Agents" }
    ]
  },
  {
    category: "Web & Data",
    icon: Database,
    technologies: [
      { name: "TypeScript", versions: "Next.js" },
      { name: "Python", versions: "Full Stack" },
      { name: "SQLite", versions: "Local Data" },
      { name: "Tailwind CSS", versions: "UI" }
    ]
  }
];

const milestones = [
  {
    year: "2009",
    title: "Architecture Career Begins",
    description: "Started working in architecture — construction documents, BIM coordination, Revit standards management across commercial and residential projects."
  },
  {
    year: "2020",
    title: "The Pivot",
    description: "After 11 years of watching architects waste hours on repetitive tasks, started building automation tools. First Dynamo scripts and pyRevit extensions."
  },
  {
    year: "2024",
    title: "BIM Ops Studio Founded",
    description: "Launched BIM Ops Studio. Accepted into the Autodesk Developer Network as Developer #USUS0234. Released View Preview Tool for free."
  },
  {
    year: "2025",
    title: "Products Ship",
    description: "Professional Sheet Creator launches on the Autodesk App Store. Beta tested with 3 architecture firms — 95% time reduction in sheet creation. RevitMCPBridge development begins."
  },
  {
    year: "2026",
    title: "AI Meets Revit",
    description: "RevitMCPBridge reaches 705+ endpoints — the first open-source bridge giving AI full read-write access to BIM models. Built 50+ AI agents for AEC workflows."
  }
];

export default function About() {
  return (
    <Layout
      title="About Weber Gouin | BIM Ops Studio"
      description="Weber Gouin — 15 years in architecture, now building AI-powered Revit automation. Founder of BIM Ops Studio, Autodesk Developer Network member."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white-05" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
              Autodesk Developer Network Member
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              15 Years in <span className="text-lime-accent">Architecture</span>.
              <br />
              Now Building the <span className="text-electric-blue">Tools</span>.
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              I got tired of watching talented architects waste hours on tasks a machine
              should handle. So I started building the automation the industry needs.
            </p>

            <div className="flex items-center gap-4 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>Sandpoint, Idaho</span>
              <span className="text-blue-400">|</span>
              <span>weber@bimopsstudio.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-3xl font-bold text-electric-blue">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years in AEC</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-electric-blue">705+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Revit API Endpoints</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-electric-blue">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI Agents Built</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-electric-blue">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Time Saved</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                The <span className="text-electric-blue">Story</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I spent 15 years producing construction documents, coordinating BIM models, and
                  managing Revit standards for architecture firms. Commercial projects, residential,
                  mixed-use, hospitality — the full range.
                </p>
                <p>
                  The pattern was always the same: talented architects spending 60% of their time
                  on repetitive documentation tasks. Creating sheets one by one. Copying view templates
                  manually. Checking code compliance by hand. Hours of work that added zero design value.
                </p>
                <p>
                  So I made a pivot. Instead of using the tools, I started building them. First Dynamo
                  scripts. Then pyRevit extensions. Then full C# Revit add-ins. Then I connected AI to
                  the whole thing.
                </p>
                <p>
                  Today, BIM Ops Studio builds tools that let an architect say &ldquo;create the CD set&rdquo;
                  and have it actually happen. The Professional Sheet Creator does in 2 minutes what used to
                  take 4 hours. RevitMCPBridge gives AI full read-write access to Revit models through 705+
                  API endpoints — the first open-source bridge of its kind.
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  I build for the architects and engineers who don&apos;t want to learn Python. They just
                  want the tedious parts to disappear.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What I <span className="text-electric-blue">Build</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Revit API Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Custom add-ins in C# and Python. WPF/DockablePane UIs inside Revit.
                    pyRevit extensions and Dynamo scripts for production workflows. Named pipe
                    bridges for real-time external application integration.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">AI Integration for BIM</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Classification systems that analyze BIM element properties and suggest
                    categorizations. ML models with confidence scoring and human-in-the-loop review.
                    Natural language interfaces for Revit operations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Production Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tools that turn hours of manual work into minutes. Sheet creation, view placement,
                    annotation, code compliance checking, drawing set assembly. Tested with real
                    architecture firms on real projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Tech <span className="text-electric-blue">Stack</span>
            </h2>
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-electric-blue">Journey</span>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Open to consulting, contract work, and full-time roles in BIM automation
              and AI integration. Based in Sandpoint, Idaho — available remote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:weber@bimopsstudio.com">
                <Button
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold"
                >
                  <Mail className="mr-2" size={20} />
                  weber@bimopsstudio.com
                </Button>
              </a>
              <a href="https://github.com/WeberG619" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/weber-gouin-94a0b537b" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
