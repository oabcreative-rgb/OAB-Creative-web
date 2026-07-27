import type { ServiceSlug } from "../servicesData";

export const RESOURCE_CATEGORIES = [
  "Branding",
  "Website Design",
  "Motion Design",
  "Product Marketing",
  "Digital Marketing",
  "Business Growth",
  "Industry Guides",
] as const;

export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number];

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string }
  /**
   * A contextual mid-article callout — the mechanism for "natural" internal
   * linking (as opposed to only linking via the boilerplate related-service
   * card and CTA band at the very bottom of every article). Use sparingly:
   * one, maybe two, per article, placed where the point being made in the
   * surrounding text actually leads into it.
   */
  | { type: "cta"; text: string; linkLabel: string; href?: string; booking?: boolean };

export interface Article {
  slug: string;
  title: string;
  category: ResourceCategory;
  /** One-sentence search intent this article targets — for internal reference, not rendered. */
  searchIntent: string;
  excerpt: string;
  intro: string;
  body: ContentBlock[];
  authorName: string;
  authorRole: string;
  /** ISO date string, e.g. "2026-07-01". */
  publishedDate: string;
  updatedDate?: string;
  featuredImage?: string;
  /** Links to a relevant service page CTA. */
  relatedServiceSlug?: ServiceSlug;
  /** Links to a relevant industry landing page, if any. */
  relatedIndustryPath?: string;
  relatedArticleSlugs?: string[];
  /**
   * "draft" articles are written and ready for review but excluded from the
   * public index, sitemap, and get a noindex robots tag. Flip to
   * "published" once you've reviewed the copy.
   */
  status: "draft" | "published";
  tags: string[];
}

const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(article: Article): number {
  const wordCount =
    article.intro.split(/\s+/).length +
    article.body.reduce((sum, block) => {
      if (block.type === "paragraph" || block.type === "quote") return sum + block.text.split(/\s+/).length;
      if (block.type === "heading") return sum + block.text.split(/\s+/).length;
      if (block.type === "list") return sum + block.items.join(" ").split(/\s+/).length;
      if (block.type === "cta") return sum + (block.text + " " + block.linkLabel).split(/\s+/).length;
      return sum;
    }, 0);
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
