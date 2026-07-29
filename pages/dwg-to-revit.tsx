import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileCode2,
  Building2,
  Ruler,
  Layers,
  CheckCircle2,
  Workflow,
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
    icon: FileCode2,
    title: "Send Us Your DWG or DXF",
    description:
      "AutoCAD floor plans, consultant backgrounds, survey files, legacy project archives — any CAD drawing that needs to live in BIM.",
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "We Convert Geometry to Real Elements",
    description:
      "CAD lines become native Revit walls, doors, windows, grids, and levels — with door swings read from the drawing and wall centerlines kept continuous, not approximated.",
  },
  {
    step: "03",
    icon: Building2,
    title: "You Get a Clean, Standards-Compliant Model",
    description:
      "Organized, purged, and set up on your template — ready for design development, coordination, and documentation.",
  },
];

const useCases = [
  { icon: Layers, label: "AutoCAD floor plans converted to full Revit models" },
  { icon: Ruler, label: "Survey and civil DWGs placed at true coordinates" },
  { icon: Workflow, label: "Consultant CAD backgrounds rebuilt as BIM elements" },
  { icon: Building2, label: "Legacy CAD project archives migrated into Revit" },
];

const checklist = [
  "Native Revit elements — not exploded linework or imported junk",
  "Wall types, door families, and levels mapped to your standards",
  "Door swings and openings faithful to the CAD source",
  "True-scale, true-coordinate placement for site and survey files",
  "CAD layers translated cleanly — no imported layer pollution",
  "Fast turnaround — our in-house tooling automates the repetitive work",
];

export default function DwgToRevit() {
  return (
    <Layout
      title="DWG to Revit Conversion Services | CAD to BIM | BIM Ops Studio"
      description="We convert AutoCAD DWG and DXF drawings into clean native Revit models — real walls, doors, and levels mapped to your standards, placed at true scale. CAD to BIM done right, US-based."
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blueprint-detail.jpg"
            alt="CAD drawing detail ready for Revit conversion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B2A]/95 via-[#0A1B2A]/90 to-[#0A1B2A]/70" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-32 pb-20">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              DWG to Revit <span className="text-amber-500">Conversion</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              CAD served its time. We convert AutoCAD drawings into clean,
              native Revit models — real walls and doors on your standards, not
              exploded linework — so your project moves into BIM without losing
              a single dimension.
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
              Three steps from flat CAD linework to a model your team can build on.
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
                alt="CAD documents converted into a Revit model"
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
              Conversion done by a BIM specialist who codes — our in-house
              tooling handles the repetitive translation so every hour goes into
              accuracy, not busywork.
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
              Ready to Move Your CAD Into BIM?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Send a DWG. We&apos;ll come back with a fixed quote and a turnaround
              date — usually the same day.
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
