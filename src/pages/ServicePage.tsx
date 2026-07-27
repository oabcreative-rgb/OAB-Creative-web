import { Navigate, useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Button from "../components/Button";
import BookingButton from "../components/BookingButton";
import SectionHeading from "../components/SectionHeading";
import BrandGlyph from "../components/BrandGlyph";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import Seo from "../seo/Seo";
import { absoluteUrl } from "../seo/config";
import { breadcrumbSchema, serviceSchema } from "../seo/schema";
import { IconCheck, IconArrowLeft } from "../components/icons";
import { getServiceBySlug } from "../data/servicesData";
import styles from "./ServicePage.module.css";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const path = `/services/${service.slug}`;
  const absoluteHeroImage = service.heroImage ? absoluteUrl(service.heroImage) : undefined;

  return (
    <>
      <Seo
        title={service.seoTitle}
        rawTitle
        description={service.seoDescription}
        path={path}
        image={absoluteHeroImage}
        jsonLd={[
          serviceSchema({ name: service.navTitle, description: service.seoDescription, path, image: absoluteHeroImage }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navTitle, path },
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
            <Link to="/services" className={styles.backLink}>
              <IconArrowLeft />
              All Services
            </Link>
            <p className="eyebrow">{service.heroEyebrow}</p>
            <h1>{service.headline}</h1>
            <p className={styles.subhead}>{service.supportingStatement}</p>
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
            {service.useGraphicHero || !service.heroImage ? (
              <div className={styles.heroGraphic} aria-hidden="true">
                <BrandGlyph tone="white" className={styles.heroGraphicGlyph} />
                <span className={styles.heroGraphicIcon}>{service.icon}</span>
              </div>
            ) : (
              <img src={service.heroImage} alt={`${service.navTitle} work by OAB Creative`} className={styles.heroImage} />
            )}
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
              <p className="eyebrow">The Problem</p>
              <h2>What happens without it</h2>
              <ul className={styles.plainList}>
                {service.problems.map((problem) => (
                  <li key={problem}>{problem}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <p className="eyebrow">The Benefit</p>
              <h2>What you gain</h2>
              <ul className={styles.checkList}>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span className={styles.checkIcon}>
                      <IconCheck />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {service.portfolio.length > 0 && (
        <section className="section bg-mesh">
          <div className="container">
            <SectionHeading eyebrow="Relevant Work" title="Recent projects in this service" />
            {service.portfolioNote && <p className={styles.portfolioNote}>{service.portfolioNote}</p>}
            <div className={styles.portfolioGrid}>
              {service.portfolio.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <Link to={project.link} className={styles.portfolioCard}>
                    <div className={styles.portfolioImgWrap}>
                      <img src={project.image} alt={`${project.title} — ${project.category}`} loading="lazy" />
                    </div>
                    <span className={styles.portfolioCategory}>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.context}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHeading align="center" eyebrow="How We Work" title="Our process for this service" />
          <div className={styles.processGrid}>
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                className={styles.processCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              >
                <span className={styles.processStep}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dots">
        <div className="container">
          <SectionHeading eyebrow="What You Get" title="Deliverables" />
          <ul className={styles.deliverablesList}>
            {service.deliverables.map((item) => (
              <li key={item}>
                <span className={styles.checkIcon}>
                  <IconCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialSection service={service.slug} background="" />

      <section className="section bg-mesh-alt">
        <div className="container">
          <SectionHeading align="center" eyebrow="Common Questions" title="Frequently asked questions" />
          <div className={styles.faqList}>
            {service.faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
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
            <h2>Ready to get started with {service.navTitle.toLowerCase()}?</h2>
            <p>Tell us about your project, or book a short call to talk it through first.</p>
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
