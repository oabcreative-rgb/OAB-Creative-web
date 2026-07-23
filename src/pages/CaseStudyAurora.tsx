import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/aurora/aurora-showcase.jpg";
import detail from "../assets/portfolio/aurora/aurora-detail.jpg";
import motionPreview from "../assets/portfolio/aurora/aurora-motion.mp4";
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
    text: "Aurora is an independent fragrance house preparing to launch its signature scent. They needed a hero campaign film and matching photography that could sit next to any established luxury fragrance brand's advertising — built around one creative direction: warm, golden-lit, unmistakably premium.",
  },
  {
    label: "Challenge",
    text: "A launch film like this usually means a studio, a full crew, a model, a director and days of production time — a budget most independent brands don't have before their first sale.",
  },
  {
    label: "Solution",
    text: "We art-directed and produced a cinematic motion piece using AI production — golden light, movement, and an editorial beauty-campaign feel — then paired it with matching campaign stills from the same creative direction.",
  },
  {
    label: "Result",
    text: "Aurora now launches with a film and photography set that reads as premium as an established fragrance house's campaign — built to hold attention on social, lift perceived value, and give the brand one consistent, expensive-looking presence everywhere it shows up.",
  },
];

const stats = [
  { icon: <IconStar />, value: "0→1", label: "Campaign film built from concept to delivery" },
  { icon: <IconUsers />, value: "AI-Led", label: "Production workflow, no studio shoot required" },
  { icon: <IconTarget />, value: "1", label: "Consistent identity, film & photography" },
];

export default function CaseStudyAurora() {
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
            <h1>Aurora</h1>
            <p className={styles.subhead}>
              A cinematic launch film and campaign photography for an independent fragrance
              house — built to feel like an established luxury brand from day one.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Fragrance &amp; Luxury Beauty</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Motion Design, AI Production</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Launch Campaign Film</span>
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
              alt="Aurora campaign portrait, model with signature fragrance bottle"
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
            <h2>A film that carries the whole campaign</h2>
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
              <p className={`${styles.galleryNote} ${styles.workCaption}`}>Motion Preview · Launch Film</p>
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
                <img src={detail} alt="Aurora campaign detail, fragrance bottle in hand" loading="lazy" />
              </div>
              <figcaption>
                <span className={styles.galleryNote}>Campaign Photography</span>
                <span className={styles.galleryTitle}>Product in Hand</span>
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
            <p>Tell us about your launch and we'll show you how a campaign film like this could look.</p>
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
