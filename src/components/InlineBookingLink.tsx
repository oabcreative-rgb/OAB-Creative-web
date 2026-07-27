import { useState } from "react";
import type { ReactNode } from "react";
import BookingModal from "./BookingModal";
import { trackEvent } from "../config/analytics";

/**
 * Text-styled booking trigger for use inline in prose (e.g. an article CTA
 * callout) where a full <BookingButton> pill would look out of place.
 * Opens the same shared BookingModal as every other "Book a Call" entry
 * point in the app.
 */
export default function InlineBookingLink({ children, className }: { children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setOpen(true);
          trackEvent("book_call_click", { path: window.location.pathname });
        }}
      >
        {children}
      </button>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
