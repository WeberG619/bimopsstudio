import { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTABanner } from "./CTABanner";
import { Chatbot } from "@/components/ui/Chatbot";
import { useSabbathMode } from "@/lib/sabbath-mode";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

export function Layout({ children, title, description, ogImage }: LayoutProps) {
  const { isSabbath } = useSabbathMode();
  const siteTitle = title ? `${title} | BIM Ops Studio` : "BIM Ops Studio";
  const siteDescription = description || "BIM Ops Studio - Home of Revit Pro Tools. Advanced Revit add-ins for construction documentation automation.";
  const siteImage = ogImage || "/og-image.jpg";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        {!isSabbath && <CTABanner />}
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}
