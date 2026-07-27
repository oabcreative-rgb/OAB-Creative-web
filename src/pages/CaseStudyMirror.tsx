import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/mirror/mirror-showcase.jpg";
import brandSystem from "../assets/portfolio/mirror/mirror-brand-system.jpg";
import billboard from "../assets/portfolio/mirror/mirror-billboard.jpg";
import stationery from "../assets/portfolio/mirror/mirror-stationery.jpg";
import apparel from "../assets/portfolio/mirror/mirror-apparel.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Mirror is a financial reflection platform — a single, honest weekly verdict on where your money went, with no budgets, no categories and no bank account access.",
  },
  {
    label: "The Challenge",
    text: "Most finance apps overwhelm people with dashboards and ask for full account access most people don't trust. Mirror needed a brand that felt like the opposite, ahead of its 2026 launch and early access list.",
  },
  {
    label: "The Solution",
    text: "We built a full identity around a simple reflection mark, a deep navy and electric cyan palette, and a calm, honest tone of voice — then carried it across the website, product screens, stationery and apparel.",
  },
  {
    label: "The Outcome",
    text: "Mirror now has a complete pre-launch presence — website, app UI and physical collateral all speaking the same calm, privacy-first language — ready to bring in its first early access sign-ups.",
  },
];

const gallery = [
  { image: brandSystem, title: "Brand System", note: "Identity & UI language" },
  { image: billboard, title: "Launch Billboard", note: "Out-of-home campaign" },
  { image: stationery, title: "Stationery Suite", note: "Business cards & collateral" },
  { image: apparel, title: "Team Apparel", note: "Merch & branded goods" },
];

const stats = [
  { icon: <IconStar />, value: "2026", label: "Launch year" },
  { icon: <IconUsers />, value: "5+", label: "Touchpoints designed pre-launch" },
  { icon: <IconTarget />, value: "1", label: "Calm, consistent brand voice" },
];

export default function CaseStudyMirror() {
  return (
    <>
      <Seo
        title="Mirror — Case Study"
        description="A brand and website for a fintech startup launching in 2026 — built to feel calm and trustworthy in a category full of noise."
        path="/portfolio/mirror"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Mirror", path: "/portfolio/mirror" },
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
            <p className="eyebrow">Case Study · Websites</p>
            <h1>Mirror</h1>
            <p className={styles.subhead}>
              A brand and website for a fintech startup launching in 2026 — built to feel calm and
              trustworthy in a category full of noise.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Fintech &amp; Personal Finance</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity, Website &amp; Product Design</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Stage</span>
                <span className={styles.metaValue}>Pre-Launch, Early Access</span>
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
              alt="Mirror website shown across laptop and mobile devices"
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
            <h2>One calm brand, from screen to real life</h2>
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

      <TestimonialSection caseStudyLink="/portfolio/mirror" background="" />

      <section className="section">
        <div className="container">
          <motion.div
            className={`${styles.ctaBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Building a product and need a brand to match?</h2>
            <p>Tell us about your launch and we'll show you how a brand like this could look.</p>
            <div className={styles.ctaActions}>
              <Button to="/start-a-project" variant="primary">
                Start a Project
              </Button>
              <Button to="/portfolio" variant="secondary">
                See More Work
              </Button>
              <Button to="/services/website-design" variant="ghost">
                Explore Website Design →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
