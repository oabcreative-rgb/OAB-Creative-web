import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/swiftdrop/sd-showcase.jpg";
import brandIdentity from "../assets/portfolio/swiftdrop/sd-brand-identity.jpg";
import stationery from "../assets/portfolio/swiftdrop/sd-stationery.jpg";
import apparel from "../assets/portfolio/swiftdrop/sd-apparel.jpg";
import appScreens from "../assets/portfolio/swiftdrop/sd-app-screens.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "SwiftDrop is a modern delivery and logistics company — a fleet of vans and scooters, courier drivers, and a tracking app customers use to book and follow every delivery.",
  },
  {
    label: "The Challenge",
    text: "Delivery is a crowded, low-trust category where customers mostly notice the brand when something goes wrong. SwiftDrop needed to look reliable on a van, on a courier, and on a customer's phone — all at once.",
  },
  {
    label: "The Solution",
    text: "We built one identity around a speed-lined mark, then rolled it out across the vehicle fleet, courier uniforms, packaging, the delivery-tracking app and the website — a single system, dozens of touchpoints.",
  },
  {
    label: "The Outcome",
    text: "SwiftDrop now looks like the same trustworthy brand from the moment a van pulls up to the moment a customer gets their delivery-complete notification — a level of consistency few companies this size have.",
  },
];

const gallery = [
  { image: brandIdentity, title: "Brand Identity System", note: "Logo, palette & type" },
  { image: appScreens, title: "Delivery Tracking App", note: "Product UI" },
  { image: stationery, title: "Stationery & Packaging", note: "Boxes, tape & letterhead" },
  { image: apparel, title: "Courier Apparel & Merch", note: "Uniforms & branded goods" },
];

const stats = [
  { icon: <IconStar />, value: "1", label: "System, every touchpoint" },
  { icon: <IconUsers />, value: "10+", label: "Applications designed" },
  { icon: <IconTarget />, value: "3", label: "Channels unified — fleet, app, brand" },
];

export default function CaseStudySwiftDrop() {
  return (
    <>
      <Seo
        title="SwiftDrop — Case Study"
        description="A full brand system for a delivery and logistics company — built to feel consistent across a fleet of vans, a courier team, and a customer-facing app."
        path="/portfolio/swiftdrop"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "SwiftDrop", path: "/portfolio/swiftdrop" },
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
            <p className="eyebrow">Case Study · Brand Identity</p>
            <h1>SwiftDrop</h1>
            <p className={styles.subhead}>
              A full brand system for a delivery and logistics company — built to feel consistent
              across a fleet of vans, a courier team, and a customer-facing app.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Delivery &amp; Logistics</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity, App &amp; Website Design</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Fleet, Packaging &amp; Digital</span>
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
              alt="SwiftDrop branded delivery van on a city street"
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
            <h2>One brand, moving in every direction</h2>
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

      <TestimonialSection caseStudyLink="/portfolio/swiftdrop" background="" />

      <section className="section">
        <div className="container">
          <motion.div
            className={`${styles.ctaBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Need a brand that holds up everywhere it shows up?</h2>
            <p>Tell us about your business and we'll show you how a system like this could look.</p>
            <div className={styles.ctaActions}>
              <Button to="/start-a-project" variant="primary">
                Start a Project
              </Button>
              <Button to="/portfolio" variant="secondary">
                See More Work
              </Button>
              <Button to="/services/brand-identity" variant="ghost">
                Explore Brand Identity →
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
