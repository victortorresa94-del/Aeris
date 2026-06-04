import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BENTO_ICONS } from "@/components/ui/Icons";
import { CTASection } from "@/components/ui/CTASection";
import { servicios } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios de marketing — AERIS",
  description:
    "Redes, email, contenido, vídeo, web, SEO, paid y estrategia. Todas las disciplinas bajo una sola dirección.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero label={servicios.label} title={servicios.title} lead={servicios.lead} titleMaxCh={18} />

      <section className="section" aria-label="Disciplinas">
        <div className="container" style={{ paddingTop: "clamp(48px, 8vw, 96px)" }}>
          <div className="disc-list">
            {servicios.disciplines.map((d, i) => {
              const Icon = BENTO_ICONS[d.icon as keyof typeof BENTO_ICONS];
              return (
                <Reveal key={d.n} className={`disc ${i % 2 === 1 ? "disc-rev" : ""}`}>
                  <div className="disc-visual" aria-hidden>
                    <span className="disc-icon">{Icon ? <Icon size={64} /> : null}</span>
                    <span className="label-mono disc-n">[ {d.n} ]</span>
                  </div>
                  <div className="disc-body">
                    <h2 className="t-h2 disc-title">{d.title}</h2>
                    <p className="lead disc-oneline">{d.oneLine}</p>
                    <div className="disc-meta">
                      <p><span className="disc-k">Incluye</span> {d.includes}</p>
                      <p><span className="disc-k">Cómo lo hacemos</span> {d.how}</p>
                      <p><span className="disc-k">Planes</span> {d.plans}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="disc-cta">
              <p className="t-h3" style={{ fontWeight: 700, maxWidth: "20ch" }}>
                {servicios.closing.pre}
                <span className="text-accent">{servicios.closing.accent}</span>
                {servicios.closing.post}
              </p>
              <Button href="/planes" variant="filled" arrow="right">Ver planes</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />

      <style>{`
        .disc-list { display: flex; flex-direction: column; }
        .disc {
          display: grid; grid-template-columns: 0.7fr 1.3fr; gap: clamp(24px, 4vw, 64px);
          align-items: center; padding-block: clamp(36px, 5vw, 64px); border-top: 1px solid var(--hairline);
        }
        .disc-rev .disc-visual { order: 2; }
        .disc-visual {
          aspect-ratio: 4 / 3; border: 1px solid var(--hairline); border-radius: 2px; background: var(--green-surf-2);
          display: flex; align-items: center; justify-content: center; position: relative; color: var(--green);
        }
        .disc-n { position: absolute; top: 14px; left: 16px; color: var(--mute); }
        .disc-title { letter-spacing: -0.02em; }
        .disc-oneline { margin-top: 10px; max-width: 40ch; }
        .disc-meta { margin-top: 20px; display: flex; flex-direction: column; gap: 12px; max-width: 60ch; }
        .disc-meta p { color: var(--ink-soft); font-size: 0.98rem; line-height: 1.5; }
        .disc-k { display: inline-block; font-family: var(--font-mono); font-size: var(--text-micro); text-transform: uppercase; letter-spacing: 0.1em; color: var(--green-deep); margin-right: 8px; }
        .disc-cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-top: clamp(40px, 5vw, 64px); padding-top: clamp(32px, 4vw, 48px); border-top: 1px solid var(--hairline); }
        @media (max-width: 820px) {
          .disc { grid-template-columns: 1fr; gap: 20px; }
          .disc-rev .disc-visual { order: 0; }
          .disc-visual { max-width: 220px; }
        }
      `}</style>
    </>
  );
}
