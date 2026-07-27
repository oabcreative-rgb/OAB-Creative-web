import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { IconArrowLeft, IconStar, IconUsers, IconTarget } from "../components/icons";
import showcase from "../assets/portfolio/alts-web/altsweb-showcase.jpg";
import services from "../assets/portfolio/alts-web/altsweb-services.jpg";
import contact from "../assets/portfolio/alts-web/altsweb-contact.jpg";
import mobile from "../assets/portfolio/alts-web/altsweb-mobile.jpg";
import desk from "../assets/portfolio/alts-web/altsweb-desk.jpg";
import styles from "./CaseStudy.module.css";

const overview = [
  {
    label: "The Business",
    text: "Affordable Lab & Testing Solutions runs a walk-in and mobile testing lab in Florence, South Carolina — drug testing, DNA testing, fingerprinting, notary and CPR certification for individuals and local employers.",
  },
  {
    label: "The Challenge",
    text: "The lab needed a real booking website, not just a brand — somewhere clients could see services, prices and reviews, and book an appointment in a couple of taps, on any device.",
  },
  {
    label: "The Solution",
    text: "We designed and built a full website on the brand system — a clear services page with live pricing and booking, a simple contact flow, and a homepage that leads with trust signals like the 5.0 Google rating.",
  },
  {
    label: "The Outcome",
    text: "affordablelab.org is now live and taking bookings — fast to load, easy to navigate on mobile, and consistent with every flyer and sign the lab already had out in the world.",
  },
];

const gallery = [
  { image: services, title: "Services & Online Booking", note: "Live pricing & booking" },
  { image: contact, title: "Contact & Inquiries", note: "Simple contact flow" },
  { image: mobile, title: "Mobile Experience", note: "Built mobile-first" },
  { image: desk, title: "Desktop, In Context", note: "Real-world preview" },
];

const stats = [
  { icon: <IconStar />, value: "5.0", label: "Google rating featured on the homepage" },
  { icon: <IconUsers />, value: "5+", label: "Pages designed & built" },
  { icon: <IconTarget />, value: "1", label: "Site, every device" },
];

export default function CaseStudyALTSWebsite() {
  return (
    <>
      <Seo
        title="Affordable Lab & Testing Solutions Website — Case Study"
        description="A booking-ready website for a local testing lab — built to turn visitors into scheduled appointments, on desktop or on a phone in the parking lot."
        path="/portfolio/alts-website"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Affordable Lab & Testing Solutions Website", path: "/portfolio/alts-website" },
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
            <h1>Affordable Lab & Testing Solutions</h1>
            <p className={styles.subhead}>
              A booking-ready website for a local testing lab — built to turn visitors into
              scheduled appointments, on desktop or on a phone in the parking lot.
            </p>
            <div className={styles.metaRow}>
              <div>
                <span className={styles.metaLabel}>Industry</span>
                <span className={styles.metaValue}>Lab &amp; Testing Services</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Services</span>
                <span className={styles.metaValue}>Website Design &amp; Development</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>Home, Services, Contact &amp; Booking</span>
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
              alt="Affordable Lab & Testing Solutions website homepage shown on desktop"
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
            <h2>A site built to book appointments, not just look good</h2>
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

      <TestimonialSection caseStudyLink="/portfolio/alts-website" background="" />

      <section className="section">
        <div className="container">
          <motion.div
            className={`${styles.ctaBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Need a website that actually books clients?</h2>
            <p>Tell us about your business and we'll show you how a site like this could look.</p>
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
