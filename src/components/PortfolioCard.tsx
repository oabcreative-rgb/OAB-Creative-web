import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { IconPlay } from "./icons";
import styles from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  variant?: "image" | "video";
  category: string;
  title?: string;
  image?: string;
  video?: string;
  link?: string;
  icon: ReactNode;
  index?: number;
}

export default function PortfolioCard({
  variant = "image",
  category,
  title,
  image,
  video,
  link,
  icon,
  index = 0,
}: PortfolioCardProps) {
  const hasMedia = Boolean(image || video);

  const mediaContent = (
    <>
      {video ? (
        <video
          src={video}
          poster={image}
          className={styles.mediaEl}
          muted
          loop
          playsInline
          autoPlay
        />
      ) : image ? (
        <img src={image} alt={title ?? category} className={styles.mediaEl} />
      ) : (
        <div className={`${styles.placeholder} ${index % 2 === 1 ? styles.placeholderAlt : ""}`}>
          <span className={styles.placeholderIcon}>{icon}</span>
        </div>
      )}

      {variant === "video" && !video && (
        <span className={styles.playButton}>
          <IconPlay />
        </span>
      )}

      <div className={styles.overlay} />

      <div className={styles.info}>
        <span className={styles.infoCategory}>{category}</span>
        <span className={styles.infoTitle}>{title ?? (hasMedia ? category : "Coming Soon")}</span>
      </div>
    </>
  );

  return (
    <motion.div
      className={`${styles.card} ${variant === "video" ? styles.video : styles.image}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      {link ? (
        <Link to={link} className={styles.mediaWrap}>
          {mediaContent}
        </Link>
      ) : (
        <div className={styles.mediaWrap}>{mediaContent}</div>
      )}
    </motion.div>
  );
}
