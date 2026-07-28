import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
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

export const SITE_URL = "https://www.bimopsstudio.com";

export function Layout({ children, title, description, ogImage }: LayoutProps) {
  const { isSabbath } = useSabbathMode();
  const router = useRouter();

  // Only append the brand when the page hasn't already said it — otherwise
  // titles come out as "... | BIM Ops Studio | BIM Ops Studio" and Google
  // truncates the part that actually matters.
  const siteTitle = !title
    ? "BIM Ops Studio"
    : title.includes("BIM Ops Studio")
    ? title
    : `${title} | BIM Ops Studio`;

  const siteDescription = description || "BIM Ops Studio - Home of Revit Pro Tools. Advanced Revit add-ins for construction documentation automation.";

  // Social scrapers won't resolve a relative og:image — it has to be absolute.
  const rawImage = ogImage || "/og-image.jpg";
  const siteImage = rawImage.startsWith("http") ? rawImage : `${SITE_URL}${rawImage}`;

  // trailingSlash: true, so canonicals must carry the slash the server serves.
  const path = (router?.asPath || "/").split("?")[0].split("#")[0];
  const canonical =
    path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.endsWith("/") ? path : `${path}/`}`;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BIM Ops Studio",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      "BIM and construction-documentation services for architecture firms — Revit production, 3D site massing, AI-assisted CD automation, and code compliance.",
    founder: { "@type": "Person", name: "Weber Gouin", jobTitle: "BIM Specialist" },
    email: "weber@bimopsstudio.com",
    areaServed: "United States",
    knowsAbout: [
      "Revit",
      "Building Information Modeling",
      "Construction Documentation",
      "Revit API automation",
      "3D site massing",
      "Architectural visualization",
    ],
    sameAs: ["https://github.com/WeberG619"],
  };

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:image" content={siteImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
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
