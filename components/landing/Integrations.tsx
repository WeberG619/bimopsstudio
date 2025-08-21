import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Box,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  Link,
  Puzzle,
  Settings,
  Workflow,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const integrations = [
  {
    name: "Autodesk Revit",
    category: "Core BIM",
    description: "Native integration with all Revit versions (2020-2025). Deep API access for maximum automation potential.",
    icon: Box,
    color: "from-orange-500 to-red-500",
    status: "native",
    features: ["Native add-in", "Full API access", "Real-time sync", "All versions supported"]
  },
  {
    name: "Dynamo",
    category: "Visual Programming",
    description: "Seamlessly execute and manage Dynamo scripts. Convert visual programs into one-click automations.",
    icon: Workflow,
    color: "from-blue-500 to-purple-500",
    status: "native",
    features: ["Script automation", "Visual conversion", "Batch execution", "Error handling"]
  },
  {
    name: "Navisworks",
    category: "Coordination",
    description: "Export models and coordination data directly to Navisworks for clash detection and project review.",
    icon: Layers,
    color: "from-green-500 to-teal-500",
    status: "native",
    features: ["Model export", "Clash data", "Viewpoint sync", "Batch processing"]
  },
  {
    name: "AutoCAD",
    category: "2D/3D Design",
    description: "Bridge between BIM and traditional CAD workflows. Import/export with intelligent mapping.",
    icon: FileText,
    color: "from-red-500 to-pink-500",
    status: "native",
    features: ["DWG export", "Layer mapping", "Block libraries", "Standards sync"]
  },
  {
    name: "Microsoft Project",
    category: "Project Management",
    description: "Sync BIM schedules with project timelines. Automated progress tracking and milestone updates.",
    icon: Database,
    color: "from-blue-600 to-indigo-500",
    status: "api",
    features: ["Schedule sync", "Progress tracking", "Milestone alerts", "Resource planning"]
  },
  {
    name: "Procore",
    category: "Construction Management",
    description: "Push project data and drawings directly to Procore. Streamline field coordination.",
    icon: Settings,
    color: "from-orange-600 to-amber-500",
    status: "api",
    features: ["Drawing sync", "RFI automation", "Progress photos", "Field updates"]
  },
  {
    name: "BIM 360 / ACC",
    category: "Collaboration",
    description: "Full integration with Autodesk's cloud platform. Automated model publishing and issue tracking.",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    status: "native",
    features: ["Cloud sync", "Model publishing", "Issue tracking", "Version control"]
  },
  {
    name: "Rhino + Grasshopper",
    category: "Computational Design",
    description: "Import parametric models and design iterations. Bridge generative design with BIM implementation.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    status: "plugin",
    features: ["Parametric import", "Design iterations", "Geometry optimization", "Material assignments"]
  },
  {
    name: "Excel / Power BI",
    category: "Data Analytics",
    description: "Automated reporting and data visualization. Transform BIM data into actionable business insights.",
    icon: FileText,
    color: "from-green-600 to-emerald-500",
    status: "api",
    features: ["Automated reports", "Data visualization", "Custom dashboards", "KPI tracking"]
  }
];

const apiFeatures = [
  "RESTful API with comprehensive documentation",
  "Webhook support for real-time integrations",
  "Custom authentication and security",
  "Rate limiting and usage analytics",
  "SDK available in Python, C#, and JavaScript"
];

export function Integrations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            🔗 Seamless Integrations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Works With <span className="text-electric-blue">Your Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BIM Ops Studio integrates natively with the tools you already use. 
            No workflow disruption, just enhanced productivity across your entire tech stack.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${integration.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <integration.icon className="w-8 h-8" />
                        <Badge 
                          className={`text-xs ${
                            integration.status === 'native' 
                              ? 'bg-green-100 text-green-700 border-green-200' 
                              : integration.status === 'api'
                              ? 'bg-blue-100 text-blue-700 border-blue-200'
                              : 'bg-purple-100 text-purple-700 border-purple-200'
                          }`}
                        >
                          {integration.status === 'native' ? 'Native' : 
                           integration.status === 'api' ? 'API' : 'Plugin'}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                      <div className="text-white/90 text-sm mb-3">{integration.category}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {integration.description}
                    </p>
                    
                    <div className="space-y-2">
                      {integration.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* API Section */}
        <motion.div
          className="bg-gradient-to-r from-electric-blue/5 to-lime-accent/5 rounded-2xl p-8 mb-20 border border-electric-blue/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <Link className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Custom Integrations</h3>
                  <p className="text-gray-600">Build exactly what you need</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need a specific integration that's not listed? Our comprehensive API and webhook system 
                lets you build custom connections with any software in your workflow.
              </p>

              <ul className="space-y-3 mb-8">
                {apiFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-electric-blue hover:bg-electric-blue/90">
                  View API Docs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline">
                  Request Integration
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-400 ml-2">BIM Ops Studio API</span>
                </div>
                <div className="space-y-2">
                  <div><span className="text-blue-400">POST</span> /api/v1/automations/execute</div>
                  <div className="text-gray-500">Content-Type: application/json</div>
                  <div className="text-gray-500">Authorization: Bearer &lt;token&gt;</div>
                  <div className="mt-4">&#123;</div>
                  <div className="ml-4">"workflow_id": "sheet-creation",</div>
                  <div className="ml-4">"parameters": &#123;</div>
                  <div className="ml-8">"project_id": "12345",</div>
                  <div className="ml-8">"template": "standard"</div>
                  <div className="ml-4">&#125;</div>
                  <div>&#125;</div>
                  <div className="mt-4 text-green-400">✓ 200 OK - Automation started</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Missing an Integration?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're constantly adding new integrations based on user feedback. 
            Let us know what tools you'd like to see connected next.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
              Request Integration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View All Integrations
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
