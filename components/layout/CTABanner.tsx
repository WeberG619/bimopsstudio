import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-electric-blue dark:bg-blue-700 text-white py-4"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg">Ready to automate your BIM workflows?</h3>
          <p className="text-blue-100 dark:text-blue-200">Start your free trial today.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/pricing">
            <Button variant="secondary" className="bg-white dark:bg-gray-100 text-electric-blue hover:bg-gray-100 dark:hover:bg-gray-200">
              View Pricing
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-gray-900 !bg-transparent">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
