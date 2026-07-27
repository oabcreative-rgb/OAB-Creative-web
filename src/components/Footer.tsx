import { NavLink } from "react-router-dom";
import logo from "../assets/logo-white.png";
import {
  IconInstagram,
  IconFacebook,
  IconTikTok,
  IconPinterest,
  IconLinkedIn,
} from "./icons";
import styles from "./Footer.module.css";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/oabcreativestudio?igsh=MW5rOHZkMTJvNmh3cA==",
    icon: IconInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BVLUMy1GZ/",
    icon: IconFacebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@oabcreative?_r=1&_t=ZS-981tFopr3lB",
    icon: IconTikTok,
  },
  {
    label: "Pinterest",
    href: "https://pin.it/1hf85LhDA",
    icon: IconPinterest,
  },
  {
    // TODO: swap in the live LinkedIn company URL once the page is ready.
    label: "LinkedIn",
    href: "#",
    icon: IconLinkedIn,
  },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} dark-section`}>
      <div className={`container ${styles.top}`}>
        <div>
          <div className={styles.brand}>
            <img src={logo} alt="" width={34} height={33} className={styles.brandMark} />
            <span>
              OAB <strong>Creative</strong>
            </span>
          </div>
          <p className={styles.tagline}>Strategy. Design. Motion. Digital.</p>
        </div>

        <div className={styles.col}>
          <h4>Studio</h4>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </div>

        <div className={styles.col}>
          <h4>Get in touch</h4>
          <a href="mailto:oabcreative@gmail.com">oabcreative@gmail.com</a>
          <div className={styles.socials}>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={styles.socialLink}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} OAB Creative. All rights reserved.</span>
        <span className={styles.line}>Creative solutions that help businesses build trust, stand out and grow.</span>
      </div>
    </footer>
  );
}
