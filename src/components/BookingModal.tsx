import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button";
import { IconClose, IconCalendar } from "./icons";
import { BOOKING_URL, isBookingConfigured } from "../config/booking";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    setIframeLoaded(false);

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  const configured = isBookingConfigured();

  // Rendered via a portal straight to <body>: BookingButton is often used
  // inside animated ancestors (e.g. the navbar), and Motion assigns those a
  // `transform` style, which creates a new CSS containing block that would
  // otherwise break this modal's `position: fixed` centering.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Book a discovery call"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close booking dialog"
            >
              <IconClose />
            </button>

            {configured ? (
              <>
                <div className={styles.iframeWrap}>
                  {!iframeLoaded && (
                    <div className={styles.iframeLoading} aria-live="polite">
                      <span className={styles.spinner} aria-hidden="true" />
                      <span>Loading calendar…</span>
                    </div>
                  )}
                  <iframe
                    src={BOOKING_URL}
                    title="Book a discovery call"
                    className={styles.iframe}
                    style={{ opacity: iframeLoaded ? 1 : 0 }}
                    onLoad={() => setIframeLoaded(true)}
                  />
                </div>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={styles.newTabLink}>
                  Having trouble viewing the calendar? Open it in a new tab ↗
                </a>
              </>
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderIcon}>
                  <IconCalendar />
                </span>
                <h3>Booking calendar coming soon</h3>
                <p>
                  Our online scheduler is being connected. In the meantime, send us a quick
                  project enquiry and we'll reach out to find a time that works for you.
                </p>
                <Button to="/start-a-project" variant="primary" onClick={onClose}>
                  Start a Project
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
