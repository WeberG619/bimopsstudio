import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  LogIn,
  KeyRound,
  MessageSquare,
  ExternalLink,
  Check,
} from "lucide-react";
import Link from "next/link";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center flex-shrink-0">
              {n}
            </div>
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-3 pl-1">
            {children}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function GetStarted() {
  return (
    <Layout
      title="Get Started with Studio Copilot"
      description="Three simple steps to get Studio Copilot running with your Revit. No terminal, no jargon."
    >
      <section className="pt-32 pb-16 bg-[#0A1B2A] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get set up in a few minutes</h1>
            <p className="text-xl text-gray-300">
              Three steps. No terminal, no jargon. When you&apos;re done, you just talk to it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <Step n={1} icon={Download} title="Install Studio Copilot">
            <p>
              Download the app and run the installer — it sets up everything it needs behind the
              scenes. When it opens for the first time, it&apos;ll walk you through the next two steps.
            </p>
            <Link href="/download">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold mt-1">
                <Download className="w-4 h-4 mr-2" /> Download the app
              </Button>
            </Link>
          </Step>

          <Step n={2} icon={LogIn} title="Connect Claude (the brain)">
            <p>
              Studio Copilot thinks with Claude. You bring your own Claude access — pick whichever is
              easier for you:
            </p>
            <div className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                Easiest — sign in with a Claude account
              </p>
              <p className="mb-3">
                Get a <strong>Claude Pro</strong> plan ($20/month, flat — no surprise bills), then in the
                app click <em>&ldquo;Sign in with Claude&rdquo;</em> and log in. That&apos;s it.
              </p>
              <a href="https://claude.ai/upgrade" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  Get Claude Pro <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                Or — pay only for what you use (an API key)
              </p>
              <p className="mb-3">
                Create a free Anthropic account, add a little credit (a few dollars goes a long way on
                the Sonnet model, which is the default), create a key, and paste it into the app.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://console.anthropic.com/settings/keys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Create an API key <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://console.anthropic.com/settings/billing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm">
                    Add credit <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </Step>

          <Step n={3} icon={KeyRound} title="Enter your license key">
            <p>
              Paste the license key we sent you when the app asks for it. That activates your 30-day
              trial — nothing to pay, and it turns off on its own when the trial ends.
            </p>
          </Step>

          <Step n={4} icon={MessageSquare} title="Just talk to it">
            <p>
              Point it at your Revit and tell it what you want, in plain English —{" "}
              <em>&ldquo;lay out a floor plan from this sketch,&rdquo;</em>{" "}
              <em>&ldquo;check this model against code,&rdquo;</em> or{" "}
              <em>&ldquo;render this view.&rdquo;</em> It introduces itself and shows you what it can
              do. There&apos;s no manual to read.
            </p>
          </Step>
        </div>
      </section>

      {/* Cost reassurance */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-5 text-center">What will Claude cost me?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Claude Pro — $20/month, flat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Simplest and predictable. One flat price, no per-use billing, no keys to manage.
                  Best if you don&apos;t want to think about it.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">API key — pay as you go</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You only pay for what you use. On the default Sonnet model, a{" "}
                  <strong>$10&ndash;$20 credit covers a lot</strong> of testing. Great for light or
                  occasional use.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Either way, Studio Copilot defaults to the <strong>Sonnet</strong> model to keep costs low.
            Stuck? Email{" "}
            <a href="mailto:weber@bimopsstudio.com" className="text-[#4A9EFF] underline">
              weber@bimopsstudio.com
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
