import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { PLAN_ICONS } from "@/components/ui/Icons";
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
                {card.setup && <p className="plan-setup">+ {card.setup} · pago único</p>}

                {card.inherits && (
                  <p className="plan-inherits">
                    Todo lo de <strong>{card.inherits}</strong>, más:
                  </p>
                )}

                <div className="plan-groups">
                  {card.groups.map((group) => {
                    const cat = group.cat as keyof typeof PLAN_ICONS;
                    const Icon = PLAN_ICONS[cat];
                    return (
                      <div className="plan-group" key={group.cat}>
                        <p className="plan-group-head">
                          <span className="plan-group-icon" aria-hidden>
                            <Icon />
                          </span>
                          {planes.catLabels[cat]}
                        </p>
                        <ul>
                          {group.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {card.excludes && card.excludes.length > 0 && (
                  <p className="plan-excludes">
                    <span className="plan-excludes-label">No incluye</span>
                    {card.excludes.join(" · ")}
                  </p>
                )}

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
          gap: clamp(16px, 2vw, 24px);
          margin-top: clamp(40px, 6vw, 64px);
          align-items: start;
        }
        .plan { display: flex; flex-direction: column; overflow: hidden; }
        .plan-featured { border-color: var(--green); }
        .plan-badge-row { background: var(--green-surface); padding: 10px 28px; min-height: 40px; display: flex; align-items: center; }
        .plan:not(.plan-featured) .plan-badge-row { background: transparent; }
        .plan-badge-row .pill { background: transparent; padding: 0; }
        .plan-body { padding: clamp(22px, 2.2vw, 32px); display: flex; flex-direction: column; flex: 1; }
        .plan-name { font-family: var(--font-mono); letter-spacing: 0.12em; font-size: var(--text-label); }
        .plan-tagline { color: var(--ink-soft); margin-top: 10px; min-height: 2.8em; font-size: 0.95rem; line-height: 1.35; }
        .plan-price { margin-top: 14px; display: flex; flex-direction: column; gap: 2px; }
        .plan-price-prefix { font-family: var(--font-mono); font-size: var(--text-micro); text-transform: uppercase; letter-spacing: 0.1em; color: var(--mute); }
        .plan-price-amount { font-size: clamp(1.75rem, 2.6vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; white-space: nowrap; line-height: 1.05; }
        .plan-period { font-family: var(--font-mono); font-size: var(--text-label); color: var(--mute); font-weight: 400; margin-left: 6px; }
        .plan-setup { margin-top: 8px; font-family: var(--font-mono); font-size: var(--text-micro); letter-spacing: 0.04em; color: var(--green-deep); }

        .plan-inherits { margin-top: 22px; font-size: 0.85rem; color: var(--ink-soft); padding-bottom: 16px; border-bottom: 1px solid var(--hairline); }
        .plan-inherits strong { font-weight: 700; color: var(--ink); }

        .plan-groups { display: flex; flex-direction: column; gap: 16px; margin-top: 22px; flex: 1; }
        .plan-group-head {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--mute);
          margin-bottom: 6px;
        }
        .plan-group-icon { color: var(--green); display: inline-flex; flex: none; }
        .plan-group ul { display: flex; flex-direction: column; gap: 4px; padding-left: 28px; }
        .plan-group li { position: relative; color: var(--ink); font-size: 0.9rem; line-height: 1.35; }
        .plan-group li::before {
          content: ""; position: absolute; left: -16px; top: 0.55em;
          width: 5px; height: 5px; border-radius: 999px; background: var(--green-deep);
        }
        .plan-excludes { margin-top: 18px; font-size: 0.82rem; color: var(--mute); line-height: 1.4; }
        .plan-excludes-label { display: inline-flex; align-items: center; font-family: var(--font-mono); font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--mute); margin-right: 8px; }
        .plan-excludes-label::before { content: "✕"; margin-right: 6px; color: var(--mute); }
        .plan-foot { color: var(--mute); margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--hairline); font-size: 0.9rem; line-height: 1.4; }

        @media (max-width: 900px) {
          .plans-grid { grid-template-columns: 1fr; gap: 16px; max-width: 540px; margin-inline: auto; }
          .plan-tagline { min-height: 0; }
        }
      `}</style>
    </section>
  );
}
