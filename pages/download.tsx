import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  ShieldCheck,
  FolderOpen,
  MousePointerClick,
  KeyRound,
  Rocket,
  Mail,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// When Weber hosts the installer zip on a private link (R2 / signed URL / release),
// set it here and the Download button goes live. Left blank on purpose: the app binary
// is NOT published in this public repo — trial testers receive a personal link by email.
const DOWNLOAD_URL = "";
const VERSION = "0.31.3";

function Step({
  n,
  icon: Icon,
  title,
  children,
}: {
  n: number;
  icon: any;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center flex-shrink-0">
          {n}
        </div>
        <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Layout
      title="Download Studio Copilot"
      description="Download Studio Copilot and set it up on your Windows PC in a few minutes."
    >
      {/* Hero */}
      <section className="pt-32 pb-14 bg-[#0A1B2A] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Download Studio Copilot</h1>
            <p className="text-xl text-gray-300 mb-8">
              One folder, one double-click. The installer sets up everything and gets out of your way.
            </p>

            {DOWNLOAD_URL ? (
              <a href={DOWNLOAD_URL}>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg px-8 py-6">
                  <Download className="w-5 h-5 mr-2" /> Download for Windows &nbsp;·&nbsp; v{VERSION}
                </Button>
              </a>
            ) : (
              <div className="inline-flex flex-col items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 px-6 py-5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <Mail className="w-5 h-5" /> Your personal download link is in your welcome email
                </div>
                <p className="text-sm text-gray-300 max-w-md">
                  We send each trial tester a private link along with their license key. Can&apos;t find it?
                  Email{" "}
                  <a href="mailto:weber@bimopsstudio.com" className="text-[#4A9EFF] underline">
                    weber@bimopsstudio.com
                  </a>{" "}
                  and we&apos;ll resend it.
                </p>
              </div>
            )}
            <p className="text-sm text-gray-400 mt-4">Windows 10 / 11 (64-bit) · about 9 MB · v{VERSION}</p>
          </motion.div>
        </div>
      </section>

      {/* What you need */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-5 text-center">Before you start</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Windows 10 or 11 (64-bit)",
              "Autodesk Revit 2024, 2025, 2026, or 2027",
              "About 10 minutes for the one-time setup",
              "An internet connection (for setup + Claude)",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            The installer sets up the Windows Subsystem for Linux and the Revit add-in for you — you
            don&apos;t need to know what those are.
          </p>
        </div>
      </section>

      {/* Install steps */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Installing it</h2>
          <Card>
            <CardContent className="pt-8">
              <Step n={1} icon={FolderOpen} title="Unzip the download">
                <p>
                  Right-click the folder you downloaded and choose <strong>Extract All</strong>. Open the
                  extracted folder, then open the <strong>setup</strong> folder inside it.
                </p>
              </Step>
              <Step n={2} icon={MousePointerClick} title="Double-click Install-StudioCopilot">
                <p>
                  Windows may show a blue <em>&ldquo;Windows protected your PC&rdquo;</em> box the first time
                  (it does this for every new app). Click <strong>More info</strong>, then{" "}
                  <strong>Run anyway</strong> — it&apos;s safe.
                </p>
              </Step>
              <Step n={3} icon={KeyRound} title="Paste your license key">
                <p>
                  When it asks, paste the key from your welcome email and press <strong>Enter</strong>. The
                  installer does the rest — it may take a few minutes the first time. Leave the window open
                  until it says it&apos;s finished.
                </p>
              </Step>
              <Step n={4} icon={Rocket} title="Open Studio Copilot">
                <p>
                  Launch Studio Copilot. The first time, it&apos;ll help you sign in to Claude (the AI) and
                  then introduce itself. From there, you just talk to it — point it at Revit and ask.
                </p>
              </Step>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    That&apos;s it. Not sure what to say first?{" "}
                    <Link href="/get-started" className="text-[#4A9EFF] underline">
                      See the get-started guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety note */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#4A9EFF] flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                About that Windows warning
              </p>
              <p>
                Studio Copilot is a brand-new app, so Windows SmartScreen hasn&apos;t &ldquo;seen&rdquo; it
                enough times to recognize it yet — that&apos;s why the warning appears. It runs entirely on
                your own PC with your own Revit. Questions? Email{" "}
                <a href="mailto:weber@bimopsstudio.com" className="text-[#4A9EFF] underline">
                  weber@bimopsstudio.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
