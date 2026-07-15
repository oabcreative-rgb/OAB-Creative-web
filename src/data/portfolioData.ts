export type PortfolioItem = {
  title?: string;
  image?: string;
  video?: string;
  link?: string;
};

import altsCover from "../assets/portfolio/alts/alts-cover.jpg";
import hadassahCover from "../assets/portfolio/hadassah/hc-showcase.jpg";
import mirrorCover from "../assets/portfolio/mirror/mirror-cover.jpg";
import swiftdropCover from "../assets/portfolio/swiftdrop/sd-cover.jpg";
import abundanceOfFlowCover from "../assets/portfolio/abundanceofflow/aof-cover.jpg";
import yumCover from "../assets/portfolio/yum/yum-cover.jpg";
import atCover from "../assets/portfolio/at/at-cover.jpg";
import altsWebCover from "../assets/portfolio/alts-web/altsweb-cover.jpg";
import auroraCover from "../assets/portfolio/aurora/aurora-showcase.jpg";
import auroraMotion from "../assets/portfolio/aurora/aurora-motion.mp4";
import lumoraCover from "../assets/portfolio/lumora/lumora-showcase.jpg";
import lumoraMotion from "../assets/portfolio/lumora/lumora-motion.mp4";
import nordiqCover from "../assets/portfolio/nordiq/nordiq-showcase.jpg";
import nordiqMotion from "../assets/portfolio/nordiq/nordiq-motion.mp4";

export type PortfolioCategoryId =
  | "brand-identity"
  | "websites"
  | "motion-design"
  | "marketing-campaigns";

export interface PortfolioCategory {
  id: PortfolioCategoryId;
  title: string;
  description: string;
  items: PortfolioItem[];
}

// To add a project: fill in an empty slot (or add a new one) with a title
// and an image (or video, for Motion Design) import. Empty slots render as
// premium "Coming Soon" placeholders, so this list can grow gradually
// without any changes to the Portfolio page itself.
export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Visual identity systems that make businesses look instantly credible.",
    items: [
      {
        title: "Hadassah Care Supplies",
        image: hadassahCover,
        link: "/portfolio/hadassah-care-supplies",
      },
      {
        title: "SwiftDrop",
        image: swiftdropCover,
        link: "/portfolio/swiftdrop",
      },
      {
        title: "Abundance of Flow",
        image: abundanceOfFlowCover,
        link: "/portfolio/abundance-of-flow",
      },
    ],
  },
  {
    id: "websites",
    title: "Websites",
    description: "High-converting websites built to turn visitors into paying clients.",
    items: [
      {
        title: "Mirror",
        image: mirrorCover,
        link: "/portfolio/mirror",
      },
      {
        title: "Affordable Lab & Testing Solutions",
        image: altsWebCover,
        link: "/portfolio/alts-website",
      },
      {},
    ],
  },
  {
    id: "motion-design",
    title: "Motion Design",
    description: "Scroll-stopping motion content that keeps prospects watching and remembering your brand.",
    items: [
      {
        title: "Aurora",
        image: auroraCover,
        video: auroraMotion,
        link: "/portfolio/aurora",
      },
      {
        title: "LUMORA",
        image: lumoraCover,
        video: lumoraMotion,
        link: "/portfolio/lumora",
      },
      {
        title: "Nordiq",
        image: nordiqCover,
        video: nordiqMotion,
        link: "/portfolio/nordiq",
      },
    ],
  },
  {
    id: "marketing-campaigns",
    title: "Marketing Campaigns",
    description: "Campaign creative built to drive attention, leads and sales.",
    items: [
      {
        title: "Affordable Lab & Testing Solutions",
        image: altsCover,
        link: "/portfolio/affordable-lab-testing-solutions",
      },
      {
        title: "Yum Indulgence",
        image: yumCover,
        link: "/portfolio/yum-indulgence",
      },
      {
        title: "Audio Transcription Studio",
        image: atCover,
        link: "/portfolio/audio-transcription-studio",
      },
    ],
  },
];
