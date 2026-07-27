import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/at/at-showcase.jpg";
import brandBoard from "../assets/portfolio/at/at-brand-board.jpg";
import social from "../assets/portfolio/at/at-social.jpg";
import office from "../assets/portfolio/at/at-office.jpg";
import merch from "../assets/portfolio/at/at-merch.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Audio Transcription Studio delivers accurate, human-reviewed transcription for businesses, creators and professionals — turning recordings into clean, reliable text on a deadline.",
  },
  {
    label: "The Challenge",
    text: "Transcription is a trust business — clients are handing over sensitive recordings and expecting precision. The brand needed to read as accurate and professional before a single word was transcribed.",
  },
  {
    label: "The Solution",
    text: "We built a confident identity around a bold red-and-charcoal mark, then carried it across the office, stationery, merchandise, the website and a full social template system.",
  },
  {
    label: "The Outcome",
    text: "Audio Transcription Studio now has a complete, launch-ready brand — the same precise, professional look from the reception wall to the website to the next social post.",
  },
];

const gallery = [
  { image: brandBoard, title: "Brand Identity System", note: "Logo, palette & type" },
  { image: office, title: "Office & Signage", note: "Reception, doors & branded goods" },
  { image: merch, title: "Merchandise & Apparel", note: "Polo, cap, hoodie & tote" },
  { image: social, title: "Social & Marketing Templates", note: "Post templates & brochure" },
];

const stats = [
  { icon: <IconStar />, value: "10+", label: "Touchpoints designed" },
  { icon: <IconUsers />, value: "4", label: "Social template styles" },
  { icon: <IconTarget />, value: "1", label: "Consistent brand, every channel" },
];

export default function CaseStudyAT() {
  return (
    <>
      <Seo
        title="Audio Transcription Studio — Case Study"
        description="A full brand and campaign system for a professional transcription studio — built to feel accurate and trustworthy from the office wall to the next social post."
        path="/portfolio/audio-transcription-studio"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Audio Transcription Studio", path: "/portfolio/audio-transcription-studio" },
        ])}
      />
      <section className={`${styles.hero} dark-section`}>
        <BrandGlyph tone="cyan" className={styles.heroGlyph} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/portfolio" className={styles.backLink}>
              <IconArrowLeft />
              Back to Portfolio
            </Link>
            <p className="eyebrow">Case Study · Marketing Campaigns</p>
            <h1>Audio Transcription Studio</h1>
            <p className={styles.subhead}>
              A full brand and campaign system for a professional transcription studio — built to
              feel accurate and trustworthy from the office wall to the next social post.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Audio &amp; Video Transcription</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity &amp; Campaign Design</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Office, Merch &amp; Digital Rollout</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className={styles.showcaseWrap}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={showcase}
              alt="Audio Transcription Studio website shown across desktop and mobile"
              className={styles.showcaseImg}
            />
          </motion.div>
        </div>
      </section>

      <section className="section bg-mesh" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.overviewGrid}>
            {overview.map((item, i) => (
              <motion.div
                key={item.label}
                className={styles.overviewCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">The Work</p>
            <h2>One precise brand, every touchpoint</h2>
          </motion.div>
          <div className={styles.gallery}>
            {gallery.map((item, i) => (
              <motion.figure
                key={item.title}
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.galleryImgWrap}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <figcaption>
                  <span className={styles.galleryNote}>{item.note}</span>
                  <span className={styles.galleryTitle}>{item.title}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dots">
        <div className="container">
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialSection caseStudyLink="/portfolio/audio-transcription-studio" background="" />

      <section className="section">
        <div className="container">
          <motion.div
            className={`${styles.ctaBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Need a brand that reads as precise as your work?</h2>
            <p>Tell us about your business and we'll show you how a system like this could look.</p>
            <div className={styles.ctaActions}>
              <Button to="/start-a-project" variant="primary">
                Start a Project
              </Button>
              <Button to="/portfolio" variant="secondary">
                See More Work
              </Button>
              <Button to="/services/social-media-design" variant="ghost">
                Explore Social Media Design →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
