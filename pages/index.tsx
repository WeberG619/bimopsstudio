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
      title="Revit Pro Tools - Advanced Revit Add-in for Construction Documentation"
      description="BIM Ops Studio presents Revit Pro Tools - Enterprise-grade Revit add-in for automating sheet generation, view placement, and quality control. Generate 50-100 sheets per minute."
    >
      <Hero />
      <RevitProFeatures />
      <ProblemSolution />
      <FlagshipTools />
      <Newsletter />
    </Layout>
  );
}
