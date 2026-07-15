import { motion } from "motion/react";
import type { ReactNode } from "react";
import styles from "./StatCard.module.css";

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

export default function StatCard({ label, value, trend, icon, className = "", delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>
          {value}
          {trend && <span className={styles.trend}>{trend}</span>}
        </p>
      </div>
    </motion.div>
  );
}
