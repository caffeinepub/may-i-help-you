import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PartnerApplication {
    id: bigint;
    status: Variant_pending_approved_rejected;
    documents: string;
    city: string;
    name: string;
    timestamp: Time;
    phone: string;
    skills: string;
}
export type Time = bigint;
export interface Statistics {
    pendingBookings: bigint;
    totalBookings: bigint;
    totalMessages: bigint;
    totalPartners: bigint;
    completedBookings: bigint;
}
export interface ContactMessage {
    id: bigint;
    status: Variant_read_unread;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
    services: string;
}
export interface Booking {
    id: bigint;
    status: Variant_canceled_pending_completed_confirmed;
    serviceCategory: string;
    name: string;
    preferredDate: string;
    address: string;
    notes: string;
    timestamp: Time;
    phone: string;
    timeSlot: string;
}
export interface UserProfile {
    name: string;
}
export interface ServiceCategory {
    name: string;
    description: string;
    basePrice: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export enum Variant_canceled_pending_completed_confirmed {
    canceled = "canceled",
    pending = "pending",
    completed = "completed",
    confirmed = "confirmed"
}
export enum Variant_pending_approved_rejected {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum Variant_read_unread {
    read = "read",
    unread = "unread"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllPartnerApplications(): Promise<Array<PartnerApplication>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getPlatformStatistics(): Promise<Statistics>;
    getServiceCategories(): Promise<Array<ServiceCategory>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initialize(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    markContactMessageAsRead(id: bigint): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitBooking(name: string, phone: string, serviceCategory: string, preferredDate: string, timeSlot: string, address: string, notes: string): Promise<bigint>;
    submitContactMessage(name: string, phone: string, email: string, services: string, message: string): Promise<bigint>;
    submitPartnerApplication(name: string, phone: string, city: string, skills: string, documents: string): Promise<bigint>;
    updateBookingStatus(id: bigint, status: Variant_canceled_pending_completed_confirmed): Promise<void>;
    updatePartnerApplicationStatus(id: bigint, status: Variant_pending_approved_rejected): Promise<void>;
}
