import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import logo from "../assets/logo.png";
import Button from "./Button";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
];

const headerVariants = {
  expanded: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 0px 0px rgba(11, 31, 58, 0)",
  },
  compact: {
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    boxShadow: "0 12px 28px -20px rgba(11, 31, 58, 0.35)",
  },
};

const innerVariants = {
  expanded: { height: 76 },
  compact: { height: 60 },
};

const brandVariants = {
  expanded: { scale: 1 },
  compact: { scale: 0.92 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (reducedMotion) return;
    const diff = y - lastY.current;
    if (y < 60) {
      setCompact(false);
    } else if (diff > 4) {
      setCompact(true);
    } else if (diff < -4) {
      setCompact(false);
    }
    lastY.current = y;
  });

  const state = compact ? "compact" : "expanded";

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      animate={state}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className={`container ${styles.inner}`}
        variants={innerVariants}
        animate={state}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <motion.div
            className={styles.brandInner}
            variants={brandVariants}
            animate={state}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src={logo} alt="" width={34} height={33} className={styles.brandMark} />
            <span>
              OAB <strong>Creative</strong>
            </span>
          </motion.div>
        </NavLink>

        <nav className={styles.navDesktop}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.navDesktop}>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>

        <button
          className={styles.menuButton}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barOpenTop : styles.bar} />
          <span className={open ? styles.barOpenMid : styles.bar} />
          <span className={open ? styles.barOpenBottom : styles.bar} />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={`container ${styles.mobileInner}`}>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" variant="primary" onClick={() => setOpen(false)}>
                Contact Us
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
