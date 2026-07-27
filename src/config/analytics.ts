import { GA4_MEASUREMENT_ID } from "../seo/config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

function isConfigured(): boolean {
  return Boolean(GA4_MEASUREMENT_ID) && !GA4_MEASUREMENT_ID.startsWith("INSERT_");
}

/**
 * Loads the GA4 script tag once, only if a real measurement ID has been
 * set. No-ops entirely otherwise, so the app never fetches or references a
 * placeholder analytics ID.
 */
function ensureLoaded() {
  if (initialized || !isConfigured() || typeof document === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });
}

/**
 * Central event-tracking helper. Safe to call unconditionally anywhere in
 * the app — it no-ops until GA4_MEASUREMENT_ID (src/seo/config.ts) is set
 * to a real property ID.
 *
 * Trackable events currently wired up:
 *   book_call_click        — any "Book a Call" / "Book a Discovery Call" click (BookingButton)
 *   enquiry_form_start      — first successful step in the project enquiry form
 *   enquiry_form_complete    — enquiry form submitted successfully
 *   portfolio_project_open   — a portfolio card is clicked through to a case study
 *   testimonial_video_play  — a testimonial video is played
 *   page_view                — SPA route change (mirrors GA4's own page_view, since
 *                              client-side routing doesn't trigger it automatically)
 *
 * Not yet wired up because no matching UI element currently exists:
 *   whatsapp_click — add this call when a real WhatsApp contact link is added.
 */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}): void {
  if (!isConfigured()) return;
  ensureLoaded();
  window.gtag?.("event", name, params);
}

export function trackPageView(path: string, title: string): void {
  if (!isConfigured()) return;
  ensureLoaded();
  window.gtag?.("event", "page_view", { page_path: path, page_title: title });
}
