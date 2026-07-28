import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Bot,
  Building2,
  ShieldCheck,
  Wand2,
  KeyRound,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    icon: Building2,
    title: "Drives your real Revit",
    body: "Runs on your PC against your own Revit and your own projects — nothing is uploaded to a cloud model.",
  },
  {
    icon: Wand2,
    title: "Ask, and it builds",
    body: "Model walls, doors, schedules, dimensions, sheets, code checks and photoreal renders — in plain English.",
  },
  {
    icon: ShieldCheck,
    title: "You set the leash",
    body: "Full-studio automation like a power user, or a Revit-scoped sandbox for a controlled, safe deployment.",
  },
  {
    icon: KeyRound,
    title: "Your data stays yours",
    body: "Work runs against your files on your machine. Nothing proprietary is shipped off to a third-party model.",
  },
  {
    icon: Cpu,
    title: "Local-model fallback",
    body: "If the cloud is unavailable, it falls back to a local model so the assistant never goes dark.",
  },
  {
    icon: Bot,
    title: "Learns how you work",
    body: "With your permission it studies your standards and conventions — and never touches financial data.",
  },
];

export default function StudioCopilot() {
  return (
    <Layout
      title="Studio Copilot — the AI that drives Revit"
      description="The in-house AI that drives Revit on every BIM Ops Studio project — modeling, documenting, code-checking and rendering in plain English. It's why our production is faster than a conventional drafting team."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A1B2A] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-amber-500 text-black hover:bg-amber-500">How we work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
              The AI that actually drives Revit.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Studio Copilot is the in-house system behind every BIM Ops Studio project — it drives
              real Revit to model, document, code-check and render from plain-English requests.
              It&apos;s the reason our production moves faster than a conventional drafting team.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link href="/contact/">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 h-12 text-base"
                >
                  Put it to work on your project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-gray-400">
                Used on client work today · Not sold separately
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-11 h-11 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{f.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What it means for your project */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-4 max-w-lg">
          <Card className="border-2 border-amber-500">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">What this means for your project</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                You don&apos;t license the tool — you get the output it produces.
              </p>
              <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
                {[
                  "CD sets produced in a fraction of the usual hours",
                  "Native Revit deliverables, not a proprietary format",
                  "Code checks run against the model, not by eye",
                  "Photoreal renders straight from the same model",
                  "Your standards and title block, matched",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact/" className="block">
                <Button
                  size="lg"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold h-12"
                >
                  Start a conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-xs text-gray-400 mt-4">
                Tell us the scope — we&apos;ll tell you what it takes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
