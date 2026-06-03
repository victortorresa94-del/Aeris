import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { problema } from "@/lib/content";

export function Problema() {
  return (
    <section id="problema" className="section" aria-labelledby="problema-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <Reveal as="div">
          <SectionLabel>{problema.label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 id="problema-title" className="t-h2" style={{ maxWidth: "16ch" }}>
            {problema.title}
          </h2>
        </Reveal>

        <div className="problema-body">
          <div className="doors-grid">
            {problema.doors.map((door, i) => (
              <Reveal key={door.n} delay={i * 80} className="door">
                <div className="door-photo">
                  <Image
                    src={`/img/door-${door.img}.webp`}
                    alt={`Puerta de hormigón representando la opción ${door.name.toLowerCase()}`}
                    width={360}
                    height={450}
                    loading="lazy"
                    sizes="(max-width: 760px) 45vw, 20vw"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p className="label-mono" style={{ marginTop: 16 }}>
                  {door.n}
                </p>
                <h3 className="door-name">{door.name}</h3>
                <p className="door-text">{door.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240} className="problema-hook">
            <span className="hook-bar" aria-hidden />
            <div>
              <p className="text-accent hook-title">{problema.hook}</p>
              <p className="label-mono" style={{ marginTop: 16 }}>
                {problema.hookMicro}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .problema-body {
          display: grid;
          grid-template-columns: 2.7fr 1fr;
          gap: clamp(28px, 4vw, 64px);
          align-items: center;
          margin-top: clamp(40px, 6vw, 72px);
        }
        .doors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 1.6vw, 24px);
        }
        .door-photo {
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border: 1px solid var(--hairline);
          background: var(--cream-soft);
        }
        .door-name { font-size: clamp(1.1rem, 1.5vw, 1.4rem); font-weight: 800; letter-spacing: 0.04em; margin-top: 4px; }
        .door-text { color: var(--ink-soft); margin-top: 6px; font-size: 0.95rem; line-height: 1.4; }
        .problema-hook { display: flex; gap: 18px; align-self: center; }
        .hook-bar { flex: none; width: 3px; align-self: stretch; background: var(--green); }
        .hook-title { font-size: var(--text-h3); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
        @media (max-width: 860px) {
          .problema-body { grid-template-columns: 1fr; gap: clamp(28px, 5vw, 48px); }
          .problema-hook { padding-top: clamp(24px, 4vw, 36px); border-top: 1px solid var(--hairline); }
        }
        @media (max-width: 520px) {
          .doors-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </section>
  );
}
