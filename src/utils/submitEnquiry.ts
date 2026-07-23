import type { EnquiryAnswers } from "../components/EnquiryForm/types";

const STUDIO_EMAIL = "oabcreative@gmail.com";

function formatList(values: string[]): string {
  return values.length ? values.join(", ") : "Not specified";
}

function buildEmailBody(answers: EnquiryAnswers): string {
  const lines = [
    `What can we help with: ${formatList(answers.needs)}`,
    "",
    `About the business: ${answers.businessInfo || "Not provided"}`,
    "",
    `Project goals: ${formatList(answers.goals)}`,
    "",
    `Existing website / brand materials: ${answers.hasWebsite || "Not specified"}`,
    answers.websiteLink ? `Link: ${answers.websiteLink}` : null,
    "",
    `Estimated budget: ${answers.budget || "Not specified"}`,
    "",
    `Timeline: ${answers.timeline || "Not specified"}`,
    "",
    `Business name: ${answers.businessName || "Not provided"}`,
    `Preferred contact method: ${answers.preferredContact || "Not specified"}`,
    answers.phone ? `Phone / WhatsApp: ${answers.phone}` : null,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

/**
 * Sends a completed enquiry. The project has no backend today, so this
 * opens a pre-filled mailto: draft — the same mechanism the rest of the
 * site's forms use. Every caller already awaits this and handles
 * rejection, so swapping the body for a real API call later is a
 * one-function change.
 */
export async function submitEnquiry(answers: EnquiryAnswers): Promise<void> {
  // Simulated network delay so the UI's loading state has something to show.
  await new Promise((resolve) => setTimeout(resolve, 700));

  const subject = `New project enquiry from ${answers.fullName || "website visitor"}`;
  const body = buildEmailBody(answers);

  window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
