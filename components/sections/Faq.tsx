"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <hr className="hairline" />
      <div className="container faq-wrap" style={{ paddingTop: "var(--section-py)" }}>
        <div className="faq-head">
          <Reveal>
            <SectionLabel>{faq.label}</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 id="faq-title" className="t-h2" style={{ maxWidth: "14ch" }}>
              {faq.title}
            </h2>
          </Reveal>
        </div>

        <Reveal className="faq-list">
          <ul>
            {faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="faq-item">
                  <h3 style={{ margin: 0 }}>
                    <button
                      className="faq-q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span>{item.q}</span>
                      <span className={`faq-icon ${isOpen ? "open" : ""}`} aria-hidden>
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`faq-panel ${isOpen ? "open" : ""}`}
                    hidden={!isOpen}
                  >
                    <p>{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <style>{`
        .faq-wrap { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(32px, 5vw, 80px); align-items: start; }
        .faq-item { border-top: 1px solid var(--hairline); }
        .faq-item:last-child { border-bottom: 1px solid var(--hairline); }
        .faq-q {
          width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 24px;
          padding: 24px 0; text-align: left; font-size: var(--text-h3); font-weight: 700; letter-spacing: -0.02em;
          color: var(--ink);
        }
        .faq-q:hover { color: var(--green-deep); }
        .faq-icon { font-family: var(--font-mono); font-size: 1.5rem; color: var(--green-deep); flex: none; transition: transform var(--dur) var(--ease); }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-panel { padding: 0 0 28px; max-width: 60ch; }
        .faq-panel p { color: var(--ink-soft); }
        @media (max-width: 820px) { .faq-wrap { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
