import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const revitMCPStats = [
  { value: "705+", label: "API Endpoints" },
  { value: "146", label: "C# Source Files" },
  { value: "113", label: "Knowledge Base Files" },
  { value: "5", label: "Autonomy Levels" },
];

const revitMCPTech = ["C#", ".NET", "Revit API", "MCP", "Named Pipes", "Python", "WPF"];

const cadreTech = ["Python", "Claude API", "MCP Servers", "Desktop Automation"];

const riaccaImages = [
  { src: "/images/RIACCA-1.PNG", alt: "RIACCA overview dashboard", caption: "Overview dashboard" },
  { src: "/images/RIACCA-2.PNG", alt: "Issue checking & code references", caption: "Issue checking & code references" },
  { src: "/images/RIACCA-3.PNG", alt: "Automated markup suggestions", caption: "Automated markup suggestions" },
  { src: "/images/RIACCA-4.PNG", alt: "Detail review and standards enforcement", caption: "Detail review & standards" },
  { src: "/images/RIACCA-5.PNG", alt: "QC checklist integration", caption: "QC checklist integration" },
  { src: "/images/RIACCA-6.PNG", alt: "Issue tracking and status", caption: "Issue tracking & status" },
  { src: "/images/RIACCA-7.PNG", alt: "Cross-reference validation", caption: "Cross-reference validation" },
  { src: "/images/RIACCA-8.PNG", alt: "Model-to-document comparison", caption: "Model-to-document comparison" },
  { src: "/images/RIACCA-9.PNG", alt: "Resolution recommendations", caption: "Resolution recommendations" },
];

export default function Projects() {
  return (
    <Layout
      title="Projects & Portfolio | BIM Ops Studio"
      description="Open-source tools, production Revit add-ins, and AI infrastructure for the AEC industry. RevitMCPBridge, Cadre AI, RIACCA, and ReviTask."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
              Projects &amp; Portfolio
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl">
              Open-source tools, production Revit add-ins, and AI infrastructure for the AEC industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RevitMCPBridge — Flagship */}
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 to-sky-950/40 p-8 shadow-xl"
          >
            {/* Header row */}
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 mb-3 tracking-wide uppercase">
                  Flagship &bull; Open Source
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                  RevitMCPBridge
                </h2>
                <p className="mt-1 text-slate-400">The first open-source AI-to-Revit bridge</p>
              </div>
              <a
                href="https://github.com/WeberG619/RevitMCPBridge2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed max-w-3xl mb-6">
              Full read-write access to Autodesk Revit through 705+ MCP endpoints. AI agents can
              create walls, place doors, generate construction document sheets, check code compliance,
              and manipulate any model element — all through natural language.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {revitMCPStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-slate-800/60 p-4 text-center border border-white/5"
                >
                  <p className="text-2xl font-bold text-sky-400">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div>
              <p className="text-sm font-medium text-slate-400 mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {revitMCPTech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cadre AI */}
      <section className="pb-12 bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
          >
            {/* Header row */}
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 mb-3 tracking-wide uppercase">
                  AI Infrastructure &bull; Open Source
                </span>
                <h2 className="font-heading text-2xl font-bold text-white">Cadre AI</h2>
                <p className="mt-1 text-slate-400">Agent framework with persistent memory</p>
              </div>
              <a
                href="https://github.com/WeberG619/cadre-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed max-w-3xl mb-5">
              17 specialized AI agents with a common sense engine and persistent correction memory.
              Agents learn from every mistake and never make the same one twice. Built for real-world
              AEC automation — desktop control, code review, security analysis, and more.
            </p>

            {/* Stat pill */}
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-xl bg-slate-800/60 px-5 py-3 border border-white/5">
                <p className="text-2xl font-bold text-purple-400">17</p>
                <p className="text-xs text-slate-400 mt-0.5">Specialized Agents</p>
              </div>
              <div className="rounded-xl bg-slate-800/60 px-5 py-3 border border-white/5">
                <p className="text-2xl font-bold text-purple-400">&infin;</p>
                <p className="text-xs text-slate-400 mt-0.5">Persistent Memory</p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {cadreTech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RIACCA */}
      <section className="py-12 bg-gradient-to-b from-slate-950 to-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 mb-3 tracking-wide uppercase">
                In Development
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-white mb-1">
                RIACCA
              </h2>
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">
                Revit Intelligent Assistant for Code &amp; Coordination
              </p>
              <p className="text-slate-300 max-w-3xl">
                Automated code compliance checking, QC checklists, cross-reference validation, and
                markup-to-model resolution. Catches coordination issues before they become RFIs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {riaccaImages.map((img, i) => (
                <motion.figure
                  key={img.src}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <figcaption className="p-4 text-sm text-slate-300">{img.caption}</figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ReviTask / Sheet Creator */}
      <section className="py-12 pb-20 bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 mb-3 tracking-wide uppercase">
                Production Tool
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-white mb-1">
                ReviTask
              </h2>
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">
                Automated Sheets, Views, &amp; Annotation
              </p>
              <p className="text-slate-300 max-w-3xl">
                Batch sheet creation with title-block control, smart view placement, and export
                automation. Turns hours of manual CD setup into minutes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              <motion.figure
                className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/SheetCreator.PNG"
                  alt="ReviTask sheet creation workflow"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-slate-300">Sheet creation workflow</figcaption>
              </motion.figure>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
