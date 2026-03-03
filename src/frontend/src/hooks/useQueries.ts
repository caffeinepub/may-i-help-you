import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  Variant_canceled_pending_completed_confirmed,
  Variant_pending_approved_rejected,
} from "../backend.d";
import { useActor } from "./useActor";

// ── Service Categories ────────────────────────────────────────────────────
export function useServiceCategories() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["serviceCategories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getServiceCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── Platform Statistics ───────────────────────────────────────────────────
export function usePlatformStatistics() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["platformStatistics"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getPlatformStatistics();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── Admin Check ───────────────────────────────────────────────────────────
export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── All Bookings ──────────────────────────────────────────────────────────
export function useAllBookings() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── All Partner Applications ──────────────────────────────────────────────
export function useAllPartnerApplications() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["allPartnerApplications"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPartnerApplications();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── All Contact Messages ──────────────────────────────────────────────────
export function useAllContactMessages() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["allContactMessages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactMessages();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── Submit Booking ────────────────────────────────────────────────────────
export function useSubmitBooking() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      serviceCategory: string;
      preferredDate: string;
      timeSlot: string;
      address: string;
      notes: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitBooking(
        data.name,
        data.phone,
        data.serviceCategory,
        data.preferredDate,
        data.timeSlot,
        data.address,
        data.notes,
      );
    },
  });
}

// ── Submit Contact Message ────────────────────────────────────────────────
export function useSubmitContactMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      services: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactMessage(
        data.name,
        data.phone,
        data.email,
        data.services,
        data.message,
      );
    },
  });
}

// ── Submit Partner Application ────────────────────────────────────────────
export function useSubmitPartnerApplication() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      city: string;
      skills: string;
      documents: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitPartnerApplication(
        data.name,
        data.phone,
        data.city,
        data.skills,
        data.documents,
      );
    },
  });
}

// ── Update Booking Status ─────────────────────────────────────────────────
export function useUpdateBookingStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: bigint;
      status: Variant_canceled_pending_completed_confirmed;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateBookingStatus(id, status);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["allBookings"] });
    },
  });
}

// ── Update Partner Application Status ────────────────────────────────────
export function useUpdatePartnerApplicationStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: bigint;
      status: Variant_pending_approved_rejected;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updatePartnerApplicationStatus(id, status);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["allPartnerApplications"],
      });
    },
  });
}

// ── Mark Contact Message as Read ──────────────────────────────────────────
export function useMarkContactMessageAsRead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.markContactMessageAsRead(id);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["allContactMessages"] });
    },
  });
}
