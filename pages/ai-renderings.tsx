import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Boxes,
  Camera,
  Sparkles,
  Wand2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { designs, Design } from "@/lib/ai-renderings-data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const steps = [
  {
    icon: Boxes,
    title: "Massed & modeled in Revit",
    description:
      "Every concept starts as a real massing / rough model built in Revit — on our own BIM Ops Studio automation system, not stock Revit. The geometry is real before anything is rendered.",
  },
  {
    icon: Camera,
    title: "3D camera views set up",
    description:
      "We frame front-entry, pool, aerial, top and street-corner cameras on the Revit model — the exact views a client would want to see.",
  },
  {
    icon: Wand2,
    title: "Photoreal render from prompting",
    description:
      "Each view is rendered photorealistically with AI, driven by prompting that preserves the Revit geometry exactly and skins it with real materials, light and landscaping.",
  },
  {
    icon: Sparkles,
    title: "Explore & iterate the design",
    description:
      "From there we spin off different design ideas fast — roof forms, materials, massing — a whole distinct concept in the time a single manual render used to take.",
  },
];

// ---- Lightbox gallery (self-contained) ----
function Lightbox({
  design,
  index,
  setIndex,
  onClose,
}: {
  design: Design;
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
}) {
  const count = design.views.length;
  const go = useCallback(
    (dir: number) => setIndex((index + dir + count) % count),
    [index, count, setIndex]
  );
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [go, onClose]);

  const current = design.views[index];
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div className="flex items-center justify-between text-white mb-4 max-w-6xl w-full mx-auto">
        <div>
          <h3 className="text-xl font-bold">
            {design.name} <span className="text-amber-500">Modern</span>
          </h3>
          <p className="text-sm text-gray-400">
            {current.label} · {design.code} · {index + 1} / {count}
          </p>
        </div>
        <button onClick={onClose} aria-label="Close" className="hover:text-amber-500">
          <X size={30} />
        </button>
      </div>

      <div
        className="relative flex-1 flex items-center justify-center min-h-0 max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-0 z-10 p-2 text-white/80 hover:text-amber-500 bg-black/30 rounded-full"
        >
          <ChevronLeft size={40} />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={`${design.name} — ${current.label}`}
          className="max-h-full max-w-full object-contain rounded-lg"
        />
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-0 z-10 p-2 text-white/80 hover:text-amber-500 bg-black/30 rounded-full"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div
        className="flex gap-2 justify-center mt-4 flex-wrap max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {design.views.map((v, i) => (
          <button
            key={v.view}
            onClick={() => setIndex(i)}
            className={`h-14 w-20 rounded overflow-hidden border-2 transition ${
              i === index ? "border-amber-500" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.src} alt={v.label} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AiRenderings() {
  const [active, setActive] = useState<{ design: Design; view: number } | null>(null);
  const [filter, setFilter] = useState<number | "all">("all");

  const storyOptions = Array.from(new Set(designs.map((d) => d.stories))).sort();
  const shown = designs.filter((d) => filter === "all" || d.stories === filter);

  return (
    <Layout
      title="AI-Generated Renderings | Modern Exterior Design Concepts | BIM Ops Studio"
      description="A growing gallery of modern residential exterior design concepts for South Florida — each one modeled 100% in Revit and rendered 100% with AI on BIM Ops Studio's own automation system."
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={designs[0]?.cover}
            alt="AI-generated modern residence rendering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B2A]/95 via-[#0A1B2A]/90 to-[#0A1B2A]/70" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-32 pb-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
                AI-Generated Rendering
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Modern Exterior Design, <span className="text-amber-500">Rendered by AI.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              A growing collection of modern residential concept designs for South Florida —
              each one modeled <strong className="text-white">100% in Revit</strong> and rendered{" "}
              <strong className="text-white">100% with AI</strong> on our own BIM Ops Studio system.
              This is exterior design exploration at a speed regular Revit can&apos;t touch.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm font-medium">
                <Cpu className="w-4 h-4" /> 100% Revit
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" /> 100% AI
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-sm font-medium">
                <MapPin className="w-4 h-4" /> South Florida
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="#gallery">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                >
                  View the Gallery
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  Share Feedback
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How these are made */}
      <section className="py-24 bg-white dark:bg-[#0A1B2A]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How These Are Made
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              These aren&apos;t stock renders. Every design is built as a real Revit model first,
              then rendered with AI on a custom system we built — so the geometry stays true and
              new ideas come fast.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-7 h-full">
                  <div className="text-5xl font-bold text-gray-100 dark:text-white/5 absolute top-3 right-5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 w-14 h-14 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-amber-600 dark:text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            className="text-center text-sm text-gray-400 dark:text-gray-500 mt-10 max-w-3xl mx-auto italic"
          >
            These are concept &amp; massing studies meant to spark ideas — not construction
            documents. Details like entries, layout and program evolve as a design is developed.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-gray-50 dark:bg-[#0f2640]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Designs
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {designs.length} distinct modern concepts so far. Click any design to step through its
              renders. More on the way — including 3-story homes and larger buildings.
            </p>
          </motion.div>

          {/* Story filter (extensible) */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <FilterChip label="All" active={filter === "all"} onClick={() => setFilter("all")} />
            {storyOptions.map((s) => (
              <FilterChip
                key={s}
                label={`${s}-Story`}
                active={filter === s}
                onClick={() => setFilter(s)}
              />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shown.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => setActive({ design: d, view: 0 })}
                  className="group text-left w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] bg-gray-100 dark:bg-[#0A1B2A] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.cover}
                      alt={`${d.name} Modern — AI render`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                        {d.stories}-Story
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-3 right-3 text-white/90 text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.views.length} views →
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {d.name} <span className="text-amber-500 font-normal">Modern</span>
                      </h3>
                      <span className="text-xs text-gray-400 font-mono">{d.code}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {d.parti}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      <Tag>Exterior Design</Tag>
                      <Tag>South Florida</Tag>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-[#0A1B2A]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Which one would you build?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              This gallery is an open experiment in AI-driven exterior design. Tell us which
              concepts land — and which don&apos;t. The feedback shapes what we render next.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              >
                Send Your Feedback
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {active && (
        <Lightbox
          design={active.design}
          index={active.view}
          setIndex={(i) => setActive({ design: active.design, view: i })}
          onClose={() => setActive(null)}
        />
      )}
    </Layout>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition ${
        active
          ? "bg-amber-500 text-white"
          : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-amber-500/50"
      }`}
    >
      {label}
    </button>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium">
      {children}
    </span>
  );
}
