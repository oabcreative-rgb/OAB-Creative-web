import type { ReactNode } from "react";
import {
  IconIdentity,
  IconMotion,
  IconWebsites,
  IconCamera,
  IconShare,
  IconTrendUp,
  IconSearch,
} from "../components/icons";

import hcShowcase from "../assets/portfolio/hadassah/hc-showcase.jpg";
import sdBrandIdentity from "../assets/portfolio/swiftdrop/sd-brand-identity.jpg";
import aofShowcase from "../assets/portfolio/abundanceofflow/aof-showcase.jpg";

import mirrorShowcase from "../assets/portfolio/mirror/mirror-showcase.jpg";
import altswebShowcase from "../assets/portfolio/alts-web/altsweb-showcase.jpg";

import auroraShowcase from "../assets/portfolio/aurora/aurora-showcase.jpg";
import lumoraShowcase from "../assets/portfolio/lumora/lumora-showcase.jpg";
import nordiqShowcase from "../assets/portfolio/nordiq/nordiq-showcase.jpg";

import yumSocialCampaign from "../assets/portfolio/yum/yum-social-campaign.jpg";
import atSocial from "../assets/portfolio/at/at-social.jpg";
import altsGenderRevealFlyer from "../assets/portfolio/alts/alts-gender-reveal-flyer.jpg";

import altsCover from "../assets/portfolio/alts/alts-cover.jpg";
import yumCover from "../assets/portfolio/yum/yum-cover.jpg";
import atCover from "../assets/portfolio/at/at-cover.jpg";

export type ServiceSlug =
  | "brand-identity"
  | "website-design"
  | "motion-design"
  | "product-commercials"
  | "social-media-design"
  | "digital-marketing"
  | "seo";

