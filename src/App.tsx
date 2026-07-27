import { useLayoutEffect, type ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import IndustryMedSpa from "./pages/IndustryMedSpa";
import Portfolio from "./pages/Portfolio";
import CaseStudyALTS from "./pages/CaseStudyALTS";
import CaseStudyHadassah from "./pages/CaseStudyHadassah";
import CaseStudyMirror from "./pages/CaseStudyMirror";
import CaseStudySwiftDrop from "./pages/CaseStudySwiftDrop";
import CaseStudyAbundanceOfFlow from "./pages/CaseStudyAbundanceOfFlow";
import CaseStudyYum from "./pages/CaseStudyYum";
import CaseStudyAT from "./pages/CaseStudyAT";
import CaseStudyALTSWebsite from "./pages/CaseStudyALTSWebsite";
import CaseStudyAurora from "./pages/CaseStudyAurora";
import CaseStudyLumora from "./pages/CaseStudyLumora";
import CaseStudyNordiq from "./pages/CaseStudyNordiq";
import About from "./pages/About";
import Resources from "./pages/Resources";
import ResourceArticle from "./pages/ResourceArticle";
import StartAProject from "./pages/StartAProject";

function PageWrapper({ children }: { children: ReactNode }) {
  const { hash } = useLocation();

  // Runs once per route mount. With AnimatePresence mode="wait" the old page
  // finishes its exit fade before this mounts, so the jump to top lands
  // exactly as the new page starts fading in — not mid-exit on the old one.
  // `behavior: "instant"` is required (not "auto") because the global
  // `scroll-behavior: smooth` (global.css) also applies to plain scrollTo
  // calls in Chromium — "auto" would still animate.
  //
  // A link that targets an in-page anchor (e.g. /portfolio#motion-design)
  // skips the top-jump and smooth-scrolls to that section instead, once it
  // exists in the DOM.
  useLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [hash]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/services/:slug" element={<PageWrapper><ServicePage /></PageWrapper>} />
          <Route
            path="/industries/med-spa-website-design"
            element={<PageWrapper><IndustryMedSpa /></PageWrapper>}
          />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route
            path="/portfolio/affordable-lab-testing-solutions"
            element={<PageWrapper><CaseStudyALTS /></PageWrapper>}
          />
          <Route
            path="/portfolio/hadassah-care-supplies"
            element={<PageWrapper><CaseStudyHadassah /></PageWrapper>}
          />
          <Route
            path="/portfolio/mirror"
            element={<PageWrapper><CaseStudyMirror /></PageWrapper>}
          />
          <Route
            path="/portfolio/swiftdrop"
            element={<PageWrapper><CaseStudySwiftDrop /></PageWrapper>}
          />
          <Route
            path="/portfolio/abundance-of-flow"
            element={<PageWrapper><CaseStudyAbundanceOfFlow /></PageWrapper>}
          />
          <Route
            path="/portfolio/yum-indulgence"
            element={<PageWrapper><CaseStudyYum /></PageWrapper>}
          />
          <Route
            path="/portfolio/audio-transcription-studio"
            element={<PageWrapper><CaseStudyAT /></PageWrapper>}
          />
          <Route
            path="/portfolio/alts-website"
            element={<PageWrapper><CaseStudyALTSWebsite /></PageWrapper>}
          />
          <Route
            path="/portfolio/aurora"
            element={<PageWrapper><CaseStudyAurora /></PageWrapper>}
          />
          <Route
            path="/portfolio/lumora"
            element={<PageWrapper><CaseStudyLumora /></PageWrapper>}
          />
          <Route
            path="/portfolio/nordiq"
            element={<PageWrapper><CaseStudyNordiq /></PageWrapper>}
          />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />
          <Route path="/resources/:slug" element={<PageWrapper><ResourceArticle /></PageWrapper>} />
          <Route path="/start-a-project" element={<PageWrapper><StartAProject /></PageWrapper>} />
          {/* Legacy URL — keeps old links/bookmarks working. */}
          <Route path="/contact" element={<Navigate to="/start-a-project" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
