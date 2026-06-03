import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { planes } from "@/lib/content";

export function Planes() {
  return (
    <section id="planes" className="section" aria-labelledby="planes-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <SectionHead
          label={planes.label}
          title={planes.title}
          titleId="planes-title"
          micro={planes.micro}
          titleMaxCh={16}
        />

        <div className="plans-grid">
          {planes.cards.map((card, i) => (
            <Reveal key={card.name} delay={i * 80} className={`plan card ${card.featured ? "plan-featured" : ""}`}>
              <div className="plan-badge-row" aria-hidden={!card.featured}>
                {card.featured && <span className="pill">{planes.badge}</span>}
              </div>
              <div className="plan-body">
                <p className="plan-name">{card.name}</p>
                <p className="plan-tagline">{card.tagline}</p>
                <p className="plan-price">
                  <span className="plan-price-prefix">{card.pricePrefix}</span>
                  <span className="plan-price-amount">
                    {card.price}
                    <span className="plan-period">{card.period}</span>
                  </span>
                </p>
                <hr className="hairline" style={{ margin: "24px 0" }} />
                <ul className="plan-features">
                  {card.features.map((f) => (
                    <li key={f}>
                      <span className="plan-plus" aria-hidden>
                        +
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="plan-foot">{card.footnote}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <hr className="hairline" style={{ marginTop: "clamp(40px, 5vw, 64px)" }} />
        <p className="label-mono" style={{ marginTop: 20 }}>
          {planes.foot}
        </p>
      </div>

      <style>{`
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2vw, 28px);
          margin-top: clamp(40px, 6vw, 64px);
          align-items: start;
        }
        .plan { display: flex; flex-direction: column; overflow: hidden; }
        .plan-featured { border-color: var(--green); }
        .plan-badge-row { background: var(--green-surface); padding: 10px 28px; min-height: 40px; display: flex; align-items: center; }
        .plan:not(.plan-featured) .plan-badge-row { background: transparent; }
        .plan-badge-row .pill { background: transparent; padding: 0; }
        .plan-body { padding: clamp(24px, 2.5vw, 36px); display: flex; flex-direction: column; flex: 1; }
        .plan-name { font-family: var(--font-mono); letter-spacing: 0.12em; font-size: var(--text-label); }
        .plan-tagline { color: var(--ink-soft); margin-top: 12px; min-height: 2.8em; }
        .plan-price { margin-top: 16px; display: flex; flex-direction: column; gap: 2px; }
        .plan-price-prefix { font-family: var(--font-mono); font-size: var(--text-micro); text-transform: uppercase; letter-spacing: 0.1em; color: var(--mute); }
        .plan-price-amount { font-size: clamp(1.9rem, 3vw, 2.6rem); font-weight: 800; letter-spacing: -0.02em; white-space: nowrap; line-height: 1.05; }
        .plan-period { font-family: var(--font-mono); font-size: var(--text-label); color: var(--mute); font-weight: 400; margin-left: 6px; }
        .plan-features { display: flex; flex-direction: column; gap: 12px; flex: 1; }
        .plan-features li { display: flex; gap: 12px; color: var(--ink-soft); font-size: var(--text-body); line-height: 1.4; }
        .plan-plus { color: var(--green-deep); font-family: var(--font-mono); flex: none; }
        .plan-foot { color: var(--mute); margin-top: 28px; font-size: 0.95rem; }
        @media (max-width: 900px) { .plans-grid { grid-template-columns: 1fr; max-width: 520px; margin-inline: auto; } }
      `}</style>
    </section>
  );
}
