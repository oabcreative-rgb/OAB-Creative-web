import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/alts/alts-brand-showcase.jpg";
import dnaFlyer from "../assets/portfolio/alts/alts-dna-flyer.jpg";
import drugFlyer from "../assets/portfolio/alts/alts-drug-testing-flyer.jpg";
import testimonials from "../assets/portfolio/alts/alts-testimonials.jpg";
import genderReveal from "../assets/portfolio/alts/alts-gender-reveal-flyer.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Affordable Lab & Testing Solutions runs a walk-in and mobile testing lab in Florence, South Carolina — drug testing, DNA testing, fingerprinting, notary and CPR certification for individuals and local employers.",
  },
  {
    label: "The Challenge",
    text: "Every flyer, sign and social post looked like it came from a different business. For a lab handling sensitive results, that inconsistency was quietly costing them trust before a client ever walked in.",
  },
  {
    label: "The Solution",
    text: "We built one brand system — a confident purple-and-white mark, a fixed type and color palette — then applied it everywhere: service flyers, business cards, a retractable banner, outdoor signage and community event materials.",
  },
  {
    label: "The Outcome",
    text: "The lab now looks like the same business wherever a client finds it, from a roadside sign to a QR code on a flyer. Reviews sit at a 5.0 average, and campaigns like the CPR event keep bringing in new bookings.",
  },
];

const gallery = [
  { image: dnaFlyer, title: "DNA Testing Campaign", note: "Service flyer" },
  { image: drugFlyer, title: "Drug Testing Campaign", note: "Service flyer" },
  { image: genderReveal, title: "Gender Reveal Promo", note: "Social campaign" },
  { image: testimonials, title: "Client Testimonials", note: "Review & trust content" },
];

const stats = [
  { icon: <IconStar />, value: "5.0", label: "Average Google rating" },
  { icon: <IconUsers />, value: "6+", label: "Services unified under one brand" },
  { icon: <IconTarget />, value: "1", label: "Consistent brand, every touchpoint" },
];

export default function CaseStudyALTS() {
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
            <p className="eyebrow">Case Study · Marketing Campaigns</p>
            <h1>Affordable Lab &amp; Testing Solutions</h1>
            <p className={styles.subhead}>
              A full brand identity and campaign system for a local testing lab — built to make
              every flyer, sign and social post feel like the same trusted business.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Clinical &amp; Mobile Lab Testing</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity, Print &amp; Social Campaigns</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>Florence, SC</span>
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
            <img src={showcase} alt="ALTS brand applied across signage, business cards and a retractable banner" className={styles.showcaseImg} />
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
            <h2>One brand, applied across every campaign</h2>
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
            <h2>Want a brand this consistent?</h2>
            <p>Tell us about your business and we'll show you how a unified system could look.</p>
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
