import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { comoTrabajamos } from "@/lib/content";

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="section" aria-labelledby="como-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)" }}>
        <Reveal>
          <SectionLabel>{comoTrabajamos.label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 id="como-title" className="t-h2" style={{ maxWidth: "18ch" }}>
            {comoTrabajamos.title}
          </h2>
        </Reveal>

        <ol className="steps">
          {comoTrabajamos.steps.map((step, i) => (
            <li key={step.n}>
              <Reveal delay={i * 80} className="step">
                <p className="step-n">{step.n}</p>
                <h3 className="step-title">{step.title}</h3>
                <p style={{ color: "var(--ink-soft)" }}>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: clamp(40px, 6vw, 72px);
          border-top: 1px solid var(--hairline);
        }
        .step { padding: 28px clamp(16px, 2vw, 28px) 8px 0; position: relative; }
        .step::before {
          content: ""; position: absolute; top: -1px; left: 0; width: 100%; height: 2px;
          background: var(--green);
        }
        .step-n { font-family: var(--font-mono); color: var(--green-deep); font-size: var(--text-label); letter-spacing: 0.1em; }
        .step-title { font-size: var(--text-h3); font-weight: 700; letter-spacing: -0.02em; margin-top: 12px; margin-bottom: 8px; }
        @media (max-width: 820px) { .steps { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .steps { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
