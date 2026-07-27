/**
 * Central SEO / site configuration.
 *
 * SITE_URL is a PLACEHOLDER — confirm the real production domain and
 * replace it here before launch. Every canonical URL, Open Graph URL,
 * sitemap entry and structured-data URL in the site is built from this
 * single value, so updating it here is enough.
 */
export const SITE_URL = "https://www.oabcreativestudio.com";

export const SITE_NAME = "OAB Creative";

export const DEFAULT_TITLE = "OAB Creative | Branding, Website Design & Motion Design Studio";

export const DEFAULT_DESCRIPTION =
  "OAB Creative helps businesses build trust, stand out and grow through strategic branding, professional websites, motion design and digital marketing.";

/** Falls back to /og-default.jpg — see ASSET_CHECKLIST.md for the spec. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export const TWITTER_HANDLE = "@oabcreative";

export const CONTACT_EMAIL = "oabcreative@gmail.com";

/** Real, currently-displayed social profiles only — used in Organization structured data. */
export const SOCIAL_PROFILES = [
  "https://www.instagram.com/oabcreativestudio",
  "https://www.facebook.com/share/1BVLUMy1GZ/",
  "https://www.tiktok.com/@oabcreative",
  "https://pin.it/1hf85LhDA",
];

/**
 * Google Search Console verification. Leave as-is until you have a real
 * value from https://search.google.com/search-console (HTML tag method).
 */
export const GOOGLE_SITE_VERIFICATION = "INSERT_SEARCH_CONSOLE_VERIFICATION_CODE_HERE";

/**
 * GA4 measurement ID. Leave unset until you have a real property — the
 * analytics helper in src/config/analytics.ts no-ops until this is set.
 */
export const GA4_MEASUREMENT_ID = "INSERT_GA4_MEASUREMENT_ID_HERE";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
