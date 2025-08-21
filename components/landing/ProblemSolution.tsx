import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  AlertTriangle, 
  RefreshCw, 
  TrendingDown,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  X,
  ArrowRight
} from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Hours of Manual Work",
    description: "Spending entire days on repetitive tasks like sheet creation, view setup, and parameter updates",
    impact: "70% of time wasted on non-creative work"
  },
  {
    icon: AlertTriangle,
    title: "Human Error",
    description: "Manual processes lead to inconsistent naming, missing parameters, and coordination issues",
    impact: "30% increase in project revisions"
  },
  {
    icon: RefreshCw,
    title: "Repetitive Tasks",
    description: "Creating the same families, views, and sheets across multiple projects with slight variations",
    impact: "Zero learning from previous work"
  },
  {
    icon: TrendingDown,
    title: "Productivity Bottlenecks",
    description: "Teams waiting for senior members to complete standard setup tasks before starting design work",
    impact: "Project delays and cost overruns"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "One-Click Automation",
    description: "Generate entire sheet sets, views, and project structures in seconds, not hours",
    impact: "80% faster project setup"
  },
  {
    icon: Shield,
    title: "Error-Free Consistency",
    description: "AI ensures perfect naming conventions, complete parameters, and standard compliance",
    impact: "95% reduction in errors"
  },
  {
    icon: TrendingUp,
    title: "Smart Templates",
    description: "Learn from every project to create increasingly intelligent automation workflows",
    impact: "Continuous improvement"
  },
  {
    icon: CheckCircle,
    title: "Team Efficiency",
    description: "Junior staff can execute senior-level tasks immediately with guided automation",
    impact: "Entire team productivity boost"
  }
];

const comparisonData = [
  {
    task: "Create 50 Sheets with Views",
    traditional: "6-8 hours",
    withBIMOps: "5 minutes",
    savings: "95%"
  },
  {
    task: "Family Parameter Updates",
    traditional: "2-3 hours",
    withBIMOps: "30 seconds",
    savings: "98%"
  },
  {
    task: "Project Template Setup",
    traditional: "1-2 days",
    withBIMOps: "15 minutes",
    savings: "90%"
  },
  {
    task: "View Template Creation",
    traditional: "3-4 hours",
    withBIMOps: "2 minutes",
    savings: "97%"
  }
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-700 border-red-200">
            The BIM Reality Check
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stop Burning Time on 
            <span className="text-red-600"> Boring Tasks</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            BIM professionals spend <strong>70% of their time</strong> on repetitive, 
            non-creative work. It's time to focus on what actually matters: great design.
          </p>
        </motion.div>

        {/* Pain Points */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <X className="w-8 h-8 text-red-500 mr-3" />
              The Old Way: Pain & Frustration
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-red-200 hover:border-red-300 dark:border-red-800 dark:hover:border-red-700 dark:bg-gray-800 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <point.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{point.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{point.description}</p>
                    <Badge variant="destructive" className="text-xs">
                      {point.impact}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow Divider */}
        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-electric-blue to-lime-accent p-4 rounded-full">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              The BIM Ops Way: Smart & Efficient
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-green-200 hover:border-green-300 dark:border-green-800 dark:hover:border-green-700 transition-colors bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-accent to-electric-blue rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{solution.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{solution.description}</p>
                    <Badge variant="success" className="text-xs">
                      {solution.impact}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Time Savings Comparison
            </h3>
            <p className="text-gray-600 dark:text-gray-300">See the dramatic difference in common BIM tasks</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Task</th>
                  <th className="text-center py-4 px-6 font-semibold text-red-600">Traditional Way</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">With BIM Ops Studio</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">Time Saved</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.task}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">{row.task}</td>
                    <td className="py-4 px-6 text-center">
                      <Badge variant="destructive" className="bg-red-100 text-red-700">
                        {row.traditional}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Badge variant="success" className="bg-green-100 text-green-700">
                        {row.withBIMOps}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Badge className="bg-blue-100 text-blue-700 font-bold">
                        {row.savings}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-lime-accent/10 to-electric-blue/10 dark:from-lime-accent/5 dark:to-electric-blue/5 rounded-xl border border-lime-accent/20 dark:border-lime-accent/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Average Time Savings: <span className="text-electric-blue">95%</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                That's <strong>7.6 hours back in your day</strong> for every 8-hour workday. 
                Imagine what you could accomplish with that time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
