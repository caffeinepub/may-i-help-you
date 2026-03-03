import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactMessage } from "@/hooks/useQueries";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Plumbing",
  "Gas Pipeline & Stove Repair",
  "Electrical Repair & Wiring",
  "WiFi Installation & Troubleshooting",
  "Dish TV Installation",
  "Indoor House Cleaning",
  "Printing Services",
  "Room Wallpaper Installation",
  "General Repair & Maintenance",
  "Other",
];

export default function ContactPage() {
  const { mutateAsync: submitMessage, isPending } = useSubmitContactMessage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      await submitMessage(form);
      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message. Please try again.");
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
              Contact Us
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-navy-200 text-lg">
              Have a question, need a quote, or want to share feedback? We're
              here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                Send Us a Message
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    data-ocid="contact.success_state"
                    className="flex flex-col items-center justify-center py-16 text-center gap-4 bg-green-50 rounded-2xl border border-green-200"
                  >
                    <CheckCircle2 size={48} className="text-green-600" />
                    <h3 className="font-display text-xl font-semibold text-navy-800">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thanks, {form.name}! We'll get back to you at {form.email}{" "}
                      within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          phone: "",
                          email: "",
                          services: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                      className="mt-2"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input
                          id="contact-name"
                          data-ocid="contact.name_input"
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-phone">Phone Number *</Label>
                        <Input
                          id="contact-phone"
                          data-ocid="contact.phone_input"
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
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        data-ocid="contact.email_input"
                        type="email"
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Service of Interest</Label>
                      <Select
                        value={form.services}
                        onValueChange={(v) => handleChange("services", v)}
                      >
                        <SelectTrigger data-ocid="contact.service_select">
                          <SelectValue placeholder="Select a service (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-message">Your Message *</Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message_input"
                        placeholder="Describe your query or requirement..."
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={isPending}
                      className="w-full saffron-gradient text-white font-semibold py-5 shadow-saffron"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-bold text-navy-800">
                Contact Information
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    lines: [
                      "Usha Enterprises Pvt Ltd",
                      "Sangram Colony, Satna, Madhya Pradesh – 485001",
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    lines: [
                      "+91 70004 50726 (Helpline)",
                      "+91 70004 50726 (WhatsApp)",
                    ],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    lines: ["support@mayihelpyou.in", "partner@mayihelpyou.in"],
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    lines: [
                      "Monday–Saturday: 8 AM – 9 PM",
                      "Sunday: 9 AM – 6 PM",
                    ],
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="border-border shadow-xs">
                      <CardContent className="p-4 flex gap-4">
                        <div className="w-10 h-10 rounded-xl saffron-gradient flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy-800 text-sm mb-1">
                            {item.title}
                          </p>
                          {item.lines.map((line) => (
                            <p
                              key={line}
                              className="text-sm text-muted-foreground"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Links */}
              <Card className="border-saffron-200 bg-saffron-50">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-navy-800 mb-3">
                    Quick Contact
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://wa.me/917000450726"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-green-700 hover:underline font-medium"
                    >
                      💬 Chat on WhatsApp
                    </a>
                    <a
                      href="tel:+917000450726"
                      className="flex items-center gap-2 text-sm text-saffron-700 hover:underline font-medium"
                    >
                      📞 Call Helpline
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
