import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "../Button";
import BookingButton from "../BookingButton";
import { IconArrowLeft, IconCheck } from "../icons";
import { submitEnquiry } from "../../utils/submitEnquiry";
import { INITIAL_ANSWERS, type EnquiryAnswers } from "./types";
import {
  BUDGET_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  GOAL_OPTIONS,
  NEEDS_OPTIONS,
  STEP_TITLES,
  TIMELINE_OPTIONS,
  TOTAL_STEPS,
  WEBSITE_STATUS_OPTIONS,
} from "./steps";
import styles from "./EnquiryForm.module.css";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

const stepVariants = {
  enter: (direction: 1 | -1) => ({ opacity: 0, x: direction === 1 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: 1 | -1) => ({ opacity: 0, x: direction === 1 ? -24 : 24 }),
};

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function validateStep(step: number, answers: EnquiryAnswers): string | null {
  switch (step) {
    case 1:
      return answers.needs.length ? null : "Select at least one option to continue.";
    case 2:
      return answers.businessInfo.trim().length >= 10
        ? null
        : "Tell us a little more about your business to continue.";
    case 3:
      return answers.goals.length ? null : "Select at least one goal to continue.";
    case 4:
      return answers.hasWebsite ? null : "Choose an option to continue.";
    case 5:
      return answers.budget ? null : "Choose a budget range to continue.";
    case 6:
      return answers.timeline ? null : "Choose a timeline to continue.";
    case 7:
      if (!answers.fullName.trim()) return "Your name is required.";
      if (!answers.businessName.trim()) return "Business name is required.";
      if (!/^\S+@\S+\.\S+$/.test(answers.email.trim())) return "Enter a valid email address.";
      if (!answers.preferredContact) return "Choose how we should reach you.";
      return null;
    default:
      return null;
  }
}

interface OptionGridProps {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  multiple?: boolean;
  compact?: boolean;
}

function OptionGrid({ options, selected, onToggle, multiple = false, compact = false }: OptionGridProps) {
  return (
    <div className={`${styles.optionGrid} ${compact ? styles.optionGridCompact : ""}`.trim()}>
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            className={`${styles.optionCard} ${isSelected ? styles.optionCardSelected : ""}`.trim()}
            aria-pressed={isSelected}
            onClick={() => onToggle(option)}
          >
            <span>{option}</span>
            {isSelected && (
              <span className={styles.optionCheck}>
                <IconCheck />
              </span>
            )}
          </button>
        );
      })}
      {multiple && <p className={styles.multiHint}>Select all that apply.</p>}
    </div>
  );
}

