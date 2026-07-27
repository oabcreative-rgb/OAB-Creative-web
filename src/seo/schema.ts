import { absoluteUrl, CONTACT_EMAIL, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, SOCIAL_PROFILES } from "./config";

/**
 * JSON-LD builders. Every field here reflects information genuinely
 * visible elsewhere on the site — no fake reviews, ratings, addresses or
 * prices. Keep it that way when extending these.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    email: CONTACT_EMAIL,
    sameAs: SOCIAL_PROFILES,
    description:
      "OAB Creative is a creative studio providing brand identity, website design, motion design and digital marketing for businesses worldwide.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: `${opts.name} | ${SITE_NAME}`,
    description: opts.description,
    url: absoluteUrl(opts.path),
    image: opts.image ?? DEFAULT_OG_IMAGE,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image: string;
  authorName: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    image: opts.image,
    author: {
      "@type": "Person",
      name: opts.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.png"),
      },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
  };
}
