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
import Image from "next/image";

// We are a production studio, not a software vendor. Every entry below is work
// we do FOR the client and hand back as a finished file — nothing here asks
// them to install, license, or learn a tool. Pricing is quoted per project
// because scope varies far too much to publish a number we'd have to honour.
const services = [
  {
    name: "DWG → Revit Conversion",
    description: "Send us your CAD backgrounds and we build the Revit model. Walls, doors, windows, levels and grids, drawn to your standards — not traced approximations.",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-400",
    price: "Quoted per project",
    duration: "Scoped by sheet count",
    features: [
      "Walls built as continuous centrelines",
      "Doors and windows placed from the CAD blocks",
      "Levels and grids matched to your set",
      "Curves modelled as true arcs, not segments",
      "Your templates, families and naming",
      "Dimensions to core finish"
    ],
    deliverables: [
      "Native .rvt model",
      "Floor plans ready for documentation",
      "Model matched to your project standards",
      "Source CAD retained as a linked underlay"
    ],
    popular: true
  },
  {
    name: "PDF → Revit Conversion",
    description: "Only have PDFs or scans? We scale the sheets, read the geometry and build the model from them — including older drawings where no CAD file exists.",
    icon: FileText,
    gradient: "from-purple-500 to-pink-400",
    price: "Quoted per project",
    duration: "Scoped by sheet count",
    features: [
      "Sheets scaled from known dimensions",
      "Geometry extracted, not hand-traced",
      "Scanned and photographed drawings handled",
      "Dimensions read from the drawing, never guessed",
      "Underlay aligned per sheet",
      "Discrepancies flagged back to you"
    ],
    deliverables: [
      "Native .rvt model",
      "Underlays aligned to the model",
      "A written list of anything ambiguous in the source",
      "Floor plans ready for documentation"
    ]
  },
  {
    name: "Construction Document Production",
    description: "Overflow CD capacity. We pick up the sheet set — plans, elevations, sections, schedules — and produce it in your template, at your standards.",
    icon: Wrench,
    gradient: "from-green-500 to-emerald-400",
    price: "Quoted per project",
    duration: "Scoped by phase",
    features: [
      "Sheet sets built and numbered to your standard",
      "Plans, elevations, sections and callouts",
      "Door, window and room finish schedules",
      "Dimension strings and annotation",
      "Titleblock and revision handling",
      "Issued as a coordinated PDF set"
    ],
    deliverables: [
      "Complete sheet set in your template",
      "Coordinated PDF issue",
      "Native .rvt returned to you",
      "Schedules exported on request"
    ]
  },
  {
    name: "Photoreal Renderings",
    description: "Renderings produced from your actual model, with real site context — the surrounding buildings, streets and terrain, not a generic backdrop.",
    icon: Zap,
    gradient: "from-orange-500 to-red-400",
    price: "Quoted per project",
    duration: "Scoped by view count",
    features: [
      "Rendered from your Revit geometry",
      "Real surveyed and GIS site context",
      "Camera matched to a real photograph where needed",
      "Exterior, interior and aerial views",
      "Material and lighting options per view",
      "Revisions until the direction is right"
    ],
    deliverables: [
      "High-resolution images, print ready",
      "Multiple view options per scene",
      "Files sized for email or shared as a link",
      "Source view saved back into the model"
    ]
  },
  {
    name: "3D Site Massing & Context",
    description: "Accurate site models built from survey, GIS and aerial data — real parcel boundaries, real building heights, real terrain. Useful for feasibility, planning and approvals.",
    icon: Building,
    gradient: "from-teal-500 to-green-400",
    price: "Quoted per project",
    duration: "Scoped by site area",
    features: [
      "Parcel boundaries from the record survey",
      "Surrounding buildings at measured heights",
      "Street edges, centrelines and water bodies",
      "Terrain and grade modelled, not approximated",
      "Aerial imagery calibrated to real-world scale",
      "Your massing placed in true orientation"
    ],
    deliverables: [
      "Native .rvt site model",
      "Context massing you can build on top of",
      "Site plan views set up",
      "Aerial and orientation views"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Send Us the Drawings",
    description: "CAD, PDF or scans — whatever you have. We tell you straight away what is workable and what is missing"
  },
  {
    number: "02",
    title: "Scope & Quote",
    description: "We scope the work against your actual set and quote it as a fixed project price before anything starts"
  },
  {
    number: "03",
    title: "We Build It",
    description: "The modelling and documentation happens on our side, in your template and to your standards"
  },
  {
    number: "04",
    title: "Review & Revise",
    description: "You mark it up, we revise, and the native Revit file comes back to you when you are happy with it"
  }
];

const stats = [
  { value: "75%", label: "Faster CD Production" },
  { value: "15+", label: "Years in AEC" },
  { value: "2025/26", label: "Revit Versions Supported" },
  { value: "ADN", label: "Autodesk Developer Network Member" }
];

export default function ServicesConstructionDocs() {
  return (
    <Layout
      title="Revit Production Services | BIM Ops Studio"
      description="Done-for-you Revit production. DWG and PDF to Revit conversion, construction document production, photoreal renderings and 3D site massing. We do the work and hand back the native file. Quoted per project."
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tech-workspace.jpg"
            alt="Technology workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A1B2A]/85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-lime-accent/10 text-lime-accent border-lime-accent/20">
              Done-For-You Revit Production
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Send Us the Drawings.
              <span className="block text-lime-accent">We Build the Model.</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              You don&apos;t install anything and nobody on your team learns a new tool.
              We take on the production work and hand back the native Revit file.
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
              <Link href="/ai-renderings">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  See Recent Work
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
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
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">What's Included:</h4>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
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
                <h3 className="font-heading text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Why Choose <span className="text-electric-blue">BIM Ops Studio</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Building className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Industry Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      15+ years of experience in construction documentation and BIM workflows
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Production Tested</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Not a prototype — this system produces real construction documents on real projects
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
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Direct Access</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      You work directly with the person who built the system — no support tier to climb
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-lime-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 text-lime-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Cutting-Edge Technology</h3>
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
              Have a Set That Needs Modelling?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Send us the drawings and we&apos;ll tell you what&apos;s workable, what&apos;s
              missing, and what it will cost — before you commit to anything.
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
              <Link href="/technical">
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