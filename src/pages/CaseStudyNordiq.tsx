import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/nordiq/nordiq-showcase.jpg";
import detail from "../assets/portfolio/nordiq/nordiq-detail.jpg";
import motionPreview from "../assets/portfolio/nordiq/nordiq-motion.mp4";
import styles from "./CaseStudy.module.css";

const services = [
  "Motion Design",
  "Product Animation",
  "Creative Direction",
  "AI Production",
  "Visual Storytelling",
];

const overview = [
  {
    label: "Project Overview",
    text: "Nordiq is a concept insulated drinkware brand we built in-house to show what a single strong idea can do for a physical product — turning a stainless steel tumbler into something that looks engineered by a premium outdoor brand, not a generic import.",
  },
  {
    label: "Challenge",
    text: "Drinkware is one of the most oversaturated categories on social — most tumbler content looks identical. Standing out needs a sharper creative hook than 'keeps drinks hot or cold.'",
  },
  {
    label: "Solution",
    text: "We built the entire concept around that one functional claim and dramatized it — a single frame split between snow and fire, frost and steam meeting on the same tumbler, so the product's core benefit becomes the visual instead of a bullet point.",
  },
  {
    label: "Result",
    text: "Nordiq is a self-directed concept piece in our motion reel — a template for how we'd launch a drinkware or outdoor-lifestyle brand: one strong idea, produced entirely through AI motion production, ready to drop into paid social or a launch page.",
  },
];

const stats = [
  { icon: <IconStar />, value: "0→1", label: "Concept film built from idea to delivery" },
  { icon: <IconUsers />, value: "AI-Led", label: "Production workflow, no studio shoot required" },
  { icon: <IconTarget />, value: "1", label: "Core concept, hot vs. cold, across film & stills" },
];

export default function CaseStudyNordiq() {
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
            <p className="eyebrow">Case Study · Motion Design</p>
            <span className={styles.conceptBadge}>Concept Project</span>
            <h1>Nordiq</h1>
            <p className={styles.subhead}>
              A concept campaign film for an insulated tumbler brand — dramatizing one core
              promise, extreme heat and extreme cold, in a single shot.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Drinkware &amp; Outdoor Lifestyle</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Motion Design, AI Production</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Concept Product Film</span>
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
              alt="Nordiq tumbler split between snow and fire, hot and cold concept"
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
          <motion.div
            className={styles.serviceTags}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {services.map((service) => (
              <span key={service} className={styles.serviceTag}>
                {service}
              </span>
            ))}
          </motion.div>
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
            <h2>One frame that sells the entire product</h2>
          </motion.div>
          <div className={styles.workGrid}>
            <motion.div
              className={styles.showcaseWrap}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <video
                src={motionPreview}
                poster={showcase}
                className={styles.showcaseImg}
                muted
                loop
                playsInline
                autoPlay
                controls
              />
              <p className={`${styles.galleryNote} ${styles.workCaption}`}>Motion Preview · Concept Film</p>
            </motion.div>
            <motion.figure
              className={styles.galleryItem}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.galleryImgWrap}>
                <img src={detail} alt="Nordiq tumbler with rising steam against a warm alpine sky" loading="lazy" />
              </div>
              <figcaption>
                <span className={styles.galleryNote}>Product Photography</span>
                <span className={styles.galleryTitle}>Hot &amp; Cold, One Object</span>
              </figcaption>
            </motion.figure>
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
            <h2>Got a physical product that needs one strong idea to sell it?</h2>
            <p>Tell us about your product and we'll show you how a concept film like this could look.</p>
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
