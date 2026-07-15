import { lazy } from "react";
import { motion } from "motion/react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import StatCard from "../components/StatCard";
import BrandGlyph from "../components/BrandGlyph";
import LazyScene3D from "../three/LazyScene3D";
import {
  IconIdentity,
  IconMotion,
  IconWebsites,
  IconSystems,
  IconShield,
  IconEye,
  IconUsers,
  IconTarget,
  IconTrendUp,
  IconStar,
} from "../components/icons";
import styles from "./Home.module.css";

const HeroBrandScene = lazy(() => import("../three/HeroBrandScene"));
const GrowthClusterScene = lazy(() => import("../three/GrowthClusterScene"));

const tagRowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
} as const;

const services = [
  {
    icon: <IconIdentity />,
    title: "Brand Identity",
    description: "Look instantly credible and earn trust before you say a word.",
  },
  {
    icon: <IconMotion />,
    title: "Motion Design",
    description: "Capture attention and keep prospects watching, clicking and remembering you.",
  },
  {
    icon: <IconWebsites />,
    title: "Websites",
    description: "Convert more visitors into leads with a site built to sell around the clock.",
  },
  {
    icon: <IconSystems />,
    title: "Creative Systems",
    description: "Stay consistent everywhere you show up, so customers trust you faster.",
  },
];

const values = [
  {
    icon: <IconShield />,
    title: "Build Trust",
    description: "Clear, consistent brands that make prospects feel safe choosing you over competitors.",
  },
  {
    icon: <IconEye />,
    title: "Look Premium",
    description: "Design quality that justifies higher prices and attracts bigger, better clients.",
  },
  {
    icon: <IconUsers />,
    title: "Attract Customers",
    description: "Stand out in a crowded market and pull in more of the right audience.",
  },
  {
    icon: <IconTarget />,
    title: "Grow Confidently",
    description: "Brand systems built to scale with your business, not slow it down.",
  },
];

export default function Home() {
  return (
    <>
      <section className={`${styles.hero} dark-section`}>
        <LazyScene3D
          scene={HeroBrandScene}
          className={styles.heroScene}
          fallback={<BrandGlyph tone="cyan" className={styles.heroGlyph} />}
        />
        <div className={`container ${styles.heroGrid}`}>
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1>Turn More Visitors Into Paying Clients.</h1>
            <p>
              We help ambitious businesses attract more clients through strategic branding,
              high-converting websites, and premium motion design.
            </p>
            <div className={styles.heroActions}>
              <Button to="/contact" variant="primary">
                Start a Project
              </Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <motion.div
              className={styles.floatCardTop}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <StatCard
                icon={<IconTrendUp />}
                label="Client Inquiries"
                value="+128%"
                trend="90 days"
                delay={0.5}
              />
            </motion.div>
            <motion.div
              className={styles.floatCardBottom}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <StatCard icon={<IconStar />} label="Client Trust Score" value="9.4/10" delay={0.7} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What You Get"
            title="Everything your brand needs to win more clients"
            description="From identity systems and motion design to websites and branded assets, every deliverable is built to help you earn trust faster and convert more of the people who find you."
          />
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <ServiceCard key={service.title} index={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mesh-alt">
        <div className="container">
          <SectionHeading
            eyebrow="The Payoff"
            title="Clear brands are easier to choose"
            align="center"
          />
          <div className={styles.valueGrid}>
            {values.map((value, i) => (
              <ServiceCard key={value.title} index={i} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dots">
        <div className={`container ${styles.founderSection}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Why Businesses Choose Us</p>
            <h2>A partner focused on your growth, not just your logo</h2>
            <p>
              OAB Creative exists to turn your credibility into customers. We combine strategy,
              design and motion so your brand doesn't just look good — it performs, earning trust
              faster and converting more of the people who find you.
            </p>
            <motion.div
              className={styles.tagRow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={tagRowVariants}
            >
              {["Premium", "Strategic", "Confident", "Trustworthy", "Purposeful"].map((tag) => (
                <motion.span key={tag} className={styles.tag} variants={tagVariants}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <div style={{ marginTop: "2rem" }}>
              <Button to="/about" variant="ghost">
                Learn more about us →
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={styles.founderCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="eyebrow">Founder & Creative Director</p>
            <h3>Amule Emmanuel</h3>
            <p>
              Leads strategy, visual direction and brand execution for businesses that need to
              turn credibility into consistent, measurable growth.
            </p>
          </motion.div>
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
            <LazyScene3D
              scene={GrowthClusterScene}
              className={styles.ctaScene}
              fallback={<div className={styles.ctaSceneFallback} aria-hidden="true" />}
            />
            <div className={styles.ctaContent}>
              <h2>Let's turn your brand into your best salesperson.</h2>
              <p>
                Tell us about your business and where you want it to go — we'll help you attract
                more clients and grow with confidence.
              </p>
              <div className={styles.ctaActions}>
                <Button to="/contact" variant="primary">
                  Start a Project
                </Button>
                <Button to="/portfolio" variant="secondary">
                  See Our Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
