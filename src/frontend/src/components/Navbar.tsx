import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Become a Partner", to: "/partner" },
];

const ocidMap: Record<string, string> = {
  "/": "nav.home_link",
  "/services": "nav.services_link",
  "/pricing": "nav.pricing_link",
  "/about": "nav.about_link",
  "/contact": "nav.contact_link",
  "/partner": "nav.partner_link",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/generated/logo-transparent.dim_300x300.png"
              alt="May I Help You"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-navy-700 text-base md:text-lg leading-tight">
                May I Help You
              </span>
              <span className="text-[10px] text-saffron-500 font-medium hidden sm:block">
                Every Service at Your Doorstep
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={ocidMap[link.to]}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-saffron-600 bg-saffron-50"
                    : "text-navy-700 hover:text-saffron-600 hover:bg-saffron-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-saffron-600 transition-colors"
            >
              <Phone size={14} />
              <span className="font-medium">+91 99999 99999</span>
            </a>
            <Button
              data-ocid="nav.book_now_button"
              onClick={() => setBookingOpen(true)}
              className="saffron-gradient text-white shadow-saffron hover:shadow-saffron-lg transition-all duration-200 font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-navy-700"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 pb-6 border-b border-border">
                  <img
                    src="/assets/generated/logo-transparent.dim_300x300.png"
                    alt="May I Help You"
                    className="h-10 w-10 object-contain"
                  />
                  <span className="font-display font-bold text-navy-700 text-lg">
                    May I Help You
                  </span>
                </div>
                <nav className="flex flex-col gap-1 py-6 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      data-ocid={ocidMap[link.to]}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === link.to
                          ? "text-saffron-600 bg-saffron-50"
                          : "text-navy-700 hover:text-saffron-600 hover:bg-saffron-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="pb-6 border-t border-border pt-6 space-y-3">
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-2 text-sm text-navy-600"
                  >
                    <Phone size={14} />
                    <span>+91 99999 99999</span>
                  </a>
                  <Button
                    data-ocid="nav.book_now_button"
                    onClick={() => {
                      setMobileOpen(false);
                      setBookingOpen(true);
                    }}
                    className="w-full saffron-gradient text-white font-semibold"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
