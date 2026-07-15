import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/yum/yum-showcase.jpg";
import brandBoard from "../assets/portfolio/yum/yum-brand-board.jpg";
import socialCampaign from "../assets/portfolio/yum/yum-social-campaign.jpg";
import storefront from "../assets/portfolio/yum/yum-storefront.jpg";
import mockups from "../assets/portfolio/yum/yum-mockups.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Yum Indulgence is a modern-retro dessert brand — scoops, sundaes, shakes and boxed treats built around one idea: a little indulgence should feel like joy, not guilt.",
  },
  {
    label: "The Challenge",
    text: "A treat brand lives or dies on first impression — the logo, the cup, the bag it comes home in all have to feel as fun and craveable as the dessert itself, from the storefront sign to the Instagram feed.",
  },
  {
    label: "The Solution",
    text: "We built a playful, cheeky identity around a retro script logo and a bold orange-and-purple palette, then carried it across packaging, signage, apparel, and a full social and web campaign.",
  },
  {
    label: "The Outcome",
    text: "Yum Indulgence now has a complete, ready-to-launch brand — one that looks as good on a storefront sign as it does in an Instagram post — built to turn first-time scrollers into regulars.",
  },
];

const gallery = [
  { image: brandBoard, title: "Brand Identity System", note: "Logo, palette & type" },
  { image: socialCampaign, title: "Social Media Campaign", note: "Instagram posts & promos" },
  { image: storefront, title: "Storefront & Retail Presence", note: "Signage & in-store" },
  { image: mockups, title: "Packaging & Mockups", note: "Bags, boxes & apparel" },
];

const stats = [
  { icon: <IconStar />, value: "10+", label: "Touchpoints designed" },
  { icon: <IconUsers />, value: "1", label: "Full campaign, one launch" },
  { icon: <IconTarget />, value: "0→1", label: "Brand built ready to sell" },
];

export default function CaseStudyYum() {
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
            <h1>Yum Indulgence</h1>
            <p className={styles.subhead}>
              A full campaign rollout for a modern-retro dessert brand — from storefront signage
              to social ads, built to make every scroll and every visit feel like a treat.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Desserts &amp; Treats</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Brand Identity &amp; Campaign Design</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Packaging, Storefront &amp; Social</span>
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
              alt="Yum Indulgence branded packaging, bag and box"
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
            <h2>One playful brand, ready for every channel</h2>
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
            <h2>Launching a brand that needs to feel this fun?</h2>
            <p>Tell us about your business and we'll show you how a campaign like this could look.</p>
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
