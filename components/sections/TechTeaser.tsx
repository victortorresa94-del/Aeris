import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NodeDiagram } from "@/components/ui/NodeDiagram";
import { techTeaser } from "@/lib/content";

export function TechTeaser() {
  return (
    <section id="tecnologia" className="section" aria-labelledby="techteaser-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <div className="tt-grid">
          <div>
            <Reveal>
              <SectionLabel>{techTeaser.label}</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 id="techteaser-title" className="t-h2" style={{ maxWidth: "18ch" }}>
                {techTeaser.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: "clamp(16px, 2vw, 24px)", maxWidth: "46ch" }}>
                {techTeaser.lead}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ marginTop: 28 }}>
                <Button href={techTeaser.cta.href} variant="outline" arrow="diagonal">
                  {techTeaser.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="tt-visual">
            <div className="tt-diagram">
              <NodeDiagram />
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .tt-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(32px, 5vw, 72px); align-items: center; }
        .tt-visual { display: flex; justify-content: center; }
        .tt-diagram {
          width: 100%; max-width: 420px; aspect-ratio: 1.1 / 1; padding: clamp(20px, 3vw, 40px);
          border: 1px solid var(--hairline); border-radius: 2px; background: var(--green-surf-2);
          display: flex; align-items: center; justify-content: center;
        }
        @media (max-width: 820px) { .tt-grid { grid-template-columns: 1fr; } .tt-diagram { max-width: 320px; } }
      `}</style>
    </section>
  );
}
