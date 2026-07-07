import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy, Check, Download, Loader2, ArrowRight, KeyRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTROL_PLANE } from "@/lib/checkout";

type State = "loading" | "ready" | "pending" | "error";

export default function Success() {
  const [state, setState] = useState<State>("loading");
  const [licenseKey, setLicenseKey] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  // Static export: no server render. The webhook mints the key server-side moments after payment,
  // so we poll /license/by-session until it appears (with a bounded retry).
  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    if (!sessionId) {
      setState("error");
      return;
    }
    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        const res = await fetch(
          `${CONTROL_PLANE}/license/by-session?session_id=${encodeURIComponent(sessionId)}`
        );
        const data = await res.json().catch(() => ({}));
        if (data && data.key) {
          setLicenseKey(data.key);
          setEmail(data.email || "");
          setState("ready");
          return;
        }
        if (++tries < 15) {
          setState("pending");
          timer = setTimeout(poll, 2000);
        } else {
          setState("error");
        }
      } catch {
        if (++tries < 15) {
          timer = setTimeout(poll, 2000);
        } else {
          setState("error");
        }
      }
    };
    poll();
    return () => clearTimeout(timer);
  }, []);

  const copyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout
      title="Subscription Confirmed"
      description="Your Studio Copilot subscription is active. Here is your license key and download."
    >
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">You&apos;re in.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your Studio Copilot subscription is active. Here&apos;s your license key.
            </p>
          </motion.div>

          <Card className="mb-8">
            <CardContent className="pt-8 pb-8">
              {(state === "loading" || state === "pending") && (
                <div className="text-center py-6">
                  <Loader2 className="w-8 h-8 text-[#4A9EFF] animate-spin mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Finalizing your subscription and issuing your license&hellip;
                  </p>
                  <p className="text-sm text-gray-400 mt-2">This usually takes a few seconds.</p>
                </div>
              )}

              {state === "ready" && (
                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    <KeyRound className="w-4 h-4" /> Your license key
                  </div>
                  <div className="flex items-stretch gap-2">
                    <code className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-md px-4 py-3 font-mono text-lg break-all select-all">
                      {licenseKey}
                    </code>
                    <Button variant="outline" size="lg" onClick={copyKey} aria-label="Copy license key">
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </div>
                  {email && (
                    <p className="text-sm text-gray-500 mt-3">
                      A copy is on its way to <strong>{email}</strong>. Keep this key safe — you&apos;ll
                      paste it into the app on first launch.
                    </p>
                  )}
                </div>
              )}

              {state === "error" && (
                <div className="text-center py-4">
                  <p className="text-gray-700 dark:text-gray-200 font-medium mb-2">
                    Your payment went through, but we couldn&apos;t show your key here automatically.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Check your email for the license key, or contact{" "}
                    <a href="mailto:weber@bimopsstudio.com" className="text-[#4A9EFF] underline">
                      weber@bimopsstudio.com
                    </a>{" "}
                    and we&apos;ll get it to you right away.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/download" className="block">
              <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                <Download className="w-5 h-5 mr-2" /> Download the app
              </Button>
            </Link>
            <Link href="/account" className="block">
              <Button size="lg" variant="outline" className="w-full">
                Manage subscription <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 text-sm text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto">
            <p>
              That&apos;s the whole setup — install, paste your key, and just talk to it. Studio Copilot
              introduces itself and shows you what it can do. No manual to read.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
