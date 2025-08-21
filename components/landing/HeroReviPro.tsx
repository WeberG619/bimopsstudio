import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Shield, Clock, FileText, Layers, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const stats = [
  { icon: FileText, value: "50+", label: "Sheets in 2 Minutes" },
  { icon: Clock, value: "95%", label: "Time Saved" },
  { icon: Layers, value: "Excel", label: "Data Import" },
  { icon: Shield, value: "100%", label: "API Compliant" },
];

const features = [
  "Batch creates sheets from Excel/CSV data",
  "Auto-populates title block parameters",
  "Places views on sheets according to templates",
  "Enforces company naming standards",
  "Exports to PDF/DWG with proper naming",
  "Built with ViewSheet.Create() API"
];

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white-05" />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-deep-navy/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-navy to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Product Badge */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="bg-lime-accent/10 text-lime-accent border-lime-accent/20 text-sm px-4 py-2">
              🚀 Professional Sheet Creator - Now Supporting Revit 2024, 2025 & 2026
            </Badge>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.h1 
                className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-lime-accent">Professional Sheet Creator</span>
                <br />
                <span className="text-3xl md:text-5xl">
                  Create 50+ Revit Sheets
                </span>
                <br />
                <span className="bg-gradient-to-r from-electric-blue to-cyan-400 bg-clip-text text-transparent">
                  in 2 Minutes
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Create 50+ Revit sheets in 2 minutes. Automate sheet creation, view placement, and title block data from Excel. Built for production teams on deadline.
              </motion.p>

              {/* Feature List */}
              <motion.div
                className="mb-8 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-lime-accent mr-3 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/pricing">
                  <Button 
                    size="lg"
                    className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-lime-accent/25 transition-all duration-300 hover:scale-105"
                  >
                    Start Free Trial - $149/month
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-blue-200 text-sm mb-2">Built with Enterprise-Grade Technology</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="bg-white/5 border-white/20">
                    .NET 8.0+
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20">
                    C# 11.0
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20">
                    WPF/MVVM
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20">
                    Revit API 2024+
                  </Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/20">
                    FilteredElementCollector
                  </Badge>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-lime-accent/20 to-electric-blue/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-7 h-7 text-lime-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-blue-200 text-sm mb-4">Trusted by Architecture Firms & Construction Companies</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-sm">
              <div>10-500 Employee Firms</div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div>ISO 19650 Compliant</div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div>ADN Member</div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div>Enterprise Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            className="w-full h-full max-w-7xl max-h-full bg-white rounded-lg overflow-hidden relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={() => setIsVideoPlaying(false)}
            >
              ✕
            </button>
            
            <iframe
              src="/demo-revipro.html"
              className="w-full h-full border-0"
              title="Professional Sheet Creator Demo"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}