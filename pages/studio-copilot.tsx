import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Loader2,
  Bot,
  Building2,
  ShieldCheck,
  Wand2,
  KeyRound,
  Cpu,
} from "lucide-react";
import { useState } from "react";
import { startCheckout } from "@/lib/checkout";

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
    title: "Bring your own Claude key",
    body: "The subscription is for the app and license. You use your own Anthropic key, so AI cost stays yours.",
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
  const [starting, setStarting] = useState(false);
  const [err, setErr] = useState("");

  const subscribe = async () => {
    setStarting(true);
    setErr("");
    try {
      await startCheckout();
    } catch (e: any) {
      setErr(e?.message || "Something went wrong. Please try again.");
      setStarting(false);
    }
  };

  return (
    <Layout
      title="Studio Copilot — the AI that drives Revit"
      description="An AI copilot that runs on your PC and drives your own Revit. Model, document, check code, and render — in plain English. $49/month."
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A1B2A] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-amber-500 text-black hover:bg-amber-500">Cursor for Revit</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance">
              The AI that actually drives Revit.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Studio Copilot runs on your PC and controls your own Revit — modeling, documenting,
              checking code, and rendering from plain-English requests. You stay in control.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button
                size="lg"
                onClick={subscribe}
                disabled={starting}
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 h-12 text-base"
              >
                {starting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Starting checkout&hellip;
                  </>
                ) : (
                  <>Start — $49/month</>
                )}
              </Button>
              <p className="text-sm text-gray-400">Cancel anytime · Bring your own Claude key</p>
              {err && <p className="text-sm text-red-400">{err}</p>}
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

      {/* Pricing / final CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-4 max-w-lg">
          <Card className="border-2 border-amber-500">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl font-bold mb-1">Studio Copilot</h2>
              <div className="my-4">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
                {[
                  "The full desktop app + phone companion",
                  "Full or Revit-scoped control levels",
                  "Photoreal rendering (bring your own Google key)",
                  "Every update while subscribed",
                  "Cancel anytime",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{t}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                onClick={subscribe}
                disabled={starting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold h-12"
              >
                {starting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Starting checkout&hellip;
                  </>
                ) : (
                  <>Subscribe now</>
                )}
              </Button>
              {err && <p className="text-sm text-red-500 mt-3">{err}</p>}
              <p className="text-xs text-gray-400 mt-4">
                Secure checkout by Stripe. You&apos;ll get your license key instantly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
