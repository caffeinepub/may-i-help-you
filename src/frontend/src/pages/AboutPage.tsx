import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  Eye,
  Heart,
  Lightbulb,
  Swords,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    desc: "Every decision is made with the customer's convenience, safety, and satisfaction in mind.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "All professionals undergo rigorous verification, training, and performance monitoring.",
  },
  {
    icon: Users,
    title: "Empowering Workers",
    desc: "We create dignified livelihood opportunities for skilled workers across India.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    desc: "We continuously improve our technology and processes to deliver better experiences.",
  },
];

const swot = {
  strengths: [
    "All services under one platform",
    "Affordable & transparent pricing",
    "Quick 2-hour response guarantee",
    "Rigorous professional verification",
    "Easy mobile booking",
  ],
  weaknesses: [
    "New brand in a competitive market",
    "Initial coverage limited to select cities",
    "Building trust takes time",
  ],
  opportunities: [
    "Growing demand for home services in India",
    "Large unorganized sector to formalize",
    "Rising smartphone & internet penetration",
    "Senior citizens & nuclear families needing help",
    "Franchise model for pan-India expansion",
  ],
  threats: [
    "Competition from Urban Company & Sulekha",
    "Service provider retention challenges",
    "Customer acquisition costs",
    "Quality consistency at scale",
  ],
};

const milestones = [
  { year: "2024", event: "Company Founded by Mr. Neeraj Mishra" },
  { year: "2024", event: "Platform launched in Lucknow, UP" },
  { year: "2025", event: "Expanded to 10 cities across UP" },
  { year: "2025", event: "Crossed 10,000 bookings milestone" },
  { year: "2026", event: "Pan-India expansion planned" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 bg-navy-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <Badge className="bg-saffron-500/20 text-saffron-300 border-saffron-500/30 mb-4">
              About Us
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-navy-200 text-lg">
              Connecting India's households with trusted, skilled professionals
              — one service at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Solving India's Household Service Problem
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">May I Help You</strong> was
                born from a simple observation: millions of Indian families
                struggle daily to find reliable, affordable household service
                professionals. Whether it's a leaking tap on a Monday morning, a
                broken fuse at night, or a WiFi router that won't connect —
                getting help shouldn't be stressful.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2024 by Mr. Neeraj Mishra (MBA), our platform bridges
                the gap between customers who need help and skilled
                professionals who want fair work. We verify every service
                professional, set transparent prices, and guarantee quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today we serve working families, senior citizens, students,
                small offices, and shop owners across multiple cities in Uttar
                Pradesh — with plans to expand across India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "10,000+", label: "Bookings Completed" },
                { value: "500+", label: "Verified Professionals" },
                { value: "50+", label: "Cities Covered" },
                { value: "4.8★", label: "Customer Rating" },
              ].map((stat) => (
                <Card key={stat.label} className="border-border shadow-card">
                  <CardContent className="p-5 text-center">
                    <div className="font-display font-bold text-3xl text-saffron-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-saffron-200 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl saffron-gradient flex items-center justify-center">
                      <Eye size={18} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy-800">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become{" "}
                    <strong className="text-foreground">
                      India's most trusted home service provider platform
                    </strong>{" "}
                    — where every household can get reliable help within hours,
                    at fair prices, from verified professionals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-2 border-navy-200 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center">
                      <Target size={18} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-navy-800">
                      Our Mission
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Provide affordable household services",
                      "Deliver quick 2-hour response",
                      "Ensure verified & skilled professionals",
                      "Maintain full transparency in pricing",
                    ].map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-saffron-500 shrink-0 mt-0.5"
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="border-saffron-400 text-saffron-600 mb-3"
            >
              Leadership
            </Badge>
            <h2 className="font-display text-3xl font-bold text-navy-800">
              Meet Our Founder
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border shadow-card-hover overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-56 saffron-gradient flex flex-col items-center justify-center py-10 px-6 text-white">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-4xl font-display font-bold mb-3">
                      NM
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg leading-tight">
                        Neeraj Mishra
                      </div>
                      <div className="text-white/80 text-sm mt-1">
                        CEO & Founder
                      </div>
                      <div className="text-white/70 text-xs mt-0.5">MBA</div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className="font-display text-xl font-bold text-navy-800 mb-3">
                      Mr. Neeraj Mishra, MBA
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      With an MBA degree and deep understanding of India's
                      service economy, Mr. Neeraj Mishra founded May I Help You
                      with a clear vision: to organize the fragmented home
                      service market and bring dignity, transparency, and
                      reliability to everyday household help.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      "Every household in India deserves access to skilled,
                      affordable help. We're building the trust infrastructure
                      that makes that possible — one verified professional, one
                      happy customer at a time."
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "MBA Graduate",
                        "Entrepreneur",
                        "Home Services Expert",
                        "Tech Visionary",
                      ].map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-2">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border hover:shadow-card-hover transition-shadow">
                    <CardContent className="p-5 text-center">
                      <div className="w-12 h-12 rounded-xl saffron-gradient flex items-center justify-center mx-auto mb-3">
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-navy-800 mb-2">
                        {v.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {v.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge
              variant="outline"
              className="border-saffron-400 text-saffron-600 mb-3"
            >
              SWOT Analysis
            </Badge>
            <h2 className="font-display text-3xl font-bold text-navy-800">
              Where We Stand
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              {
                title: "Strengths",
                items: swot.strengths,
                icon: TrendingUp,
                color: "bg-green-50 border-green-200",
                iconColor: "text-green-600",
                dotColor: "bg-green-500",
              },
              {
                title: "Weaknesses",
                items: swot.weaknesses,
                icon: AlertTriangle,
                color: "bg-red-50 border-red-200",
                iconColor: "text-red-500",
                dotColor: "bg-red-400",
              },
              {
                title: "Opportunities",
                items: swot.opportunities,
                icon: Lightbulb,
                color: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-600",
                dotColor: "bg-blue-500",
              },
              {
                title: "Threats",
                items: swot.threats,
                icon: Swords,
                color: "bg-orange-50 border-orange-200",
                iconColor: "text-orange-600",
                dotColor: "bg-orange-400",
              },
            ].map((quadrant, i) => {
              const Icon = quadrant.icon;
              return (
                <motion.div
                  key={quadrant.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`border ${quadrant.color} h-full`}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={18} className={quadrant.iconColor} />
                        <h3 className={`font-semibold ${quadrant.iconColor}`}>
                          {quadrant.title}
                        </h3>
                      </div>
                      <ul className="space-y-1.5">
                        {quadrant.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${quadrant.dotColor} shrink-0 mt-1.5`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold mb-2">
              Our Journey
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-saffron-500/30" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={`${m.year}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-saffron-500/20 border border-saffron-500/40 flex items-center justify-center z-10 relative">
                      <span className="text-saffron-300 font-bold text-xs">
                        {m.year}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-white font-medium">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
