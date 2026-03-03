import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useServiceCategories, useSubmitBooking } from "@/hooks/useQueries";
import { CalendarDays, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedService?: string;
}

const TIME_SLOTS = [
  "8:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "6:00 PM – 8:00 PM",
];

const FALLBACK_SERVICES = [
  "Plumbing",
  "Gas Pipeline & Stove Repair",
  "Electrical Repair & Wiring",
  "WiFi Installation & Troubleshooting",
  "Dish TV Installation",
  "Indoor House Cleaning",
  "Printing Services",
  "Wallpaper Installation",
  "General Repair & Maintenance",
  "Other Household Tasks",
];

export default function BookingModal({
  open,
  onOpenChange,
  preSelectedService,
}: BookingModalProps) {
  const { data: categories } = useServiceCategories();
  const { mutateAsync: submitBooking, isPending } = useSubmitBooking();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceCategory: preSelectedService || "",
    preferredDate: "",
    timeSlot: "",
    address: "",
    notes: "",
  });
  const [success, setSuccess] = useState(false);

  const serviceList =
    categories && categories.length > 0
      ? categories.map((c) => c.name)
      : FALLBACK_SERVICES;

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !form.name ||
      !form.phone ||
      !form.serviceCategory ||
      !form.preferredDate ||
      !form.timeSlot ||
      !form.address
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      await submitBooking(form);
      setSuccess(true);
    } catch {
      toast.error("Failed to submit booking. Please try again.");
    }
  }

  function handleClose() {
    onOpenChange(false);
    setTimeout(() => {
      setSuccess(false);
      setForm({
        name: "",
        phone: "",
        serviceCategory: preSelectedService || "",
        preferredDate: "",
        timeSlot: "",
        address: "",
        notes: "",
      });
    }, 300);
  }

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-ocid="booking.dialog"
        className="max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-navy-800">
            Book a Service
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill the details below and our team will confirm your booking
            shortly.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              data-ocid="booking.success_state"
              className="flex flex-col items-center justify-center py-10 text-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h3 className="font-display text-xl text-navy-800 font-semibold">
                Booking Submitted!
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Thank you, {form.name}! We've received your booking request for{" "}
                <strong>{form.serviceCategory}</strong>. Our team will contact
                you at <strong>{form.phone}</strong> to confirm.
              </p>
              <Button
                onClick={handleClose}
                className="saffron-gradient text-white mt-2"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 mt-2"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="booking-name">Full Name *</Label>
                  <Input
                    id="booking-name"
                    data-ocid="booking.name_input"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="booking-phone">Phone Number *</Label>
                  <Input
                    id="booking-phone"
                    data-ocid="booking.phone_input"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Service Category *</Label>
                <Select
                  value={form.serviceCategory}
                  onValueChange={(v) => handleChange("serviceCategory", v)}
                >
                  <SelectTrigger data-ocid="booking.service_select">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceList.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="booking-date"
                    className="flex items-center gap-1.5"
                  >
                    <CalendarDays size={14} />
                    Preferred Date *
                  </Label>
                  <Input
                    id="booking-date"
                    data-ocid="booking.date_input"
                    type="date"
                    min={today}
                    value={form.preferredDate}
                    onChange={(e) =>
                      handleChange("preferredDate", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="flex items-center gap-1.5">
                    <Clock size={14} />
                    Time Slot *
                  </Label>
                  <Select
                    value={form.timeSlot}
                    onValueChange={(v) => handleChange("timeSlot", v)}
                  >
                    <SelectTrigger data-ocid="booking.timeslot_select">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="booking-address">Full Address *</Label>
                <Input
                  id="booking-address"
                  data-ocid="booking.address_input"
                  placeholder="House No, Street, Area, City"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="booking-notes">Additional Notes</Label>
                <Textarea
                  id="booking-notes"
                  data-ocid="booking.notes_input"
                  placeholder="Any specific requirements or details..."
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={2}
                />
              </div>

              <Button
                type="submit"
                data-ocid="booking.submit_button"
                disabled={isPending}
                className="w-full saffron-gradient text-white font-semibold py-5 text-base shadow-saffron"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
