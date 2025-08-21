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
    title: "Sheet Generation from Excel",
    description: "Import sheet data from Excel or CSV files and create 50+ sheets in under 2 minutes with automatic title block population.",
    highlights: [
      "ViewSheet.Create() API method",
      "Custom sheet numbering support",
      "Excel/CSV data import"
    ]
  },
  {
    icon: Layers,
    title: "Automated View Placement",
    description: "Place views on sheets automatically based on your template rules. No more manual dragging and positioning.",
    highlights: [
      "Template-based viewport placement",
      "Automatic scale adjustment",
      "Consistent spacing and alignment"
    ]
  },
  {
    icon: Cpu,
    title: "Batch Processing Engine",
    description: "Process hundreds of sheets at once with transaction-based operations that can be rolled back if needed.",
    highlights: [
      "Transaction framework",
      "Progress tracking",
      "Error recovery"
    ]
  },
  {
    icon: CheckCircle,
    title: "Naming Standards Enforcement",
    description: "Ensure all sheets follow your company's naming conventions automatically. No more manual checking.",
    highlights: [
      "Custom naming rules",
      "Parameter validation",
      "Consistency checking"
    ]
  },
  {
    icon: Download,
    title: "Export Automation",
    description: "Export sheets to PDF or DWG with proper naming conventions in a single batch operation.",
    highlights: [
      "Batch PDF export",
      "DWG export support",
      "Custom file naming"
    ]
  },
  {
    icon: Code2,
    title: "Revit API Integration",
    description: "Built natively with the Revit API using FilteredElementCollector and Transaction framework for maximum reliability.",
    highlights: [
      "Native Revit API",
      "No external dependencies",
      "Full API compliance"
    ]
  }
];

const specs = [
  { icon: Zap, label: "Performance", value: "50+ sheets/2min" },
  { icon: Shield, label: "Reliability", value: "Transaction-based" },
  { icon: Globe, label: "Compatibility", value: "Revit 2024-2026" },
  { icon: Users, label: "Multi-user", value: "Worksharing ready" },
  { icon: Clock, label: "Processing", value: "Batch operations" },
  { icon: Database, label: "Data Import", value: "Excel/CSV" },
];

const techStack = {
  platform: ["Autodesk Revit 2024-2026", ".NET Framework 4.8 / .NET 8.0+", "C# 11.0", "WPF with MVVM Pattern"],
  api: ["IExternalCommand", "IExternalApplication", "DocumentChanged Events", "FilteredElementCollector"],
  integrations: ["Excel/CSV Import/Export", "AutoCAD DWG Export", "PDF Batch Export", "Coming: BIM 360 (Q1 2025)"]
};

export function RevitProFeatures() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Sheet Creator
            <span className="text-primary block mt-2">Technical Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with the Revit API for construction documentation automation. 
            No AI gimmicks, just reliable automation that works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <spec.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{spec.label}</div>
                <div className="font-semibold">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Architecture</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Core Platform</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {techStack.platform.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">API Components</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {techStack.api.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Integrations</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {techStack.integrations.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}