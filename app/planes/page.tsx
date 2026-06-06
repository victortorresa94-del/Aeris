import type { Metadata } from "next";
import { Fragment } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Planes } from "@/components/sections/Planes";
import { Faq } from "@/components/sections/Faq";
import { CTASection } from "@/components/ui/CTASection";
import { planesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Planes y precios — AERIS",
  description:
    "Tres planes desde 1.000€/mes. Tu departamento de marketing completo, operado por expertos y potenciado por IA.",
};

export default function PlanesPage() {
  const { matrix, addons, smallprint } = planesPage;
  return (
    <>
      <PageHero label={planesPage.label} title={planesPage.title} lead={planesPage.lead} titleMaxCh={16} />

      {/* Las 3 cards (detalle) */}
      <Planes headless />

      {/* Matriz comparativa completa */}
      <section id="comparativa" className="section" aria-labelledby="matrix-title">
        <hr className="hairline" />
        <div className="container" style={{ paddingTop: "var(--section-py)" }}>
          <Reveal>
            <SectionLabel>{matrix.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 id="matrix-title" className="t-h2" style={{ maxWidth: "14ch" }}>{matrix.title}</h2>
          </Reveal>

          <Reveal>
            <table className="mtx">
              <thead>
                <tr>
                  <td />
                  {matrix.columns.map((c, i) => (
                    <th key={c.name} scope="col" className={i === 1 ? "mtx-aeris mtx-head" : "mtx-head"}>
                      <span className="mtx-h-name">{c.name}</span>
                      <span className="mtx-h-price">{c.price}</span>
                      <span className="mtx-h-sub">{c.setup}</span>
                      <span className="mtx-h-sub">{c.team}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.groups.map((g) => (
                  <Fragment key={g.cat}>
                    <tr className="mtx-grouprow">
                      <th colSpan={4} scope="colgroup" className="mtx-grouphead">{g.cat}</th>
                    </tr>
                    {g.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="mtx-feature">{row.label}</th>
                        {row.values.map((v, i) => (
                          <td key={i} data-col={matrix.columns[i].name} className={i === 1 ? "mtx-aeris mtx-val" : "mtx-val"}>
                            {v === "—" ? <span className="mtx-no">—</span> : v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section" aria-labelledby="addons-title">
        <hr className="hairline" />
        <div className="container" style={{ paddingTop: "var(--section-py)" }}>
          <Reveal>
            <SectionLabel>{addons.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 id="addons-title" className="t-h2" style={{ maxWidth: "18ch" }}>{addons.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead" style={{ marginTop: 12 }}>{addons.intro}</p>
          </Reveal>
          <ul className="addons">
            {addons.items.map((a, i) => (
              <li key={a.name}>
                <Reveal delay={(i % 3) * 60} className="addon">
                  <span className="addon-name">{a.name}</span>
                  <span className="addon-price">{a.price}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ completa */}
      <Faq />

      {/* Letra pequeña */}
      <section className="section" aria-label="Condiciones" style={{ paddingTop: 0 }}>
        <div className="container">
          <hr className="hairline" />
          <ul className="smallprint">
            {smallprint.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />

      <style>{`
        .mtx { width: 100%; border-collapse: collapse; margin-top: clamp(32px, 5vw, 56px); }
        .mtx th, .mtx td { padding: 13px 16px; text-align: center; vertical-align: middle; font-size: 0.92rem; }
        .mtx-head { vertical-align: bottom; padding-bottom: 18px; display: table-cell; }
        .mtx-h-name { display: block; font-family: var(--font-mono); letter-spacing: 0.14em; font-weight: 700; font-size: var(--text-label); }
        .mtx-h-price { display: block; font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; margin-top: 6px; }
        .mtx-h-sub { display: block; font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); margin-top: 3px; }
        .mtx tbody tr { border-top: 1px solid var(--hairline); }
        .mtx-grouprow th { text-align: left; padding-top: 22px; }
        .mtx-grouphead { font-family: var(--font-mono); font-size: var(--text-micro); text-transform: uppercase; letter-spacing: 0.12em; color: var(--green-deep); }
        .mtx-feature { text-align: left; font-weight: 600; max-width: 260px; color: var(--ink-soft); }
        .mtx-aeris { background: color-mix(in srgb, var(--green-surface) 55%, transparent); }
        .mtx-val { color: var(--ink-soft); }
        .mtx-no { color: var(--mute); }
        @media (max-width: 760px) {
          .mtx, .mtx thead, .mtx tbody, .mtx tr, .mtx th, .mtx td { display: block; }
          .mtx thead { display: none; }
          .mtx { margin-top: 24px; }
          .mtx-grouprow { border: 0 !important; margin-top: 20px; }
          .mtx-grouphead { padding: 0 0 6px; }
          .mtx tbody tr:not(.mtx-grouprow) { border: 1px solid var(--hairline); border-radius: 2px; padding: 14px; margin-bottom: 10px; background: var(--cream-soft); }
          .mtx th, .mtx td { padding: 0; text-align: left; }
          .mtx-feature { max-width: none; padding-bottom: 10px; margin-bottom: 8px; border-bottom: 1px solid var(--hairline); font-weight: 700; color: var(--ink); }
          .mtx-val { display: flex; justify-content: space-between; gap: 16px; padding: 7px 10px; border-radius: 2px; }
          .mtx-val::before { content: attr(data-col); font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); text-transform: uppercase; letter-spacing: 0.06em; }
          .mtx-val.mtx-aeris::before { color: var(--green-deep); font-weight: 700; }
        }
        .addons { display: grid; grid-template-columns: 1fr 1fr; gap: 0 clamp(24px, 4vw, 56px); margin-top: clamp(32px, 5vw, 48px); border-top: 1px solid var(--hairline); }
        .addon { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--hairline); }
        .addon-name { font-weight: 600; }
        .addon-price { font-family: var(--font-mono); font-size: var(--text-label); color: var(--green-deep); white-space: nowrap; }
        @media (max-width: 700px) { .addons { grid-template-columns: 1fr; } }
        .smallprint { margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
        .smallprint li { font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); line-height: 1.5; }
      `}</style>
    </>
  );
}
