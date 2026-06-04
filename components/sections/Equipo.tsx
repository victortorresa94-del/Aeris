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
                    width={880}
                    height={1100}
                    loading="lazy"
                    sizes="170px"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span className="team-monogram">{initials(m.name)}</span>
                )}
                <span className="team-dot" aria-hidden />
              </div>
              <div className="team-info">
                <h3 className="team-name">{m.name}</h3>
                <p className="label-mono" style={{ color: "var(--green-deep)", marginTop: 6 }}>
                  {m.role}
                </p>
                <p className="team-bio">{m.bio}</p>
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
              </div>
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
        .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 4vw, 56px); margin-top: clamp(40px, 6vw, 64px); }
        .team-member { border-top: 1px solid var(--hairline); padding-top: 28px; display: flex; gap: clamp(16px, 2vw, 24px); align-items: flex-start; }
        .team-photo {
          position: relative; width: clamp(120px, 15vw, 168px); flex: none;
          aspect-ratio: 4 / 5; overflow: hidden;
          background: var(--cream-soft); border: 1px solid var(--hairline);
          display: flex; align-items: center; justify-content: center;
        }
        .team-info { flex: 1; min-width: 0; }
        .team-monogram {
          font-family: var(--font-mono); font-weight: 700; font-size: clamp(2rem, 5vw, 3rem);
          color: var(--hairline); letter-spacing: 0.05em;
        }
        .team-dot { position: absolute; top: 10px; right: 10px; width: 7px; height: 7px; border-radius: 999px; background: var(--green); }
        .team-name { font-size: var(--text-h3); font-weight: 800; letter-spacing: -0.02em; }
        .team-bio { color: var(--ink-soft); margin-top: 12px; font-size: 0.95rem; line-height: 1.45; }
        .team-links { display: flex; gap: 18px; margin-top: 16px; }
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
