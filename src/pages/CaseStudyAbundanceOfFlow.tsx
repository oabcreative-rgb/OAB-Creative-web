import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/abundanceofflow/aof-showcase.jpg";
import brandBoard from "../assets/portfolio/abundanceofflow/aof-brand-board.jpg";
import digitalMockup from "../assets/portfolio/abundanceofflow/aof-digital-mockup.jpg";
import staffKit from "../assets/portfolio/abundanceofflow/aof-staff-kit.jpg";
import flyer from "../assets/portfolio/abundanceofflow/aof-flyer.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Abundance of Flow is a multi-service testing and notary company — DNA and paternity testing, breath alcohol testing, fingerprinting, CPR certification and notary work, all under one roof for individuals, families and legal professionals.",
  },
  {
    label: "The Challenge",
    text: "Six very different services — court-admissible tests, legal paperwork, life-saving CPR classes — needed to feel like one credible business, not a scattered list of unrelated offerings.",
  },
  {
    label: "The Solution",
    text: "We built a full identity around the line \"Testing. Protecting. Empowering.\" — a red, black, cream and gold system — then carried it across the office, staff uniforms, business cards, specimen kits, digital mockups and every service flyer.",
  },
  {
    label: "The Outcome",
    text: "Abundance of Flow now shows up the same confident way everywhere — on the wall behind reception, on a technician's coat, in a client's hand — the consistency a testing business needs to be trusted.",
  },
];

const gallery = [
  { image: brandBoard, title: "Brand Identity System", note: "Logo, palette & type" },
  { image: digitalMockup, title: "Digital & Social Presence", note: "Website, app & social" },
  { image: staffKit, title: "Staff & Service Collateral", note: "Uniforms, cards & kits" },
  { image: flyer, title: "Service Campaign Flyers", note: "Paternity testing flyer" },
];

const stats = [
  { icon: <IconStar />, value: "6+", label: "Services unified under one brand" },
  { icon: <IconUsers />, value: "10+", label: "Touchpoints designed" },
  { icon: <IconTarget />, value: "1", label: "Consistent identity, every service" },
];

export default function CaseStudyAbundanceOfFlow() {
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
            <h1>Abundance of Flow</h1>
            <p className={styles.subhead}>
              A full brand system for a multi-service testing and notary company — built to feel
              trustworthy across a reception desk, a staff uniform and a stack of service flyers.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Testing &amp; Notary Services</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity, Collateral &amp; Campaign Design</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Office, Staff &amp; Digital Rollout</span>
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
              alt="Abundance of Flow branded reception desk and signage"
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
            <h2>One brand, six services, zero confusion</h2>
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
            <h2>Running multiple services and need one credible brand?</h2>
            <p>Tell us about your business and we'll show you how a unified system like this could look.</p>
            <div className={styles.ctaActions}>
              <Button to="/start-a-project" variant="primary">
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
