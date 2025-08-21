import { motion } from "framer-motion";
import { 
  FileText, 
  Layers, 
  Cpu, 
  CheckCircle, 
  Download, 
  Code2,
  Zap,
  Shield,
  Globe,
  Users,
  Clock,
  Database
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Automated Sheet Generation Engine",
    description: "Creates 50-100 sheets per minute from templates with automatic viewport placement and title block parameter mapping.",
    highlights: [
      "ViewSheet.Create() API integration",
      "Custom sheet numbering (CSI, Uniclass)",
      "Excel/CSV/JSON data import"
    ]
  },
  {
    icon: Layers,
    title: "Intelligent View Placement System",
    description: "Rule-based viewport positioning with automatic scale adjustment and view cropping optimization.",
    highlights: [
      "Smart viewport arrangement",
      "Auto-scale based on sheet size",
      "ISO 19650 & BS 1192 compliance"
    ]
  },
  {
    icon: Cpu,
    title: "Batch Operations Processor",
    description: "Multi-threaded processing for large models with 10,000+ elements, progress reporting, and rollback capability.",
    highlights: [
      "Parallel processing engine",
      "TransactionGroup rollback",
      "Error recovery mechanisms"
    ]
  },
  {
    icon: CheckCircle,
    title: "Quality Control & Validation",
    description: "Comprehensive parameter validation against IBC/AIA standards with sheet set completeness checking.",
    highlights: [
      "Cross-reference validation",
      "Standards compliance check",
      "Clash detection integration"
    ]
  },
  {
    icon: Download,
    title: "Export Automation",
    description: "Batch DWG/PDF export with custom naming conventions and print set configuration management.",
    highlights: [
      "Bluebeam Revu API integration",
      "ACC/BIM 360 upload (Q1 2025)",
      "Custom export templates"
    ]
  },
  {
    icon: Code2,
    title: "Advanced API Integration",
    description: "Built on Revit API with IExternalCommand, DocumentChanged events, and FilteredElementCollector for efficiency.",
    highlights: [
      "Real-time model monitoring",
      "Dynamic parameter updates",
      "Worksharing support"
    ]
  }
];

const techSpecs = [
  { icon: Zap, label: "Performance", value: "500+ sheets/project" },
  { icon: Shield, label: "Reliability", value: "99.9% uptime" },
  { icon: Globe, label: "Compatibility", value: "Revit 2024-2026" },
  { icon: Users, label: "Multi-user", value: "Concurrent access" },
  { icon: Clock, label: "Processing", value: "50-100 sheets/min" },
  { icon: Database, label: "Model Size", value: "Up to 800MB" }
];

export function RevitProFeatures() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy dark:text-white mb-4">
            Revit Pro Tools
            <span className="text-electric-blue"> Technical Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade Revit add-in built with .NET 8.0+ and C# 11.0, leveraging the full power 
            of the Revit API for construction documentation automation.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-navy dark:text-white ml-4">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-accent mt-1 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Specs Bar */}
        <motion.div
          className="bg-gradient-to-r from-deep-navy to-indigo-900 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technical Specifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techSpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                  <spec.icon className="w-6 h-6 text-lime-accent" />
                </div>
                <div className="text-sm text-blue-200">{spec.label}</div>
                <div className="text-lg font-bold text-white">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-deep-navy dark:text-white mb-6 text-center">
            Technical Architecture
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-deep-navy dark:text-white mb-2">Core Platform</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Autodesk Revit 2024-2026</li>
                  <li>.NET Framework 4.8 / .NET 8.0+</li>
                  <li>C# 11.0</li>
                  <li>WPF with MVVM Pattern</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-deep-navy dark:text-white mb-2">API Components</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>IExternalCommand</li>
                  <li>IExternalApplication</li>
                  <li>DocumentChanged Events</li>
                  <li>FilteredElementCollector</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold text-deep-navy dark:text-white mb-2">Integrations</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Excel/CSV Import/Export</li>
                  <li>AutoCAD DWG Export</li>
                  <li>Bluebeam Revu API</li>
                  <li>BIM 360 (Coming Q1 2025)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}