import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import BookingModal from "./BookingModal";
import styles from "./Button.module.css";

interface BookingButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  /** Fires when the modal is triggered — e.g. to close a mobile menu. */
  onOpen?: () => void;
}

/**
 * Drop-in booking CTA. Visually identical to <Button variant="..." /> (it
 * reuses the same stylesheet) but opens the shared BookingModal instead of
 * navigating, so every "Book a Call" entry point in the app stays wired to
 * the single BOOKING_URL in src/config/booking.ts.
 */
export default function BookingButton({ children, variant = "primary", onOpen }: BookingButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        className={`${styles.button} ${styles[variant]}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          setOpen(true);
          onOpen?.();
        }}
      >
        {children}
      </motion.button>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
