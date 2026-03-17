import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Zap,
  FileText,
  Users,
  BarChart3,
  Settings,
  GraduationCap,
  Shield,
  GitBranch,
  Mail,
  ChevronRight,
  Building2,
  Layers,
  PenTool,
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

export default function Home() {
  return (
    <Layout
      title="BIM Ops Studio | Architecture & BIM Services"
      description="BIM Ops Studio helps AEC firms implement intelligent workflows that slash construction document production time by 75%. Built by an architect who codes."
    >
      {/* Hero Section — full background image with dark overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-building.jpg"
            alt="Modern architecture"
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
                Autodesk Developer Network Member
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Your Firm&apos;s Construction Documents.{" "}
              <span className="text-amber-500">75% Faster.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              BIM Ops Studio helps architecture and engineering firms implement
              intelligent workflows that slash CD production time — without
              replacing your team.
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
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution — image on left, content on right */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-[#0f2640]">
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-64 lg:h-auto">
            <Image
              src="/images/blueprints.jpg"
              alt="Architectural blueprints"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1B2A]/40" />
          </div>

          {/* Content side */}
          <div className="py-16 lg:py-24 px-8 lg:px-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                The Industry Problem
              </h2>
              <div className="h-1 w-16 bg-amber-500 mb-8" />

              <div className="space-y-8">
                <div>
                  <ul className="space-y-4">
                    {[
                      "Firms spend 60-70% of project time producing construction documents",
                      "Redline incorporation takes days of manual, error-prone work",
                      "Coordination between disciplines is tedious and manual",
                      "Talented architects spend their time on repetitive tasks, not design",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-700" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Approach</h3>
                  <ul className="space-y-4">
                    {[
                      "Intelligent systems read your markups and incorporate redlines automatically",
                      "Models are built and updated through an integrated pipeline",
                      "Documents are coordinated across disciplines in minutes",
                      "Your team focuses on design while automation handles production",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-16 bg-white dark:bg-[#0A1B2A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "89", unit: "hours", label: "Saved monthly per project team", icon: Clock },
              { value: "29x", unit: "", label: "Return on implementation investment", icon: BarChart3 },
              { value: "Zero", unit: "", label: "Downtime during implementation", icon: Shield },
            ].map((stat, i) => (
              <motion.div key={i} {...staggerItem} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-center">
                  <stat.icon className="w-6 h-6 text-amber-600 dark:text-amber-500 mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                    {stat.unit && <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">{stat.unit}</span>}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section — with background image */}
      <section id="how-it-works" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/construction-docs.jpg"
            alt="Construction site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/90" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Three steps to transforming your CD production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: BarChart3,
                title: "We Assess Your Workflow",
                description:
                  "We analyze your current CD production process, identify bottlenecks, and map automation opportunities specific to your firm.",
              },
              {
                step: "02",
                icon: Settings,
                title: "We Implement the System",
                description:
                  "RevitMCPBridge, MCP servers, and the automation pipeline are integrated directly into your Revit environment. No disruption to ongoing projects.",
              },
              {
                step: "03",
                icon: Zap,
                title: "Your Team Produces CDs Faster",
                description:
                  "Automation handles the repetitive tasks — redline incorporation, sheet setup, coordination. Your architects focus on what they do best: design.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center h-full hover:bg-white/10 transition-colors">
                  <div className="text-6xl font-bold text-white/5 absolute top-3 right-5">
                    {item.step}
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Pipeline Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f2640]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Technology
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A production-tested pipeline connecting Revit to intelligent automation through open-source infrastructure
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
              {[
                { label: "Revit", sub: "Your BIM environment", icon: Building2 },
                { label: "RevitMCPBridge", sub: "Named pipe connection", icon: GitBranch },
                { label: "Automation Engine", sub: "Claude + 17 MCP servers", icon: Settings },
                { label: "Markup Reading", sub: "PDF redline interpretation", icon: PenTool },
                { label: "CD Assembly", sub: "Automated sheet production", icon: Layers },
              ].map((node, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-5 py-4 text-center min-w-[160px] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                    <node.icon className="w-5 h-5 text-amber-600 dark:text-amber-500 mx-auto mb-2" />
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">
                      {node.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{node.sub}</p>
                  </div>
                  {i < 4 && (
                    <ChevronRight className="w-5 h-5 text-amber-500/40 mx-2 hidden md:block flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section — with background image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/modern-office.jpg"
            alt="Modern office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/92" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Choose the engagement model that fits your firm
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Workflow Implementation",
                description:
                  "We set up, configure, and integrate the BIM production pipeline into your firm's Revit environment. Includes team training and workflow documentation.",
                price: "Starting at $5,000",
                features: [
                  "Full system setup and configuration",
                  "Custom workflow mapping",
                  "Team onboarding and training",
                  "30-day post-launch support",
                ],
              },
              {
                icon: FileText,
                title: "CD Production Services",
                description:
                  "We produce your construction documents using our pipeline. Faster delivery, lower cost, same quality your clients expect.",
                price: "Project-based pricing",
                features: [
                  "Accelerated CD production",
                  "Quality review at every milestone",
                  "Coordination across disciplines",
                  "Revisions included in scope",
                ],
              },
              {
                icon: GraduationCap,
                title: "Training & Support",
                description:
                  "Your team learns the system inside and out. We provide ongoing support, optimization, and updates as the technology evolves.",
                price: "$2,500 per session",
                features: [
                  "Hands-on training sessions",
                  "Custom documentation for your team",
                  "Ongoing technical support",
                  "Quarterly optimization reviews",
                ],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border-gray-200 dark:border-white/10 h-full flex flex-col hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                      <p className="text-amber-600 dark:text-amber-500 font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f2640]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built by an Architect Who Codes
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              For architects who don&apos;t have to
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp}>
              <div className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-amber-600 dark:text-amber-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Weber Gouin
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Principal / BIM Specialist
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  15 years of architecture experience across residential,
                  commercial, and institutional projects. Transitioned from
                  producing construction documents to building the intelligent systems
                  that produce them.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="/ADN/autodesk-authorized-developer-logo/autodesk-authorized-developer-logo-rgb-white.png"
                    alt="Autodesk Developer Network Member"
                    className="h-10 dark:block hidden"
                  />
                  <img
                    src="/ADN/autodesk-authorized-developer-logo/autodesk-authorized-developer-logo-rgb-black.png"
                    alt="Autodesk Developer Network Member"
                    className="h-10 dark:hidden block"
                  />
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Autodesk Developer Network
                    </p>
                    <p className="text-sm text-amber-600 dark:text-amber-500">
                      Member #USUS0234
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: GitBranch,
                    title: "RevitMCPBridge",
                    description:
                      "Open-source bridge connecting Revit to intelligent automation via named pipes. Production-tested, community-driven.",
                  },
                  {
                    icon: Layers,
                    title: "17 MCP Servers",
                    description:
                      "A coordinated fleet of tools handling everything from markup reading to sheet assembly.",
                  },
                  {
                    icon: Shield,
                    title: "Production Tested",
                    description:
                      "Not a prototype. This system has been used to produce real construction documents on real projects.",
                  },
                ].map((cred, i) => (
                  <div
                    key={i}
                    className="bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 flex items-start hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 mr-4 flex-shrink-0">
                      <cred.icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                        {cred.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section — with skyline background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/skyline.jpg"
            alt="City skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/85" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your CD Production?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let us show you how intelligent automation can cut your construction document
              production time by 75% — on your next project.
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
            <p className="mt-6 text-gray-400 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Or email us at{" "}
              <a
                href="mailto:info@bimopsstudio.com"
                className="underline hover:text-white transition-colors text-gray-300"
              >
                info@bimopsstudio.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