export interface ServicePortfolioRef {
  title: string;
  category: string;
  context: string;
  image: string;
  link: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDefinition {
  slug: ServiceSlug;
  navTitle: string;
  heroEyebrow: string;
  headline: string;
  supportingStatement: string;
  heroImage?: string;
  /** True when no real project image exists yet — hero uses a designed graphic instead of a photo. */
  useGraphicHero?: boolean;
  icon: ReactNode;
  seoTitle: string;
  seoDescription: string;
  problems: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  deliverables: string[];
  portfolio: ServicePortfolioRef[];
  portfolioNote?: string;
  faqs: ServiceFaq[];
}

const sharedFaqs: ServiceFaq[] = [
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. OAB Creative works with businesses worldwide, including the United States, United Kingdom, Canada and beyond. All collaboration happens remotely via video calls, shared documents and async updates, so time zones are rarely an issue.",
  },
  {
    question: "How does payment work?",
    answer:
      "Projects typically start with a deposit to secure your slot, with the remaining balance split across agreed milestones or paid on completion, depending on project size. Exact terms are confirmed during your discovery call before any work begins.",
  },
];

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "brand-identity",
    navTitle: "Brand Identity",
    heroEyebrow: "Brand Identity",
    headline: "A brand identity that makes people trust you before you say a word.",
    supportingStatement:
      "Logo, color, typography and guidelines built around one clear strategy — so every touchpoint looks like it belongs to a serious, established business.",
    heroImage: hcShowcase,
    icon: <IconIdentity />,
    seoTitle: "Brand Identity Design Services | OAB Creative",
    seoDescription:
      "Professional brand identity design — logo, color palette, typography and brand guidelines built to make your business look credible and consistent everywhere it shows up.",
    problems: [
      "An inconsistent or dated visual identity makes an otherwise strong business look less established than it actually is.",
      "Without a clear system, every new flyer, post or page ends up looking slightly different, which quietly erodes trust.",
      "A weak first impression means prospects judge your credibility before they ever read your offer.",
    ],
    benefits: [
      "Build stronger customer trust from the very first impression",
      "Look like an established, premium business — even as a startup",
      "Give every future designer, freelancer or team member one clear system to follow",
      "Make marketing and sales materials faster to produce, because the decisions are already made",
      "Stand out from competitors who all look the same in your category",
    ],
    process: [
      { title: "Discovery", description: "We learn your business, audience, competitors and goals before any visual work starts." },
      { title: "Strategy", description: "We define the positioning and personality your identity needs to communicate." },
      { title: "Creative Direction", description: "We explore visual directions and narrow in on the one that fits your strategy." },
      { title: "Design", description: "Logo, color system, typography and supporting assets are designed and refined." },
      { title: "Review & Refinement", description: "You review, we refine — until the system feels unmistakably right." },
      { title: "Delivery", description: "Final files and a usage guideline are packaged and handed over, ready to use." },
    ],
    deliverables: [
      "Primary logo, secondary marks and favicon",
      "Color palette with usage guidance",
      "Typography system and type scale",
      "Iconography and supporting graphic language",
      "Brand guideline document (dos and don'ts)",
      "Export files in the formats your team needs (SVG, PNG, PDF)",
    ],
    portfolio: [
      {
        title: "Hadassah Care Supplies",
        category: "Brand Identity",
        context: "A full identity system for a healthcare supplies brand entering a competitive category.",
        image: hcShowcase,
        link: "/portfolio/hadassah-care-supplies",
      },
      {
        title: "SwiftDrop",
        category: "Brand Identity",
        context: "Logistics brand identity built to feel fast, reliable and modern.",
        image: sdBrandIdentity,
        link: "/portfolio/swiftdrop",
      },
      {
        title: "Abundance of Flow",
        category: "Brand Identity",
        context: "A wellness-brand identity system spanning digital and print touchpoints.",
        image: aofShowcase,
        link: "/portfolio/abundance-of-flow",
      },
    ],
    faqs: [
      {
        question: "How long does a brand identity project take?",
        answer:
          "A complete identity system typically takes 3 to 5 weeks from kickoff to final delivery, depending on scope and how quickly feedback rounds move.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "A short brief covering your business, audience and goals, plus any existing materials (old logo, brand colors, competitor examples) you'd like us to consider. We'll guide you through it during discovery.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Every project includes structured review rounds at each stage, so feedback shapes the work before it's finalized rather than requiring open-ended revisions afterward. Exact rounds are confirmed at the proposal stage.",
      },
      {
        question: "Can you work with an existing brand instead of starting from scratch?",
        answer:
          "Yes. We regularly refine or extend existing identities rather than replacing them entirely — useful if your brand has equity worth keeping.",
      },
      {
        question: "Can the project be completed in phases?",
        answer:
          "Yes. Many clients start with the core identity (logo, colors, type) and add the full guideline suite or extended asset library later, once the fundamentals are locked in.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "website-design",
    navTitle: "Website Design",
    heroEyebrow: "Website Design",
    headline: "A website that works as hard as your best salesperson.",
    supportingStatement:
      "Clear structure, fast performance and confident design — built to turn visitors into enquiries around the clock, not just look good in a screenshot.",
    heroImage: mirrorShowcase,
    icon: <IconWebsites />,
    seoTitle: "Website Design & Development Services | OAB Creative",
    seoDescription:
      "High-converting website design and development for ambitious businesses — clear UX, responsive design and SEO-friendly builds that turn visitors into enquiries.",
    problems: [
      "A confusing or dated website creates friction before a visitor ever reaches your offer.",
      "Slow, cluttered pages lose enquiries to competitors with a cleaner, faster experience.",
      "A website that doesn't clearly explain what you do or why you're trustworthy gets abandoned within seconds.",
    ],
    benefits: [
      "Turn more visitors into enquiries with a clear, guided user journey",
      "Look credible and current on every device, from desktop to mobile",
      "Give your team a site that's easy to update without breaking the design",
      "Build a foundation that supports SEO instead of fighting against it",
      "Reduce bounce rate with faster load times and clearer navigation",
    ],
    process: [
      { title: "Discovery", description: "We map your goals, audience and the journey a visitor needs to take." },
      { title: "Strategy", description: "Sitemap, content structure and key conversion points are planned before design starts." },
      { title: "Creative Direction", description: "We define the visual direction so every page feels like one considered system." },
      { title: "Design & Development", description: "Pages are designed and built responsively, component by component." },
      { title: "Review & Refinement", description: "We test, refine and polish across devices before anything goes live." },
      { title: "Launch & Delivery", description: "The site is deployed, and you're handed clear guidance on how to manage it." },
    ],
    deliverables: [
      "UX structure and content strategy",
      "Responsive, accessible page design for desktop, tablet and mobile",
      "Component-based build for easy future updates",
      "On-page SEO fundamentals (titles, headings, meta descriptions, alt text)",
      "Performance-conscious build (optimized images, minimal render-blocking assets)",
      "Launch support and a short handover walkthrough",
    ],
    portfolio: [
      {
        title: "Mirror",
        category: "Website Design",
        context: "A fintech product website built around clarity, trust and a confident visual system.",
        image: mirrorShowcase,
        link: "/portfolio/mirror",
      },
      {
        title: "Affordable Lab & Testing Solutions",
        category: "Website Design",
        context: "A service-business website designed to make booking a test simple and fast.",
        image: altswebShowcase,
        link: "/portfolio/alts-website",
      },
    ],
    portfolioNote: "More website projects are in production and will be added here as they launch.",
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "Most business websites take 4 to 7 weeks from kickoff to launch, depending on the number of pages and how much custom functionality is involved.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "Your business goals, target audience, any existing brand assets, and rough content (copy, images) for key pages. We can also help shape content strategy during discovery if you're starting from scratch.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Design is reviewed in structured rounds at the wireframe and visual-design stages, so changes happen before development locks in the build. Specific rounds are confirmed in your proposal.",
      },
      {
        question: "Can you work with an existing brand?",
        answer:
          "Yes — most website projects are built directly on an existing brand identity. If you don't have one yet, we can pair this with a Brand Identity engagement.",
      },
      {
        question: "Can the project be completed in phases?",
        answer:
          "Yes. It's common to launch a core site first (home, services, contact) and add further pages, such as a resources section or additional service pages, afterward.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "motion-design",
    navTitle: "Motion Design",
    heroEyebrow: "Motion Design",
    headline: "Motion that stops the scroll and holds attention long enough to convert.",
    supportingStatement:
      "Cinematic product films and social motion content produced through an AI-led workflow — premium results without a full studio production budget.",
    heroImage: auroraShowcase,
    icon: <IconMotion />,
    seoTitle: "Motion Design & Product Video Services | OAB Creative",
    seoDescription:
      "Product motion design and campaign films built to stop the scroll and hold attention — produced through an AI-led workflow without a full studio shoot.",
    problems: [
      "Static product photos struggle to hold attention in a fast-scrolling social feed.",
      "A traditional studio shoot for a launch film is expensive and slow for an independent or growing brand.",
      "Without motion content, a product can look less premium next to established competitors who already use it.",
    ],
    benefits: [
      "Capture attention in the first three seconds of a scroll",
      "Make a product look as premium as an established competitor's launch campaign",
      "Get cinematic content without booking a studio, model or full production crew",
      "Reuse one motion piece across paid social, organic content and a website hero",
      "Keep a consistent visual identity between film and supporting stills",
    ],
    process: [
      { title: "Discovery", description: "We learn the product, brand and the feeling the film needs to create." },
      { title: "Strategy", description: "We define the single creative idea the whole piece will be built around." },
      { title: "Storyboard", description: "Every shot, transition and beat is planned before production begins." },
      { title: "AI Motion Production", description: "The film is produced using an AI-led motion workflow — fast, flexible and on-brand." },
      { title: "Review & Refinement", description: "We grade, polish and refine until the piece feels genuinely premium." },
      { title: "Delivery", description: "Final film and supporting stills are delivered ready to run." },
    ],
    deliverables: [
      "A finished motion film in the format your channels need (square, vertical, widescreen)",
      "Matching campaign stills from the same creative direction",
      "Source files where applicable",
      "Guidance on where and how to run the content for best results",
    ],
    portfolio: [
      {
        title: "Aurora",
        category: "Motion Design",
        context: "A cinematic launch film for an independent fragrance house.",
        image: auroraShowcase,
        link: "/portfolio/aurora",
      },
      {
        title: "LUMORA",
        category: "Motion Design",
        context: "A product launch film for a Vitamin C brightening serum.",
        image: lumoraShowcase,
        link: "/portfolio/lumora",
      },
      {
        title: "Nordiq",
        category: "Motion Design (Concept)",
        context: "A concept campaign film dramatizing an insulated tumbler's hot-and-cold promise.",
        image: nordiqShowcase,
        link: "/portfolio/nordiq",
      },
    ],
    faqs: [
      {
        question: "How long does a motion project take?",
        answer:
          "A single product film typically takes 2 to 4 weeks from creative direction to final delivery, depending on complexity and revision rounds.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "Product photos or a physical product reference, your brand identity (if one exists), and a sense of the tone you want — bold, minimal, warm, technical, and so on.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Feedback is gathered at the storyboard stage and again on the first cut, so changes happen before final polish rather than after. Exact rounds are confirmed in your proposal.",
      },
      {
        question: "Can you work with an existing brand?",
        answer:
          "Yes — most motion projects are produced directly against an existing brand identity to stay visually consistent with everything else you publish.",
      },
      {
        question: "Can the project be completed in phases?",
        answer: "Yes. Many clients start with one hero film and commission additional cuts or formats afterward.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "product-commercials",
    navTitle: "Product Commercials",
    heroEyebrow: "Product Commercials",
    headline: "A product commercial that makes your launch feel like an established brand's.",
    supportingStatement:
      "Full concept-to-delivery product films — art direction, storyboarding and production handled end to end, so your launch has one strong piece carrying the whole campaign.",
    heroImage: lumoraShowcase,
    icon: <IconCamera />,
    seoTitle: "Product Commercial & Launch Film Production | OAB Creative",
    seoDescription:
      "Concept-to-delivery product commercials and launch films for brands that need a premium campaign centerpiece without a full studio production.",
    problems: [
      "A first product launch often has to compete visually against brands with far bigger production budgets.",
      "Without a strong hero film, a launch can feel like an announcement rather than an event.",
      "Coordinating a traditional commercial shoot — studio, crew, talent — is slow and expensive for a single launch.",
    ],
    benefits: [
      "Give your launch a centerpiece that justifies a premium price point",
      "Build one piece of content that works across ads, social and your website",
      "Launch with a campaign that looks resourced, even on a lean budget",
      "Keep full creative control over direction, pacing and tone",
      "Reduce production risk with a defined, milestone-based process",
    ],
    process: [
      { title: "Discovery", description: "We learn the product, the launch goal and the audience it needs to convince." },
      { title: "Strategy", description: "We define the single message the commercial needs to land in a few seconds." },
      { title: "Creative Direction", description: "Visual tone, pacing and reference are locked before production." },
      { title: "Production", description: "The commercial is produced end to end using an AI-led motion workflow." },
      { title: "Review & Refinement", description: "Color grade, pacing and sound are refined until it feels finished." },
      { title: "Launch & Delivery", description: "Final cuts are delivered in the formats your launch channels need." },
    ],
    deliverables: [
      "A finished product commercial, edited and graded",
      "Cutdowns for social and paid formats where needed",
      "Matching stills for use alongside the film",
      "Delivery in the aspect ratios your channels require",
    ],
    portfolio: [
      {
        title: "LUMORA",
        category: "Product Commercial",
        context: "A launch film and matching photography for a Vitamin C brightening serum.",
        image: lumoraShowcase,
        link: "/portfolio/lumora",
      },
      {
        title: "Aurora",
        category: "Product Commercial",
        context: "A campaign film built to give an independent fragrance house a premium launch moment.",
        image: auroraShowcase,
        link: "/portfolio/aurora",
      },
      {
        title: "Nordiq",
        category: "Product Commercial (Concept)",
        context: "A concept film built around one core idea: a tumbler that holds extreme heat and cold.",
        image: nordiqShowcase,
        link: "/portfolio/nordiq",
      },
    ],
    faqs: [
      {
        question: "How is this different from your Motion Design service?",
        answer:
          "Motion Design covers a broader range of animated content — UI motion, social assets, brand stings. Product Commercials is specifically a full concept-to-delivery campaign film built around a single launch or product moment.",
      },
      {
        question: "How long does a product commercial take?",
        answer:
          "Typically 3 to 5 weeks from creative direction to final delivery, depending on the number of cuts and formats needed.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "Product photography or a physical reference, your brand identity, and clarity on the single message the launch needs to communicate.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Feedback is gathered at the creative-direction stage and on the first cut, keeping changes structured rather than open-ended. Exact rounds are confirmed in your proposal.",
      },
      {
        question: "Can the project be completed in phases?",
        answer: "Yes — a hero commercial first, with additional cutdowns or formats commissioned afterward as needed.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "social-media-design",
    navTitle: "Social Media Design",
    heroEyebrow: "Social Media Design",
    headline: "Social content that looks like it belongs to a bigger brand.",
    supportingStatement:
      "Templated, on-brand social design — from single campaign pushes to ongoing content systems — built so your feed looks consistent and intentional, not improvised.",
    heroImage: yumSocialCampaign,
    icon: <IconShare />,
    seoTitle: "Social Media Design Services | OAB Creative",
    seoDescription:
      "On-brand social media design and campaign content that makes a business look consistent, premium and intentional across every platform.",
    problems: [
      "An inconsistent feed makes a business look improvised rather than established.",
      "Designing every post from scratch is slow and pulls focus from running the business.",
      "Generic templates make a brand blend in instead of standing out in a crowded feed.",
    ],
    benefits: [
      "Look consistent and intentional across every platform, not just one",
      "Save time with a reusable system instead of one-off designs",
      "Make campaigns and everyday posts feel like part of the same brand",
      "Give your team or marketer a clear system to follow going forward",
      "Stand out from competitors using generic templates",
    ],
    process: [
      { title: "Discovery", description: "We learn your platforms, audience and the goals behind your content." },
      { title: "Strategy", description: "We define content pillars and the visual system that will carry them." },
      { title: "Creative Direction", description: "Templates and campaign concepts are designed against your brand identity." },
      { title: "Design", description: "Individual assets and templates are produced, ready to populate and publish." },
      { title: "Review & Refinement", description: "We refine based on your feedback and how the system feels in practice." },
      { title: "Delivery", description: "Final files and templates are handed over in an editable, reusable format." },
    ],
    deliverables: [
      "Campaign-specific social assets",
      "Reusable post and story templates",
      "A short content style guide for your team",
      "Platform-specific sizing (feed, story, reel cover)",
    ],
    portfolio: [
      {
        title: "Yum Indulgence",
        category: "Social Media Design",
        context: "A social campaign built to launch a new indulgent food product.",
        image: yumSocialCampaign,
        link: "/portfolio/yum-indulgence",
      },
      {
        title: "Audio Transcription Studio",
        category: "Social Media Design",
        context: "Social content built to make a B2B service feel approachable and current.",
        image: atSocial,
        link: "/portfolio/audio-transcription-studio",
      },
      {
        title: "Affordable Lab & Testing Solutions",
        category: "Social Media Design",
        context: "Campaign flyers designed to feel personal and community-focused.",
        image: altsGenderRevealFlyer,
        link: "/portfolio/affordable-lab-testing-solutions",
      },
    ],
    faqs: [
      {
        question: "How long does a social design project take?",
        answer:
          "A single campaign typically takes 1 to 2 weeks. An ongoing template system usually takes 2 to 3 weeks to design and document.",
      },
      {
        question: "What do you need from me to get started?",
        answer: "Your brand identity, a content calendar or list of upcoming posts/campaigns, and any copy you already have drafted.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Template systems include a structured review round before final delivery. Exact rounds for larger content systems are confirmed in your proposal.",
      },
      {
        question: "Can you work with an existing brand?",
        answer: "Yes — this service is almost always built directly on your existing brand identity.",
      },
      {
        question: "Can the project be completed in phases?",
        answer: "Yes. Many clients start with a single campaign and expand into an ongoing template system afterward.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "digital-marketing",
    navTitle: "Digital Marketing",
    heroEyebrow: "Digital Marketing",
    headline: "Marketing creative built to drive attention, leads and sales.",
    supportingStatement:
      "Campaign strategy and design that connects your brand, website and content into one consistent push toward a clear business goal.",
    heroImage: altsCover,
    icon: <IconTrendUp />,
    seoTitle: "Digital Marketing & Campaign Design Services | OAB Creative",
    seoDescription:
      "Digital marketing campaign strategy and design built to drive attention, enquiries and sales — connecting your brand, website and content into one push.",
    problems: [
      "Disconnected marketing — a website that doesn't match social, that doesn't match ads — dilutes the impact of every channel.",
      "Campaigns without a clear creative strategy tend to blend into the noise.",
      "Without a consistent system, every new campaign starts from zero.",
    ],
    benefits: [
      "Increase enquiries with campaigns built around a clear conversion goal",
      "Make every channel — website, social, ads — feel like one consistent push",
      "Support product launches with creative that's ready before the deadline",
      "Build a repeatable campaign system instead of reinventing it each time",
      "Improve how prospects move from first impression to enquiry",
    ],
    process: [
      { title: "Discovery", description: "We learn your offer, audience and the specific goal the campaign needs to hit." },
      { title: "Strategy", description: "We define the campaign concept and the channels it needs to run across." },
      { title: "Creative Direction", description: "Visual direction is set so every asset feels like one campaign." },
      { title: "Design & Production", description: "Campaign assets are produced across the required formats and channels." },
      { title: "Review & Refinement", description: "We refine based on feedback before the campaign goes live." },
      { title: "Launch & Delivery", description: "Final assets are delivered, organized and ready to run." },
    ],
    deliverables: [
      "Campaign concept and creative direction",
      "Assets across the channels your campaign needs (web, social, print, email)",
      "Consistent messaging framework across touchpoints",
      "Organized final files, ready to hand to your media buyer or team",
    ],
    portfolio: [
      {
        title: "Affordable Lab & Testing Solutions",
        category: "Marketing Campaign",
        context: "A multi-channel campaign built to drive bookings for a lab testing service.",
        image: altsCover,
        link: "/portfolio/affordable-lab-testing-solutions",
      },
      {
        title: "Yum Indulgence",
        category: "Marketing Campaign",
        context: "Launch campaign creative for a new indulgent food product.",
        image: yumCover,
        link: "/portfolio/yum-indulgence",
      },
      {
        title: "Audio Transcription Studio",
        category: "Marketing Campaign",
        context: "Brand and campaign creative built to win trust for a B2B transcription service.",
        image: atCover,
        link: "/portfolio/audio-transcription-studio",
      },
    ],
    faqs: [
      {
        question: "Do you run paid ad campaigns, or just design the creative?",
        answer:
          "We focus on strategy and creative — the assets, messaging and campaign concept. If you need media buying or ad-account management, we can work alongside your existing team or recommend a partner.",
      },
      {
        question: "How long does a campaign project take?",
        answer: "Most campaigns take 2 to 4 weeks depending on the number of channels and assets required.",
      },
      {
        question: "What do you need from me to get started?",
        answer: "Your campaign goal, target audience, timeline and any existing brand or product assets.",
      },
      {
        question: "How many revisions are included?",
        answer: "A structured review round is included before final delivery. Larger campaigns have rounds confirmed in the proposal.",
      },
      {
        question: "Can the project be completed in phases?",
        answer: "Yes. Campaigns are often phased around launch milestones rather than delivered all at once.",
      },
      ...sharedFaqs,
    ],
  },
  {
    slug: "seo",
    navTitle: "SEO & Online Visibility",
    heroEyebrow: "SEO & Online Visibility",
    headline: "A website structured to be found, not just to look good.",
    supportingStatement:
      "On-page SEO fundamentals — structure, content clarity and technical foundations — built into every site we design, plus focused SEO improvements for existing websites.",
    useGraphicHero: true,
    icon: <IconSearch />,
    seoTitle: "SEO & Online Visibility Services | OAB Creative",
    seoDescription:
      "SEO and on-page optimization services that help your website get found on Google — clear structure, technical fundamentals and content built for search intent.",
    problems: [
      "A beautiful website that search engines can't understand won't get found by the people looking for it.",
      "Weak page titles, missing structure and thin content make it harder to compete for the searches that matter.",
      "Without a clear content strategy, a site has nothing new for search engines — or prospects — to find.",
    ],
    benefits: [
      "Improve your website's ability to be found for relevant searches",
      "Give every page a clear purpose search engines and visitors can both understand",
      "Build a technical foundation that supports growth instead of blocking it",
      "Turn service pages into genuine answers to what prospects are searching for",
      "Create a scalable content system instead of one-off, disconnected pages",
    ],
    process: [
      { title: "Discovery", description: "We audit your current site structure, content and technical foundations." },
      { title: "Strategy", description: "We identify the pages, topics and structure worth building or improving." },
      { title: "Technical Foundations", description: "Titles, headings, metadata, sitemap and structured data are set up correctly." },
      { title: "Content", description: "Service and resource pages are written to genuinely answer what people search for." },
      { title: "Review & Refinement", description: "We review structure and content clarity before anything goes live." },
      { title: "Delivery & Guidance", description: "You receive a clear picture of what was done and what to prioritize next." },
    ],
    deliverables: [
      "On-page SEO audit and priority list",
      "Metadata, heading structure and technical fixes",
      "XML sitemap and robots.txt configuration",
      "Structured data where genuinely applicable",
      "Guidance on ongoing content priorities",
    ],
    portfolio: [
      {
        title: "Mirror",
        category: "SEO-Ready Website Build",
        context: "A website built with clear structure and technical SEO fundamentals from day one.",
        image: mirrorShowcase,
        link: "/portfolio/mirror",
      },
      {
        title: "Affordable Lab & Testing Solutions",
        category: "SEO-Ready Website Build",
        context: "A service-business site structured for clarity and discoverability.",
        image: altswebShowcase,
        link: "/portfolio/alts-website",
      },
    ],
    portfolioNote:
      "SEO work is often behind the scenes rather than visual — the examples above show websites we structured with search fundamentals built in from the start.",
    faqs: [
      {
        question: "Can you guarantee a #1 Google ranking?",
        answer:
          "No — no honest agency can guarantee a specific ranking, since search results depend on many factors outside any one party's control, including competition and ongoing algorithm changes. What we can do is build a technically sound, well-structured site and content strategy that gives you a genuine foundation to grow visibility over time.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a gradual process. Technical fixes can help within weeks, but meaningful ranking movement for competitive terms typically takes several months of consistent work and content.",
      },
      {
        question: "Do you offer ongoing SEO, or just a one-time setup?",
        answer:
          "Both are possible. Many clients start with a technical and on-page setup, then move into ongoing content and optimization work once the foundation is in place.",
      },
      {
        question: "Can you work with my existing website?",
        answer: "Yes — SEO audits and improvements are commonly applied to existing sites, not just new builds.",
      },
      {
        question: "Can the project be completed in phases?",
        answer: "Yes. Technical foundations first, followed by ongoing content and optimization work.",
      },
      ...sharedFaqs,
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
