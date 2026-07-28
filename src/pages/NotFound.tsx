import { motion } from "motion/react";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import Seo from "../seo/Seo";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex
      />
      <section className={`${styles.wrap} dark-section`}>
        <BrandGlyph tone="cyan" className={styles.glyph} />
        <div className={`container ${styles.content}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">404</p>
            <h1>We can't find that page.</h1>
            <p>
              The page you're looking for doesn't exist, may have moved, or the link might be
              outdated. Let's get you back on track.
            </p>
            <div className={styles.actions}>
              <Button to="/" variant="primary">
                Back to Homepage
              </Button>
              <Button to="/portfolio" variant="secondary">
                See Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
