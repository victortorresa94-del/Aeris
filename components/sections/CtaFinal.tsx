"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ctaFinal, site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function CtaFinal() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // No backend: open the user's mail client with a prefilled booking request.
    const subject = encodeURIComponent("Reservar sesión — AERIS");
    const body = encodeURIComponent(
      `Hola AERIS,\n\nMe gustaría reservar una sesión de 30 minutos.\n\nMi email: ${email.trim()}\n`,
    );
    setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 350);
  };

  return (
    <section id="cta" className="section" aria-labelledby="cta-title">
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)", textAlign: "center", position: "relative" }}>
        <Reveal>
          <h2 id="cta-title" className="t-h2" style={{ maxWidth: "18ch", marginInline: "auto" }}>
            {ctaFinal.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead measure" style={{ marginInline: "auto", marginTop: "clamp(20px, 3vw, 32px)" }}>
            {ctaFinal.lead}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <form className="cta-form" onSubmit={onSubmit} noValidate>
            <label className="cta-label" htmlFor="cta-email">
              Tu email
            </label>
            <div className="cta-row">
              <input
                id="cta-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="tucorreo@empresa.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                aria-invalid={status === "error"}
                aria-describedby="cta-msg"
                className="cta-input"
              />
              <button type="submit" className="btn btn-filled cta-submit" disabled={status === "loading"}>
                <span>{status === "loading" ? "Abriendo…" : ctaFinal.cta}</span>
                <span className="arrow" aria-hidden>
                  →
                </span>
              </button>
            </div>
            <p id="cta-msg" role="status" aria-live="polite" className="cta-msg">
              {status === "error" && <span className="cta-error">Introduce un email válido.</span>}
              {status === "success" && (
                <span className="cta-success">Listo — abrimos tu cliente de correo para confirmar.</span>
              )}
            </p>
          </form>
        </Reveal>

        <Reveal delay={300}>
          <p className="label-mono" style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
            {ctaFinal.micro}
          </p>
        </Reveal>

        <div className="cta-curve" aria-hidden />
      </div>

      <style>{`
        .cta-form { margin: clamp(32px, 5vw, 56px) auto 0; max-width: 540px; text-align: left; }
        .cta-label { display: block; font-family: var(--font-mono); font-size: var(--text-micro); text-transform: uppercase; letter-spacing: 0.1em; color: var(--mute); margin-bottom: 10px; }
        .cta-row { display: flex; gap: 12px; }
        .cta-input {
          flex: 1; min-width: 0; background: var(--cream-soft); border: 1px solid var(--hairline); border-radius: 2px;
          padding: 16px 18px; font-family: var(--font-display); font-size: var(--text-body); color: var(--ink);
          transition: border-color var(--dur) var(--ease);
        }
        .cta-input::placeholder { color: var(--mute); }
        .cta-input:focus-visible { border-color: var(--green-deep); outline-offset: 0; }
        .cta-input[aria-invalid="true"] { border-color: var(--error); }
        .cta-submit { flex: none; }
        .cta-submit:disabled { opacity: 0.6; cursor: progress; }
        .cta-msg { min-height: 1.4em; margin-top: 12px; font-size: 0.95rem; }
        .cta-error { color: var(--error); }
        .cta-success { color: var(--green-deep); }
        .cta-curve {
          position: absolute; left: 50%; transform: translateX(-50%); bottom: calc(-1 * var(--section-py));
          width: min(900px, 90%); height: 200px; pointer-events: none;
          background: radial-gradient(120% 80% at 50% 0%, color-mix(in srgb, var(--green) 18%, transparent), transparent 70%);
        }
        @media (max-width: 520px) {
          .cta-row { flex-direction: column; }
          .cta-submit { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
