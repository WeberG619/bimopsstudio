import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-[#1C2E52] text-white py-5 border-t border-white/10"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg">Transform your CD production.</h3>
          <p className="text-[#B9C3D3]">Request a demo today.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/contact">
            <Button variant="secondary" className="bg-[#4CBEC4] text-[#0B1220] hover:bg-[#62CDD2] font-semibold">
              Request Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
