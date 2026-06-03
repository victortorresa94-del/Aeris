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

        <div className="doors-grid">
          {problema.doors.map((door, i) => (
            <Reveal key={door.n} delay={i * 80} className="door">
              <div className="door-photo">
                <Image
                  src={`/img/door-${door.img}.webp`}
                  alt={`Puerta de hormigón representando la opción ${door.name.toLowerCase()}`}
                  width={420}
                  height={520}
                  loading="lazy"
                  sizes="(max-width: 760px) 90vw, 30vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="label-mono" style={{ marginTop: 20 }}>
                {door.n}
              </p>
              <h3 className="door-name">{door.name}</h3>
              <p style={{ color: "var(--ink-soft)", marginTop: 8, maxWidth: "34ch" }}>{door.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="problema-hook">
            <span className="hook-bar" aria-hidden />
            <div>
              <p className="text-accent" style={{ fontSize: "var(--text-h3)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {problema.hook}
              </p>
              <p className="label-mono" style={{ marginTop: 16 }}>
                {problema.hookMicro}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .doors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(20px, 3vw, 40px);
          margin-top: clamp(40px, 6vw, 72px);
        }
        .door-photo {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 1px solid var(--hairline);
          background: var(--cream-soft);
        }
        .door-name { font-size: var(--text-h3); font-weight: 800; letter-spacing: 0.02em; margin-top: 6px; }
        .problema-hook {
          display: flex;
          gap: 20px;
          margin-top: clamp(40px, 6vw, 72px);
          padding-top: clamp(32px, 4vw, 48px);
          border-top: 1px solid var(--hairline);
        }
        .hook-bar { flex: none; width: 3px; align-self: stretch; background: var(--green); }
        @media (max-width: 760px) {
          .doors-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
