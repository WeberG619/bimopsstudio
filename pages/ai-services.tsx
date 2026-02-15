import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building,
  FileText,
  BarChart3,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function AIServices() {
  return (
    <Layout
      title="AI-Powered BIM Automation | BIM Ops Studio"
      description="System-native AI that controls Revit, AutoCAD, Excel, and your entire workflow. 89 hours saved monthly. Built by Weber Gouin, ADN Member."
    >
      {/* Hero — Clean, one message */}
      <section className="relative pt-40 pb-32 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4A9EFF]/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lime-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8">
              Your entire workflow.
              <span className="block text-lime-accent mt-2">One AI.</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              A system-native AI assistant that controls Revit, AutoCAD, Excel,
              email, and finances — directly on your machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold text-base px-8 py-6"
                >
                  Request a Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What changes — Three outcomes, not features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Building,
                  title: "BIM on autopilot",
                  description:
                    "Revit models built from floor plans. Sheets created in seconds. Construction documents assembled without touching Revit.",
                },
                {
                  icon: FileText,
                  title: "Office runs itself",
                  description:
                    "Excel dashboards, Word proposals, PowerPoint decks — generated and formatted automatically from a single conversation.",
                },
                {
                  icon: BarChart3,
                  title: "Intelligence built in",
                  description:
                    "Financial analysis, email monitoring, calendar management, and voice briefings — all running in the background, 24/7.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#4A9EFF]/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-[#4A9EFF]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works — Simple, visual */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              How it works
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 text-lg">
              Four layers working together. One conversation drives everything.
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "AI Engine",
                  name: "Claude AI",
                  detail: "Reasons, plans, and executes",
                  color: "bg-[#4A9EFF]",
                  width: "w-full",
                },
                {
                  label: "Protocol",
                  name: "17 MCP Servers",
                  detail: "Standardized tool interface",
                  color: "bg-indigo-500",
                  width: "w-[92%]",
                },
                {
                  label: "Bridge",
                  name: "WSL2 + Windows",
                  detail: "Cross-platform control",
                  color: "bg-purple-500",
                  width: "w-[84%]",
                },
                {
                  label: "Applications",
                  name: "Revit, AutoCAD, Excel, Chrome",
                  detail: "Direct machine access",
                  color: "bg-cyan-500",
                  width: "w-[76%]",
                },
              ].map((layer, index) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`${layer.width} mx-auto`}
                >
                  <div className={`${layer.color} rounded-xl p-5 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                          {layer.label}
                        </div>
                        <div className="font-heading font-bold text-lg">
                          {layer.name}
                        </div>
                      </div>
                      <div className="text-white/70 text-sm hidden sm:block">
                        {layer.detail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results — One number that matters */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <span className="font-heading text-7xl md:text-9xl font-bold text-[#4A9EFF]">
                89
              </span>
              <span className="font-heading text-3xl md:text-4xl font-bold text-gray-400 ml-3">
                hours
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-heading font-semibold mb-4">
              saved every month
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
              That&apos;s over two full work weeks returned to design,
              client relationships, and growing your practice.
            </p>
          </motion.div>

          {/* Supporting stats — subtle, not shouting */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: "$461/mo", label: "Total cost" },
              { value: "29x", label: "Return" },
              { value: "0", label: "Downtime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's included — Clean list, not a wall */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              What&apos;s under the hood
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Revit via named pipes — sub-ms response",
                "AutoCAD COM automation — 68 tools",
                "Excel read/write/charts — 175 tools",
                "PDF-to-Revit ML pipeline",
                "Gmail monitoring & compose",
                "Google Calendar integration",
                "50+ financial analysis tools",
                "Voice briefings — 4 TTS voices",
                "AI image generation & rendering",
                "Visual memory & screenshot search",
                "Persistent memory — 550+ entries",
                "Self-correcting hook system",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-start py-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#4A9EFF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA — Direct, clean */}
      <section className="py-32 bg-gradient-to-br from-deep-navy to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to see what AI
              <span className="block text-lime-accent">actually looks like?</span>
            </h2>

            <p className="text-blue-100/70 text-lg mb-10 max-w-lg mx-auto">
              Not a pitch deck. A live system running on a real machine,
              doing real work, every single day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold text-base px-8 py-6"
                >
                  Request a Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="mailto:weber@bimopsstudio.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-gray-900 text-base px-8 py-6"
                >
                  weber@bimopsstudio.com
                </Button>
              </a>
            </div>

            <p className="mt-12 text-blue-200/40 text-sm">
              Weber Gouin &nbsp;&middot;&nbsp; BIM Ops Studio &nbsp;&middot;&nbsp; Autodesk Developer Network
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
