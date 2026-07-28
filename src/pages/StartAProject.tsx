import { lazy, useState } from "react";
import { motion } from "motion/react";
import BrandGlyph from "../components/BrandGlyph";
import BookingButton from "../components/BookingButton";
import EnquiryForm, { type SubmitStatus } from "../components/EnquiryForm/EnquiryForm";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import LazyScene3D from "../three/LazyScene3D";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { trackEvent } from "../config/analytics";
import {
  IconMail,
  IconInstagram,
  IconFacebook,
  IconTikTok,
  IconPinterest,
  IconLinkedIn,
} from "../components/icons";
import styles from "./StartAProject.module.css";

const ContactHeroScene = lazy(() => import("../three/ContactHeroScene"));

const contactMethods = [
  {
    label: "Email",
    value: "oabcreative@gmail.com",
    href: "mailto:oabcreative@gmail.com",
    icon: IconMail,
  },
  {
    label: "Instagram",
    value: "@oabcreativestudio",
    href: "https://www.instagram.com/oabcreativestudio?igsh=MW5rOHZkMTJvNmh3cA==",
    icon: IconInstagram,
  },
  {
    label: "Facebook",
    value: "OAB Creative",
    href: "https://www.facebook.com/share/1BVLUMy1GZ/",
    icon: IconFacebook,
  },
  {
    label: "TikTok",
    value: "@oabcreative",
    href: "https://www.tiktok.com/@oabcreative?_r=1&_t=ZS-981tFopr3lB",
    icon: IconTikTok,
  },
  {
    label: "Pinterest",
    value: "OAB Creative",
    href: "https://pin.it/1hf85LhDA",
    icon: IconPinterest,
  },
  {
    label: "LinkedIn",
    value: "Amule Emmanuel",
    href: "https://www.linkedin.com/in/emmanuel-amule-62860b413",
    icon: IconLinkedIn,
  },
];

export default function StartAProject() {
  const [formStatus, setFormStatus] = useState<SubmitStatus>("idle");

  return (
    <>
      <Seo
        title="Start a Project"
        description="Tell us about your project in a few quick steps, or book a discovery call directly with OAB Creative."
        path="/start-a-project"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Start a Project", path: "/start-a-project" }])}
      />
      <section className={`${styles.pageHero} dark-section`}>
        <LazyScene3D
          scene={ContactHeroScene}
          className={styles.heroScene}
          fallback={<BrandGlyph tone="cyan" className={styles.heroGlyph} />}
          disableOnMobile
        />
        <div className={styles.heroGlyphStack} aria-hidden="true">
          <BrandGlyph tone="cyan" className={styles.heroGlyphLarge} />
          <BrandGlyph tone="white" className={styles.heroGlyphSmall} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroTextPanel}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Start a Project</p>
            <h1>Let's build something remarkable.</h1>
            <p>
              Answer a few quick questions — it takes about two minutes — and we'll follow up
              with clear next steps for your project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          {formStatus !== "success" && (
            <motion.div
              className={styles.bookingPrompt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span>Prefer to talk it through first?</span>
              <BookingButton variant="ghost">Book a Discovery Call →</BookingButton>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <EnquiryForm onStatusChange={setFormStatus} />
          </motion.div>
        </div>
      </section>

      <TestimonialSection background="" />

      <section className={`section ${styles.contactStrip}`}>
        <div className="container">
          <p className={styles.contactStripLabel}>Or reach the studio directly</p>
          <ul className={styles.contactStripList}>
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={styles.contactStripItem}
                  aria-label={`${label}: ${value}`}
                  onClick={() => label === "Email" && trackEvent("email_click")}
                >
                  <Icon />
                  <span>{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
