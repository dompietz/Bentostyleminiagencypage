import { defaultBentoGridContent } from "../components/BentoGrid";
import "./Test2Page.css";

const content = defaultBentoGridContent;

const heroVideo = content.heroVideos[0];

const aboutParagraphs = content.about.body
  .split(/\s*\n+\s*/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean);

const cards = [
  {
    type: "video" as const,
    title: heroVideo?.title,
    videoSrc: heroVideo?.src,
    variant: "video",
  },
  {
    title: "At Clix Productions",
    paragraphs: aboutParagraphs,
    accent: "About",
    variant: "wide",
  },
  {
    title: content.approach.heading,
    paragraphs: content.approach.paragraphs,
    accent: "Process",
    variant: "tall",
  },
  {
    title: content.clipCasting.heading,
    description: content.clipCasting.summary,
    list: content.clipCasting.details,
    accent: "Editorial",
  },
  {
    title: content.contact.heading,
    list: content.contact.lines,
    accent: "Connect",
  },
  {
    title: content.announcement.heading,
    paragraphs: [content.announcement.body],
    accent: "News",
    variant: "spotlight",
  },
];

export default function Test2Page() {
  return (
    <main className="test2-page" role="main">
      <section className="test2-page__grid" aria-label="Clix Productions overview">
        {cards.map((card) => {
          const variantClass = card.variant ? ` test2-card--${card.variant}` : "";
          const hasVideo = card.type === "video" && card.videoSrc;

          return (
            <article key={card.title ?? card.videoSrc} className={`test2-card${variantClass}`}>
              {card.accent && !hasVideo && (
                <span className="test2-card__accent" aria-hidden="true">
                  {card.accent}
                </span>
              )}

              {hasVideo ? (
                <figure className="test2-card__video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    title={card.title ?? "Clix Productions showreel"}
                  >
                    <source src={card.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {card.title && <figcaption>{card.title}</figcaption>}
                </figure>
              ) : (
                <div className="test2-card__body">
                  {card.title && <h2>{card.title}</h2>}

                  {Array.isArray(card.paragraphs) && (
                    <div className="test2-card__stack">
                      {card.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {card.description && <p>{card.description}</p>}

                  {Array.isArray(card.list) && (
                    <ul className="test2-card__list">
                      {card.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
