import { Fragment } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NodeDiagram } from "@/components/ui/NodeDiagram";
import { propuesta } from "@/lib/content";

type PageCta = { label: string; href: string };

export function Propuesta({ pageCta }: { pageCta?: PageCta } = {}) {
  return (
    <section id="propuesta" className="section" aria-labelledby="propuesta-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)", textAlign: "center" }}>
        <Reveal>
          <SectionLabel>{propuesta.label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 id="propuesta-title" className="t-h2" style={{ maxWidth: "20ch", marginInline: "auto" }}>
            {propuesta.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead measure" style={{ marginInline: "auto", marginTop: "clamp(20px, 3vw, 32px)" }}>
            {propuesta.lead}
          </p>
        </Reveal>

        <div className="prop-flow">
          {propuesta.blocks.map((block, i) => (
            <Fragment key={block.n}>
              <Reveal delay={i * 100} className="prop-card">
                <p className="label-mono">{block.n}</p>
                <p className="label-mono" style={{ color: "var(--green-deep)", marginTop: 6 }}>
                  {block.kicker}
                </p>
                <div className="prop-visual">
                  {block.title === "Múltiples IAs" ? <NodeDiagram /> : <h3 className="t-h3">{block.title}</h3>}
                </div>
                <p style={{ color: "var(--ink-soft)" }}>{block.text}</p>
              </Reveal>
              {i < propuesta.blocks.length - 1 && (
                <span className="prop-connector" aria-hidden>
                  {i === 0 ? "+" : "→"}
                </span>
              )}
            </Fragment>
          ))}
        </div>

        {pageCta && (
          <Reveal>
            <div style={{ marginTop: "clamp(28px, 4vw, 44px)", display: "flex", justifyContent: "center" }}>
              <Button href={pageCta.href} variant="outline" arrow="diagonal">
                {pageCta.label}
              </Button>
            </div>
          </Reveal>
        )}
      </div>

      <style>{`
        /* Banner compacto Estratega · IA · Resultado */
        .prop-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: clamp(12px, 2vw, 32px);
          margin-top: clamp(36px, 5vw, 56px);
          text-align: left;
          border: 1px solid var(--hairline);
          border-radius: 2px;
          background: var(--cream-soft);
          padding: clamp(20px, 3vw, 36px);
        }
        .prop-card { display: flex; flex-direction: column; gap: 8px; }
        .prop-card .t-h3 { font-size: clamp(1.15rem, 1.8vw, 1.5rem); }
        .prop-card > p:last-child { font-size: 0.9rem; line-height: 1.4; }
        .prop-visual {
          min-height: 84px; max-height: 104px;
          display: flex;
          align-items: center;
          margin-block: 4px;
        }
        .prop-visual svg { max-height: 104px; }
        .prop-connector {
          align-self: center;
          font-family: var(--font-mono);
          font-size: clamp(1.2rem, 2.4vw, 1.8rem);
          color: var(--mute);
        }
        @media (max-width: 820px) {
          .prop-flow { grid-template-columns: 1fr; gap: 6px; }
          .prop-connector { justify-self: start; padding-block: 4px; }
          .prop-visual { min-height: 72px; justify-content: flex-start; }
        }
      `}</style>
    </section>
  );
}
