/**
 * Testimonial data — CURRENTLY EMPTY. No testimonial, name, company, photo,
 * rating or video has been supplied for this project, and none is invented
 * here. TestimonialSection renders nothing when its filtered list is empty,
 * so every page using it degrades gracefully until real data is added.
 *
 * HOW TO ADD A REAL TESTIMONIAL
 * ------------------------------
 * Written testimonial — push an object into WRITTEN_TESTIMONIALS:
 * {
 *   quote: "Exact client quote, unedited.",
 *   name: "Client full name",
 *   role: "Their job title",
 *   company: "Their company name",
 *   photo: undefined,              // or: import clientPhoto from "../assets/testimonials/jane-doe.jpg"
 *   service: "brand-identity",     // one of the SERVICE slugs below, or "general"
 *   caseStudyLink: "/portfolio/mirror", // optional, only if there's a matching case study
 *   rating: undefined,             // ONLY set this (1-5) if the client gave a genuine rating,
 *                                  // or it came from a verifiable review platform. Leave
 *                                  // undefined otherwise — do not default to 5 stars.
 * }
 *
 * Photos: square, at least 240x240px, JPG or WebP, placed in
 * src/assets/testimonials/ and imported at the top of this file.
 *
 * Video testimonial — push an object into VIDEO_TESTIMONIALS:
 * {
 *   videoSrc: "https://...",       // hosted video URL or an imported local file
 *   poster: undefined,             // imported poster image, required for good UX/CLS
 *   name: "Client full name",
 *   role: "Their job title",
 *   company: "Their company name",
 *   caption: "One-line description of what they talk about",
 *   transcript: "Full plain-text transcript for accessibility.",
 *   service: "website-design",
 * }
 *
 * Video specs: MP4 (H.264), under ~15MB where possible, 16:9, poster image
 * same aspect ratio. Place under src/assets/testimonials/video/.
 */

import type { ServiceSlug } from "./servicesData";

export interface WrittenTestimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: string;
  service: ServiceSlug | "general";
  caseStudyLink?: string;
  /** Only set when a genuine rating exists — never default this. */
  rating?: 1 | 2 | 3 | 4 | 5;
}

export interface VideoTestimonial {
  videoSrc: string;
  poster?: string;
  name: string;
  role: string;
  company: string;
  caption: string;
  /** Plain-text transcript, shown for accessibility and used as caption-track fallback. */
  transcript: string;
  service: ServiceSlug | "general";
}

export const WRITTEN_TESTIMONIALS: WrittenTestimonial[] = [];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [];
