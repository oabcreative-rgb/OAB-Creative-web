import { lazy } from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import LazyScene3D from "../three/LazyScene3D";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import founderPhoto from "../assets/founder-portrait.jpg";
import styles from "./About.module.css";

const AboutHeroScene = lazy(() => import("../three/AboutHeroScene"));

const personality = [
  "Premium",
  "Strategic",
  "Clear",
  "Confident",
  "Modern",
  "Trustworthy",
  "Intelligent",
  "Sophisticated",
  "Creative",
  "Purposeful",
];

const pillars = [
  {
    title: "Mission",
    description:
      "To help ambitious businesses build brands that win more clients, look premium and support confident growth.",
  },
  {
    title: "Vision",
    description:
      "To become the creative partner modern businesses rely on to turn credibility into consistent, measurable growth.",
  },
  {
    title: "Positioning",
    description:
      "Premium creative studio for modern businesses — Brand Identity, Motion Design, Websites.",
  },
  {
    title: "Who We Help",
    description:
      "Business owners, founders, startups, marketing teams and creative leaders ready to grow — ages 25–50, global.",
  },
];

const tagGridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
} as const;

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="OAB Creative is a global creative studio helping ambitious businesses build trust, look premium and grow through strategic branding, websites and motion design."
        path="/about"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])}
      />
      <section className={`${styles.pageHero} dark-section`}>
        <LazyScene3D
          scene={AboutHeroScene}
          className={styles.heroScene}
          fallback={<BrandGlyph tone="cyan" className={styles.heroGlyph} />}
          disableOnMobile
        />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroTextPanel}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">About Us</p>
            <h1>The strongest brands make good businesses easier to choose.</h1>
            <p>
              OAB Creative helps ambitious businesses turn clarity, credibility and confidence
              into more inquiries and more clients. We're built for founders and teams who know
              their offer is strong but need their brand to close the gap.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className="container">
          <motion.div
            className={styles.pillarsCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.pillars}>
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className={styles.pillar}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-dots">
        <div className="container">
          <SectionHeading
            eyebrow="Brand Personality"
            title="How we show up, so clients feel it every time"
          />
          <motion.div
            className={styles.tagGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={tagGridVariants}
          >
            {personality.map((tag) => (
              <motion.span key={tag} className={styles.tag} variants={tagVariants}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className={`${styles.founderRow} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.founderPortraitWrap}>
              <img
                src={founderPhoto}
                alt="Amule Emmanuel, Founder & Creative Director of OAB Creative"
                className={styles.founderPortrait}
              />
            </div>
            <div className={styles.founderContent}>
              <div>
                <p className="eyebrow">Founder & Creative Director</p>
                <h2>Amule Emmanuel</h2>
                <p>
                  Leads strategy, visual direction and brand execution for businesses that need to
                  turn credibility into consistent, measurable growth.
                </p>
                <div className={styles.founderMeta}>
                  <span>oabcreative@gmail.com</span>
                  <span>@oabcreative</span>
                </div>
              </div>
              <p className={styles.founderQuote}>
                "Strong brands don't happen by accident. They're the result of clear strategy,
                disciplined design, and a genuine commitment to turning a business's credibility
                into more clients."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-mesh-alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Work With Us"
            title="Ready to build a brand that wins more clients?"
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
