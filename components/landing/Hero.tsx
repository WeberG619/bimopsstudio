import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Shield, Clock, Users } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const stats = [
  { icon: Clock, value: "80%", label: "Time Saved" },
  { icon: Users, value: "1000+", label: "BIM Professionals" },
  { icon: Zap, value: "50+", label: "Automated Tasks" },
  { icon: Shield, value: "99.9%", label: "Reliability" },
];

const floatingElements = [
  { x: "10%", y: "20%", delay: 0 },
  { x: "85%", y: "15%", delay: 0.5 },
  { x: "15%", y: "70%", delay: 1 },
  { x: "80%", y: "75%", delay: 1.5 },
];

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white-05" />
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-lime-accent rounded-full opacity-60"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-deep-navy/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-navy to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* New Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="bg-lime-accent/10 text-lime-accent border-lime-accent/20 text-sm px-4 py-2">
              🚀 Now supporting Revit 2025 & Dynamo 3.0
            </Badge>
          </motion.div>

          {/* Enhanced Headline */}
          <motion.h1 
            className="font-heading text-4xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform{" "}
            <span className="relative">
              <span className="text-lime-accent">BIM Workflows</span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-1 bg-lime-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            <br />
            Into{" "}
            <span className="bg-gradient-to-r from-electric-blue to-cyan-400 bg-clip-text text-transparent">
              One-Click Magic
            </span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stop wrestling with repetitive Revit tasks. BIM Ops Studio's AI-powered automation 
            <span className="text-lime-accent font-semibold"> saves you 80% of modeling time</span>, 
            so you can focus on design, not drudgery.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/pricing">
              <Button 
                size="lg"
                className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-lime-accent/25 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-lime-accent/20 to-electric-blue/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-lime-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-blue-200 text-sm mb-4">Trusted by BIM professionals at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Autodesk Partners</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold">AEC Excellence</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-white font-semibold">ISO 19650 Compliant</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean Demo Video Modal */}
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
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={() => setIsVideoPlaying(false)}
            >
              ✕
            </button>
            
            {/* Embedded Clean Demo */}
            <iframe
              src="/clean-demo.html"
              className="w-full h-full border-0"
              title="BIM Ops Studio Demo"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
