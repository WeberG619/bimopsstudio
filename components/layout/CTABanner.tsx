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
      className="bg-blue-600 text-white py-4"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg">Transform your CD production.</h3>
          <p className="text-blue-100">Request a demo today.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/contact">
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Request Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
