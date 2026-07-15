import styles from "./BrandGlyph.module.css";

interface BrandGlyphProps {
  className?: string;
  tone?: "primary" | "cyan" | "white";
}

export default function BrandGlyph({ className = "", tone = "primary" }: BrandGlyphProps) {
  return (
    <svg
      className={`${styles.glyph} ${styles[tone]} ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 5 L43 41 L5 41 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M19 20 L3 41 L17 41"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
