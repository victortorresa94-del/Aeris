import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { contacto, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto — AERIS",
  description: "Sesión de 30 minutos, sin compromiso. Te decimos honestamente si AERIS encaja con tu empresa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero label={contacto.label} title={contacto.title} lead={contacto.lead} titleMaxCh={12} />

      <section className="section" aria-label="Formulario de contacto">
        <div className="container" style={{ paddingTop: "clamp(32px, 5vw, 56px)", paddingBottom: "var(--section-py)" }}>
          <ContactForm />

          <Reveal>
            <div style={{ marginTop: "clamp(48px, 7vw, 80px)", borderTop: "1px solid var(--hairline)", paddingTop: "clamp(24px, 3vw, 40px)" }}>
              <p className="label-mono">{contacto.altLabel}</p>
              <p style={{ marginTop: 12, fontSize: "var(--text-h3)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a>
              </p>
              <p style={{ marginTop: 8, color: "var(--ink-soft)" }}>
                Barcelona ·{" "}
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent">LinkedIn</a>
                {" "}· <span className="mono" style={{ color: "var(--mute)" }}>{/* TODO: enlace a calendario Cal.com/Calendly */}Reserva online (próximamente)</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
