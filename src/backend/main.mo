import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Types and Modules
  // User Profile
  public type UserProfile = {
    name : Text;
  };

  // Service Category
  public type ServiceCategory = {
    name : Text;
    description : Text;
    basePrice : Nat;
  };

  module ServiceCategory {
    public func compare(category1 : ServiceCategory, category2 : ServiceCategory) : Order.Order {
      Text.compare(category1.name, category2.name);
    };
  };

  // Booking
  public type Booking = {
    id : Nat;
    name : Text;
    phone : Text;
    serviceCategory : Text;
    preferredDate : Text;
    timeSlot : Text;
    address : Text;
    notes : Text;
    timestamp : Time.Time;
    status : { #pending; #confirmed; #completed; #canceled };
  };

  module Booking {
    public func compare(booking1 : Booking, booking2 : Booking) : Order.Order {
      Nat.compare(booking1.id, booking2.id);
    };
  };

  // Partner Application
  public type PartnerApplication = {
    id : Nat;
    name : Text;
    phone : Text;
    city : Text;
    skills : Text;
    documents : Text;
    timestamp : Time.Time;
    status : { #pending; #approved; #rejected };
  };

  module PartnerApplication {
    public func compare(app1 : PartnerApplication, app2 : PartnerApplication) : Order.Order {
      Nat.compare(app1.id, app2.id);
    };
  };

  // Contact Message
  public type ContactMessage = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    services : Text;
    message : Text;
    timestamp : Time.Time;
    status : { #unread; #read };
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Nat.compare(msg1.id, msg2.id);
    };
  };

  // State
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let userProfiles = Map.empty<Principal, UserProfile>();
  let serviceCategories = Map.empty<Text, ServiceCategory>();
  let bookings = Map.empty<Nat, Booking>();
  let partnerApplications = Map.empty<Nat, PartnerApplication>();
  let contactMessages = Map.empty<Nat, ContactMessage>();
  var nextBookingId = 1;
  var nextPartnerAppId = 1;
  var nextContactMsgId = 1;

  public type Statistics = {
    totalBookings : Nat;
    pendingBookings : Nat;
    completedBookings : Nat;
    totalPartners : Nat;
    totalMessages : Nat;
  };

  // User Profile Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Pre-seed Service Categories
  public shared ({ caller }) func initialize() : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    let categories = [
      ("Plumbing", "All plumbing requirements - Faucet installation, Water supply issues, Leakages, Bathroom repairs, Faucet repairs", 300),
      ("Gas Pipeline & Stove Repair", "Any pipeline work and stove repairs", 300),
      ("Electricity Repair & Wiring", "Switch board repairs, Electric wiring, Switch replacement, Lighting, Ceiling Fan, Door bell, Inverter servicing", 300),
      ("WiFi Installation & Troubleshooting", "WiFi installation, Troubleshooting", 300),
      ("Dish TV Installation & Maintenance", "Dish service not included in major providers services", 300),
      ("Indoor House Cleaning", "Kitchen, Bathroom, Fridge / Appliance Cleaning", 300),
      ("Printing Services", "On-demand printing delivery", 300),
      ("Room Wallpaper Installation", "Wallpaper setup and implementation", 300),
      ("General Repair & Maintenance", "Furniture setup & repair, Faucet setups, Door repairs, Curtain rod fixes", 300),
      ("Other Daily Household Tasks", "Call for any other requirements", 300),
    ];
    for ((name, description, price) in categories.values()) {
      let category : ServiceCategory = {
        name;
        description;
        basePrice = price;
      };
      serviceCategories.add(name, category);
    };
  };

  // Public Functions (No Auth Required)
  public query ({ caller }) func getServiceCategories() : async [ServiceCategory] {
    serviceCategories.values().toArray().sort();
  };

  public shared ({ caller }) func submitBooking(name : Text, phone : Text, serviceCategory : Text, preferredDate : Text, timeSlot : Text, address : Text, notes : Text) : async Nat {
    if (not serviceCategories.containsKey(serviceCategory)) {
      Runtime.trap("Service category does not exist");
    };
    let id = nextBookingId;
    let booking : Booking = {
      id;
      name;
      phone;
      serviceCategory;
      preferredDate;
      timeSlot;
      address;
      notes;
      timestamp = Time.now();
      status = #pending;
    };
    bookings.add(id, booking);
    nextBookingId += 1;
    id;
  };

  public shared ({ caller }) func submitPartnerApplication(name : Text, phone : Text, city : Text, skills : Text, documents : Text) : async Nat {
    let id = nextPartnerAppId;
    let application : PartnerApplication = {
      id;
      name;
      phone;
      city;
      skills;
      documents;
      timestamp = Time.now();
      status = #pending;
    };
    partnerApplications.add(id, application);
    nextPartnerAppId += 1;
    id;
  };

  public shared ({ caller }) func submitContactMessage(name : Text, phone : Text, email : Text, services : Text, message : Text) : async Nat {
    let id = nextContactMsgId;
    let contactMessage : ContactMessage = {
      id;
      name;
      phone;
      email;
      services;
      message;
      timestamp = Time.now();
      status = #unread;
    };
    contactMessages.add(id, contactMessage);
    nextContactMsgId += 1;
    id;
  };

  // Admin Functions (Auth Protected)
  public query ({ caller }) func getAllBookings() : async [Booking] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    bookings.values().toArray().sort();
  };

  public query ({ caller }) func getAllPartnerApplications() : async [PartnerApplication] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    partnerApplications.values().toArray().sort();
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    contactMessages.values().toArray().sort();
  };

  public shared ({ caller }) func updateBookingStatus(id : Nat, status : { #pending; #confirmed; #completed; #canceled }) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking does not exist") };
      case (?booking) {
        bookings.add(id, { booking with status });
      };
    };
  };

  public shared ({ caller }) func updatePartnerApplicationStatus(id : Nat, status : { #pending; #approved; #rejected }) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    switch (partnerApplications.get(id)) {
      case (null) { Runtime.trap("Partner application does not exist") };
      case (?application) {
        partnerApplications.add(id, { application with status });
      };
    };
  };

  public shared ({ caller }) func markContactMessageAsRead(id : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    switch (contactMessages.get(id)) {
      case (null) { Runtime.trap("Contact message does not exist") };
      case (?message) {
        contactMessages.add(id, { message with status = #read });
      };
    };
  };

  public query ({ caller }) func getPlatformStatistics() : async Statistics {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    let totalBookings = bookings.size();
    let pendingBookings = bookings.values().filter(func(b) { b.status == #pending }).toArray().size();
    let completedBookings = bookings.values().filter(func(b) { b.status == #completed }).toArray().size();
    let totalPartners = partnerApplications.size();
    let totalMessages = contactMessages.size();

    {
      totalBookings;
      pendingBookings;
      completedBookings;
      totalPartners;
      totalMessages;
    };
  };
};
