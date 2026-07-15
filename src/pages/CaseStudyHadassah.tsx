import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/hadassah/hc-showcase.jpg";
import brandPoster from "../assets/portfolio/hadassah/hc-brand-poster.jpg";
import launchFlyer from "../assets/portfolio/hadassah/hc-launch-flyer.jpg";
import lifestyleGroup from "../assets/portfolio/hadassah/hc-lifestyle-group.jpg";
import lifestyleBag from "../assets/portfolio/hadassah/hc-lifestyle-bag.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Hadassah Care Supplies sells nursing, baby-care and everyday hygiene essentials for new mothers and families — a brand-new business with its first customers about to walk through the door.",
  },
  {
    label: "The Challenge",
    text: "There was no brand yet — no logo, no packaging, nothing to launch with. A business selling products for newborns needed to feel warm and trustworthy from the very first post, not like a business still finding its feet.",
  },
  {
    label: "The Solution",
    text: "We designed a mark built around a heart and a caring figure in green and blue, then carried it straight onto everything the business needed on day one — a launch campaign, product posters, and branded shopping bags.",
  },
  {
    label: "The Outcome",
    text: "Hadassah Care opened its doors already looking like an established brand. The same mark shows up on every bag, post and poster, so new customers trust it with their baby's essentials from the first purchase.",
  },
];

const gallery = [
  { image: brandPoster, title: "Brand Introduction Poster", note: "Launch campaign" },
  { image: launchFlyer, title: "Now Open Announcement", note: "Social campaign" },
  { image: lifestyleGroup, title: "Branded Shopping Bags", note: "Packaging in the wild" },
  { image: lifestyleBag, title: "Retail Packaging", note: "Branded packaging" },
];

const stats = [
  { icon: <IconStar />, value: "0→1", label: "Full brand built pre-launch" },
  { icon: <IconUsers />, value: "4+", label: "Touchpoints launched together" },
  { icon: <IconTarget />, value: "1", label: "Consistent mark, every bag & post" },
];

export default function CaseStudyHadassah() {
  return (
    <>
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
            <p className="eyebrow">Case Study · Brand Identity</p>
            <h1>Hadassah Care Supplies</h1>
            <p className={styles.subhead}>
              A brand built from zero for a new mother-and-baby care business — ready to launch
              with a logo, packaging and a full campaign on opening day.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Mother &amp; Baby Care Supplies</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity, Packaging &amp; Launch Campaign</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Stage</span>
                <span className={styles.metaValue}>New Business Launch</span>
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
              alt="Hadassah Care Supplies branded shopping bag on an orange backdrop"
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
            <h2>One brand, ready for launch day</h2>
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

      <section className="section">
        <div className="container">
          <motion.div
            className={`${styles.ctaBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Launching a business and need a brand fast?</h2>
            <p>Tell us about your business and we'll show you how a launch-ready brand could look.</p>
            <div className={styles.ctaActions}>
              <Button to="/contact" variant="primary">
                Start a Project
              </Button>
              <Button to="/portfolio" variant="secondary">
                See More Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
