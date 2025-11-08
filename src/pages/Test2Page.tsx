import "./Test2Page.css";

const cards = [
  {
    title: "Pulse Studio",
    description:
      "We translate abstract ideas into motion-first stories with micro interactions that feel alive.",
    variant: "wide",
    accent: "Story",
  },
  {
    title: "Launch Velocity",
    description:
      "A four-day design accelerator where we produce a shippable prototype, complete with user flows and copy.",
    metricLabel: "Avg. turnaround",
    metricValue: "96h",
    variant: "tall",
  },
  {
    title: "Texture Lab",
    description:
      "Experimental surfaces and tactile palettes crafted to elevate immersive brand identities.",
    variant: "spotlight",
  },
  {
    title: "Signals",
    description:
      "A curated library of insight reports covering trends in digital craft, motion, and experiential retail.",
    metricLabel: "Fresh drops",
    metricValue: "Weekly",
  },
  {
    title: "Partnerships",
    description:
      "We integrate with product teams to embed design systems that scale across markets and modalities.",
    metricLabel: "Retention",
    metricValue: "92%",
    variant: "wide",
  },
  {
    title: "Sound Layering",
    description:
      "Immersive audio direction for spatial experiences—grounded in research, tuned for emotion.",
  },
];

export default function Test2Page() {
  return (
    <main className="test2-page" role="main">
      <section className="test2-page__hero">
        <p className="test2-page__eyebrow">Experimental Workbench</p>
        <h1>
          Test2 showcases a tactile bento grid built for progressive creative teams.
        </h1>
        <p>
          Explore modular stories, accelerators, and research capsules—each designed to
          flex across touchpoints. The layout responds instantly, maintaining rhythm on
          any device size.
        </p>
        <div className="test2-page__tags" aria-label="Focus areas">
          <span>Motion design</span>
          <span>Spatial audio</span>
          <span>Brand systems</span>
        </div>
      </section>

      <section className="test2-page__grid" aria-label="Capabilities and programs">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`test2-card${card.variant ? ` test2-card--${card.variant}` : ""}`}
          >
            {card.accent && (
              <span className="test2-card__accent" aria-hidden="true">
                {card.accent}
              </span>
            )}
            <div className="test2-card__body">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
            {card.metricLabel && card.metricValue && (
              <dl className="test2-card__metric">
                <dt>{card.metricLabel}</dt>
                <dd>{card.metricValue}</dd>
              </dl>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
