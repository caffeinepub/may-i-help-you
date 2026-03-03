import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  useAllBookings,
  useAllContactMessages,
  useAllPartnerApplications,
  useIsAdmin,
  useMarkContactMessageAsRead,
  usePlatformStatistics,
  useUpdateBookingStatus,
  useUpdatePartnerApplicationStatus,
} from "@/hooks/useQueries";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Eye,
  Loader2,
  LogIn,
  LogOut,
  MessageSquare,
  Users,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import {
  type Variant_canceled_pending_completed_confirmed,
  Variant_pending_approved_rejected,
} from "../backend.d";

function formatTimestamp(ts: bigint): string {
  const ms = Number(ts / BigInt(1_000_000));
  return new Date(ms).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function BookingStatusBadge({
  status,
}: { status: Variant_canceled_pending_completed_confirmed }) {
  const variants: Record<string, { className: string; label: string }> = {
    pending: {
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
      label: "Pending",
    },
    confirmed: {
      className: "bg-blue-100 text-blue-800 border-blue-200",
      label: "Confirmed",
    },
    completed: {
      className: "bg-green-100 text-green-800 border-green-200",
      label: "Completed",
    },
    canceled: {
      className: "bg-red-100 text-red-800 border-red-200",
      label: "Canceled",
    },
  };
  const v = variants[status] || variants.pending;
  return <Badge className={`text-xs border ${v.className}`}>{v.label}</Badge>;
}

function PartnerStatusBadge({
  status,
}: { status: Variant_pending_approved_rejected }) {
  const variants: Record<string, { className: string; label: string }> = {
    pending: {
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
      label: "Pending",
    },
    approved: {
      className: "bg-green-100 text-green-800 border-green-200",
      label: "Approved",
    },
    rejected: {
      className: "bg-red-100 text-red-800 border-red-200",
      label: "Rejected",
    },
  };
  const v = variants[status] || variants.pending;
  return <Badge className={`text-xs border ${v.className}`}>{v.label}</Badge>;
}

function LoginSection() {
  const { login, isLoggingIn, isInitializing } = useInternetIdentity();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-sm w-full border-border shadow-card">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-2xl saffron-gradient flex items-center justify-center mx-auto mb-5">
            <LogIn size={28} className="text-white" />
          </div>
          <h2 className="font-display text-2xl font-bold text-navy-800 mb-2">
            Admin Login
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Login with your Internet Identity to access the admin dashboard.
          </p>
          <Button
            onClick={login}
            disabled={isLoggingIn || isInitializing}
            className="w-full saffron-gradient text-white font-semibold shadow-saffron"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Login with Internet Identity
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function NotAdminSection() {
  const { clear } = useInternetIdentity();
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-sm w-full border-destructive shadow-card">
        <CardContent className="p-8 text-center">
          <XCircle size={48} className="text-destructive mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-navy-800 mb-2">
            Access Denied
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Your account does not have admin privileges.
          </p>
          <Button variant="outline" onClick={clear} className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AdminPage() {
  const { identity, isInitializing } = useInternetIdentity();
  const { clear } = useInternetIdentity();
  const { data: isAdmin, isLoading: isAdminLoading } = useIsAdmin();
  const { data: stats, isLoading: statsLoading } = usePlatformStatistics();
  const { data: bookings, isLoading: bookingsLoading } = useAllBookings();
  const { data: partners, isLoading: partnersLoading } =
    useAllPartnerApplications();
  const { data: messages, isLoading: messagesLoading } =
    useAllContactMessages();

  const { mutateAsync: updateBookingStatus, isPending: updatingBooking } =
    useUpdateBookingStatus();
  const { mutateAsync: updatePartnerStatus, isPending: updatingPartner } =
    useUpdatePartnerApplicationStatus();
  const { mutateAsync: markAsRead } = useMarkContactMessageAsRead();

  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);

  if (isInitializing || isAdminLoading) {
    return (
      <div className="pt-24 min-h-screen bg-background">
        <div className="container py-8">
          <div className="space-y-4">
            {["sk1", "sk2", "sk3", "sk4"].map((k) => (
              <Skeleton key={k} className="h-16 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!identity) {
    return (
      <div className="pt-20 min-h-screen bg-background">
        <div className="container py-8">
          <LoginSection />
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="pt-20 min-h-screen bg-background">
        <div className="container py-8">
          <NotAdminSection />
        </div>
      </div>
    );
  }

  async function handleBookingStatus(id: bigint, status: string) {
    try {
      await updateBookingStatus({
        id,
        status: status as Variant_canceled_pending_completed_confirmed,
      });
      toast.success("Booking status updated");
    } catch {
      toast.error("Failed to update status");
    }
  }

  async function handlePartnerStatus(
    id: bigint,
    status: Variant_pending_approved_rejected,
  ) {
    try {
      await updatePartnerStatus({ id, status });
      toast.success("Application status updated");
    } catch {
      toast.error("Failed to update status");
    }
  }

  async function handleMarkRead(id: bigint) {
    try {
      await markAsRead(id);
      toast.success("Marked as read");
    } catch {
      toast.error("Failed to mark as read");
    }
  }

  const statCards = [
    {
      label: "Total Bookings",
      value: stats?.totalBookings?.toString() ?? "—",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "Pending Bookings",
      value: stats?.pendingBookings?.toString() ?? "—",
      icon: Clock,
      color: "text-yellow-600 bg-yellow-50",
    },
    {
      label: "Completed Bookings",
      value: stats?.completedBookings?.toString() ?? "—",
      icon: CheckCircle2,
      color: "text-green-600 bg-green-50",
    },
    {
      label: "Total Partners",
      value: stats?.totalPartners?.toString() ?? "—",
      icon: Users,
      color: "text-purple-600 bg-purple-50",
    },
    {
      label: "Total Messages",
      value: stats?.totalMessages?.toString() ?? "—",
      icon: MessageSquare,
      color: "text-saffron-600 bg-saffron-50",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-muted">
      {/* Admin Header */}
      <div className="bg-navy-800 text-white py-6">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-navy-300 text-sm">
              May I Help You — Management Panel
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={clear}
            className="border-white/30 text-white hover:bg-white/10"
          >
            <LogOut size={14} className="mr-1.5" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          data-ocid="admin.stats_panel"
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          {statsLoading
            ? ["sk1", "sk2", "sk3", "sk4", "sk5"].map((k) => (
                <Skeleton key={k} className="h-24 rounded-xl" />
              ))
            : statCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.label} className="border-border shadow-xs">
                    <CardContent className="p-4">
                      <div
                        className={`w-9 h-9 rounded-lg ${card.color} flex items-center justify-center mb-2`}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="font-display font-bold text-2xl text-navy-800">
                        {card.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {card.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="bookings">
          <TabsList className="mb-6 bg-white border border-border">
            <TabsTrigger value="bookings" data-ocid="admin.bookings_tab">
              <BookOpen size={14} className="mr-1.5" />
              Bookings
              {bookings && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {bookings.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="partners" data-ocid="admin.partners_tab">
              <Users size={14} className="mr-1.5" />
              Partners
              {partners && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {partners.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="messages" data-ocid="admin.messages_tab">
              <MessageSquare size={14} className="mr-1.5" />
              Messages
              {messages && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {messages.filter((m) => m.status === "unread").length} unread
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card className="border-border shadow-xs">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-navy-800">
                  All Bookings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {bookingsLoading ? (
                  <div className="p-4 space-y-3">
                    {["sk1", "sk2", "sk3", "sk4"].map((k) => (
                      <Skeleton key={k} className="h-12" />
                    ))}
                  </div>
                ) : !bookings || bookings.length === 0 ? (
                  <div
                    data-ocid="admin.bookings.empty_state"
                    className="py-16 text-center text-muted-foreground"
                  >
                    <BookOpen size={32} className="mx-auto mb-2 opacity-30" />
                    <p className="text-sm">No bookings yet</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="text-xs">ID</TableHead>
                          <TableHead className="text-xs">Customer</TableHead>
                          <TableHead className="text-xs">Service</TableHead>
                          <TableHead className="text-xs">Date</TableHead>
                          <TableHead className="text-xs">Slot</TableHead>
                          <TableHead className="text-xs">Status</TableHead>
                          <TableHead className="text-xs">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bookings.map((booking) => (
                          <TableRow
                            key={booking.id.toString()}
                            className="hover:bg-muted/30"
                          >
                            <TableCell className="text-xs text-muted-foreground">
                              #{booking.id.toString()}
                            </TableCell>
                            <TableCell>
                              <div className="text-sm font-medium text-navy-800">
                                {booking.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {booking.phone}
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground max-w-[120px] truncate">
                              {booking.serviceCategory}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {booking.preferredDate}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {booking.timeSlot}
                            </TableCell>
                            <TableCell>
                              <BookingStatusBadge status={booking.status} />
                            </TableCell>
                            <TableCell>
                              <Select
                                value={booking.status}
                                onValueChange={(v) =>
                                  handleBookingStatus(booking.id, v)
                                }
                                disabled={updatingBooking}
                              >
                                <SelectTrigger className="h-7 text-xs w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {[
                                    "pending",
                                    "confirmed",
                                    "completed",
                                    "canceled",
                                  ].map((s) => (
                                    <SelectItem
                                      key={s}
                                      value={s}
                                      className="text-xs capitalize"
                                    >
                                      {s}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners">
            <Card className="border-border shadow-xs">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-navy-800">
                  Partner Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {partnersLoading ? (
                  <div className="p-4 space-y-3">
                    {["sk1", "sk2", "sk3", "sk4"].map((k) => (
                      <Skeleton key={k} className="h-12" />
                    ))}
                  </div>
                ) : !partners || partners.length === 0 ? (
                  <div
                    data-ocid="admin.partners.empty_state"
                    className="py-16 text-center text-muted-foreground"
                  >
                    <Users size={32} className="mx-auto mb-2 opacity-30" />
                    <p className="text-sm">No partner applications yet</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="text-xs">ID</TableHead>
                          <TableHead className="text-xs">Name</TableHead>
                          <TableHead className="text-xs">City</TableHead>
                          <TableHead className="text-xs">Skills</TableHead>
                          <TableHead className="text-xs">Applied On</TableHead>
                          <TableHead className="text-xs">Status</TableHead>
                          <TableHead className="text-xs">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {partners.map((partner) => (
                          <TableRow
                            key={partner.id.toString()}
                            className="hover:bg-muted/30"
                          >
                            <TableCell className="text-xs text-muted-foreground">
                              #{partner.id.toString()}
                            </TableCell>
                            <TableCell>
                              <div className="text-sm font-medium text-navy-800">
                                {partner.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {partner.phone}
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {partner.city}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground max-w-[150px] truncate">
                              {partner.skills}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {formatTimestamp(partner.timestamp)}
                            </TableCell>
                            <TableCell>
                              <PartnerStatusBadge status={partner.status} />
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1.5">
                                {partner.status === "pending" && (
                                  <>
                                    <Button
                                      size="sm"
                                      className="h-7 text-xs bg-green-600 hover:bg-green-700 text-white px-2"
                                      disabled={updatingPartner}
                                      onClick={() =>
                                        handlePartnerStatus(
                                          partner.id,
                                          Variant_pending_approved_rejected.approved,
                                        )
                                      }
                                    >
                                      <CheckCircle2
                                        size={12}
                                        className="mr-1"
                                      />
                                      Approve
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      className="h-7 text-xs px-2"
                                      disabled={updatingPartner}
                                      onClick={() =>
                                        handlePartnerStatus(
                                          partner.id,
                                          Variant_pending_approved_rejected.rejected,
                                        )
                                      }
                                    >
                                      <XCircle size={12} className="mr-1" />
                                      Reject
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages">
            <Card className="border-border shadow-xs">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-navy-800">
                  Contact Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {messagesLoading ? (
                  <div className="p-4 space-y-3">
                    {["sk1", "sk2", "sk3", "sk4"].map((k) => (
                      <Skeleton key={k} className="h-16" />
                    ))}
                  </div>
                ) : !messages || messages.length === 0 ? (
                  <div
                    data-ocid="admin.messages.empty_state"
                    className="py-16 text-center text-muted-foreground"
                  >
                    <MessageSquare
                      size={32}
                      className="mx-auto mb-2 opacity-30"
                    />
                    <p className="text-sm">No messages yet</p>
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {messages.map((msg) => (
                      <div
                        key={msg.id.toString()}
                        className={`p-4 hover:bg-muted/30 transition-colors ${
                          msg.status === "unread" ? "bg-saffron-50/50" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm text-navy-800">
                                {msg.name}
                              </span>
                              {msg.status === "unread" && (
                                <Badge className="text-[10px] bg-saffron-500 text-white border-0 h-4">
                                  Unread
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground ml-auto shrink-0">
                                {formatTimestamp(msg.timestamp)}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
                              <span>📧 {msg.email}</span>
                              <span>📞 {msg.phone}</span>
                              {msg.services && <span>🔧 {msg.services}</span>}
                            </div>
                            <div
                              className={`text-sm text-foreground ${
                                expandedMessage === msg.id.toString()
                                  ? ""
                                  : "line-clamp-2"
                              }`}
                            >
                              {msg.message}
                            </div>
                            {msg.message.length > 100 && (
                              <button
                                type="button"
                                onClick={() =>
                                  setExpandedMessage(
                                    expandedMessage === msg.id.toString()
                                      ? null
                                      : msg.id.toString(),
                                  )
                                }
                                className="text-xs text-saffron-600 hover:underline mt-1"
                              >
                                {expandedMessage === msg.id.toString()
                                  ? "Show less"
                                  : "Read more"}
                              </button>
                            )}
                          </div>
                          <div className="shrink-0">
                            {msg.status === "unread" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 text-xs"
                                onClick={() => handleMarkRead(msg.id)}
                              >
                                <Eye size={12} className="mr-1" />
                                Mark Read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
