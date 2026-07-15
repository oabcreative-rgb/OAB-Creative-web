import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/lumora/lumora-showcase.jpg";
import detail from "../assets/portfolio/lumora/lumora-detail.jpg";
import motionPreview from "../assets/portfolio/lumora/lumora-motion.mp4";
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
    text: "LUMORA is a skincare brand launching a Vitamin C brightening serum. They needed hero product content — film and photography — that could hold its own on the same shelf and the same feed as established beauty brands, built around one ingredient-forward creative direction: warm light, water, and citrus in motion.",
  },
  {
    label: "Challenge",
    text: "A first product launch lives or dies on how premium it looks in the first three seconds of a scroll — and LUMORA didn't have a studio, a set stylist, or a product photographer on retainer to get there.",
  },
  {
    label: "Solution",
    text: "We built a full motion and photography set around the serum using AI production — warm citrus tones, light and liquid in motion, the bottle always the hero — giving LUMORA a launch film and matching stills from a single creative direction.",
  },
  {
    label: "Result",
    text: "LUMORA now launches with content that reads like an established beauty brand's — built to stop the scroll, justify a premium price point, and keep the product looking consistent everywhere it's seen.",
  },
];

const stats = [
  { icon: <IconStar />, value: "0→1", label: "Launch film built from concept to delivery" },
  { icon: <IconUsers />, value: "AI-Led", label: "Production workflow, no studio shoot required" },
  { icon: <IconTarget />, value: "1", label: "Consistent identity, film & photography" },
];

export default function CaseStudyLumora() {
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
            <h1>LUMORA</h1>
            <p className={styles.subhead}>
              A product launch film and photography set for a Vitamin C brightening serum —
              built to look like an established beauty brand from the very first post.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Skincare &amp; Beauty</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Motion Design, AI Production</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Product Launch Film</span>
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
              alt="LUMORA Vitamin C Brightening Serum product photography"
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
            <h2>Product content built to stop the scroll</h2>
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
              <p className={`${styles.galleryNote} ${styles.workCaption}`}>Motion Preview · Product Film</p>
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
                <img src={detail} alt="LUMORA serum bottle detail shot" loading="lazy" />
              </div>
              <figcaption>
                <span className={styles.galleryNote}>Product Photography</span>
                <span className={styles.galleryTitle}>Detail Shot</span>
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
            <h2>Launching a product that needs to feel premium on day one?</h2>
            <p>Tell us about your launch and we'll show you how a film like this could look.</p>
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
