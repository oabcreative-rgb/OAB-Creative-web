import { lazy } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import LazyScene3D from "../three/LazyScene3D";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { SERVICES } from "../data/servicesData";
import styles from "./Services.module.css";

const ServicesHeroScene = lazy(() => import("../three/ServicesHeroScene"));

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Strategic branding, website design, motion design, product commercials, social media design, digital marketing and SEO — everything a growing business needs to build trust and attract more clients."
        path="/services"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />

      <section className={`${styles.pageHero} dark-section`}>
        <LazyScene3D
          scene={ServicesHeroScene}
          className={styles.heroScene}
          fallback={<BrandGlyph tone="cyan" className={styles.heroGlyph} />}
          disableOnMobile
        />
        <div className="container">
          <motion.div
            className={styles.heroTextPanel}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Services</p>
            <h1>Everything your business needs to build trust and attract more clients.</h1>
            <p>
              OAB Creative combines strategic branding, website design, motion design and digital
              marketing into one consistent system — so every touchpoint helps a prospect trust
              you a little more, and move a little closer to becoming a client.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.rows}`}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`.trim()}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to={`/services/${service.slug}`} className={styles.visualLink}>
                {service.useGraphicHero || !service.heroImage ? (
                  <div className={styles.rowGraphic} aria-hidden="true">
                    <BrandGlyph tone="white" className={styles.rowGraphicGlyph} />
                    <span className={styles.rowGraphicIcon}>{service.icon}</span>
                  </div>
                ) : (
                  <img
                    src={service.heroImage}
                    alt={`${service.navTitle} work by OAB Creative`}
                    className={styles.rowImage}
                    loading="lazy"
                  />
                )}
              </Link>
              <div className={styles.rowContent}>
                <span className={styles.rowIcon}>{service.icon}</span>
                <h2>{service.navTitle}</h2>
                <p>{service.supportingStatement}</p>
                <ul className={styles.outcomeList}>
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <Button to={`/services/${service.slug}`} variant="ghost">
                  Explore {service.navTitle} →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <TestimonialSection />

      <section className="section bg-mesh-alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Ready When You Are"
            title="Let's find the right starting point for your growth."
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button to="/start-a-project" variant="primary">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
