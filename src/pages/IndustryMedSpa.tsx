import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BookingButton from "../components/BookingButton";
import SectionHeading from "../components/SectionHeading";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import Seo from "../seo/Seo";
import { breadcrumbSchema, serviceSchema } from "../seo/schema";
import { IconCheck } from "../components/icons";
import { getServiceBySlug } from "../data/servicesData";
import { ARTICLES } from "../data/resources/articles";
import mirrorShowcase from "../assets/portfolio/mirror/mirror-showcase.jpg";
import altswebShowcase from "../assets/portfolio/alts-web/altsweb-showcase.jpg";
import styles from "./ServicePage.module.css";

const path = "/industries/med-spa-website-design";

const medSpaArticleSlugs = [
  "med-spa-website-design-consultation-bookings",
  "med-spa-website-mistakes-that-reduce-trust",
  "what-every-med-spa-homepage-should-include",
  "how-branding-helps-aesthetic-clinics-look-premium",
  "med-spa-website-redesign-checklist",
];

export default function IndustryMedSpa() {
  const websiteService = getServiceBySlug("website-design");
  const brandService = getServiceBySlug("brand-identity");
  const clusterArticles = medSpaArticleSlugs
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is (typeof ARTICLES)[number] => Boolean(a));

  return (
    <>
      <Seo
        title="Med Spa Website Design"
        description="Website design and branding for med spas and aesthetic clinics — built to present treatments clearly, build trust and make booking a consultation easy."
        path={path}
        jsonLd={[
          serviceSchema({
            name: "Med Spa Website Design",
            description:
              "Website design and branding services for med spas and aesthetic clinics, focused on trust, clarity and consultation bookings.",
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Med Spa Website Design", path },
          ]),
        ]}
      />

      <section className={`${styles.hero} dark-section`}>
        <BrandGlyph tone="cyan" className={styles.heroGlyph} />
        <div className={`container ${styles.heroGrid}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Med Spas & Aesthetic Clinics</p>
            <h1>Website design and branding for med spas that need to be trusted, not just seen.</h1>
            <p className={styles.subhead}>
              A med spa website has one job most other business sites don't: make a cautious
              first-time visitor comfortable enough to book a consultation. We design and build
              websites — and the brand identity behind them — with that specific goal in mind.
            </p>
            <div className={styles.heroActions}>
              <Button to="/start-a-project" variant="primary">
                Start a Project
              </Button>
              <BookingButton variant="secondary">Book a Discovery Call</BookingButton>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisualWrap}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className={styles.heroGraphic} aria-hidden="true">
              <BrandGlyph tone="white" className={styles.heroGraphicGlyph} />
              <span className={styles.heroGraphicIcon}>{websiteService?.icon}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="eyebrow">The Challenge</p>
              <h2>Why so many med spa websites underperform</h2>
              <ul className={styles.plainList}>
                <li>
                  Aesthetic treatments are a high-trust decision — a confusing or dated website
                  creates doubt before a visitor even reads the treatment menu.
                </li>
                <li>
                  Many med spa sites are built from generic templates that don't reflect the
                  specific credibility signals this category needs.
                </li>
                <li>
                  Booking flows that require a phone call or a long form lose visitors who were
                  ready to commit.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <p className="eyebrow">What We Bring</p>
              <h2>How we approach med spa websites</h2>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.checkIcon}>
                    <IconCheck />
                  </span>
                  Clear treatment presentation, organized around how clients actually search
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <IconCheck />
                  </span>
                  A consistent, low-friction path to booking a consultation
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <IconCheck />
                  </span>
                  Credibility built through clean design, clear qualifications and real photography
                </li>
                <li>
                  <span className={styles.checkIcon}>
                    <IconCheck />
                  </span>
                  A{" "}
                  {brandService ? (
                    <Link to={`/services/${brandService.slug}`} className={styles.inlineLink}>
                      brand identity
                    </Link>
                  ) : (
                    "brand identity"
                  )}{" "}
                  that reads as premium and considered, not generic
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-mesh">
        <div className="container">
          <SectionHeading eyebrow="Relevant Work" title="Website design work we've delivered" />
          <p className={styles.portfolioNote}>
            We haven't published a dedicated med spa case study yet — the examples below show
            website design work built on the same principles: clarity, trust and an easy path to
            action.
          </p>
          <div className={styles.portfolioGrid}>
            <Link to="/portfolio/mirror" className={styles.portfolioCard}>
              <div className={styles.portfolioImgWrap}>
                <img src={mirrorShowcase} alt="Mirror — Website Design" loading="lazy" />
              </div>
              <span className={styles.portfolioCategory}>Website Design</span>
              <h3>Mirror</h3>
              <p>A fintech product website built around clarity, trust and a confident visual system.</p>
            </Link>
            <Link to="/portfolio/alts-website" className={styles.portfolioCard}>
              <div className={styles.portfolioImgWrap}>
                <img src={altswebShowcase} alt="Affordable Lab & Testing Solutions — Website Design" loading="lazy" />
              </div>
              <span className={styles.portfolioCategory}>Website Design</span>
              <h3>Affordable Lab &amp; Testing Solutions</h3>
              <p>A service-business website designed to make booking a consultation simple and fast.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Guides" title="Med spa website guides" />
          <div className={styles.portfolioGrid}>
            {clusterArticles.map((article) => (
              <Link key={article.slug} to={`/resources/${article.slug}`} className={styles.portfolioCard}>
                <span className={styles.portfolioCategory}>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection background="bg-mesh-alt" />

      <section className="section bg-dots">
        <div className="container">
          <SectionHeading align="center" eyebrow="Common Questions" title="Frequently asked questions" />
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>Do you specialize only in med spas?</summary>
              <p>
                No — OAB Creative is a general creative studio serving businesses across
                industries. This page reflects specific experience thinking through the med spa
                buyer journey, applied through our core Website Design and Brand Identity services.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Are you based in the United States?</summary>
              <p>
                OAB Creative is a globally available creative studio and works remotely with
                clients in the United States, United Kingdom and beyond. We are not a locally
                based US agency, and collaboration happens through video calls and shared tools.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Can you redesign an existing med spa website?</summary>
              <p>
                Yes — most of our website projects improve on an existing site rather than
                starting from a blank page. We can also refine your current brand identity
                alongside a redesign if needed.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Do you handle HIPAA or medical compliance requirements?</summary>
              <p>
                We design and build the website itself; specific legal or medical compliance
                requirements for your practice should be confirmed with your own legal or
                regulatory advisor. We're happy to implement any requirements you provide.
              </p>
            </details>
          </div>
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
            <h2>Ready to give your med spa a website worth booking through?</h2>
            <p>Tell us about your practice, or book a short call to talk it through first.</p>
            <div className={styles.ctaActions}>
              <Button to="/start-a-project" variant="primary">
                Start a Project
              </Button>
              <BookingButton variant="secondary">Book a Discovery Call</BookingButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
