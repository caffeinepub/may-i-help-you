import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-navy-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <Badge className="bg-saffron-500/20 text-saffron-300 border-saffron-500/30 mb-4">
              Legal
            </Badge>
            <h1 className="font-display text-4xl font-bold mb-2">
              Terms & Conditions
            </h1>
            <p className="text-navy-300 text-sm">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                By accessing or using the May I Help You platform, website, or
                mobile application, you agree to be bound by these Terms and
                Conditions. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                2. Services Description
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                May I Help You is a technology platform that connects customers
                with independent service professionals for household services.
                We act as an intermediary and do not directly provide the
                services. Service professionals are independent contractors, not
                employees.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                3. User Responsibilities
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Provide
                  accurate information during booking and registration
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Be present
                  at the scheduled service location and time
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Treat
                  service professionals with respect and dignity
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Make
                  timely payment as per agreed rates
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Not misuse
                  the platform for fraudulent or illegal activities
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Report any
                  issues or misconduct through official support channels
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                4. Booking and Cancellation
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Bookings
                  are confirmed subject to professional availability
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Free
                  cancellation up to 2 hours before scheduled time
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>
                  Cancellations within 2 hours may attract a ₹50 fee
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>No-shows
                  by customer may be charged a ₹100 cancellation fee
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>We reserve
                  the right to cancel bookings in case of emergency or force
                  majeure
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                5. Payment Terms
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Prices
                  shown are indicative. Final price is confirmed before service
                  begins
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Payment
                  methods: UPI, credit/debit cards, net banking, and wallets
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>GST will
                  be charged as applicable under Indian tax laws
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Refunds
                  for unsatisfactory service are processed within 5–7 business
                  days
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                6. Service Quality & Warranty
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                We strive to connect customers with quality professionals.
                However:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>We provide
                  a 24-hour re-service guarantee for substandard work
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Warranty
                  on parts/materials is as per manufacturer terms
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>We are not
                  liable for pre-existing damage or issues discovered during
                  service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                7. Partner/Professional Terms
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Partners
                  must maintain valid identity and address documents
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Commission
                  of 10–20% applies on bookings fulfilled through the platform
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Partners
                  must maintain professional conduct and quality standards
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron-500 shrink-0">•</span>Partners
                  may be removed for misconduct, poor ratings, or policy
                  violations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                May I Help You's liability is limited to the value of the
                service booking. We are not responsible for indirect,
                incidental, or consequential damages arising from the use of our
                platform or services rendered by professionals.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                9. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                These terms are governed by the laws of India. Any disputes
                shall be subject to the jurisdiction of courts in Lucknow, Uttar
                Pradesh.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                For questions about these Terms, contact us at:{" "}
                <a
                  href="mailto:legal@mayihelpyou.in"
                  className="text-saffron-600 hover:underline"
                >
                  legal@mayihelpyou.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
