import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "../styles/bento.css";
import PrismaticBurst from "./PrismaticBurst";
import LaserFlow from "./LaserFlow";
import ClixLogo from "../assets/ClixLogo.png";

export type BentoGridVideo = {
  src: string;
  title: string;
  description?: string;
};

export type BentoGridContent = {
  heroVideos: BentoGridVideo[];
  about: {
    logoSrc?: string;
    logoAlt?: string;
    body: string;
  };
  contact: {
    heading: string;
    lines: string[];
  };
  approach: {
    heading: string;
    paragraphs: string[];
  };
  clipCasting: {
    heading: string;
    summary: string;
    details: string[];
    expandLabel?: string;
    collapseLabel?: string;
  };
  announcement: {
    heading: string;
    body: string;
  };
};

export const defaultBentoGridContent: BentoGridContent = {
  heroVideos: [
    {
      src: "https://video.gumlet.io/66daaec13cf16cc4bf016f23/678a4f888169b1868c8db038/download.mp4",
      title: "TechBBQ",
    },
    {
      src: "https://video.gumlet.io/66daaec13cf16cc4bf016f23/66ddf61b21f1e264a3e515d8/download.mp4",
      title: "Zeekr",
    },
    {
      src: "https://video.gumlet.io/66daaec13cf16cc4bf016f23/66dab65a3cf16cc4bf019846/download.mp4",
      title: "Female Invest",
    },
  ],
  about: {
    logoSrc: ClixLogo,
    logoAlt: "Clix Productions logo",
    body:
      "At Clix Productions, we're all about making real connections through video. The digital world is crowded, so we focus on telling stories that not only get noticed but also felt. Working hand-in-hand with marketing pros and industry leaders, we turn complex messages into clear, relatable stories.",
  },
  contact: {
    heading: "Work with Us",
    lines: [
      "Email: info@clixproductions.com",
      "Phone: +45 28766105",
      "Copenhagen, Denmark",
    ],
  },
  approach: {
    heading: "Our Approach",
    paragraphs: [
      "Content is much like our office plant, Brimble: everyone agrees he should look great, but nobody remembers to water him. He needs attention, sunlight, trimming, and the occasional pep talk; and when he's neglected, it shows.",
      "He also needs the right spot; because if he's left in the wrong corner, he wilts, even if the intentions were good.",
    ],
  },
  clipCasting: {
    heading: "Clip Casting",
    summary:
      "Clip Casting distills your long-form shoots into ready-to-post stories without sacrificing craft.",
    details: [
      "Clip Casting is our editorial partner program for marketing teams that need a weekly cadence of video. We capture a single interview or workshop and deliver multiple platform-specific edits that stay on-brand.",
      "Expect strategic scripting, on-set direction, and final deliverables optimized for paid, organic, and sales enablement.",
    ],
    expandLabel: "See more",
    collapseLabel: "See less",
  },
  announcement: {
    heading: "New Site coming soon",
    body: "We're polishing the experience—sign up soon to see what's next.",
  },
};

export type BentoGridProps = {
  content?: BentoGridContent;
};

export function BentoGrid({ content = defaultBentoGridContent }: BentoGridProps) {
  const videos = content.heroVideos;

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isClipCastingExpanded, setIsClipCastingExpanded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isNarrowLayout, setIsNarrowLayout] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsNarrowLayout(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setCurrentVideoIndex((prev) =>
      videos.length === 0 ? 0 : Math.min(prev, videos.length - 1),
    );
  }, [videos.length]);

  const pauseAnimations = prefersReducedMotion;

  const nextVideo = () => {
    if (videos.length === 0) return;
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    if (videos.length === 0) return;
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videos.length) % videos.length,
    );
  };

  const goToVideo = (index: number) => {
    if (!videos[index]) return;
    setCurrentVideoIndex(index);
  };

  const activeVideo = videos[currentVideoIndex];

  return (
    <div className="bento-container">
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <PrismaticBurst
          animationType="rotate3d"
          intensity={pauseAnimations ? 1.2 : isNarrowLayout ? 1.6 : 2}
          speed={0.5}
          distort={1.0}
          paused={pauseAnimations}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={pauseAnimations ? 8 : isNarrowLayout ? 18 : 24}
          mixBlendMode="lighten"
          colors={['#ff007a', '#4d3dff', '#ffffff']}
        />
      </div>
      <div className="bento-grid">
        {/* Large Video Box with Slider */}
        <AnimatePresence>
          {!isClipCastingExpanded && activeVideo && (
            <motion.div
              className="bento-box bento-box-large"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <video
                key={currentVideoIndex}
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src={activeVideo.src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Navigation Arrows */}
              <button
                className="slider-nav slider-nav-left"
                onClick={prevVideo}
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="slider-nav slider-nav-right"
                onClick={nextVideo}
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>

              {/* Video Info Overlay */}
              <div className="video-overlay">
                <h3>{activeVideo.title}</h3>
                {activeVideo.description && (
                  <p>{activeVideo.description}</p>
                )}
              </div>

              {/* Dots Navigation */}
              <div className="slider-dots">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentVideoIndex ? "active" : ""}`}
                    onClick={() => goToVideo(index)}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Box 2 */}
        <div className="bento-box bento-box-2">
          {content.about.logoSrc && (
            <img
              src={content.about.logoSrc}
              alt={content.about.logoAlt ?? "Bento grid logo"}
              className="clix-logo"
            />
          )}
          <p>{content.about.body}</p>
        </div>

        {/* Box 3 */}
        <div className="bento-box bento-box-3">
          <h3>{content.contact.heading}</h3>
          {content.contact.lines.map((line) => (
            <p key={line} className="contact-line">
              {line}
            </p>
          ))}
        </div>

        {/* Box 4 */}
        <AnimatePresence>
          {!isClipCastingExpanded && (
            <motion.div
              className="bento-box bento-box-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{content.approach.heading}</h3>
              {content.approach.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {!isClipCastingExpanded ? (
            <motion.div
              key="clip-casting-small"
              className="bento-box bento-box-5"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{content.clipCasting.heading}</h3>
              <p>{content.clipCasting.summary}</p>

              <motion.button
                className="see-more-btn"
                onClick={() => setIsClipCastingExpanded(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.clipCasting.expandLabel ?? "See more"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="clip-casting-large"
              className="bento-box bento-box-5-expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{content.clipCasting.heading}</h3>
              {content.clipCasting.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}

              <motion.button
                className="see-more-btn"
                onClick={() => setIsClipCastingExpanded(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.clipCasting.collapseLabel ?? "See less"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Box 6 */}
        <div className="bento-box bento-box-6">
          <div className="laser-flow-surface">
            <LaserFlow
              horizontalBeamOffset={0.0}
              verticalBeamOffset={-0.5}
              color="#0D40FF"
              verticalSizing={1.5}
              horizontalSizing={0.75}
              paused={pauseAnimations}
              dpr={isNarrowLayout ? 1 : undefined}
            />
          </div>
          <div className="bento-box-6-content">
            <h3>{content.announcement.heading}</h3>
            <p>{content.announcement.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
