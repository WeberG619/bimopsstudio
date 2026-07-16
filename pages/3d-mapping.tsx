import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  Map,
  Building2,
  Mountain,
  Layers,
  CheckCircle2,
  Play,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "@/components/ui/ImageModal";

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

const examples = [
  {
    src: "/images/3d-mapping/fisher-island.png",
    title: "Fisher Island, Miami",
    desc: "Island site massing with terrain, golf course, and building footprints generated from GIS data.",
  },
  {
    src: "/images/3d-mapping/brickell.png",
    title: "Brickell, Miami",
    desc: "Downtown skyline massing — towers extruded to real heights over an aerial-photo base.",
  },
  {
    src: "/images/3d-mapping/brickell-siteplane.png",
    title: "Brickell — Bayfront Site",
    desc: "The same downtown massing set on its GIS site plane — dense urban fabric meeting Biscayne Bay.",
  },
  {
    src: "/images/3d-mapping/niagara.png",
    title: "Niagara Falls",
    desc: "City-scale massing across the river — buildings, roads, and water modeled in context.",
  },
];

const steps = [
  {
    step: "01",
    icon: Map,
    title: "You Give Us a Location",
    description:
      "An address, a pin, or a boundary anywhere in the world. That's all we need to start.",
  },
  {
    step: "02",
    icon: Globe,
    title: "We Pull Real-World Data",
    description:
      "Aerial imagery, GIS building footprints, real building heights, terrain elevation, roads, and water — sourced and aligned to true scale.",
  },
  {
    step: "03",
    icon: Building2,
    title: "You Get a Native Revit Massing",
    description:
      "A clean, accurate 3D massing model delivered in Revit — ready for context, design studies, and presentation.",
  },
];

const capabilities = [
  { icon: Building2, label: "Building footprints extruded to real heights" },
  { icon: Mountain, label: "Graded terrain from elevation (DEM) data" },
  { icon: Layers, label: "Roads, parcels, and water modeled in context" },
  { icon: Globe, label: "Works for virtually any location on Earth" },
];

export default function ThreeDMapping() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Layout
      title="3D Mapping | Aerial-to-Revit 3D Massing | BIM Ops Studio"
      description="BIM Ops Studio converts real-world aerial and GIS data into accurate, native Revit 3D site massing models — buildings, terrain, roads, and water — for virtually any location on Earth."
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/3d-mapping/brickell.png"
            alt="Revit 3D massing of Brickell, Miami"
            fill
            className="object-cover"
            priority
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
                3D Mapping
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              From Anywhere on Earth to a{" "}
              <span className="text-amber-500">Revit 3D Massing.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Give us an address and we convert real-world aerial and GIS data into an
              accurate, native Revit 3D site massing — buildings, terrain, roads, and
              water — for virtually any location in the world.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#examples">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  See Examples
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-[#0A1B2A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Location in, accurate Revit massing out — in three steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center h-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  <div className="text-6xl font-bold text-gray-100 dark:text-white/5 absolute top-3 right-5">
                    {item.step}
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-amber-600 dark:text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Gallery */}
      <section id="examples" className="py-24 bg-gray-50 dark:bg-[#0f2640]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real Places, Modeled in Revit
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A few sites built from real-world data — each one started as nothing more
              than a location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((item, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="overflow-hidden bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 h-full hover:shadow-lg transition-shadow">
                  <button
                    type="button"
                    onClick={() => setModalImage({ src: item.src, alt: item.title })}
                    className="group relative block w-full aspect-[4/3] bg-gray-100 dark:bg-[#0A1B2A] cursor-zoom-in"
                    aria-label={`View ${item.title} larger`}
                  >
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A1B2A]/0 group-hover:bg-[#0A1B2A]/30 transition-colors">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500/90 rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </span>
                    </div>
                  </button>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Capabilities */}
      <section className="py-24 bg-white dark:bg-[#0A1B2A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What&apos;s in the Model
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 mr-4 flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{cap.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder — drop in the walkthrough when ready */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f2640]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See It in Action
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              A short walkthrough of the 3D mapping workflow is on the way.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
              <Image
                src="/images/3d-mapping/fisher-island.png"
                alt="3D mapping walkthrough preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1B2A]/70 flex flex-col items-center justify-center">
                <div className="bg-amber-500/90 rounded-full p-5 mb-4">
                  <Play className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <p className="text-white font-semibold">Demo video coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/3d-mapping/niagara.png"
            alt="Revit 3D massing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/90" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Site You Want Modeled?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Send us a location and we&apos;ll show you how fast it becomes an accurate
              Revit 3D massing.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ImageModal
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src ?? ""}
        imageAlt={modalImage?.alt ?? ""}
      />
    </Layout>
  );
}
