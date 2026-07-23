import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  onClick,
  type = "button",
  external = false,
  disabled = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
      };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: "inline-block" }}>
        <Link
          to={to}
          className={className}
          aria-disabled={disabled || undefined}
          onClick={disabled ? (e) => e.preventDefault() : onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={disabled ? undefined : href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        aria-disabled={disabled || undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