function StepFields({
  step,
  answers,
  update,
}: {
  step: number;
  answers: EnquiryAnswers;
  update: <K extends keyof EnquiryAnswers>(key: K, value: EnquiryAnswers[K]) => void;
}) {
  switch (step) {
    case 1:
      return (
        <OptionGrid
          options={NEEDS_OPTIONS}
          selected={answers.needs}
          multiple
          onToggle={(value) => update("needs", toggleValue(answers.needs, value))}
        />
      );
    case 2:
      return (
        <textarea
          className={styles.textarea}
          value={answers.businessInfo}
          onChange={(e) => update("businessInfo", e.target.value)}
          placeholder="What does your business do, and who do you serve?"
          rows={5}
          aria-label="Tell us briefly about your business"
        />
      );
    case 3:
      return (
        <OptionGrid
          options={GOAL_OPTIONS}
          selected={answers.goals}
          multiple
          onToggle={(value) => update("goals", toggleValue(answers.goals, value))}
        />
      );
    case 4:
      return (
        <>
          <OptionGrid
            options={WEBSITE_STATUS_OPTIONS}
            selected={answers.hasWebsite ? [answers.hasWebsite] : []}
            onToggle={(value) => update("hasWebsite", value as EnquiryAnswers["hasWebsite"])}
          />
          {answers.hasWebsite === "Yes" && (
            <div className={styles.field}>
              <label htmlFor="websiteLink">Website or social media link (optional)</label>
              <input
                id="websiteLink"
                type="text"
                value={answers.websiteLink}
                onChange={(e) => update("websiteLink", e.target.value)}
                placeholder="https://"
              />
            </div>
          )}
        </>
      );
    case 5:
      return (
        <OptionGrid
          options={BUDGET_OPTIONS}
          selected={answers.budget ? [answers.budget] : []}
          onToggle={(value) => update("budget", value)}
        />
      );
    case 6:
      return (
        <OptionGrid
          options={TIMELINE_OPTIONS}
          selected={answers.timeline ? [answers.timeline] : []}
          onToggle={(value) => update("timeline", value)}
        />
      );
    case 7:
      return (
        <div className={styles.contactFields}>
          <div className={styles.field}>
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              value={answers.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Jane Doe"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="businessName">Business name</label>
            <input
              id="businessName"
              type="text"
              autoComplete="organization"
              value={answers.businessName}
              onChange={(e) => update("businessName", e.target.value)}
              placeholder="Your business name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={answers.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@company.com"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone number or WhatsApp (optional)</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={answers.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+1 234 567 8901"
            />
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Preferred contact method</span>
            <OptionGrid
              options={CONTACT_METHOD_OPTIONS}
              selected={answers.preferredContact ? [answers.preferredContact] : []}
              onToggle={(value) => update("preferredContact", value as EnquiryAnswers["preferredContact"])}
              compact
            />
          </div>
          {/* Honeypot: hidden from real visitors via CSS + aria-hidden, so a filled-in value flags a bot. */}
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="companyWebsite">Leave this field empty</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={answers.companyWebsite}
              onChange={(e) => update("companyWebsite", e.target.value)}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

function ConfirmationPanel() {
  return (
    <motion.div
      className={styles.confirmPanel}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span className={styles.confirmIcon}>
        <IconCheck />
      </span>
      <h2>Thank you. Your project enquiry has been received.</h2>
      <p>
        We will review your information and respond within 1 to 2 business days. You can also
        book a discovery call now if you would like to speak sooner.
      </p>
      <div className={styles.confirmActions}>
        <BookingButton variant="primary">Book a Discovery Call</BookingButton>
        <Button to="/" variant="secondary">
          Return to Homepage
        </Button>
      </div>
    </motion.div>
  );
}

interface EnquiryFormProps {
  /** Fires whenever the submission status changes — e.g. so the parent page can hide a redundant "book a call" prompt once the enquiry is confirmed. */
  onStatusChange?: (status: SubmitStatus) => void;
}

export default function EnquiryForm({ onStatusChange }: EnquiryFormProps) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [answers, setAnswers] = useState<EnquiryAnswers>(INITIAL_ANSWERS);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const mountedAt = useRef(Date.now());
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    onStatusChange?.(status);
  }, [status, onStatusChange]);

  function update<K extends keyof EnquiryAnswers>(key: K, value: EnquiryAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  async function handleStepSubmit(e: FormEvent) {
    e.preventDefault();
    const validationError = validateStep(step, answers);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);

    if (step < TOTAL_STEPS) {
      setDirection(1);
      setStep((s) => s + 1);
      return;
    }

    if (status === "submitting") return;

    // Basic spam protection: a filled honeypot or a suspiciously fast
    // completion both indicate a bot. Either way we pretend it worked so
    // as not to tip the bot off, but skip the real send.
    const tooFast = Date.now() - mountedAt.current < 3000;
    if (answers.companyWebsite || tooFast) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry(answers);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleBack() {
    if (step === 1) return;
    setError(null);
    setDirection(-1);
    setStep((s) => s - 1);
  }

  if (status === "success") {
    return <ConfirmationPanel />;
  }

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>
          Step {step} of {TOTAL_STEPS}
        </span>
        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            className={styles.progressFill}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.form
          key={step}
          className={styles.stepForm}
          onSubmit={handleStepSubmit}
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className={styles.question} tabIndex={-1} ref={headingRef}>
            {STEP_TITLES[step]}
          </h2>

          <StepFields step={step} answers={answers} update={update} />

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          {status === "error" && (
            <p className={styles.error} role="alert">
              Something went wrong sending your enquiry. Please try again, or email us directly at{" "}
              <a href="mailto:oabcreative@gmail.com">oabcreative@gmail.com</a>.
            </p>
          )}

          <div className={styles.stepActions}>
            {step > 1 && (
              <button type="button" className={styles.backButton} onClick={handleBack}>
                <IconArrowLeft />
                Back
              </button>
            )}
            <Button type="submit" variant="primary" disabled={status === "submitting"}>
              {step === TOTAL_STEPS ? (status === "submitting" ? "Sending…" : "Submit Enquiry") : "Continue"}
            </Button>
          </div>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}
