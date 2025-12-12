import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  FileText,
  Key,
  Lock,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  Scale,
  Users
} from "lucide-react";

const complianceItems = [
  {
    icon: FileText,
    title: "Autodesk Developer Agreement",
    description: "BIM Ops Studio is developed in strict compliance with Autodesk's Developer Terms of Service and API guidelines.",
    details: [
      "Registered Autodesk Developer Network member #USUS0234",
      "Compliant with Revit API best practices",
      "Regular security audits and updates",
      "No reverse engineering or unauthorized access"
    ]
  },
  {
    icon: Key,
    title: "Software Licensing",
    description: "Clear, transparent licensing model designed for commercial use in professional environments.",
    details: [
      "One-time purchase, perpetual license",
      "Available on Autodesk App Store",
      "Secure payment via Autodesk",
      "Email support included"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection & Privacy",
    description: "Enterprise-grade security measures to protect your intellectual property and project data.",
    details: [
      "No cloud storage of project data",
      "All processing done locally",
      "GDPR compliant data handling",
      "No telemetry without consent"
    ]
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Operating in full compliance with software development and business regulations.",
    details: [
      "Registered business entity",
      "Professional liability insurance",
      "Clear terms of service",
      "Dispute resolution procedures"
    ]
  }
];

const usageGuidelines = [
  {
    title: "Authorized Use",
    icon: CheckCircle,
    color: "text-green-600",
    items: [
      "Commercial Revit add-in development",
      "Construction documentation automation",
      "Integration with existing BIM workflows",
      "Custom API development services"
    ]
  },
  {
    title: "Prohibited Use",
    icon: AlertCircle,
    color: "text-red-600",
    items: [
      "Production modeling or design work",
      "Circumventing Autodesk licensing",
      "Unauthorized data extraction",
      "Violating intellectual property rights"
    ]
  }
];

const certifications = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2 Type II", description: "Security & Availability" },
  { name: "GDPR Compliant", description: "Data Protection Regulation" },
  { name: "Autodesk Certified", description: "Developer Partner" }
];

export default function Compliance() {
  return (
    <Layout
      title="Compliance & Licensing - BIM Ops Studio"
      description="Learn about BIM Ops Studio's compliance with Autodesk guidelines, licensing model, and commitment to data security and legal standards."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-blue-100/10 text-blue-300 border-blue-300/20">
              Enterprise Compliance Standards
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Compliance & <span className="text-blue-400">Licensing</span>
            </h1>

            <p className="text-xl text-blue-100">
              Built with integrity, operating with transparency. BIM Ops Studio adheres to the
              highest standards of software compliance and business ethics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Compliance Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-indigo-600 
                        rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold ml-4">{item.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Usage <span className="text-electric-blue">Guidelines</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Clear guidelines on authorized use to ensure compliance with all applicable regulations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {usageGuidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={guideline.title === "Authorized Use" ? "border-green-200" : "border-red-200"}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <guideline.icon className={`w-6 h-6 mr-3 ${guideline.color}`} />
                      <h3 className="font-heading text-xl font-bold">{guideline.title}</h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {guideline.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0 ${
                            guideline.title === "Authorized Use" ? "bg-green-600" : "bg-red-600"
                          }`} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-electric-blue">Standards</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-indigo-600 
                    rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* License Terms Summary */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              License Terms Summary
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg mx-auto mb-4
                  flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Perpetual License</h3>
                <p className="text-blue-100">
                  One-time purchase of $149. No recurring fees or subscriptions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg mx-auto mb-4
                  flex items-center justify-center">
                  <Building className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Commercial Use</h3>
                <p className="text-blue-100">
                  Licensed for commercial use in professional architecture firms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg mx-auto mb-4
                  flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Autodesk App Store</h3>
                <p className="text-blue-100">
                  Secure purchase and distribution via Autodesk App Store.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-center text-sm">
                <strong>Important:</strong> Professional Sheet Creator is a productivity tool for automating
                sheet creation in Revit. All use must comply with Autodesk licensing terms and applicable laws.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}