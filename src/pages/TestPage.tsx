import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  defaultBentoGridContent,
  type BentoGridVideo,
} from "../components/BentoGrid";
import "../styles/test-page.css";

export default function TestPage() {
  const content = defaultBentoGridContent;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const { heroVideos, about, contact, approach, clipCasting, announcement } =
    content;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setCurrentVideoIndex((prev) =>
      heroVideos.length ? Math.min(prev, heroVideos.length - 1) : 0,
    );
  }, [heroVideos.length]);

  const goToVideo = (index: number) => {
    if (!heroVideos[index]) return;
    setCurrentVideoIndex(index);
  };

  const nextVideo = () => {
    if (!heroVideos.length) return;
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  const prevVideo = () => {
    if (!heroVideos.length) return;
    setCurrentVideoIndex(
      (prev) => (prev - 1 + heroVideos.length) % heroVideos.length,
    );
  };

  const activeVideo: BentoGridVideo | undefined =
    heroVideos[currentVideoIndex];

  return (
    <div className="test-page">
      <section className="test-page__hero" aria-label="Featured work slider">
        <div className="test-page__hero-media">
          {activeVideo && (
            <video
              key={activeVideo.src}
              autoPlay={!prefersReducedMotion}
              muted
              loop
              playsInline
              controls={prefersReducedMotion}
            >
              <source src={activeVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {heroVideos.length > 1 && (
            <div className="test-page__hero-controls">
              <button
                type="button"
                className="test-page__hero-button"
                onClick={prevVideo}
                aria-label="Previous video"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="test-page__hero-button"
                onClick={nextVideo}
                aria-label="Next video"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
        <div className="test-page__hero-thumbs" role="tablist">
          {heroVideos.map((video, index) => (
            <button
              key={video.src}
              type="button"
              role="tab"
              aria-selected={index === currentVideoIndex}
              className={
                index === currentVideoIndex
                  ? "test-page__hero-thumb test-page__hero-thumb--active"
                  : "test-page__hero-thumb"
              }
              onClick={() => goToVideo(index)}
            >
              <h3>{video.title}</h3>
              {video.description ? <p>{video.description}</p> : null}
            </button>
          ))}
        </div>
      </section>

      <section className="test-page__grid">
        <article className="test-card test-card--about">
          {about.logoSrc ? (
            <img
              src={about.logoSrc}
              alt={about.logoAlt ?? "Clix Productions logo"}
              className="test-card__logo"
            />
          ) : null}
          <p>{about.body}</p>
        </article>

        <article className="test-card test-card--contact">
          <h2>{contact.heading}</h2>
          <ul>
            {contact.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>

        <article className="test-card test-card--announcement">
          <h2>{announcement.heading}</h2>
          <p>{announcement.body}</p>
        </article>

        <article className="test-card test-card--approach">
          <h2>{approach.heading}</h2>
          {approach.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="test-card test-card--clip">
          <div>
            <h2>{clipCasting.heading}</h2>
            <p>{clipCasting.summary}</p>
          </div>
          <button
            type="button"
            className="test-card__toggle"
            onClick={() => setIsExpanded((value) => !value)}
            aria-expanded={isExpanded}
          >
            {isExpanded
              ? clipCasting.collapseLabel ?? "Hide details"
              : clipCasting.expandLabel ?? "View details"}
          </button>
          {isExpanded && (
            <div className="test-card__details">
              {clipCasting.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
