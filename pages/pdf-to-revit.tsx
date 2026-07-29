import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Building2,
  Ruler,
  Layers,
  CheckCircle2,
  ScanLine,
  PencilRuler,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Send Us Your PDF",
    description:
      "Scanned plans, permit sets, as-builts, old blueprints — even drawings with no CAD file behind them. If it reads as a floor plan, we can work from it.",
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "We Rebuild It in Native Revit",
    description:
      "Real walls, doors, windows, levels, and rooms — modeled to scale against your drawing, not traced lines. Dimensions come from the drawing, never guessed.",
  },
  {
    step: "03",
    icon: Building2,
    title: "You Get a Working BIM Model",
    description:
      "A clean .rvt you can immediately design in, document from, and hand to any consultant — plus sheets on your titleblock if you want the set built out.",
  },
];

const useCases = [
  { icon: ScanLine, label: "As-built PDFs converted to Revit for renovation work" },
  { icon: Layers, label: "Full CD sets rebuilt as native BIM models" },
  { icon: Ruler, label: "Site plans and surveys placed to true scale" },
  { icon: Building2, label: "Old paper/scanned blueprints brought into BIM" },
];

const checklist = [
  "Native Revit elements — walls, doors, windows, roofs, levels, rooms",
  "Modeled to the drawing's dimensions, never eyeballed",
  "Your template, your standards, your titleblock",
  "Renovation-ready: existing conditions phased correctly",
  "Sheets, schedules, and annotation available as add-on scope",
  "Fast turnaround — our production system does the heavy lifting",
];

export default function PdfToRevit() {
  return (
    <Layout
      title="PDF to Revit Conversion Services | BIM Ops Studio"
      description="We convert PDF floor plans, as-builts, and scanned blueprints into accurate native Revit models — real walls, doors, windows, and levels, modeled to scale. Fast turnaround, US-based."
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blueprints.jpg"
            alt="Architectural PDF drawings ready for Revit conversion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B2A]/95 via-[#0A1B2A]/90 to-[#0A1B2A]/70" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-32 pb-20">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PDF to Revit <span className="text-amber-500">Conversion</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Your drawings are stuck in PDF. Your project needs BIM. We rebuild
              floor plans, as-builts, and full drawing sets as accurate, native
              Revit models — real elements, true to the drawing&apos;s dimensions,
              ready to design in the same day you get the file back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                <Link href="/contact/">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10">
                <Link href="/ai-renderings/">See Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three steps from a flat PDF to a model your whole team can build on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <motion.div key={s.step} {...staggerItem}>
                <Card className="bg-slate-900 border-slate-800 h-full">
                  <CardContent className="p-8">
                    <div className="text-amber-500 text-sm font-bold mb-4">{s.step}</div>
                    <s.icon className="h-10 w-10 text-amber-500 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                    <p className="text-slate-400">{s.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we convert */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What We Convert
              </h2>
              <div className="space-y-4">
                {useCases.map((u) => (
                  <div key={u.label} className="flex items-start gap-3">
                    <u.icon className="h-6 w-6 text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-slate-300">{u.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/construction-docs.jpg"
                alt="Construction documents converted to Revit"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You Get
            </h2>
            <p className="text-slate-400">
              A model built the way your own team would build it — because it&apos;s
              built by a BIM specialist, accelerated by a production system we
              developed in-house.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {checklist.map((item) => (
              <motion.div key={item} {...staggerItem} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-slate-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have a PDF That Needs to Be a Model?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Send it over. We&apos;ll look at it and come back with a fixed quote and
              a turnaround date — usually the same day.
            </p>
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Link href="/contact/">
                Send Us Your Drawings <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
