import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/landing/HeroReviPro";
import { RevitProFeatures } from "@/components/landing/RevitProFeatures";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { FlagshipTools } from "@/components/landing/FlagshipTools";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { Newsletter } from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <Layout
      title="Professional Sheet Creator - Revit Sheet Automation Add-in"
      description="Create 50+ Revit sheets in 2 minutes. Automate sheet creation, view placement, and title block data from Excel. Built for production teams on deadline."
    >
      <Hero />
      <RevitProFeatures />
      <ProblemSolution />
      <Newsletter />
    </Layout>
  );
}
