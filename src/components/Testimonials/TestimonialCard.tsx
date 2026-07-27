import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { IconStar, IconPerson } from "../icons";
import type { WrittenTestimonial } from "../../data/testimonials";
import styles from "./Testimonials.module.css";

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: WrittenTestimonial; index?: number }) {
  const { quote, name, role, company, photo, rating, caseStudyLink } = testimonial;

  return (
    <motion.figure
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      {rating && (
        <div className={styles.rating} aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <IconStar key={i} className={i < rating ? styles.starFilled : styles.starEmpty} />
          ))}
        </div>
      )}
      <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className={styles.attribution}>
        <span className={styles.avatar}>
          {photo ? <img src={photo} alt="" loading="lazy" /> : <IconPerson />}
        </span>
        <span>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>
            {role}, {company}
          </span>
        </span>
      </figcaption>
      {caseStudyLink && (
        <Link to={caseStudyLink} className={styles.caseStudyLink}>
          View the project →
        </Link>
      )}
    </motion.figure>
  );
}
