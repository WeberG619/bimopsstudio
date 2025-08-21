import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Users,
  ArrowRight,
  Download,
  Clock,
  User,
  Video,
  GitBranch,
  CheckCircle,
  AlertCircle,
  Calendar,
  FileText,
  MessageSquare
} from "lucide-react";

const workflowSteps = [
  {
    step: 1,
    title: "Model Preparation",
    description: "Ensure all discipline models meet coordination standards",
    duration: "2-3 days",
    deliverables: ["Model health check", "Clash detection prep", "View setup"]
  },
  {
    step: 2,
    title: "Initial Clash Detection",
    description: "Run automated clash detection across all disciplines",
    duration: "4-6 hours",
    deliverables: ["Clash report", "Priority classification", "Assignment matrix"]
  },
  {
    step: 3,
    title: "Coordination Meetings",
    description: "Review clashes with multidisciplinary team",
    duration: "2-4 hours",
    deliverables: ["Meeting minutes", "Resolution assignments", "Schedule updates"]
  },
  {
    step: 4,
    title: "Resolution Tracking",
    description: "Monitor progress and verify clash resolutions",
    duration: "Ongoing",
    deliverables: ["Progress reports", "Updated models", "Quality validation"]
  }
];

const coordinationRoles = [
  {
    role: "BIM Coordinator",
    responsibilities: [
      "Setup coordination standards",
      "Run clash detection analysis", 
      "Facilitate coordination meetings",
      "Track resolution progress"
    ]
  },
  {
    role: "Discipline Leads",
    responsibilities: [
      "Prepare discipline models",
      "Attend coordination meetings",
      "Resolve assigned clashes",
      "Update model documentation"
    ]
  },
  {
    role: "Project Manager", 
    responsibilities: [
      "Review coordination schedule",
      "Approve resolution strategies",
      "Monitor project impact",
      "Ensure deliverable quality"
    ]
  }
];

const bestPractices = [
  {
    icon: Calendar,
    title: "Regular Coordination Cycles",
    description: "Establish weekly or bi-weekly coordination meetings to maintain momentum and catch issues early."
  },
  {
    icon: FileText,
    title: "Standardized Reporting",
    description: "Use consistent clash report formats and tracking methods across all project phases."
  },
  {
    icon: MessageSquare,
    title: "Clear Communication Protocols",
    description: "Define how issues are communicated, assigned, and tracked throughout the team."
  },
  {
    icon: CheckCircle,
    title: "Quality Control Checkpoints",
    description: "Implement validation steps to ensure clash resolutions don't create new conflicts."
  }
];

export default function BIMCoordinationWorkflows() {
  return (
    <Layout
      title="BIM Coordination Workflows - Multidisciplinary Process Guide"
      description="Streamline multi-disciplinary coordination processes with proven workflows, meeting structures, and communication protocols."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-grid-white-05" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/resources" className="inline-flex items-center text-lime-accent hover:text-lime-accent/80 mb-6">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Resources
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lime-accent/10 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-lime-accent" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-lime-accent/10 text-lime-accent border-lime-accent/20 mb-2">
                    Live Webinar Recording
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      1 hour session
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Advanced Level
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                BIM <span className="text-lime-accent">Coordination</span> Workflows
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                Master multidisciplinary coordination processes that reduce RFIs, 
                eliminate conflicts, and keep complex projects on track.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90">
                  <Video className="mr-2 w-5 h-5" />
                  Watch Webinar
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  <Download className="mr-2 w-5 h-5" />
                  Download Templates
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Coordination Process Overview
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A systematic approach to managing multidisciplinary coordination 
                that scales from small teams to enterprise projects.
              </p>
            </motion.div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden dark:bg-gray-800">
                    <CardContent className="p-0">
                      <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="lg:w-1/3 bg-gradient-to-br from-electric-blue to-lime-accent p-8 text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                            {step.step}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <div className="flex items-center text-white/80">
                            <Clock className="w-4 h-4 mr-2" />
                            {step.duration}
                          </div>
                        </div>
                        <div className="lg:w-2/3 p-8">
                          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            {step.description}
                          </p>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Deliverables:</h4>
                            <ul className="space-y-2">
                              {step.deliverables.map((deliverable) => (
                                <li key={deliverable} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Roles & Responsibilities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Clear definition of roles ensures accountability and smooth coordination across all disciplines.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {coordinationRoles.map((roleInfo, index) => (
                <motion.div
                  key={roleInfo.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full dark:bg-gray-700">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-electric-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {roleInfo.role}
                      </h3>
                      <ul className="space-y-2">
                        {roleInfo.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Coordination Best Practices
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Proven strategies that improve coordination efficiency and reduce project risks.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                        <practice.icon className="w-6 h-6 text-electric-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {practice.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {practice.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-electric-blue/5 to-lime-accent/5 border-electric-blue/20 dark:bg-gradient-to-r dark:from-electric-blue/10 dark:to-lime-accent/10">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <AlertCircle className="w-8 h-8 text-electric-blue mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Case Study: 40-Story Mixed-Use Tower
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        How structured coordination workflows reduced RFIs by 60% and eliminated 
                        construction delays on a complex urban development project.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-electric-blue mb-1">2,400</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Clashes Resolved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-electric-blue mb-1">60%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">RFI Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-electric-blue mb-1">0</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Schedule Delays</div>
                    </div>
                  </div>
                  
                  <Button className="w-full md:w-auto">
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Download Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                <CardContent className="p-6">
                  <GitBranch className="w-8 h-8 text-electric-blue mb-3" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Coordination Meeting Template
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Structured agenda and tracking templates for efficient coordination meetings.
                  </p>
                  <Button variant="outline" size="sm">
                    Download Template
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800">
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-electric-blue mb-3" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Clash Detection Checklist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Comprehensive checklist for setting up and running clash detection workflows.
                  </p>
                  <Button variant="outline" size="sm">
                    Download Checklist
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-lime-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Streamline Your Coordination?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get our complete coordination toolkit and join the webinar series 
              to master these workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
                <Video className="mr-2 w-5 h-5" />
                Join Live Webinar
              </Button>
              <Link href="/community">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                  Discuss in Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}