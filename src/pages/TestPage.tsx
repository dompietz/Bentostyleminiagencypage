import { BentoGrid, type BentoGridContent } from "../components/BentoGrid";
import ClixLogo from "../assets/ClixLogo.png";

const testPageContent: BentoGridContent = {
  heroVideos: [
    {
      src: "https://video.gumlet.io/66daaec13cf16cc4bf016f23/678a4f888169b1868c8db038/download.mp4",
      title: "Showreel",
      description: "A quick reel showing how the layout keeps energy high at every breakpoint.",
    },
    {
      src: "https://video.gumlet.io/66daaec13cf16cc4bf016f23/66ddf61b21f1e264a3e515d8/download.mp4",
      title: "On-location",
      description: "Capturing story-driven footage that scales from mobile teasers to desktop hero moments.",
    },
    {
      src: "https://video.gumlet.io/66daaec13cf16cc4bf016f23/66dab65a3cf16cc4bf019846/download.mp4",
      title: "Post-production",
      description: "Motion-first editing that stays fluid across responsive layouts.",
    },
  ],
  about: {
    logoSrc: ClixLogo,
    logoAlt: "Clix Productions glyph",
    body:
      "This test page mirrors the Bento layout while highlighting how easily content can shift. Swap the copy, plug in new assets, and the grid still responds gracefully across device sizes.",
  },
  contact: {
    heading: "Prototype Contact",
    lines: [
      "Email: prototype@clixproductions.com",
      "Phone: +45 99887766",
      "Remote-friendly worldwide",
    ],
  },
  approach: {
    heading: "Layout Principles",
    paragraphs: [
      "Each panel inherits the same responsive rules from the shared stylesheet, so swapping modules requires zero extra media queries.",
      "Motion states respect reduced-motion preferences, letting the test environment reflect accessible defaults.",
    ],
  },
  clipCasting: {
    heading: "Responsive Highlights",
    summary:
      "Toggle the expanded state to see how the hero slot can be repurposed for detail-rich storytelling without sacrificing flow.",
    details: [
      "Expanded content inherits the hero span, giving long-form explainers ample space on larger screens while still stacking neatly on mobile.",
      "Use this area for workflow notes, feature callouts, or any copy that benefits from progressive disclosure.",
    ],
    expandLabel: "View layout notes",
    collapseLabel: "Hide layout notes",
  },
  announcement: {
    heading: "Fully Responsive",
    body: "Resize the viewport to confirm the Bento grid adapts without additional configuration.",
  },
};

export default function TestPage() {
  return <BentoGrid content={testPageContent} />;
}

