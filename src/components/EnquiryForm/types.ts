export interface EnquiryAnswers {
  needs: string[];
  businessInfo: string;
  goals: string[];
  hasWebsite: "" | "Yes" | "No" | "Some, but they need improvement";
  websiteLink: string;
  budget: string;
  timeline: string;
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  preferredContact: "" | "Email" | "WhatsApp" | "Discovery call";
  /** Honeypot — real visitors never see or fill this field in. */
  companyWebsite: string;
}

export const INITIAL_ANSWERS: EnquiryAnswers = {
  needs: [],
  businessInfo: "",
  goals: [],
  hasWebsite: "",
  websiteLink: "",
  budget: "",
  timeline: "",
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  preferredContact: "Email",
  companyWebsite: "",
};
