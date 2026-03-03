import BookingModal from "@/components/BookingModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Eye,
  Flame,
  Hammer,
  MapPin,
  Package,
  PaintRoller,
  Printer,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Tv,
  Users,
  Wallet,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    icon: Wrench,
    name: "Plumbing",
    desc: "Leaks, pipes, taps, drainage – fixed fast",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Flame,
    name: "Gas & Stove Repair",
    desc: "Pipeline, cylinder connections & stove servicing",
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    name: "Electrical Repair",
    desc: "Wiring, switches, fans, and MCB fixes",
    color: "from-yellow-50 to-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Wifi,
    name: "WiFi Installation",
    desc: "Router setup, networking & troubleshooting",
    color: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Tv,
    name: "Dish TV Setup",
    desc: "DTH installation, alignment & maintenance",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Sparkles,
    name: "House Cleaning",
    desc: "Deep clean, dusting, and sanitization",
    color: "from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Printer,
    name: "Printing Services",
    desc: "Documents, photos, banners at your door",
    color: "from-gray-50 to-gray-100",
    iconColor: "text-gray-600",
  },
  {
    icon: PaintRoller,
    name: "Wallpaper Installation",
    desc: "Room décor with premium wallpapers",
    color: "from-pink-50 to-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Hammer,
    name: "General Repairs",
    desc: "Furniture, fixtures & maintenance tasks",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-700",
  },
  {
    icon: Package,
    name: "Other Tasks",
    desc: "Any daily household requirement",
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
];

const whyUs = [
  {
    icon: Wallet,
    title: "Affordable Prices",
    desc: "Transparent, flat-rate pricing with no hidden charges. Compare and book with full confidence.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    desc: "Service professional arrives within 2 hours. Emergency slots available same day.",
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    desc: "Every service partner undergoes background check, skill test & document verification.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Track your service boy in real-time. Get a digital invoice before any work begins.",
  },
];

