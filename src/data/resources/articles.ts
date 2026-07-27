import type { Article } from "./types";

/**
 * Article content layer. Add a new article by pushing an object into
 * ARTICLES — the Resources index and /resources/:slug route pick it up
 * automatically, no other code changes needed.
 *
 * The five med spa articles below are part of the initial SEO content
 * cluster. All five are `status: "published"`. To unpublish one, flip its
 * `status` back to "draft" — the sitemap/index/robots handling updates
 * automatically. Note: published article routes must also be added to
 * scripts/sitemap-routes.json (the sitemap generator reads a separate,
 * hand-maintained manifest rather than importing this file directly).
 */
export const ARTICLES: Article[] = [
  {
    slug: "med-spa-website-design-consultation-bookings",
    title: "How to Design a Med Spa Website That Generates More Consultation Bookings",
    category: "Industry Guides",
    searchIntent: "med spa website design for bookings",
    excerpt:
      "The design decisions that separate a med spa website prospects browse from one they actually book a consultation through.",
    intro:
      "Most med spa websites are built to look good in a screenshot, not to guide a nervous first-time visitor toward booking a consultation. The two goals aren't the same. A website that generates consultations is designed around the questions a prospective client is silently asking — is this place trustworthy, is it clean and professional, what will this actually cost, and how do I take the next step — and it answers each one before the visitor has to go looking.",
    body: [
      { type: "heading", level: 2, text: "Start with the decision a visitor is actually making" },
      {
        type: "paragraph",
        text: "Someone landing on a med spa website isn't just browsing services — they're deciding whether to trust a provider with their face, skin or body. That's a higher-stakes decision than most e-commerce or SaaS browsing, and the website needs to be designed with that weight in mind. Every section should move the visitor closer to feeling safe enough to book, not just closer to reading more information.",
      },
      { type: "heading", level: 2, text: "Lead with clarity, not a slideshow of services" },
      {
        type: "paragraph",
        text: "A homepage that opens with a rotating carousel of ten different treatments usually confuses more than it converts. Visitors typically arrive already interested in one or two specific treatments — often from a Google search, an Instagram post or a friend's recommendation. The homepage should make it obvious within seconds what the practice specializes in, who it serves, and what makes it credible, then guide the visitor toward the specific treatment or consultation they came for.",
      },
      { type: "heading", level: 2, text: "Make booking the easiest thing on the page" },
      {
        type: "list",
        items: [
          "A visible, consistent \"Book a Consultation\" call to action on every page — not buried in a menu",
          "Multiple ways to get in touch — not just a phone number that only works during business hours",
          "Clear next steps immediately after someone submits a form (what happens, and when)",
          "No unnecessary form fields that add friction before a first conversation",
        ],
      },
      {
        type: "cta",
        text: "A booking flow this deliberate rarely happens by accident — it's usually the result of a website built around one specific goal instead of a general template.",
        linkLabel: "See how our website design process works",
        href: "/services/website-design",
      },
      { type: "heading", level: 2, text: "Show real proof, not just claims" },
      {
        type: "paragraph",
        text: "Photography quality does more work on a med spa website than almost any other design decision. Clean, well-lit photography of the space, the team and (where compliant and consented to) real results builds more trust than any amount of marketing copy. If strong photography isn't available yet, a calmer, more restrained design with honest copy will build more trust than stock imagery that looks generic or, worse, actively misleading.",
      },
      { type: "heading", level: 2, text: "Design for the mobile visitor first" },
      {
        type: "paragraph",
        text: "A large share of med spa research happens on a phone, often in a spare five minutes between other tasks. Long paragraphs, tiny tap targets and slow-loading pages lose visitors before they ever reach a booking button. A mobile-first layout with a fast load time and a thumb-reachable CTA consistently outperforms a desktop-first design that's simply shrunk down.",
      },
      { type: "heading", level: 2, text: "The takeaway" },
      {
        type: "paragraph",
        text: "A med spa website that converts isn't the one with the most treatments listed or the flashiest animation — it's the one that makes a cautious first-time visitor feel confident enough to take the next step. That comes down to clarity, credibility and a genuinely easy path to booking.",
      },
    ],
    authorName: "Amule Emmanuel",
    authorRole: "Founder & Creative Director",
    publishedDate: "2026-07-26",
    relatedServiceSlug: "website-design",
    relatedIndustryPath: "/industries/med-spa-website-design",
    relatedArticleSlugs: [
      "med-spa-website-mistakes-that-reduce-trust",
      "what-every-med-spa-homepage-should-include",
    ],
    status: "published",
    tags: ["med spa", "website design", "conversion"],
  },
  {
    slug: "med-spa-website-mistakes-that-reduce-trust",
    title: "7 Med Spa Website Mistakes That Reduce Client Trust",
    category: "Industry Guides",
    searchIntent: "med spa website mistakes trust",
    excerpt: "Seven common design and content mistakes that quietly make an otherwise good med spa look less credible online.",
    intro:
      "A med spa can have an excellent team and genuinely great results, and still lose prospective clients because the website undermines the trust the practice has earned in person. These mistakes are common, easy to overlook, and each one chips away at credibility before a visitor ever picks up the phone.",
    body: [
      { type: "heading", level: 2, text: "1. Outdated or inconsistent branding" },
      {
        type: "paragraph",
        text: "A logo, color palette or typography that feels dated — or that doesn't match what's used on Instagram or in the physical space — creates a subtle sense that the business isn't being actively maintained. In a category built on looking current, that impression matters more than it might elsewhere.",
      },
      { type: "heading", level: 2, text: "2. Low-quality or stock-only photography" },
      {
        type: "paragraph",
        text: "Generic stock photos of models who clearly aren't real clients or staff are one of the fastest ways to erode trust in an aesthetics business. Visitors are looking for a sense of the real space and real people they'd be trusting with a treatment.",
      },
      { type: "heading", level: 2, text: "3. Pricing that's either hidden or handled awkwardly" },
      {
        type: "paragraph",
        text: "Completely hiding pricing can feel evasive, while a long, confusing price list can feel overwhelming. A clearer approach — even just a starting-from range or a transparent explanation of how consultations determine pricing — reduces friction without requiring a full public price list.",
      },
      { type: "heading", level: 2, text: "4. No clear indication of qualifications or safety standards" },
      {
        type: "paragraph",
        text: "Aesthetic treatments carry real risk, and visitors increasingly research who is actually performing them. A website that doesn't clearly present provider qualifications, certifications or safety protocols leaves an obvious trust gap competitors can close.",
      },
      { type: "heading", level: 2, text: "5. A slow, cluttered or hard-to-navigate site" },
      {
        type: "paragraph",
        text: "Slow load times and confusing navigation read as a lack of care — an uncomfortable association for a business whose entire value proposition is precision and care.",
      },
      { type: "heading", level: 2, text: "6. A booking process that feels like a barrier" },
      {
        type: "paragraph",
        text: "Requiring a phone call during business hours as the only way to book, or a long form with unnecessary fields, loses visitors who were ready to commit but hit friction at the last step.",
      },
      { type: "heading", level: 2, text: "7. No content that answers real questions" },
      {
        type: "paragraph",
        text: "Prospective clients often have specific questions about downtime, discomfort, results timelines or aftercare. A website with no content addressing these leaves that research to Google — and often to a competitor's website instead.",
      },
      { type: "heading", level: 2, text: "Fixing these doesn't require a full rebuild" },
      {
        type: "paragraph",
        text: "Most of these issues can be addressed incrementally — better photography, a clearer booking flow, an updated qualifications section — without a complete website overhaul. The goal is simply to make sure the website reflects the same level of care the practice already delivers in person.",
      },
      {
        type: "cta",
        text: "If you're not sure which of these apply to your own site, a short conversation is usually faster than guessing.",
        linkLabel: "Book a Discovery Call",
        booking: true,
      },
    ],
    authorName: "Amule Emmanuel",
    authorRole: "Founder & Creative Director",
    publishedDate: "2026-07-26",
    relatedServiceSlug: "website-design",
    relatedIndustryPath: "/industries/med-spa-website-design",
    relatedArticleSlugs: [
      "med-spa-website-design-consultation-bookings",
      "med-spa-website-redesign-checklist",
    ],
    status: "published",
    tags: ["med spa", "website design", "trust"],
  },
  {
    slug: "what-every-med-spa-homepage-should-include",
    title: "What Every Med Spa Homepage Should Include",
    category: "Industry Guides",
    searchIntent: "med spa homepage essentials",
    excerpt: "A practical breakdown of the sections a med spa homepage needs to build trust and guide visitors toward booking.",
    intro:
      "The homepage carries more weight than any other page on a med spa website — it's usually the first, and sometimes only, page a visitor sees before deciding whether to explore further or leave. Miss one of the sections below and the gap tends to show up as a quiet drop-off, not an obvious complaint: visitors just leave without booking, and it's rarely clear why.",
    body: [
      { type: "heading", level: 2, text: "A clear opening statement" },
      {
        type: "paragraph",
        text: "Within the first few seconds, a visitor should understand what the practice specializes in and who it's for. A strong headline names the outcome clients are looking for — clearer skin, a more contoured look, a refreshed appearance — rather than only naming the business.",
      },
      { type: "heading", level: 2, text: "A visible path to booking" },
      {
        type: "paragraph",
        text: "A consistent, easy-to-find call to action — usually \"Book a Consultation\" — should appear near the top of the page and again at natural points as the visitor scrolls, without feeling repetitive or pushy.",
      },
      { type: "heading", level: 2, text: "Core treatments, clearly organized" },
      {
        type: "paragraph",
        text: "Rather than listing every service in dense text, group treatments into clear categories (skin, injectables, body, and so on) with enough detail to help a visitor recognize what they're looking for and click through to learn more.",
      },
      { type: "heading", level: 2, text: "Real photography of the space and team" },
      {
        type: "paragraph",
        text: "Even a handful of high-quality photos of the physical space and the people who work there does more to build comfort than a page full of icons and stock imagery. On the homepage specifically, this photography earns its place early — near the top, close to the opening statement — rather than being saved for an \"About\" page most visitors never reach.",
      },
      {
        type: "cta",
        text: "Getting this sequence right — what appears first, what earns a scroll, what leads to the booking button — is most of what separates a homepage that converts from one that just exists.",
        linkLabel: "See how our website design process works",
        href: "/services/website-design",
      },
      { type: "heading", level: 2, text: "Credibility markers" },
      {
        type: "list",
        items: [
          "Provider qualifications or certifications",
          "Years in practice or relevant experience",
          "Any accreditations or affiliations that are genuinely held",
          "Real client testimonials, where you have permission to share them",
        ],
      },
      { type: "heading", level: 2, text: "Answers to the questions visitors are already asking" },
      {
        type: "paragraph",
        text: "A short FAQ or \"what to expect\" section addressing downtime, comfort and results timelines reduces hesitation and pre-answers the questions that would otherwise require a phone call.",
      },
      { type: "heading", level: 2, text: "A clear, low-friction final call to action" },
      {
        type: "paragraph",
        text: "The homepage should end the way it began — with an unmistakable next step, not a vague \"contact us\" that leaves the visitor to figure out what happens next.",
      },
    ],
    authorName: "Amule Emmanuel",
    authorRole: "Founder & Creative Director",
    publishedDate: "2026-07-26",
    relatedServiceSlug: "website-design",
    relatedIndustryPath: "/industries/med-spa-website-design",
    relatedArticleSlugs: [
      "med-spa-website-design-consultation-bookings",
      "how-branding-helps-aesthetic-clinics-look-premium",
    ],
    status: "published",
    tags: ["med spa", "homepage", "website design"],
  },
  {
    slug: "how-branding-helps-aesthetic-clinics-look-premium",
    title: "How Better Branding Helps Aesthetic Clinics Look More Premium",
    category: "Industry Guides",
    searchIntent: "aesthetic clinic branding premium",
    excerpt: "Why visual identity — not just the treatment menu — determines whether an aesthetic clinic reads as premium or generic.",
    intro:
      "Two clinics can offer nearly identical treatments at similar skill levels and still be perceived completely differently — one as a premium, considered practice, the other as generic and interchangeable. Much of that perception gap comes down to branding: the logo, color palette, typography and overall visual consistency a clinic presents everywhere it shows up.",
    body: [
      { type: "heading", level: 2, text: "Consistency signals professionalism" },
      {
        type: "paragraph",
        text: "When a clinic's Instagram, website, signage and printed materials all feel like they belong to the same considered system, it signals a level of care and organization that clients unconsciously associate with quality of treatment — even before they've experienced it firsthand.",
      },
      { type: "heading", level: 2, text: "Color and typography set the tone before a word is read" },
      {
        type: "paragraph",
        text: "A calm, restrained palette and confident typography read as clinical precision and premium care. A cluttered mix of fonts, colors and styles — often the result of branding that grew ad hoc over time — reads as unplanned, even if the actual treatments are excellent.",
      },
      { type: "heading", level: 2, text: "A strong identity makes marketing easier, not harder" },
      {
        type: "paragraph",
        text: "With a clear brand system in place, every new social post, flyer or email template has a starting point instead of being designed from scratch. That consistency compounds — each new piece of content reinforces the same premium impression instead of diluting it.",
      },
      { type: "heading", level: 2, text: "Premium doesn't mean expensive-looking for its own sake" },
      {
        type: "paragraph",
        text: "Strong branding isn't about excess — ornate logos or heavy visual effects often read as trying too hard. The clinics that feel most premium tend to use restraint: clean layouts, deliberate whitespace, a focused color palette and typography that feels considered rather than decorative.",
      },
      { type: "heading", level: 2, text: "Where to start" },
      {
        type: "paragraph",
        text: "For most clinics, the highest-impact starting point is a clear identity system — logo, color palette, typography and basic usage guidelines — that everything else (website, social templates, signage) can be built from. It doesn't need to happen all at once, but it does need a clear foundation to stay consistent as the practice grows.",
      },
      {
        type: "cta",
        text: "That foundation is exactly what a brand identity engagement is built to deliver — a system, not just a logo.",
        linkLabel: "Explore our brand identity service",
        href: "/services/brand-identity",
      },
    ],
    authorName: "Amule Emmanuel",
    authorRole: "Founder & Creative Director",
    publishedDate: "2026-07-26",
    relatedServiceSlug: "brand-identity",
    relatedIndustryPath: "/industries/med-spa-website-design",
    relatedArticleSlugs: [
      "what-every-med-spa-homepage-should-include",
      "med-spa-website-redesign-checklist",
    ],
    status: "published",
    tags: ["med spa", "branding", "aesthetic clinics"],
  },
  {
    slug: "med-spa-website-redesign-checklist",
    title: "A Med Spa Website Redesign Checklist",
    category: "Industry Guides",
    searchIntent: "med spa website redesign checklist",
    excerpt: "A practical checklist to work through before, during and after a med spa website redesign.",
    intro:
      "A website redesign is a meaningful investment of time and budget, and it's easy to lose track of the fundamentals in the middle of choosing colors and layouts. Most of the redesigns that underdeliver aren't missing a good designer — they're missing this groundwork. Work through it stage by stage and the design decisions get considerably easier.",
    body: [
      { type: "heading", level: 2, text: "Before you start" },
      {
        type: "list",
        items: [
          "Define the single most important action you want visitors to take (usually: book a consultation)",
          "List your core treatments and how you want them grouped",
          "Gather existing brand assets — logo, colors, fonts — or flag that they need updating too",
          "Collect or plan for high-quality photography of your space, team and (with consent) results",
          "Note any compliance or advertising requirements specific to your region and treatments",
        ],
      },
      {
        type: "cta",
        text: "Working through this list on your own is a solid start — if you'd rather have someone scope it with you, that's exactly what a first conversation is for.",
        linkLabel: "Start a Project",
        href: "/start-a-project",
      },
      { type: "heading", level: 2, text: "During design and content" },
      {
        type: "list",
        items: [
          "Make sure the homepage clearly states what you specialize in within the first screen",
          "Keep the booking call-to-action visible and consistent across every page",
          "Write treatment descriptions in plain language, not just clinical terminology",
          "Include provider qualifications and safety information clearly, not buried in a footer",
          "Design mobile layouts first, then adapt up to desktop — not the other way around",
          "Add an FAQ section addressing downtime, comfort and what to expect",
        ],
      },
      { type: "heading", level: 2, text: "Before launch" },
      {
        type: "list",
        items: [
          "Test the full booking flow yourself, on both mobile and desktop",
          "Check that every page has a unique, accurate title and description for search engines",
          "Confirm image file sizes are optimized so pages load quickly",
          "Proofread every page for treatment names, pricing language and contact details",
          "Set up analytics so you can see how visitors actually use the new site",
        ],
      },
      { type: "heading", level: 2, text: "After launch" },
      {
        type: "list",
        items: [
          "Monitor which pages visitors leave from most, and investigate why",
          "Keep photography current as your space or team changes",
          "Add new content (FAQs, treatment guides) as you notice recurring client questions",
          "Revisit the site every few months rather than treating launch as the finish line",
        ],
      },
      { type: "heading", level: 2, text: "The bigger picture" },
      {
        type: "paragraph",
        text: "A redesign is rarely a one-time project — it's the foundation your marketing, advertising and reputation will sit on for years. Getting the fundamentals right up front saves far more time than fixing them after launch.",
      },
    ],
    authorName: "Amule Emmanuel",
    authorRole: "Founder & Creative Director",
    publishedDate: "2026-07-26",
    relatedServiceSlug: "website-design",
    relatedIndustryPath: "/industries/med-spa-website-design",
    relatedArticleSlugs: [
      "med-spa-website-mistakes-that-reduce-trust",
      "what-every-med-spa-homepage-should-include",
    ],
    status: "published",
    tags: ["med spa", "website design", "checklist"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug && article.status === "published");
}

/** Includes drafts — used only by tooling/preview contexts, never the public index. */
export function getArticleBySlugIncludingDrafts(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getPublishedArticles(): Article[] {
  return ARTICLES.filter((article) => article.status === "published").sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getRelatedArticles(article: Article): Article[] {
  if (!article.relatedArticleSlugs) return [];
  return article.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}
