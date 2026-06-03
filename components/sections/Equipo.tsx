import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { equipo } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function Equipo() {
  return (
    <section id="equipo" className="section" aria-labelledby="equipo-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <Reveal>
          <SectionLabel>{equipo.label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 id="equipo-title" className="t-h2">
            {equipo.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="lead measure" style={{ marginTop: "clamp(16px, 2vw, 24px)" }}>
            {equipo.intro}
          </p>
        </Reveal>

        <div className="team-grid">
          {equipo.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className="team-member">
              <div className="team-photo" aria-hidden={!m.photo}>
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    width={480}
                    height={480}
                    loading="lazy"
                    sizes="(max-width: 700px) 90vw, 40vw"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span className="team-monogram">{initials(m.name)}</span>
                )}
                <span className="team-dot" aria-hidden />
              </div>
              <h3 className="team-name">{m.name}</h3>
              <p className="label-mono" style={{ color: "var(--green-deep)", marginTop: 8 }}>
                {m.role}
              </p>
              <p style={{ color: "var(--ink-soft)", marginTop: 16, maxWidth: "42ch" }}>{m.bio}</p>
              <ul className="team-links">
                {m.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="team-link">
                      {l.label}
                      <span className="arrow" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="team-note">
            <span className="team-note-bar" aria-hidden />
            {equipo.teamNote}
          </p>
        </Reveal>
      </div>

      <style>{`
        .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 64px); margin-top: clamp(40px, 6vw, 64px); }
        .team-member { border-top: 1px solid var(--hairline); padding-top: 28px; }
        .team-photo {
          position: relative; aspect-ratio: 4 / 3; margin-bottom: 24px; overflow: hidden;
          background: var(--cream-soft); border: 1px solid var(--hairline);
          display: flex; align-items: center; justify-content: center;
        }
        .team-monogram {
          font-family: var(--font-mono); font-weight: 700; font-size: clamp(3rem, 8vw, 5rem);
          color: var(--hairline); letter-spacing: 0.05em;
        }
        .team-dot { position: absolute; top: 14px; right: 14px; width: 8px; height: 8px; border-radius: 999px; background: var(--green); }
        .team-name { font-size: var(--text-h3); font-weight: 800; letter-spacing: -0.02em; }
        .team-links { display: flex; gap: 20px; margin-top: 20px; }
        .team-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: var(--text-label); letter-spacing: 0.06em; color: var(--green-deep); }
        .team-link .arrow { transition: transform var(--dur) var(--ease); }
        .team-link:hover .arrow { transform: translate(2px, -2px); }
        .team-note {
          display: flex; gap: 16px; align-items: center; margin-top: clamp(40px, 5vw, 64px);
          padding-top: clamp(28px, 3vw, 40px); border-top: 1px solid var(--hairline);
          font-size: var(--text-h3); font-weight: 700; letter-spacing: -0.02em; max-width: 30ch;
        }
        .team-note-bar { flex: none; width: 3px; align-self: stretch; background: var(--green); }
        @media (max-width: 700px) { .team-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
