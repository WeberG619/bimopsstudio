import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText,
  Settings,
  Users,
  Wrench,
  GraduationCap,
  Headphones,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap,
  Layers,
  Database,
  GitBranch,
  Code2,
  Building
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Revit Pro Tools Implementation",
    description: "Full deployment and configuration of Revit Pro Tools for your organization. We handle everything from installation to team training.",
    icon: Settings,
    gradient: "from-blue-500 to-cyan-400",
    price: "Starting at $5,000",
    duration: "1-2 weeks",
    features: [
      "Multi-seat deployment & licensing",
      "Custom template configuration",
      "Sheet numbering system setup",
      "View placement rules definition",
      "Quality control parameters",
      "Export automation configuration"
    ],
    deliverables: [
      "Fully configured Revit Pro Tools",
      "Custom templates library",
      "Admin documentation",
      "Training videos & materials"
    ],
    popular: true
  },
  {
    name: "Construction Documentation Automation",
    description: "Transform your entire documentation workflow with custom automation strategies designed for your specific project types.",
    icon: FileText,
    gradient: "from-purple-500 to-pink-400",
    price: "Starting at $8,000",
    duration: "2-4 weeks",
    features: [
      "Current workflow assessment",
      "Automation opportunity analysis",
      "Custom sheet generation templates",
      "View standardization protocols",
      "Batch export configurations",
      "Integration with existing tools"
    ],
    deliverables: [
      "Workflow automation blueprint",
      "Custom Revit Pro Tools scripts",
      "Process documentation",
      "ROI analysis report"
    ]
  },
  {
    name: "Custom API Development",
    description: "Extend Revit Pro Tools with custom functionality tailored to your unique requirements using the Revit API.",
    icon: Code2,
    gradient: "from-green-500 to-emerald-400",
    price: "Starting at $15,000",
    duration: "4-8 weeks",
    features: [
      "Custom Revit API commands",
      "Integration with external systems",
      "Specialized batch processors",
      "Custom quality control rules",
      "Proprietary workflow automation",
      "API documentation & support"
    ],
    deliverables: [
      "Custom add-in modules",
      "Source code (optional)",
      "API documentation",
      "12-month support"
    ]
  },
  {
    name: "Enterprise Integration Services",
    description: "Connect Revit Pro Tools with your enterprise systems including BIM 360, PIM systems, and project management platforms.",
    icon: Cloud,
    gradient: "from-indigo-500 to-blue-400",
    price: "Starting at $12,000",
    duration: "3-6 weeks",
    features: [
      "BIM 360/ACC integration",
      "Database connectivity setup",
      "ERP system integration",
      "Custom data workflows",
      "Automated reporting pipelines",
      "Real-time synchronization"
    ],
    deliverables: [
      "Integration architecture",
      "Connection modules",
      "Data mapping documentation",
      "Monitoring dashboard"
    ]
  },
  {
    name: "Team Training & Certification",
    description: "Comprehensive training program to maximize your team's productivity with Revit Pro Tools and documentation automation.",
    icon: GraduationCap,
    gradient: "from-orange-500 to-red-400",
    price: "$2,500 per session",
    duration: "2-3 days",
    features: [
      "Hands-on workshop sessions",
      "Real project exercises",
      "Best practices training",
      "Troubleshooting techniques",
      "Advanced features deep-dive",
      "Certification program"
    ],
    deliverables: [
      "Training workbooks",
      "Video recordings",
      "Quick reference guides",
      "Completion certificates"
    ]
  },
  {
    name: "Ongoing Support & Optimization",
    description: "Continuous support and optimization services to ensure peak performance and adapt to evolving project needs.",
    icon: Headphones,
    gradient: "from-teal-500 to-green-400",
    price: "$2,000/month",
    duration: "Ongoing",
    features: [
      "Priority technical support",
      "Monthly optimization reviews",
      "Workflow refinement",
      "Performance monitoring",
      "Update management",
      "Quarterly business reviews"
    ],
    deliverables: [
      "24/7 support access",
      "Monthly reports",
      "Performance analytics",
      "Optimization recommendations"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We analyze your current documentation workflows and identify automation opportunities"
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Create a customized automation strategy aligned with your project requirements"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Deploy and configure Revit Pro Tools with your custom settings and templates"
  },
  {
    number: "04",
    title: "Training & Launch",
    description: "Train your team and launch the automated workflow with ongoing support"
  }
];

const stats = [
  { value: "500+", label: "Projects Automated" },
  { value: "80%", label: "Time Savings" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "24/7", label: "Support Available" }
];

export default function ServicesConstructionDocs() {
  return (
    <Layout
      title="Construction Documentation Automation Services - Revit Pro Tools"
      description="Professional services for implementing Revit Pro Tools and automating your construction documentation workflow. Implementation, training, and custom development."
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
            <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
              Professional Services for Construction Documentation
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Transform Your Documentation
              <span className="block text-lime-accent">Workflow Today</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              From implementation to optimization, our expert team helps you achieve 
              80% time savings with Revit Pro Tools automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button 
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-electric-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our <span className="text-electric-blue">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for every stage of your documentation automation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-xl transition-shadow duration-300 ${
                  service.popular ? 'border-2 border-lime-accent' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-lime-accent text-deep-navy">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} 
                      flex items-center justify-center mb-4`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gray-500" />
                        {service.duration}
                      </span>
                      <span className="font-semibold text-electric-blue">
                        {service.price}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-lime-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-gray-500 ml-6">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <Link href="/contact">
                      <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-electric-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful documentation automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric-blue to-indigo-600 
                    rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 
                      bg-gradient-to-r from-electric-blue to-transparent" />
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose <span className="text-electric-blue">BIM Ops Studio</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Building className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Over 10 years of experience in construction documentation and BIM workflows
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      500+ successful implementations with measurable ROI within 30 days
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Expert team available 24/7 to ensure your success
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Latest Revit API features and enterprise-grade architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Documentation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how Revit Pro Tools can transform your workflow. 
              Schedule a free consultation to see the automation in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button 
                  size="lg"
                  className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/technical-specs">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View Technical Specs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}