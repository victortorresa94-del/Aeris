import { Fragment } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { NodeDiagram } from "@/components/ui/NodeDiagram";
import { propuesta } from "@/lib/content";

export function Propuesta() {
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
      </div>

      <style>{`
        .prop-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: clamp(12px, 2vw, 28px);
          margin-top: clamp(48px, 7vw, 88px);
          text-align: left;
        }
        .prop-card {
          border-top: 1px solid var(--hairline);
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .prop-visual {
          min-height: 120px;
          display: flex;
          align-items: center;
          margin-block: 8px;
        }
        .prop-connector {
          align-self: center;
          font-family: var(--font-mono);
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          color: var(--mute);
        }
        @media (max-width: 820px) {
          .prop-flow { grid-template-columns: 1fr; }
          .prop-connector { justify-self: center; padding-block: 8px; }
        }
      `}</style>
    </section>
  );
}