const reviews = [
  {
    name: "Priya Verma",
    location: "Lucknow",
    rating: 5,
    text: "The electrician arrived in 45 minutes and fixed all our wiring issues in no time. Super professional and affordable. Highly recommended!",
    service: "Electrical Repair",
  },
  {
    name: "Rajesh Kumar",
    location: "Kanpur",
    rating: 5,
    text: "Got my WiFi router installed and configured perfectly. The technician was polite and explained everything clearly. Will book again!",
    service: "WiFi Installation",
  },
  {
    name: "Sunita Devi",
    location: "Varanasi",
    rating: 5,
    text: "Plumbing issue resolved in under an hour. Fair pricing, no extra charges. As a senior citizen alone at home, I feel safe using this service.",
    service: "Plumbing",
  },
  {
    name: "Amit Joshi",
    location: "Agra",
    rating: 5,
    text: "House cleaning was thorough and done in 3 hours. The team was respectful and left the house spotless. Excellent service!",
    service: "House Cleaning",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Bookings", icon: TrendingUp },
  { value: "50+", label: "Cities Covered", icon: MapPin },
  { value: "500+", label: "Verified Professionals", icon: Users },
  { value: "4.8★", label: "Average Rating", icon: Star },
];

const targets = [
  { emoji: "👨‍👩‍👧‍👦", label: "Working Families" },
  { emoji: "👴", label: "Senior Citizens" },
  { emoji: "🎓", label: "Students" },
  { emoji: "🏢", label: "Small Offices" },
  { emoji: "🛒", label: "Shop Owners" },
];

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 pattern-dots opacity-40" />

        {/* Hero Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/generated/hero-banner.dim_1200x600.jpg"
            alt="Professional home services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-saffron-500/20 text-saffron-300 border-saffron-500/30 mb-4 backdrop-blur-sm">
                India's #1 Home Service Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Every Household Service{" "}
              <span className="text-saffron-400">at Your Doorstep</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-navy-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Book verified professionals for plumbing, electrical, cleaning &
              10+ more services. Fast, affordable, and trustworthy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                onClick={() => setBookingOpen(true)}
                className="saffron-gradient text-white font-bold text-base px-8 py-6 shadow-saffron-lg hover:shadow-saffron-lg hover:scale-[1.02] transition-all duration-200"
              >
                Book a Service Now
                <ChevronRight className="ml-1" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-base px-8 py-6"
                asChild
              >
                <a href="tel:+919999999999">📞 Call Us Free</a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {[
                "✅ Verified Professionals",
                "💰 Transparent Pricing",
                "⚡ 2-Hour Response",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-navy-100 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-6 rounded-full bg-white/40"
          />
        </motion.div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────── */}
      <section className="bg-saffron-500 py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon size={22} className="mx-auto mb-1 opacity-80" />
                  <div className="font-display font-bold text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm opacity-80 mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="border-saffron-400 text-saffron-600 mb-3"
            >
              Our Services
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-3">
              All Services Under One Roof
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              From plumbing to cleaning, we cover every household need. Just
              book and relax — we handle the rest.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.name} variants={itemVariants}>
                  <Card
                    className="group cursor-pointer hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border"
                    onClick={() => setBookingOpen(true)}
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={26} className={service.iconColor} />
                      </div>
                      <p className="font-semibold text-navy-800 text-sm leading-tight mb-1">
                        {service.name}
                      </p>
                      <p className="text-xs text-muted-foreground leading-tight hidden sm:block">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-10">
            <Button
              data-ocid="booking.open_modal_button"
              size="lg"
              onClick={() => setBookingOpen(true)}
              className="saffron-gradient text-white font-semibold shadow-saffron"
            >
              Book Any Service Now
            </Button>
          </div>
        </div>
      </section>

      {/* ── Target Customers ───────────────────────────────────────────── */}
      <section className="py-12 bg-muted">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {targets.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-xs"
              >
                <span className="text-xl">{t.emoji}</span>
                <span className="text-sm font-medium text-navy-700">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="border-saffron-400 text-saffron-600 mb-3"
            >
              Why Choose Us
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-3">
              The May I Help You Promise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We've built our platform on four pillars that our customers trust
              most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border hover:shadow-card-hover transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl saffron-gradient flex items-center justify-center mb-4">
                        <Icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-navy-800 text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              How It Works
            </h2>
            <p className="text-navy-200 max-w-lg mx-auto">
              Book a service in less than 2 minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden sm:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-saffron-500/40 z-0" />

            {[
              {
                step: "01",
                title: "Choose Service",
                desc: "Pick from 10+ categories that match your need",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Book & Schedule",
                desc: "Select date, time, and share your address",
                icon: "📅",
              },
              {
                step: "03",
                title: "Pro Arrives",
                desc: "Verified professional arrives & completes the job",
                icon: "✅",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-saffron-500 flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-saffron-300 text-xs font-bold tracking-widest mb-1">
                  STEP {step.step}
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-navy-200 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              onClick={() => setBookingOpen(true)}
              className="saffron-gradient text-white font-bold shadow-saffron"
            >
              Get Started – Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* ── Customer Reviews ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="border-saffron-400 text-saffron-600 mb-3"
            >
              Reviews
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-3">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                <Star
                  key={k}
                  size={18}
                  className="fill-saffron-400 text-saffron-400"
                />
              ))}
              <span className="ml-2 text-sm font-medium text-muted-foreground">
                4.8 / 5 from 500+ reviews
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {reviews.map((review) => (
              <motion.div key={review.name} variants={itemVariants}>
                <Card className="h-full border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex mb-3">
                      {["r1", "r2", "r3", "r4", "r5"]
                        .slice(0, review.rating)
                        .map((k) => (
                          <Star
                            key={k}
                            size={14}
                            className="fill-saffron-400 text-saffron-400"
                          />
                        ))}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy-800 text-sm">
                          {review.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {review.service}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <section className="py-16 saffron-gradient">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Ready to Get Help at Home?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto">
              Join 10,000+ happy customers who trust May I Help You for all
              their household needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="bg-white text-saffron-600 hover:bg-white/90 font-bold px-8 py-6 text-base"
              >
                Book a Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-base"
                asChild
              >
                <a href="tel:+919999999999">📞 Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
