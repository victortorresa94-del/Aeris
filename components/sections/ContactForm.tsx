"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { contacto, site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", plan: "", mensaje: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.nombre.trim() || !validEmail) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // TODO: conectar a CRM/HubSpot o servicio de email. Por ahora, mailto.
    const subject = encodeURIComponent(`Reservar sesión — ${form.empresa || form.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\nPlan de interés: ${form.plan || "—"}\n\n${form.mensaje}`,
    );
    setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 400);
  };

  return (
    <Reveal>
      <form className="cf" onSubmit={onSubmit} noValidate>
        <div className="cf-row">
          <Field id="nombre" label="Nombre" required>
            <input id="nombre" name="nombre" value={form.nombre} onChange={set("nombre")} autoComplete="name" className="cf-input" aria-required />
          </Field>
          <Field id="empresa" label="Empresa">
            <input id="empresa" name="empresa" value={form.empresa} onChange={set("empresa")} autoComplete="organization" className="cf-input" />
          </Field>
        </div>
        <div className="cf-row">
          <Field id="email" label="Email" required>
            <input id="email" name="email" type="email" inputMode="email" value={form.email} onChange={set("email")} autoComplete="email" className="cf-input" aria-required aria-describedby="cf-msg" />
          </Field>
          <Field id="plan" label="Plan de interés">
            <select id="plan" name="plan" value={form.plan} onChange={set("plan")} className="cf-input">
              <option value="">Selecciona…</option>
              {contacto.planOptions.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </Field>
        </div>
        <Field id="mensaje" label="Mensaje">
          <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={set("mensaje")} rows={4} className="cf-input" />
        </Field>

        <div className="cf-foot">
          <button type="submit" className="btn btn-filled" disabled={status === "loading"}>
            <span>{status === "loading" ? "Enviando…" : contacto.submit}</span>
            <span className="arrow" aria-hidden>→</span>
          </button>
          <p id="cf-msg" role="status" aria-live="polite" className="cf-status">
            {status === "error" && <span className="cf-error">Revisa el nombre y un email válido.</span>}
            {status === "success" && <span className="cf-success">Gracias. Te escribimos en menos de 24h.</span>}
          </p>
        </div>
      </form>

      <style>{`
        .cf { max-width: 720px; margin-top: clamp(32px, 5vw, 56px); }
        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .cf-field { display: block; margin-bottom: 20px; }
        .cf-label { display: block; font-family: var(--font-mono); font-size: var(--text-micro); text-transform: uppercase; letter-spacing: 0.1em; color: var(--mute); margin-bottom: 8px; }
        .cf-req { color: var(--green-deep); }
        .cf-input {
          width: 100%; background: var(--cream-soft); border: 1px solid var(--hairline); border-radius: 2px;
          padding: 14px 16px; font-family: var(--font-display); font-size: var(--text-body); color: var(--ink);
          transition: border-color var(--dur) var(--ease);
        }
        .cf-input:focus-visible { border-color: var(--green-deep); outline-offset: 0; }
        textarea.cf-input { resize: vertical; min-height: 110px; }
        .cf-foot { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; margin-top: 8px; }
        .cf-status { font-size: 0.95rem; }
        .cf-error { color: var(--error); }
        .cf-success { color: var(--green-deep); }
        @media (max-width: 600px) { .cf-row { grid-template-columns: 1fr; gap: 0; } }
      `}</style>
    </Reveal>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="cf-field" htmlFor={id}>
      <span className="cf-label">
        {label}
        {required && <span className="cf-req"> *</span>}
      </span>
      {children}
    </label>
  );
}
