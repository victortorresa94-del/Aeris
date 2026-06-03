import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { BENTO_ICONS } from "@/components/ui/Icons";
import { queIncluye } from "@/lib/content";

export function QueIncluye() {
  return (
    <section id="que-incluye" className="section" aria-labelledby="que-incluye-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <SectionHead
          label={queIncluye.label}
          title={queIncluye.title}
          titleId="que-incluye-title"
          micro={queIncluye.micro}
        />

        <ul className="bento">
          {queIncluye.tiles.map((tile, i) => {
            const Icon = BENTO_ICONS[tile.icon];
            return (
              <li key={tile.n}>
                <Reveal delay={(i % 4) * 70} className="bento-tile">
                  <p className="label-mono">[ {tile.n} ]</p>
                  <h3 className="bento-title">{tile.title}</h3>
                  <div className="bento-icon" aria-hidden>
                    <Icon size={56} />
                  </div>
                  <span className="bento-arrow" aria-hidden>
                    →
                  </span>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal>
          <p className="qi-hook">
            {queIncluye.hook.pre}
            <span className="text-accent">{queIncluye.hook.accent}</span>
            {queIncluye.hook.post}
          </p>
        </Reveal>
      </div>

      <style>{`
        .bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: clamp(40px, 6vw, 64px);
          border-top: 1px solid var(--hairline);
          border-left: 1px solid var(--hairline);
        }
        .bento-tile {
          position: relative;
          border-right: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
          padding: clamp(20px, 2vw, 28px);
          min-height: clamp(190px, 18vw, 240px);
          display: flex;
          flex-direction: column;
          color: var(--green);
          transition: background var(--dur) var(--ease);
        }
        .bento-tile:hover { background: var(--cream-soft); }
        .bento-title { color: var(--ink); font-size: var(--text-h3); font-weight: 700; letter-spacing: -0.02em; margin-top: 14px; }
        .bento-icon { margin-top: auto; }
        .bento-arrow {
          position: absolute; right: clamp(20px, 2vw, 28px); bottom: clamp(20px, 2vw, 28px);
          color: var(--ink); opacity: 0; transform: translateX(-4px);
          transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease);
        }
        .bento-tile:hover .bento-arrow { opacity: 1; transform: translateX(0); }
        .qi-hook { margin-top: clamp(32px, 4vw, 48px); font-size: var(--text-h3); font-weight: 700; letter-spacing: -0.02em; }
        @media (max-width: 980px) { .bento { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .bento { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
