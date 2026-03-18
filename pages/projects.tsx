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
      <section className="pb-12 bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 mb-3 tracking-wide uppercase">
                In Development
              </span>
              <h2 className="font-heading text-2xl font-bold text-white">RIACCA</h2>
              <p className="mt-1 text-slate-400">Revit Intelligent Assistant for Code &amp; Coordination</p>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-3xl mb-5">
              Automated code compliance checking, QC checklists, cross-reference validation, and
              markup-to-model resolution. Catches coordination issues before they become RFIs.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Code Checking", "QC Checklists", "Cross-Reference Validation", "Markup Resolution", "Revit API"].map((tag) => (
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

      {/* ReviTask / Sheet Creator */}
      <section className="pb-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-xl"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 mb-3 tracking-wide uppercase">
                Production Tool
              </span>
              <h2 className="font-heading text-2xl font-bold text-white">ReviTask</h2>
              <p className="mt-1 text-slate-400">Automated Sheets, Views, &amp; Annotation</p>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-3xl mb-5">
              Batch sheet creation with title-block control, smart view placement, and export
              automation. Turns hours of manual CD setup into minutes.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Sheet Generation", "View Placement", "Title Blocks", "Batch Export", "Revit API"].map((tag) => (
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
    </Layout>
  );
}
