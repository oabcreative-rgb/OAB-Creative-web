import { useEffect } from "react";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
} from "./config";
import { trackPageView } from "../config/analytics";

export interface SeoProps {
  /** Page title WITHOUT the site name suffix — it's appended automatically. */
  title: string;
  /** Use `title` exactly as given (e.g. the homepage's brand-first title) instead of appending " | OAB Creative". */
  rawTitle?: boolean;
  description: string;
  /** Route path, e.g. "/services/brand-identity" — used for canonical + og:url. */
  path: string;
  /** Absolute image URL. Falls back to the site default OG image. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** One structured-data object, or several (e.g. WebPage + BreadcrumbList). */
  jsonLd?: object | object[];
}

const MANAGED_ATTR = "data-seo-managed";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets per-page title, description, canonical URL, Open Graph, Twitter Card,
 * robots and JSON-LD structured data via direct DOM updates — no dependency
 * needed since this is a client-rendered SPA. Every tag it writes carries
 * data-seo-managed="true" so repeated navigations cleanly overwrite rather
 * than accumulate stale tags.
 *
 * Known limitation: this only reaches crawlers that execute JavaScript.
 * Googlebot does; social-preview bots (Facebook/Slack/X/LinkedIn link
 * unfurling) generally don't, so they'll only ever see index.html's static
 * defaults. Fixing that fully requires SSR/SSG/prerendering — out of scope
 * for this pass, documented as a follow-up.
 */
export default function Seo({
  title,
  rawTitle = false,
  description,
  path,
  image,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = rawTitle ? title : title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");

    const url = absoluteUrl(path);
    upsertLink("canonical", url);

    const ogImage = image ?? DEFAULT_OG_IMAGE;
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER_HANDLE);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    trackPageView(path, fullTitle);

    document.querySelectorAll('script[type="application/ld+json"][data-seo-managed]').forEach((el) => el.remove());
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute(MANAGED_ATTR, "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [title, rawTitle, description, path, image, type, noindex, jsonLd]);

  return null;
}
