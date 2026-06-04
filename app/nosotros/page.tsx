import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Equipo } from "@/components/sections/Equipo";
import { CTASection } from "@/components/ui/CTASection";
import { nosotros } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nosotros — AERIS",
  description: "Dos personas que vivieron por dentro lo que falla en el marketing, y construyeron la alternativa.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero label={nosotros.label} title={nosotros.title} lead={nosotros.lead} titleMaxCh={12} />

      {/* Historia */}
      <section className="section" aria-labelledby="historia-title">
        <div className="container" style={{ paddingTop: "clamp(48px, 8vw, 96px)" }}>
          <Reveal>
            <SectionLabel id="historia-title">{nosotros.historyLabel}</SectionLabel>
          </Reveal>
          <Reveal>
            <p className="t-h3" style={{ maxWidth: "30ch", fontWeight: 700 }}>
              {nosotros.history}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Equipo */}
      <Equipo headless />

      {/* Manifiesto */}
      <section className="section" aria-label="Manifiesto" style={{ background: "var(--ink)", color: "var(--cream)" }}>
        <div className="container" style={{ paddingBlock: "clamp(80px, 14vh, 180px)" }}>
          <Reveal>
            <p className="manifesto">
              {nosotros.manifesto.map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
        <style>{`
          .manifesto { font-size: var(--text-h2); font-weight: 800; line-height: 1.12; letter-spacing: -0.025em; max-width: 22ch; }
          .manifesto span + span { margin-top: 0.5em; color: color-mix(in srgb, var(--cream) 70%, transparent); }
          .manifesto span:last-child { color: var(--green); }
        `}</style>
      </section>

      <CTASection />
    </>
  );
}
