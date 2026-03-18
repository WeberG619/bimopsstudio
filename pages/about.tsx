import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Code2,
  Database,
  Cpu,
  Zap,
  FileText,
  Layers,
  Github,
  Linkedin,
} from "lucide-react";

const techStack = [
  {
    category: "Core Platform",
    icon: Cpu,
    technologies: [
      { name: "Autodesk Revit", versions: "2025, 2026" },
      { name: ".NET Framework", versions: "4.8 / .NET 8.0+" },
      { name: "C#", versions: "11.0" },
      { name: "WPF", versions: "MVVM Pattern" },
    ],
  },
  {
    category: "Revit API Integration",
    icon: Code2,
    technologies: [
      { name: "IExternalCommand", versions: "Command Execution" },
      { name: "IExternalApplication", versions: "App Integration" },
      { name: "DocumentChanged", versions: "Real-time Events" },
      { name: "FilteredElementCollector", versions: "Optimized Queries" },
    ],
  },
  {
    category: "AI & Automation",
    icon: Database,
    technologies: [
      { name: "Named Pipes IPC", versions: "Real-time Bridge" },
      { name: "MCP Protocol", versions: "AI Integration" },
      { name: "JSON-RPC", versions: "Tool Calls" },
      { name: "Claude / GPT", versions: "LLM Orchestration" },
    ],
  },
  {
    category: "Performance",
    icon: Zap,
    technologies: [
      { name: "Multi-threading", versions: "Batch Processing" },
      { name: "Async Operations", versions: "UI Responsiveness" },
      { name: "Lazy Loading", versions: "Large Models" },
      { name: "Caching", versions: "Frequent Queries" },
    ],
  },
];

const milestones = [
  {
    year: "2010",
    title: "AEC Career Begins",
    description:
      "Started career in construction documentation and BIM coordination, learning the pain of manual CD production firsthand.",
  },
  {
    year: "2023",
    title: "Revit API Deep Dive",
    description:
      "Began developing Revit add-ins and automation tools to solve real workflow bottlenecks.",
  },
  {
    year: "2025",
    title: "RevitMCPBridge Launch",
    description:
      "Released RevitMCPBridge as open source — the first named-pipe bridge connecting AI directly to Revit.",
  },
  {
    year: "2026",
    title: "BIM Ops Studio",
    description:
      "Launched BIM Ops Studio to help AEC firms implement AI-powered BIM workflows. Accepted into Autodesk Developer Network.",
  },
];

export default function About() {
  return (
    <Layout
      title="About BIM Ops Studio - BIM Specialist Who Codes"
      description="BIM Ops Studio is founded by Weber Gouin, a BIM specialist and developer building AI-powered BIM automation tools. ADN Member #USUS0234."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-working.jpg"
            alt="Architectural workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/85" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20"
            >
              Autodesk Developer Network Member
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Built by a{" "}
              <span className="text-amber-500">BIM Specialist</span>
              <br />
              Who <span className="text-blue-400">Codes</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              BIM Ops Studio combines 15+ years of AEC experience with
              deep Revit API expertise to build AI-powered automation that
              actually understands your workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Meet the <span className="text-blue-500">Founder</span>
                </h2>

                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                    Weber Gouin
                  </h3>
                  <p className="text-blue-500 font-medium mb-1">
                    Founder & Principal
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ADN Member #USUS0234
                  </p>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;ve spent 15+ years in AEC — drafting CDs,
                  coordinating models, and watching teams burn hours on
                  repetitive Revit tasks that should take minutes.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  So I learned to code and built the tools myself.
                  RevitMCPBridge is the first system that lets AI control Revit
                  directly through named pipes — no HTTP servers, no
                  workarounds. It&apos;s open source, and it works.
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <a
                    href="https://github.com/WeberG619"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/weber-gouin-94a0b537b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Revit API",
                    "C# / .NET",
                    "AI Automation",
                    "Construction Docs",
                    "BIM Management",
                    "Named Pipes IPC",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Why I Built This
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    <li className="flex items-start">
                      <FileText className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                      <span>
                        Manual sheet creation wastes 60% of documentation time
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Layers className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                      <span>
                        Inconsistent standards lead to costly rework
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                      <span>
                        Human errors in repetitive tasks impact project delivery
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                      <span>
                        No existing tool connected AI to Revit natively
                      </span>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical <span className="text-blue-500">Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on a proven technology stack for performance and reliability
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
                      <div
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600
                        rounded-lg flex items-center justify-center mr-3"
                      >
                        <stack.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading text-lg font-bold">
                        {stack.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center text-sm"
                        >
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              The <span className="text-blue-500">Journey</span>
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
                  <Badge className="bg-blue-500 text-white">
                    {milestone.year}
                  </Badge>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-amber-500 rounded-full mt-1 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-0.5 h-16 bg-gray-300 dark:bg-gray-600" />
                  )}
                </div>
                <div className="ml-6">
                  <h3 className="font-heading text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1B2A] to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your BIM Workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free assessment call and see how AI-powered automation can
              cut your CD production time by 75%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 text-white hover:bg-amber-600 font-bold"
                >
                  Book a Call
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/ai-services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
