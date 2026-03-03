import BookingModal from "@/components/BookingModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useServiceCategories } from "@/hooks/useQueries";
import {
  ChevronRight,
  Flame,
  Hammer,
  IndianRupee,
  Package,
  PaintRoller,
  Printer,
  Sparkles,
  Tv,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const SERVICE_META: Record<
  string,
  {
    icon: React.ElementType;
    color: string;
    iconColor: string;
    features: string[];
  }
> = {
  Plumbing: {
    icon: Wrench,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    features: [
      "Pipe repair & replacement",
      "Tap & faucet fixing",
      "Drain cleaning",
      "Water tank cleaning",
    ],
  },
  "Gas Pipeline & Stove Repair": {
    icon: Flame,
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    features: [
      "Gas line inspection",
      "Cylinder connection",
      "Stove burner repair",
      "Chimney fitting",
    ],
  },
  "Electrical Repair & Wiring": {
    icon: Zap,
    color: "from-yellow-50 to-yellow-100",
    iconColor: "text-yellow-600",
    features: [
      "MCB & switchboard repair",
      "Fan installation",
      "Light fitting",
      "Full wiring",
    ],
  },
  "WiFi Installation & Troubleshooting": {
    icon: Wifi,
    color: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    features: [
      "Router setup",
      "Network troubleshooting",
      "Cable management",
      "Speed optimization",
    ],
  },
  "Dish TV Installation": {
    icon: Tv,
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    features: [
      "Dish antenna mounting",
      "Alignment & tuning",
      "Set-top box setup",
      "Channel configuration",
    ],
  },
  "Indoor House Cleaning": {
    icon: Sparkles,
    color: "from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    features: [
      "Deep cleaning",
      "Kitchen & bathroom",
      "Floor polishing",
      "Sofa & carpet cleaning",
    ],
  },
  "Printing Services": {
    icon: Printer,
    color: "from-gray-50 to-gray-100",
    iconColor: "text-gray-600",
    features: [
      "Document printing",
      "Photo prints",
      "Banner printing",
      "Lamination",
    ],
  },
  "Room Wallpaper Installation": {
    icon: PaintRoller,
    color: "from-pink-50 to-pink-100",
    iconColor: "text-pink-600",
    features: [
      "Wallpaper supply",
      "Surface preparation",
      "Seamless installation",
      "Premium designs",
    ],
  },
  "General Repair & Maintenance": {
    icon: Hammer,
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-700",
    features: [
      "Furniture assembly",
      "Door & window repair",
      "Lock replacement",
      "Tile fixing",
    ],
  },
  "Other Daily Household Tasks": {
    icon: Package,
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
    features: [
      "Custom requests",
      "Moving assistance",
      "Home inspection",
      "Handyman tasks",
    ],
  },
};

const FALLBACK_SERVICES = [
  {
    name: "Plumbing",
    description:
      "Professional plumbing services for all water and pipe related issues.",
    basePrice: BigInt(199),
  },
  {
    name: "Gas Pipeline & Stove Repair",
    description: "Safe and efficient gas pipeline installation and repair.",
    basePrice: BigInt(249),
  },
  {
    name: "Electrical Repair & Wiring",
    description: "Expert electrical repair, wiring and installation services.",
    basePrice: BigInt(199),
  },
  {
    name: "WiFi Installation & Troubleshooting",
    description: "Fast and reliable WiFi setup and network troubleshooting.",
    basePrice: BigInt(299),
  },
  {
    name: "Dish TV Installation",
    description: "DTH antenna installation, alignment and channel setup.",
    basePrice: BigInt(349),
  },
  {
    name: "Indoor House Cleaning",
    description: "Deep cleaning, sanitization and housekeeping services.",
    basePrice: BigInt(499),
  },
  {
    name: "Printing Services",
    description: "Document, photo and banner printing services at home.",
    basePrice: BigInt(49),
  },
  {
    name: "Room Wallpaper Installation",
    description: "Premium wallpaper supply and professional installation.",
    basePrice: BigInt(799),
  },
  {
    name: "General Repair & Maintenance",
    description: "All types of household repair and maintenance tasks.",
    basePrice: BigInt(149),
  },
  {
    name: "Other Daily Household Tasks",
    description: "Any other custom household requirement handled by experts.",
    basePrice: BigInt(99),
  },
];

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { data: categories, isLoading } = useServiceCategories();

  const services =
    categories && categories.length > 0 ? categories : FALLBACK_SERVICES;

  function handleBookService(name: string) {
    setSelectedService(name);
    setBookingOpen(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 bg-navy-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <Badge className="bg-saffron-500/20 text-saffron-300 border-saffron-500/30 mb-4">
              All Services
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Professional Home Services
            </h1>
            <p className="text-navy-200 text-lg">
              10+ specialized services delivered by verified professionals.
              Quality guaranteed, prices fixed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
                <Skeleton key={k} className="h-48 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const meta = SERVICE_META[service.name] || {
                  icon: Package,
                  color: "from-gray-50 to-gray-100",
                  iconColor: "text-gray-600",
                  features: [
                    "Professional service",
                    "Quality guaranteed",
                    "Verified expert",
                    "Affordable price",
                  ],
                };
                const Icon = meta.icon;

                return (
                  <motion.div
                    key={service.name}
                    data-ocid={`services.item.${index + 1}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 4) * 0.1 }}
                  >
                    <Card className="group hover:shadow-card-hover transition-all duration-300 border-border overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          {/* Icon area */}
                          <div
                            className={`w-28 md:w-36 bg-gradient-to-br ${meta.color} flex flex-col items-center justify-center p-4 gap-2 shrink-0`}
                          >
                            <Icon size={36} className={meta.iconColor} />
                            <span className="text-xs font-semibold text-navy-700 text-center leading-tight">
                              {service.name}
                            </span>
                          </div>
                          {/* Content */}
                          <div className="p-5 flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="text-sm text-muted-foreground leading-snug mb-2">
                                  {service.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {meta.features.slice(0, 3).map((f) => (
                                    <Badge
                                      key={f}
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {f}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-0.5">
                                <span className="text-xs text-muted-foreground">
                                  Starting from
                                </span>
                                <IndianRupee
                                  size={14}
                                  className="text-saffron-600 ml-1"
                                />
                                <span className="font-bold text-saffron-600 text-base">
                                  {service.basePrice.toString()}
                                </span>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => handleBookService(service.name)}
                                className="saffron-gradient text-white text-xs shadow-saffron group-hover:shadow-saffron-lg"
                              >
                                Book Now
                                <ChevronRight size={14} className="ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 saffron-gradient text-white text-center">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Need a Custom Service?
          </h2>
          <p className="text-white/85 mb-6">
            Can't find what you need? Call us and we'll arrange it.
          </p>
          <Button
            size="lg"
            onClick={() => setBookingOpen(true)}
            className="bg-white text-saffron-600 hover:bg-white/90 font-bold"
          >
            Book Any Service
          </Button>
        </div>
      </section>

      <BookingModal
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        preSelectedService={selectedService}
      />
    </>
  );
}
