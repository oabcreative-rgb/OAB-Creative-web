import { motion } from "motion/react";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import styles from "./Resources.module.css";

export default function Resources() {
  return (
    <section className={`${styles.wrap} bg-mesh`}>
      <BrandGlyph tone="primary" className={styles.glyph} />
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.badge}>
            <span className={styles.dot} />
            Coming Soon
          </span>
          <h1>Grow smarter with insights on the way.</h1>
          <p>
            We're building out a library of practical guides on brand strategy, motion design and
            websites — the kind that help you attract more clients and grow with confidence.
            Check back soon, or reach out directly if you have a question in the meantime.
          </p>
          <Button to="/start-a-project" variant="primary">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
