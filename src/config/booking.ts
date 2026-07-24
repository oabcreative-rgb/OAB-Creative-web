/**
 * Central booking link configuration.
 *
 * Replace BOOKING_URL with your live Calendly, Cal.com, or Google Calendar
 * scheduling link. Every "Book a Call" entry point in the app (navbar,
 * homepage, enquiry confirmation screen) reads from this single value, so
 * it only ever needs to be set in one place.
 *
 * Example:
 *   export const BOOKING_URL = "https://calendly.com/your-team/discovery-call";
 */
export const BOOKING_URL = "https://calendly.com/oabcreativebranding/30min";

/** True once BOOKING_URL has been replaced with a real scheduling link. */
export function isBookingConfigured(): boolean {
  return Boolean(BOOKING_URL) && !BOOKING_URL.startsWith("INSERT_");
}
