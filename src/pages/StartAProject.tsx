import { lazy, useState } from "react";
import { motion } from "motion/react";
import BrandGlyph from "../components/BrandGlyph";
import BookingButton from "../components/BookingButton";
import EnquiryForm, { type SubmitStatus } from "../components/EnquiryForm/EnquiryForm";
import LazyScene3D from "../three/LazyScene3D";
import { usePageMeta } from "../hooks/usePageMeta";
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
    // TODO: swap in the live LinkedIn company URL once the page is ready.
    label: "LinkedIn",
    value: "OAB Creative",
    href: "#",
    icon: IconLinkedIn,
    comingSoon: true,
  },
];

export default function StartAProject() {
  const [formStatus, setFormStatus] = useState<SubmitStatus>("idle");

  usePageMeta(
    "Start a Project — OAB Creative",
    "Tell us about your project in a few quick steps, or book a discovery call directly with OAB Creative."
  );

  return (
    <>
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

      <section className={`section ${styles.contactStrip}`}>
        <div className="container">
          <p className={styles.contactStripLabel}>Or reach the studio directly</p>
          <ul className={styles.contactStripList}>
            {contactMethods.map(({ label, value, href, icon: Icon, comingSoon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={styles.contactStripItem}
                  aria-label={comingSoon ? `${label} (coming soon)` : `${label}: ${value}`}
                >
                  <Icon />
                  <span>{comingSoon ? `${label} · Coming Soon` : value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
