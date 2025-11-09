import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  badge?: string; // "New", "Beta", "Coming Soon"
  badgeVariant?: "default" | "secondary" | "outline";
  icon?: ReactNode;
  image?: string;
  ctaText?: string;
  highlight?: boolean;
}

export function ProductCard({
  title,
  description,
  features,
  href,
  badge,
  badgeVariant = "default",
  icon,
  image,
  ctaText = "Learn More",
  highlight = false,
}: ProductCardProps) {
  return (
    <motion.div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl ${
        highlight ? "ring-2 ring-primary" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      {image && (
        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      )}

      <div className="p-8">
        {icon && (
          <div className="mb-4 text-primary">
            {icon}
          </div>
        )}

        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          {description}
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <Link href={href}>
          <Button size="lg" className="w-full group">
            {ctaText}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
