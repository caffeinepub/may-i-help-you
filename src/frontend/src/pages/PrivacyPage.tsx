import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-navy-300 text-sm">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-navy max-w-none">
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  May I Help You ("we," "us," or "our") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our platform, website, or mobile application.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <span>
                      <strong className="text-foreground">
                        Personal Information:
                      </strong>{" "}
                      Name, phone number, email address, and home/office address
                      when you book a service or register.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <span>
                      <strong className="text-foreground">Service Data:</strong>{" "}
                      Type of service booked, date, time, and location details.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <span>
                      <strong className="text-foreground">Usage Data:</strong>{" "}
                      Information about how you use our platform, including
                      pages visited and actions taken.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <span>
                      <strong className="text-foreground">Payment Data:</strong>{" "}
                      Transaction details processed through secure third-party
                      payment gateways. We do not store card details.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <span>
                      <strong className="text-foreground">Partner Data:</strong>{" "}
                      Service professionals provide ID documents, skill
                      certificates, and bank details for payouts.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  3. How We Use Your Information
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To
                    process and fulfill your service bookings
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To
                    communicate booking confirmations, updates, and support
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To
                    verify service professionals and maintain platform safety
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To
                    process payments and payouts
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To
                    improve our services and platform features
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To send
                    promotional offers (with your consent)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>To
                    comply with legal obligations
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  4. Data Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  We do not sell your personal data. We may share data with:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <strong className="text-foreground">
                      Service Professionals:
                    </strong>{" "}
                    Your name, phone, and address are shared with the assigned
                    professional for job completion.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <strong className="text-foreground">
                      Payment Processors:
                    </strong>{" "}
                    Secure third-party gateways for transaction processing.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>
                    <strong className="text-foreground">
                      Legal Authorities:
                    </strong>{" "}
                    When required by law or to protect rights and safety.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We implement industry-standard security measures including SSL
                  encryption, secure servers, and access controls. However, no
                  method of transmission over the internet is 100% secure, and
                  we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  6. Your Rights
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>Access
                    and download your personal data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>Request
                    correction of inaccurate data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>Request
                    deletion of your account and data
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>Opt out
                    of marketing communications
                  </li>
                  <li className="flex gap-2">
                    <span className="text-saffron-500 shrink-0">•</span>File a
                    complaint with the relevant data protection authority
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  7. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We use essential cookies to maintain sessions and improve user
                  experience. You may disable cookies through your browser
                  settings, though some features may not function properly.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  8. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our services are not directed at individuals under 18 years of
                  age. We do not knowingly collect personal data from minors.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We may update this Privacy Policy periodically. We will notify
                  you of significant changes via email or a prominent notice on
                  our platform.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
                  10. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  For privacy-related queries, contact us at:{" "}
                  <a
                    href="mailto:privacy@mayihelpyou.in"
                    className="text-saffron-600 hover:underline"
                  >
                    privacy@mayihelpyou.in
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+919999999999"
                    className="text-saffron-600 hover:underline"
                  >
                    +91 99999 99999
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
