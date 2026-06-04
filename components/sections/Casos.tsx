import Image from "next/image";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { casos } from "@/lib/content";

type PageCta = { label: string; href: string };

export function Casos({ pageCta, headless }: { pageCta?: PageCta; headless?: boolean } = {}) {
  return (
    <section id="casos" className="section" aria-labelledby={headless ? undefined : "casos-title"}>
      {!headless && <hr className="hairline" />}
      <div className="container" style={{ paddingTop: headless ? "clamp(8px, 2vw, 24px)" : "var(--section-py)" }}>
        {!headless && (
          <SectionHead
            label={casos.label}
            title={casos.title}
            titleId="casos-title"
            micro={casos.micro}
            titleMaxCh={14}
          />
        )}

        <div className="casos-grid">
          {casos.items.map((item, i) => (
            <Reveal key={item.n} delay={i * 80} className="caso card card-hover">
              <div className="caso-photo">
                <Image
                  src={`/img/caso-${item.img}.webp`}
                  alt={`Caso ${item.name}: arquitectura minimalista en hormigón`}
                  width={520}
                  height={360}
                  loading="lazy"
                  sizes="(max-width: 900px) 90vw, 30vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="caso-body">
                <p className="label-mono">[ {item.n} ]</p>
                <h3 className="caso-name">{item.name}</h3>
                <hr className="hairline" style={{ margin: "18px 0" }} />
                <div className="caso-metrics">
                  {item.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="caso-metric-value">{m.value}</p>
                      <p className="caso-metric-label">{m.label}</p>
                    </div>
                  ))}
                </div>
                <a className="caso-link" href="#cta">
                  {casos.cta}
                  <span className="arrow" aria-hidden>
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {casos.placeholder && (
          <p className="label-mono" style={{ marginTop: 24, color: "var(--mute)" }}>
            * MÉTRICAS DE EJEMPLO — PENDIENTES DE SUSTITUIR POR DATOS REALES
          </p>
        )}

        {pageCta && (
          <Reveal>
            <div style={{ marginTop: "clamp(28px, 4vw, 40px)" }}>
              <Button href={pageCta.href} variant="outline" arrow="diagonal">
                {pageCta.label}
              </Button>
            </div>
          </Reveal>
        )}
      </div>

      <style>{`
        .casos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(16px, 2vw, 28px); margin-top: clamp(40px, 6vw, 64px); }
        .caso { display: flex; flex-direction: column; overflow: hidden; }
        .caso-photo { aspect-ratio: 3 / 2; overflow: hidden; border-bottom: 1px solid var(--hairline); }
        .caso-body { padding: clamp(20px, 2vw, 28px); display: flex; flex-direction: column; flex: 1; }
        .caso-name { font-size: var(--text-h3); font-weight: 700; letter-spacing: -0.01em; margin-top: 12px; }
        .caso-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .caso-metric-value { font-size: clamp(1.6rem, 2.6vw, 2.2rem); font-weight: 800; letter-spacing: -0.02em; }
        .caso-metric-label { font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); margin-top: 4px; }
        .caso-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; font-family: var(--font-mono); font-size: var(--text-label); letter-spacing: 0.1em; color: var(--green-deep); }
        .caso-link .arrow { transition: transform var(--dur) var(--ease); }
        .caso:hover .caso-link .arrow { transform: translate(3px, -3px); }
        @media (max-width: 900px) { .casos-grid { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; } }
      `}</style>
    </section>
  );
}
