import { lazy, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import LazyScene3D from "../three/LazyScene3D";
import {
  IconMail,
  IconInstagram,
  IconFacebook,
  IconTikTok,
  IconPinterest,
  IconLinkedIn,
  IconCalendar,
} from "../components/icons";
import styles from "./Contact.module.css";

const ContactHeroScene = lazy(() => import("../three/ContactHeroScene"));

const services = ["Brand Identity", "Motion Design", "Websites", "Creative Systems", "Not sure yet"];

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");

    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`;
    window.location.href = `mailto:oabcreative@gmail.com?subject=${encodeURIComponent(
      `New project inquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

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
            <p className="eyebrow">Contact</p>
            <h1>Let's work together.</h1>
            <p>
              Tell us a bit about your business and where you want it to go — we'll show you how
              strategic branding, web design and motion can help you get there faster.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={`container ${styles.grid}`}>
          <motion.div
            className={`${styles.infoCard} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3>Reach us directly</h3>
            <p className={styles.infoIntro}>The fastest ways to reach the studio directly.</p>
            <ul className={styles.contactList}>
              {contactMethods.map(({ label, value, href, icon: Icon, comingSoon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={styles.contactItem}
                  >
                    <span className={styles.contactIcon}>
                      <Icon />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>{label}</span>
                      {!comingSoon && <span className={styles.contactValue}>{value}</span>}
                    </span>
                    {comingSoon && <span className={styles.comingSoon}>Coming Soon</span>}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className={styles.field}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required placeholder="Jane Doe" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" required placeholder="jane@company.com" />
            </div>
            <div className={styles.field}>
              <label htmlFor="service">Select a service</label>
              <select id="service" name="service" defaultValue={services[0]}>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" name="message" required placeholder="What are you looking to build?" />
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
            {submitted && <span className={styles.status}>Opening your email client…</span>}
          </motion.form>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true">
        <BrandGlyph tone="primary" className={styles.dividerGlyph} />
      </div>

      <section className="section bg-mesh-alt">
        <div className="container">
          <motion.div
            className={`${styles.bookingBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BrandGlyph tone="cyan" className={styles.bookingGlyph} />
            <div className={styles.bookingContent}>
              <span className={styles.bookingIcon}>
                <IconCalendar />
              </span>
              <p className="eyebrow">Book A Call</p>
              <h2>Let's Build Something Exceptional Together</h2>
              <p className={styles.bookingText}>
                Book a free strategy call and tell us where your brand needs to go — we'll show
                you exactly how strategic branding, motion and web design can get you there.
              </p>
              <Button href="https://calendly.com/oabcreativebranding" variant="primary" external>
                Book Strategy Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
