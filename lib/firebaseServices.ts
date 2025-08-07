// lib/firebaseServices.ts
import { ref, push, set } from "firebase/database";
import { db } from "./firebase";

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

// Quote form data interface
export interface QuoteFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  products: string[];
  quantity: string;
  frequency: string;
  requirements: string;
  agreedToTerms: boolean;
}

// Function to submit contact form
export const submitContactForm = async (
  formData: ContactFormData
): Promise<string> => {
  try {
    // Reference to Firebase Realtime Database
    const newFormEntryRef = push(ref(db, "Vegetables/contact_inquiries"));

    // Set the data in Firebase with timestamp
    await set(newFormEntryRef, {
      ...formData,
      timestamp: Date.now(),
      status: "new",
    });

    console.log("Contact form submitted with ID: ", newFormEntryRef.key);
    return newFormEntryRef.key!;
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    throw new Error("Failed to submit contact form. Please try again.");
  }
};

// Function to submit quote request
export const submitQuoteRequest = async (
  formData: QuoteFormData
): Promise<string> => {
  try {
    // Reference to Firebase Realtime Database
    const newFormEntryRef = push(ref(db, "Vegetables/quote_requests"));

    // Set the data in Firebase with timestamp
    await set(newFormEntryRef, {
      ...formData,
      timestamp: Date.now(),
      status: "new",
    });

    console.log("Quote request submitted with ID: ", newFormEntryRef.key);
    return newFormEntryRef.key!;
  } catch (error) {
    console.error("Error submitting quote request: ", error);
    throw new Error("Failed to submit quote request. Please try again.");
  }
};
