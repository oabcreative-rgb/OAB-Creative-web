import SectionHeading from "../SectionHeading";
import TestimonialCard from "./TestimonialCard";
import VideoTestimonialCard from "./VideoTestimonialCard";
import { VIDEO_TESTIMONIALS, WRITTEN_TESTIMONIALS } from "../../data/testimonials";
import type { ServiceSlug } from "../../data/servicesData";
import styles from "./Testimonials.module.css";

interface TestimonialSectionProps {
  /** Show testimonials tagged for this service, or "general" ones, or omit for any/all. */
  service?: ServiceSlug | "general";
  /** Show only testimonials linked to this case study. */
  caseStudyLink?: string;
  eyebrow?: string;
  title?: string;
  background?: "" | "bg-mesh" | "bg-mesh-alt" | "bg-dots";
}

/**
 * Renders nothing when there's no matching testimonial data — every page
 * using this component degrades gracefully until real testimonials are
 * added to src/data/testimonials.ts.
 */
export default function TestimonialSection({
  service,
  caseStudyLink,
  eyebrow = "What Clients Say",
  title = "Trusted by the businesses we've worked with",
  background = "bg-mesh-alt",
}: TestimonialSectionProps) {
  const written = WRITTEN_TESTIMONIALS.filter((t) => {
    if (caseStudyLink) return t.caseStudyLink === caseStudyLink;
    if (service) return t.service === service || t.service === "general";
    return true;
  });

  const videos = VIDEO_TESTIMONIALS.filter((t) => {
    if (caseStudyLink) return false;
    if (service) return t.service === service || t.service === "general";
    return true;
  });

  if (written.length === 0 && videos.length === 0) return null;

  return (
    <section className={`section ${background}`.trim()}>
      <div className="container">
        <SectionHeading align="center" eyebrow={eyebrow} title={title} />
        {videos.length > 0 && (
          <div className={styles.videoGrid}>
            {videos.map((testimonial, i) => (
              <VideoTestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} index={i} />
            ))}
          </div>
        )}
        {written.length > 0 && (
          <div className={styles.grid}>
            {written.map((testimonial, i) => (
              <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
