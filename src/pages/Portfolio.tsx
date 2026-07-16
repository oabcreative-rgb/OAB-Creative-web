import { Fragment, lazy } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import PortfolioCard from "../components/PortfolioCard";
import LazyScene3D from "../three/LazyScene3D";
import { portfolioCategories, type PortfolioCategoryId } from "../data/portfolioData";
import {
  IconIdentity,
  IconWebsites,
  IconMotion,
  IconMegaphone,
  IconTarget,
  IconSystems,
  IconCheck,
} from "../components/icons";
import styles from "./Portfolio.module.css";

const PortfolioHeroScene = lazy(() => import("../three/PortfolioHeroScene"));

const categoryIcons: Record<PortfolioCategoryId, ReactNode> = {
  "brand-identity": <IconIdentity />,
  websites: <IconWebsites />,
  "motion-design": <IconMotion />,
  "marketing-campaigns": <IconMegaphone />,
};

const categoryBackground: Record<PortfolioCategoryId, string> = {
  "brand-identity": "",
  websites: "bg-mesh-alt",
  "motion-design": "dark-section",
  "marketing-campaigns": "bg-dots",
};

const processSteps = [
  {
    step: "01",
    icon: <IconTarget />,
    title: "Strategy",
    description:
      "We start with the brand, the product and the goal — what this piece needs to do before a single frame gets made.",
  },
  {
    step: "02",
    icon: <IconSystems />,
    title: "Storyboard",
    description:
      "Every shot, transition and beat is planned first, so the creative direction is locked before production begins.",
  },
  {
    step: "03",
    icon: <IconMotion />,
    title: "AI Motion Production",
    description:
      "We produce the film using AI-led motion production — fast and flexible, built around your brand, not a template.",
  },
  {
    step: "04",
    icon: <IconCheck />,
    title: "Final Delivery",
    description:
      "Every piece is graded, polished and delivered ready to run — on social, on a website, or as a launch campaign centerpiece.",
  },
];

export default function Portfolio() {
  return (
    <>
      <section className={`${styles.pageHero} dark-section`}>
        <LazyScene3D
          scene={PortfolioHeroScene}
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
            <p className="eyebrow">Portfolio</p>
            <h1>See the kind of work that turns visitors into clients.</h1>
            <p>
              Explore selected work by discipline — brand identity, websites, motion design and
              marketing campaigns. We're adding new projects and full case studies as we complete
              them.
            </p>
          </motion.div>
        </div>
      </section>

      {portfolioCategories.map((category) => (
        <Fragment key={category.id}>
          <section
            id={category.id === "motion-design" ? "motion-design" : undefined}
            className={`section ${categoryBackground[category.id]} ${
              category.id === "motion-design" ? styles.anchorTarget : ""
            }`.trim()}
          >
            <div className="container">
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{categoryIcons[category.id]}</span>
                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className={styles.grid}>
                {category.items.map((item, i) => (
                  <PortfolioCard
                    key={`${category.id}-${i}`}
                    variant={category.id === "motion-design" ? "video" : "image"}
                    category={category.title}
                    title={item.title}
                    image={item.image}
                    video={item.video}
                    link={item.link}
                    icon={categoryIcons[category.id]}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </section>

          {category.id === "motion-design" && (
            <section className="section">
              <div className="container">
                <SectionHeading
                  align="center"
                  eyebrow="How We Work"
                  title="Our Creative Process"
                  description="A repeatable process behind every motion piece — not just attractive visuals."
                />
                <div className={styles.processGrid}>
                  {processSteps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      className={styles.processCard}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    >
                      <span className={styles.processStep}>{step.step}</span>
                      <span className={styles.processIcon}>{step.icon}</span>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </Fragment>
      ))}

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Want To See More"
            title="Tell us about your project and we'll show you samples that match."
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button to="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
