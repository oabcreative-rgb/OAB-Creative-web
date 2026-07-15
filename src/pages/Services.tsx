import { lazy } from "react";
import { motion } from "motion/react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import BrandGlyph from "../components/BrandGlyph";
import LazyScene3D from "../three/LazyScene3D";
import { IconIdentity, IconMotion, IconWebsites, IconSystems } from "../components/icons";
import styles from "./Services.module.css";

const ServicesHeroScene = lazy(() => import("../three/ServicesHeroScene"));

const services = [
  {
    icon: <IconIdentity />,
    title: "Brand Identity",
    description:
      "First impressions decide whether a prospect trusts you enough to keep listening. A complete identity system — logo, color, typography and guidelines — makes sure that first impression sells you before you even speak.",
    deliverables: [
      "Logo exploration & final logo system",
      "Color palette and usage guidelines",
      "Typography system and type scale",
      "Iconography, patterns and shape language",
      "Brand dos & don'ts for consistent usage",
    ],
  },
  {
    icon: <IconMotion />,
    title: "Motion Design",
    description:
      "Attention is the new currency. Motion that moves — animated logos, UI interactions and social content — keeps prospects engaged long enough to convert, on any screen.",
    deliverables: [
      "Animated logo & brand intro stings",
      "UI micro-interactions and transitions",
      "Social and marketing motion assets",
      "Presentation and pitch-deck animation",
    ],
  },
  {
    icon: <IconWebsites />,
    title: "Websites",
    description:
      "Your website should work as hard as your best salesperson. Clear structure, fast performance and confident design turn visitors into inquiries around the clock.",
    deliverables: [
      "UX structure and content strategy",
      "Responsive, accessible page design",
      "Component-based build for easy updates",
      "SEO-friendly, performance-first delivery",
    ],
  },
  {
    icon: <IconSystems />,
    title: "Creative Systems",
    description:
      "Every inconsistent touchpoint chips away at trust. Scalable brand systems keep you consistent everywhere you show up, so customers recognize and choose you faster as you grow.",
    deliverables: [
      "Stationery & brand asset suite",
      "Social media templates and guidelines",
      "Presentation and proposal templates",
      "Environmental and merchandise branding",
    ],
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

export default function Services() {
  return (
    <>
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
            <h1>Everything your brand needs to attract, convert and keep more clients.</h1>
            <p>
              Every engagement is built around one goal: turning your credibility into
              consistent business growth — whether you need a full identity system or a single,
              focused deliverable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.list}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className={styles.row}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <div className={styles.icon}>{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <motion.ul
                    className={styles.deliverList}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={listVariants}
                  >
                    {service.deliverables.map((item) => (
                      <motion.li key={item} variants={listItemVariants}>
                        <span className={styles.check}>✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mesh-alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Ready When You Are"
            title="Let's find the right starting point for your growth."
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button to="/contact" variant="primary">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
