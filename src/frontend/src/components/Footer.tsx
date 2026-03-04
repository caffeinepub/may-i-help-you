import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  const services = [
    "Plumbing",
    "Gas Pipeline & Stove Repair",
    "Electrical Repair",
    "WiFi Installation",
    "Dish TV Installation",
    "House Cleaning",
    "Printing Services",
    "Wallpaper Installation",
  ];

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Pricing", to: "/pricing" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Become a Partner", to: "/partner" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ];

  return (
    <footer className="bg-navy-800 text-white">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/generated/logo-transparent.dim_300x300.png"
                alt="May I Help You"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">
                  May I Help You
                </div>
                <div className="text-[11px] text-saffron-300">
                  Every Service at Your Doorstep
                </div>
              </div>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed mb-5">
              India's trusted on-demand household service platform. Quality
              service from verified professionals at your doorstep.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={15} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-700 hover:bg-saffron-500 flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <SiX size={15} />
              </a>
              <a
                href="https://wa.me/917000450726"
                className="w-9 h-9 rounded-full bg-navy-700 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-navy-200 hover:text-saffron-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-navy-200 hover:text-saffron-300 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-navy-200">
                <MapPin
                  size={16}
                  className="text-saffron-400 shrink-0 mt-0.5"
                />
                <span>
                  Usha Enterprises Pvt Ltd, Sangram Colony, Satna, Madhya
                  Pradesh, India – 485001
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-200">
                <Phone size={16} className="text-saffron-400 shrink-0" />
                <a
                  href="tel:+917000450726"
                  className="hover:text-saffron-300 transition-colors"
                >
                  +91 70004 50726
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-200">
                <Mail size={16} className="text-saffron-400 shrink-0" />
                <a
                  href="mailto:ngo.satna@gmail.com"
                  className="hover:text-saffron-300 transition-colors"
                >
                  ngo.satna@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-navy-700 rounded-lg">
              <p className="text-xs text-navy-200 mb-1 font-medium">
                Working Hours
              </p>
              <p className="text-sm text-white">Mon–Sat: 8 AM – 9 PM</p>
              <p className="text-sm text-white">Sunday: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-navy-300">
          <p>© {year} May I Help You. All rights reserved.</p>
          <p>
            Built with <span className="text-red-400">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-400 hover:text-saffron-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
