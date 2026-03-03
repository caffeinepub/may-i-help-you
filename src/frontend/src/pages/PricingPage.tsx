import BookingModal from "@/components/BookingModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, IndianRupee, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const pricingTable = [
  {
    service: "Plumbing",
    basic: "₹199",
    standard: "₹399",
    premium: "₹799",
    duration: "1–2 hrs",
  },
  {
    service: "Gas Pipeline & Stove Repair",
    basic: "₹249",
    standard: "₹499",
    premium: "₹999",
    duration: "1–2 hrs",
  },
  {
    service: "Electrical Repair & Wiring",
    basic: "₹199",
    standard: "₹449",
    premium: "₹899",
    duration: "1–3 hrs",
  },
  {
    service: "WiFi Installation",
    basic: "₹299",
    standard: "₹549",
    premium: "₹999",
    duration: "1–2 hrs",
  },
  {
    service: "Dish TV Installation",
    basic: "₹349",
    standard: "₹649",
    premium: "₹1,199",
    duration: "2–3 hrs",
  },
  {
    service: "Indoor House Cleaning",
    basic: "₹499",
    standard: "₹999",
    premium: "₹1,799",
    duration: "3–5 hrs",
  },
  {
    service: "Printing Services",
    basic: "₹49/page",
    standard: "₹99 (10 pgs)",
    premium: "₹249 (30 pgs)",
    duration: "30 mins",
  },
  {
    service: "Wallpaper Installation",
    basic: "₹799/room",
    standard: "₹1,299/room",
    premium: "₹2,499/room",
    duration: "4–6 hrs",
  },
  {
    service: "General Repair",
    basic: "₹149",
    standard: "₹299",
    premium: "₹599",
    duration: "1–2 hrs",
  },
  {
    service: "Other Tasks",
    basic: "₹99",
    standard: "₹199",
    premium: "₹399",
    duration: "1 hr",
  },
];

const membershipPlans = [
  {
    name: "Basic",
    price: "₹299",
    period: "/month",
    description: "Perfect for occasional use",
    color: "border-border",
    badge: "",
    features: [
      "2 free service visits/month",
      "5% discount on all services",
      "Priority support via WhatsApp",
      "Service history tracking",
      "Invoice generation",
    ],
  },
  {
    name: "Standard",
    price: "₹599",
    period: "/month",
    description: "Best for families",
    color: "border-saffron-400",
    badge: "Most Popular",
    features: [
      "5 free service visits/month",
      "10% discount on all services",
      "Dedicated service manager",
      "Emergency same-day slot",
      "Service history tracking",
      "Invoice generation",
      "Family plan (up to 4 members)",
    ],
  },
  {
    name: "Premium",
    price: "₹999",
    period: "/month",
    description: "For offices & power users",
    color: "border-navy-600",
    badge: "Best Value",
    features: [
      "Unlimited service visits",
      "20% discount on all services",
      "Dedicated service manager",
      "Emergency 1-hour response",
      "Priority scheduling",
      "Annual home inspection",
      "Invoice & expense reports",
      "Up to 10 members",
    ],
  },
];

export default function PricingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

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
              Pricing
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Transparent & Fair Pricing
            </h1>
            <p className="text-navy-200 text-lg">
              No hidden charges. No surprises. What you see is what you pay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-2">
              Service Pricing
            </h2>
            <p className="text-muted-foreground">
              Prices vary by complexity. Basic = quick fix, Standard = full
              repair, Premium = complete overhaul
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-border shadow-card"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="text-left p-4 font-semibold">Service</th>
                  <th className="p-4 font-semibold text-center">Basic</th>
                  <th className="p-4 font-semibold text-center bg-saffron-500/20">
                    Standard
                  </th>
                  <th className="p-4 font-semibold text-center">Premium</th>
                  <th className="p-4 font-semibold text-center">Duration</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-t border-border hover:bg-muted/50 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-background"
                    }`}
                  >
                    <td className="p-4 font-medium text-navy-800">
                      {row.service}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {row.basic}
                    </td>
                    <td className="p-4 text-center font-semibold text-saffron-600 bg-saffron-50">
                      {row.standard}
                    </td>
                    <td className="p-4 text-center text-navy-700 font-medium">
                      {row.premium}
                    </td>
                    <td className="p-4 text-center text-xs text-muted-foreground">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-xs text-muted-foreground text-center mt-3">
            * Prices are indicative. Final price may vary based on location and
            complexity. GST extra where applicable.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-muted">
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
              Membership Plans
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-3">
              Save More with a Membership
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Subscribe monthly and save up to 20% on every service booking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {membershipPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className={`relative h-full border-2 ${plan.color} ${
                    plan.badge === "Most Popular"
                      ? "shadow-saffron"
                      : "shadow-card"
                  } hover:shadow-card-hover transition-shadow`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge
                        className={
                          plan.badge === "Most Popular"
                            ? "saffron-gradient text-white border-0"
                            : "bg-navy-700 text-white border-0"
                        }
                      >
                        {plan.badge === "Most Popular" && (
                          <Star size={10} className="mr-1 fill-white" />
                        )}
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold text-navy-700">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-0.5 mt-2">
                      <span className="font-display font-bold text-3xl text-navy-900">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2
                            size={15}
                            className="text-saffron-500 shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full font-semibold ${
                        plan.badge === "Most Popular"
                          ? "saffron-gradient text-white shadow-saffron"
                          : "border-2 border-navy-700 text-navy-700 bg-transparent hover:bg-navy-700 hover:text-white"
                      }`}
                      variant={
                        plan.badge === "Most Popular" ? "default" : "outline"
                      }
                      onClick={() => setBookingOpen(true)}
                    >
                      Get {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ note */}
      <section className="py-10 bg-background">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground text-sm">
            All plans include a 7-day free trial. Cancel anytime. For corporate
            pricing or bulk bookings,{" "}
            <a
              href="/contact"
              className="text-saffron-600 hover:underline font-medium"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
