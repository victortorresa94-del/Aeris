import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { ROW_ICONS, IconCheck, IconCross } from "@/components/ui/Icons";
import { comparativa } from "@/lib/content";

export function Comparativa() {
  const { columns, rows } = comparativa;
  return (
    <section id="comparativa" className="section" aria-labelledby="comparativa-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <SectionHead
          label={comparativa.label}
          title={comparativa.title}
          titleId="comparativa-title"
          micro={comparativa.micro}
          titleMaxCh={16}
        />

        <Reveal>
          <table className="cmp">
            <thead>
              <tr>
                <td className="cmp-corner" />
                {columns.map((c, i) => (
                  <th key={c} scope="col" className={i === 0 ? "cmp-aeris cmp-head-aeris" : "cmp-head"}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const Icon = ROW_ICONS[row.icon];
                return (
                  <tr key={row.title}>
                    <th scope="row" className="cmp-feature">
                      <span className="cmp-feature-inner">
                        <span className="cmp-ficon" aria-hidden>
                          <Icon />
                        </span>
                        <span>
                          <span className="cmp-ftitle">{row.title}</span>
                          <span className="cmp-fsub">{row.sub}</span>
                        </span>
                      </span>
                    </th>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        data-col={columns[i]}
                        className={i === 0 ? "cmp-aeris cmp-val" : "cmp-val"}
                      >
                        {v ? (
                          <span className="cmp-yes" aria-label="Sí">
                            <IconCheck />
                          </span>
                        ) : (
                          <span className="cmp-no" aria-label="No">
                            <IconCross />
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </div>

      <style>{`
        .cmp { width: 100%; border-collapse: collapse; margin-top: clamp(40px, 5vw, 64px); }
        .cmp th, .cmp td { padding: clamp(16px, 2vw, 22px) 16px; text-align: center; vertical-align: middle; }
        .cmp thead th { font-weight: 400; font-size: var(--text-body); }
        .cmp-head-aeris { font-family: var(--font-mono); letter-spacing: 0.16em; font-weight: 700; }
        .cmp tbody tr { border-top: 1px solid var(--hairline); }
        .cmp-feature { text-align: left; }
        .cmp-feature-inner { display: flex; gap: 16px; align-items: flex-start; max-width: 380px; }
        .cmp-ficon { color: var(--green); flex: none; margin-top: 2px; }
        .cmp-ftitle { display: block; font-weight: 700; letter-spacing: -0.01em; }
        .cmp-fsub { display: block; font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); margin-top: 4px; }
        .cmp-aeris { background: color-mix(in srgb, var(--green-surface) 60%, transparent); }
        .cmp-yes { color: var(--green-deep); display: inline-flex; }
        .cmp-no { color: var(--mute); display: inline-flex; }

        @media (max-width: 720px) {
          .cmp, .cmp thead, .cmp tbody, .cmp tr, .cmp th, .cmp td { display: block; }
          .cmp thead { display: none; }
          .cmp tbody tr { padding: 20px 0; }
          .cmp-feature { padding: 0 0 12px; }
          .cmp-feature-inner { max-width: none; }
          .cmp-val { display: flex; align-items: center; justify-content: space-between; text-align: left; padding: 8px 0; background: none !important; }
          .cmp-val::before { content: attr(data-col); font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); text-transform: uppercase; letter-spacing: 0.08em; }
        }
      `}</style>
    </section>
  );
}
