import { useId, useState } from "react";
import { motion } from "motion/react";
import type { VideoTestimonial } from "../../data/testimonials";
import { trackEvent } from "../../config/analytics";
import styles from "./Testimonials.module.css";

export default function VideoTestimonialCard({ testimonial, index = 0 }: { testimonial: VideoTestimonial; index?: number }) {
  const { videoSrc, poster, name, role, company, caption, transcript } = testimonial;
  const [showTranscript, setShowTranscript] = useState(false);
  const transcriptId = useId();

  return (
    <motion.figure
      className={styles.videoCard}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <video
        className={styles.video}
        controls
        preload="none"
        poster={poster}
        aria-label={`Video testimonial from ${name}, ${role} at ${company}`}
        onPlay={() => trackEvent("testimonial_video_play", { name })}
      >
        <source src={videoSrc} />
        Your browser doesn't support embedded video. Read the transcript below instead.
      </video>
      <figcaption className={styles.videoCaption}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>
          {role}, {company}
        </span>
        <p>{caption}</p>
        <button
          type="button"
          className={styles.transcriptToggle}
          aria-expanded={showTranscript}
          aria-controls={transcriptId}
          onClick={() => setShowTranscript((v) => !v)}
        >
          {showTranscript ? "Hide transcript" : "Read transcript"}
        </button>
        {showTranscript && (
          <p id={transcriptId} className={styles.transcript}>
            {transcript}
          </p>
        )}
      </figcaption>
    </motion.figure>
  );
}
