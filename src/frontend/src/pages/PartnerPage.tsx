import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitPartnerApplication } from "@/hooks/useQueries";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Loader2,
  Shield,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  {
    icon: Wallet,
    title: "Earn More",
    desc: "Get consistent bookings and earn ₹15,000–₹40,000 per month. Weekly payouts directly to your bank.",
  },
  {
    icon: Users,
    title: "Grow Your Client Base",
    desc: "Access thousands of customers in your city. Build a loyal customer base through our platform.",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    desc: "Get reviews, build your rating, and stand out as a top professional in your area.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Schedule",
    desc: "Accept jobs on your own time. You're in control of your schedule and earnings.",
  },
  {
    icon: Clock,
    title: "Quick Onboarding",
    desc: "Get verified and start accepting jobs within 48 hours of application.",
  },
  {
    icon: Shield,
    title: "Platform Support",
    desc: "Get insurance coverage, training support, and 24/7 helpline from our team.",
  },
];

const steps = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Fill the form with your details and skills",
  },
  {
    step: "02",
    title: "Document Verification",
    desc: "We verify your ID, address, and skill certificates",
  },
  {
    step: "03",
    title: "Skill Assessment",
    desc: "Quick test to confirm your expertise",
  },
  {
    step: "04",
    title: "Start Earning",
    desc: "Receive your first booking and begin earning",
  },
];

export default function PartnerPage() {
  const { mutateAsync: submitApplication, isPending } =
    useSubmitPartnerApplication();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    skills: "",
    documents: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.skills) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      await submitApplication(form);
      setSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch {
      toast.error("Failed to submit application. Please try again.");
    }
  }

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
              Become a Partner
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Join Our Professional Network
            </h1>
            <p className="text-navy-200 text-lg">
              Grow your business with May I Help You. Access thousands of
              customers and earn on your own terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted">
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
              Why Partner With Us
            </Badge>
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-2">
              Benefits of Joining
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Over 500 professionals across India have grown their business with
              May I Help You.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="h-full border-border hover:shadow-card-hover transition-shadow">
                    <CardContent className="p-5">
                      <div className="w-11 h-11 rounded-xl saffron-gradient flex items-center justify-center mb-3">
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-navy-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-2">
              How to Join
            </h2>
            <p className="text-muted-foreground">
              Get started in 4 simple steps
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full saffron-gradient flex items-center justify-center text-white font-bold text-lg mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-navy-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight
                    className="hidden md:block text-saffron-400 mt-3 rotate-0"
                    size={20}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted">
        <div className="container max-w-2xl">
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
              Apply Now
            </Badge>
            <h2 className="font-display text-3xl font-bold text-navy-800 mb-2">
              Partner Application Form
            </h2>
            <p className="text-muted-foreground">
              Fill the form below and our team will contact you within 48 hours.
            </p>
          </motion.div>

          <Card className="border-border shadow-card">
            <CardContent className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    data-ocid="partner.success_state"
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy-800">
                      Application Submitted!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thank you, {form.name}! Our team will call you at{" "}
                      {form.phone} within 48 hours for verification.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          phone: "",
                          city: "",
                          skills: "",
                          documents: "",
                        });
                      }}
                      variant="outline"
                      className="mt-2"
                    >
                      Submit Another Application
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="partner-name">Full Name *</Label>
                        <Input
                          id="partner-name"
                          data-ocid="partner.name_input"
                          placeholder="Ramesh Kumar"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="partner-phone">Phone Number *</Label>
                        <Input
                          id="partner-phone"
                          data-ocid="partner.phone_input"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="partner-city">City *</Label>
                      <Input
                        id="partner-city"
                        data-ocid="partner.city_input"
                        placeholder="e.g. Lucknow, Kanpur, Varanasi"
                        value={form.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="partner-skills">
                        Your Skills / Services *
                      </Label>
                      <Textarea
                        id="partner-skills"
                        data-ocid="partner.skills_input"
                        placeholder="e.g. Plumbing, Electrical work, WiFi setup — list all your skills"
                        value={form.skills}
                        onChange={(e) => handleChange("skills", e.target.value)}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="partner-documents">
                        Documents Available
                      </Label>
                      <Textarea
                        id="partner-documents"
                        placeholder="e.g. Aadhaar card, skill certificate, previous work experience"
                        value={form.documents}
                        onChange={(e) =>
                          handleChange("documents", e.target.value)
                        }
                        rows={2}
                      />
                      <p className="text-xs text-muted-foreground">
                        📎 You'll be asked to upload documents during in-person
                        verification
                      </p>
                    </div>

                    {/* Note about requirements */}
                    <div className="bg-saffron-50 border border-saffron-200 rounded-lg p-4">
                      <p className="text-xs text-saffron-800 font-medium mb-1">
                        Required Documents for Verification:
                      </p>
                      <ul className="text-xs text-saffron-700 space-y-0.5">
                        <li>• Government ID (Aadhaar / Voter Card / PAN)</li>
                        <li>• Address proof</li>
                        <li>
                          • Skill certificate or work samples (if available)
                        </li>
                        <li>• Passport size photograph</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      data-ocid="partner.submit_button"
                      disabled={isPending}
                      className="w-full saffron-gradient text-white font-semibold py-5 text-base shadow-saffron"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Earnings showcase */}
      <section className="py-12 saffron-gradient text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Our Partners Earn
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[
              { value: "₹15k–₹20k", label: "Entry Level / Month" },
              { value: "₹25k–₹35k", label: "Experienced / Month" },
              { value: "₹40k+", label: "Top Performers / Month" },
            ].map((e) => (
              <div key={e.label} className="text-center">
                <div className="font-display font-bold text-3xl">{e.value}</div>
                <div className="text-white/80 text-sm mt-1">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
