import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { tecnologia } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cómo lo hacemos — AERIS",
  description:
    "Criterio humano dirigiendo una orquesta de IA. Velocidad y escala con el control de una persona que conoce tu negocio.",
};

export default function TecnologiaPage() {
  return (
    <>
      <PageHero label={tecnologia.label} title={tecnologia.title} lead={tecnologia.lead} titleMaxCh={16} />

      {/* Tres capas */}
      <section className="section" aria-labelledby="capas-title">
        <div className="container" style={{ paddingTop: "clamp(48px, 8vw, 96px)" }}>
          <Reveal>
            <SectionLabel id="capas-title">{tecnologia.layersLabel}</SectionLabel>
          </Reveal>
          <div className="layers">
            {tecnologia.layers.map((layer, i) => (
              <Reveal key={layer.n} delay={i * 90} className={`layer layer-${i}`}>
                <div className="layer-head">
                  <span className="label-mono">{layer.n}</span>
                  <span className="label-mono layer-kicker">{layer.kicker}</span>
                </div>
                <h2 className="t-h3 layer-title">{layer.title}</h2>
                <p className="layer-text">{layer.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .layers { display: flex; flex-direction: column; gap: 12px; margin-top: clamp(32px, 5vw, 56px); }
          .layer { border: 1px solid var(--hairline); border-radius: 2px; padding: clamp(24px, 3vw, 40px); position: relative; overflow: hidden; }
          .layer-0 { background: var(--green-surf-2); border-color: var(--green); }
          .layer-1 { background: var(--cream-soft); }
          .layer-2 { background: var(--cream-soft); }
          .layer-head { display: flex; gap: 16px; align-items: center; }
          .layer-kicker { color: var(--green-deep); }
          .layer-title { margin-top: 14px; }
          .layer-text { color: var(--ink-soft); margin-top: 10px; max-width: 60ch; }
        `}</style>
      </section>

      {/* Beneficios */}
      <section className="section" aria-labelledby="benef-title">
        <hr className="hairline" />
        <div className="container" style={{ paddingTop: "var(--section-py)" }}>
          <Reveal>
            <SectionLabel id="benef-title">{tecnologia.benefitsLabel}</SectionLabel>
          </Reveal>
          <div className="benefits">
            {tecnologia.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="benefit">
                <h3 className="t-h3">{b.title}</h3>
                <p style={{ color: "var(--ink-soft)", marginTop: 10 }}>{b.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="tech-closing">{tecnologia.closing}</p>
          </Reveal>
        </div>
        <style>{`
          .benefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(20px, 3vw, 40px); margin-top: clamp(32px, 5vw, 56px); }
          .benefit { border-top: 2px solid var(--green); padding-top: 20px; }
          .tech-closing {
            margin-top: clamp(48px, 7vw, 88px); font-size: var(--text-h2); font-weight: 800;
            letter-spacing: -0.025em; line-height: 1.1; max-width: 24ch;
          }
          @media (max-width: 780px) { .benefits { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <CTASection title="Hablemos." lead="Te contamos cómo trabajaríamos tu marketing, sin compromiso." />
    </>
  );
}
