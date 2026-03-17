import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Layers,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const staggerItem = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
};

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-heading text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#4A9EFF] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-blue-100/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function AIServices() {
  return (
    <Layout
      title="AI-Powered BIM Automation | BIM Ops Studio"
      description="Production AI that controls Revit through named pipes. 75% faster CD production, 89 hours saved monthly, 29x ROI. See the system that automates construction document production."
    >
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blueprint-detail.jpg"
            alt="Blueprint detail"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/88" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4A9EFF]/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-[#4A9EFF]/20 text-[#4A9EFF] border-[#4A9EFF]/30 text-sm px-4 py-1">
              Production System &mdash; Not a Prototype
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              AI-Powered BIM.
              <span className="block text-[#4A9EFF] mt-2">
                Not Science Fiction &mdash; Production Reality.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our system connects Claude AI directly to Revit through named
              pipes, reading markups, creating walls, placing views, and
              assembling construction document sets &mdash; all in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#4A9EFF] text-white hover:bg-[#4A9EFF]/90 font-bold text-base px-8 py-6"
                >
                  Request a Live Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="mailto:info@bimopsstudio.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-gray-900 text-base px-8 py-6"
                >
                  info@bimopsstudio.com
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Pipeline ── */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              The Pipeline
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
              Four layers working together. One AI orchestrating everything from
              markup to construction document.
            </p>

            <div className="space-y-4">
              {[
                {
                  layer: "Layer 1",
                  name: "Revit",
                  detail:
                    "Your BIM model, your data, your standards. The single source of truth.",
                  color: "bg-cyan-600",
                  icon: Layers,
                  width: "w-full",
                },
                {
                  layer: "Layer 2",
                  name: "RevitMCPBridge",
                  detail:
                    "Named pipe connection — not HTTP, zero latency. Open source on GitHub.",
                  color: "bg-purple-600",
                  icon: Zap,
                  width: "w-[94%]",
                },
                {
                  layer: "Layer 3",
                  name: "AI Engine (Claude)",
                  detail:
                    "Understands architectural intent. Reads markups. Makes decisions.",
                  color: "bg-[#4A9EFF]",
                  icon: Shield,
                  width: "w-[88%]",
                },
                {
                  layer: "Layer 4",
                  name: "MCP Servers (17+)",
                  detail:
                    "Excel, Bluebeam, browser, file system, database — all connected.",
                  color: "bg-indigo-600",
                  icon: ExternalLink,
                  width: "w-[82%]",
                },
              ].map((layer, index) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`${layer.width} mx-auto`}
                >
                  <div
                    className={`${layer.color} rounded-xl p-6 text-white shadow-lg`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                        <layer.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-white/50 text-xs uppercase tracking-wider font-medium">
                            {layer.layer}
                          </span>
                          <span className="font-heading font-bold text-lg">
                            {layer.name}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm">{layer.detail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connector lines are implied by the stacked, narrowing layout */}
            <motion.p
              className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8"
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Named pipes deliver sub-millisecond IPC &mdash; no REST overhead,
              no network dependency.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── What AI Actually Does ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              What AI Actually Does
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
              Not chatbot suggestions. Real execution on real Revit models.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Reads PDF Markups",
                input: "Redlined PDFs with dimensions, notes, and callouts",
                output:
                  "Identifies changes and applies them directly to the Revit model",
              },
              {
                icon: Layers,
                title: "Assembles CD Sets",
                input: "Project requirements and view templates",
                output:
                  "Creates sheets, places views, sets scales, adds annotations — 50+ sheets in minutes",
              },
              {
                icon: Shield,
                title: "Coordinates Documents",
                input: "Plans, sections, elevations across disciplines",
                output:
                  "Cross-references and catches conflicts before they reach the field",
              },
              {
                icon: Clock,
                title: "Produces Construction Details",
                input: "Detail requirements from plans and specifications",
                output:
                  "Selects from 498+ cataloged details and places them at the correct locations",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardContent className="p-6 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4A9EFF]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#4A9EFF]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mt-0.5 w-10 flex-shrink-0">
                              In
                            </span>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              {item.input}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-xs uppercase tracking-wider text-[#4A9EFF] font-semibold mt-0.5 w-10 flex-shrink-0">
                              Out
                            </span>
                            <p className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                              {item.output}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-32 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16">
              Measured Results
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "75%",
                  label: "Faster CD Production",
                  detail: "vs. manual workflow",
                },
                {
                  value: "89",
                  label: "Hours Saved Monthly",
                  detail: "2+ full work weeks",
                },
                {
                  value: "$461",
                  label: "Total Monthly Cost",
                  detail: "all AI + tooling",
                },
                {
                  value: "29x",
                  label: "Return on Investment",
                  detail: "time value recovered",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A9EFF] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-heading text-sm md:text-base font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-blue-200/50 text-xs md:text-sm">
                    {stat.detail}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-16 text-blue-100/60 text-base max-w-xl mx-auto"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Numbers from production use on residential and commercial
              projects. Not projections &mdash; actual tracked output.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Implementation Process ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Implementation Process
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
              From assessment to production in five weeks. No disruption to
              active projects.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                week: "Week 1-2",
                title: "Assessment & Setup",
                description:
                  "We analyze your current workflow, template standards, sheet naming conventions, and detail library. The system gets configured to match your firm's standards — not the other way around.",
                icon: FileText,
              },
              {
                week: "Week 3-4",
                title: "Integration & Testing",
                description:
                  "RevitMCPBridge installed on your machines. AI pipeline connected and tested on a real project from your backlog. We validate output against your QA checklist.",
                icon: Zap,
              },
              {
                week: "Week 5+",
                title: "Production & Training",
                description:
                  "Your team starts using the system on live projects. Hands-on training for BIM managers and project architects. Ongoing support as you scale.",
                icon: CheckCircle,
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#4A9EFF]/10 flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-5 h-5 text-[#4A9EFF]" />
                  </div>
                  {index < 2 && (
                    <div className="w-px h-full bg-[#4A9EFF]/20 mt-2" />
                  )}
                </div>

                <div className="pb-2">
                  <Badge className="mb-2 bg-[#4A9EFF]/10 text-[#4A9EFF] border-[#4A9EFF]/20 text-xs">
                    {phase.week}
                  </Badge>
                  <h3 className="font-heading text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {phase.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gradient-to-br from-deep-navy to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              Common Questions
            </h2>

            <div className="bg-white/5 rounded-2xl border border-white/10 px-8">
              <FAQItem
                question="Does this replace our architects?"
                answer="No. It replaces the repetitive 70% of construction document work — sheet creation, view placement, annotation, detail coordination. Your architects spend more time on design, client relationships, and the decisions that actually require professional judgment."
              />
              <FAQItem
                question="What Revit versions are supported?"
                answer="Revit 2024, 2025, and 2026. RevitMCPBridge uses version-specific named pipe connections. Each installation targets a single Revit version, and multiple versions can run on the same machine."
              />
              <FAQItem
                question="Is our project data secure?"
                answer="Everything runs locally on your machine. No cloud processing, no data uploads, no external API calls to third-party BIM services. Your models and documents never leave your network. The AI engine runs through a local connection to Claude via your own API key."
              />
              <FAQItem
                question="How is this different from Copilot or ChatGPT?"
                answer="Those are chatbots that generate text suggestions. This is a production system wired directly into Revit via named pipes with sub-millisecond response time. It doesn't suggest — it executes. It reads your model, creates elements, places views, and assembles documents."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              See it in action.
              <span className="block text-[#4A9EFF] mt-2">
                Request a live demo.
              </span>
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-lg mx-auto">
              Not a slide deck. A live system running on a real machine,
              building real construction documents, in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#4A9EFF] text-white hover:bg-[#4A9EFF]/90 font-bold text-base px-8 py-6"
                >
                  Request Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="mailto:info@bimopsstudio.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 text-base px-8 py-6"
                >
                  info@bimopsstudio.com
                </Button>
              </a>
            </div>

            <p className="mt-12 text-gray-400 dark:text-gray-500 text-sm">
              Weber Gouin &nbsp;&middot;&nbsp; BIM Ops Studio
              &nbsp;&middot;&nbsp; Autodesk Developer Network Member
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
