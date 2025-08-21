import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior BIM Coordinator",
    company: "Skidmore, Owings & Merrill",
    avatar: "SC",
    rating: 5,
    quote: "BIM Ops Studio has completely transformed our project delivery process. What used to take our team 8 hours now takes 15 minutes. The ROI was immediate and massive.",
    highlight: "Saved 8 hours per project setup",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Michael Rodriguez",
    role: "BIM Manager",
    company: "Turner Construction",
    avatar: "MR", 
    rating: 5,
    quote: "As someone who's tried every BIM automation tool out there, BIM Ops Studio is in a league of its own. The AI actually learns from your patterns—it's like having a senior BIM expert working 24/7.",
    highlight: "Reduced errors by 95%",
    color: "from-green-500 to-emerald-400"
  },
  {
    name: "Jennifer Park",
    role: "Principal Architect",
    company: "Gensler",
    avatar: "JP",
    rating: 5,
    quote: "Our junior staff can now execute complex BIM tasks that previously required senior-level expertise. It's democratized our workflow and improved our entire team's productivity.",
    highlight: "Team productivity up 200%",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "David Thompson",
    role: "BIM Consultant",
    company: "Independent Practice",
    avatar: "DT",
    rating: 5,
    quote: "I was skeptical about another 'AI automation' tool, but BIM Ops Studio actually delivers on its promises. My clients are amazed at how quickly we deliver high-quality results.",
    highlight: "Client satisfaction up 40%",
    color: "from-orange-500 to-red-400"
  },
  {
    name: "Lisa Wang",
    role: "Director of Technology",
    company: "HOK",
    avatar: "LW",
    rating: 5,
    quote: "The integration with our existing workflows was seamless. Within a week, our team was automating tasks we didn't even know could be automated. Game-changing technology.",
    highlight: "Seamless integration",
    color: "from-teal-500 to-blue-400"
  },
  {
    name: "James Mitchell",
    role: "Senior MEP Engineer", 
    company: "AECOM",
    avatar: "JM",
    rating: 5,
    quote: "Finally, a tool that understands the nuances of BIM coordination. The clash detection automation alone has saved us countless hours and prevented major issues downstream.",
    highlight: "Prevented 15+ major clashes",
    color: "from-indigo-500 to-purple-400"
  }
];

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "1000+", label: "Happy Users" },
  { value: "50M+", label: "Hours Saved" }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">
            ⭐ Loved by BIM Professionals
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Don't Just Take <span className="text-electric-blue">Our Word</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of BIM professionals have transformed their workflows with BIM Ops Studio. 
            Here's what they have to say about their experience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-electric-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${testimonial.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <Quote className="w-8 h-8 text-white/80 mb-4" />
                      <p className="text-white/95 font-medium leading-relaxed mb-4">
                        "{testimonial.quote}"
                      </p>
                      <Badge className="bg-white/20 text-white text-xs">
                        {testimonial.highlight}
                      </Badge>
                    </div>
                  </div>

                  {/* Footer with author info */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-electric-blue font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {testimonial.rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-electric-blue/5 to-lime-accent/5 rounded-2xl p-12 border border-electric-blue/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't just dream about efficiency—experience it. Start your free trial today and see why 
            BIM professionals worldwide choose BIM Ops Studio for their automation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="bg-electric-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
            </motion.button>
            <motion.button
              className="border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-lg font-semibold hover:bg-electric-blue/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
