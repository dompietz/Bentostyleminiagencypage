import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "../styles/bento.css";
import clixLogo from "figma:asset/d4ccda0b8d7b3374a3213e01565105452ea354ed.png";
import PrismaticBurst from "./PrismaticBurst";
import LaserFlow from "./LaserFlow";

export function BentoGrid() {
  const videos = [
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
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isClipCastingExpanded, setIsClipCastingExpanded] = useState(false);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videos.length) % videos.length,
    );
  };

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="bento-container">
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#ff007a', '#4d3dff', '#ffffff']}
        />
      </div>
      <div className="bento-grid">
        {/* Large Video Box with Slider */}
        <AnimatePresence>
          {!isClipCastingExpanded && (
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
                  src={videos[currentVideoIndex].src}
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
                <h3>{videos[currentVideoIndex].title}</h3>
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
          <img src={clixLogo} alt="Clix Logo" className="clix-logo" />
          <p style={{ fontSize: '0.875rem' }}>At Clix Productions, we're all about making real connections through video. We know the digital world is crowded, so we focus on telling stories that not only get noticed but also felt. Working hand-in-hand with marketing pros and industry leaders, we turn your complex messages into clear, relatable stories.</p>
        </div>

        {/* Box 3 */}
        <div className="bento-box bento-box-3">
          <h3>Work with Us</h3>
          <p style={{ marginBottom: '0.5rem' }}>Email: hello@clixproductions.com</p>
          <p style={{ marginBottom: '0.5rem' }}>Phone: +45 12 34 56 78</p>
          <p>Copenhagen, Denmark</p>
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
              <h3>Our Approach</h3>
              <p>Filler Text...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Box 5 - Clip Casting */}
        {/* Placeholder to maintain grid structure */}
        {isClipCastingExpanded && <div className="bento-box-5-placeholder" />}
        
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
              <h3>Clip Casting</h3>
              <p>Filler Text...</p>
              
              <motion.button
                className="see-more-btn"
                onClick={() => setIsClipCastingExpanded(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See more
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
              <h3>Clip Casting</h3>
              <p>Filler Text...</p>
              
              <motion.button
                className="see-more-btn"
                onClick={() => setIsClipCastingExpanded(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See less
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Box 6 */}
        <div className="bento-box bento-box-6" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <LaserFlow
              horizontalBeamOffset={0.0}
              verticalBeamOffset={-0.5}
              color="#0D40FF"
              verticalSizing={1.5}
              horizontalSizing={0.75}
            />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3>New Site coming soon</h3>
            <p>Filler Text...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
