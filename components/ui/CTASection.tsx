import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctaSection } from "@/lib/content";

/** Reusable closing CTA block (no form) — used at the end of most pages. */
export function CTASection({ title, lead }: { title?: string; lead?: string }) {
  return (
    <section className="section" aria-labelledby="cta-sec-title" style={{ position: "relative", overflow: "hidden" }}>
      <hr className="hairline" />
      <div className="container" style={{ paddingTop: "var(--section-py)", textAlign: "center" }}>
        <Reveal>
          <h2 id="cta-sec-title" className="t-h2" style={{ maxWidth: "18ch", marginInline: "auto" }}>
            {title ?? ctaSection.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead measure" style={{ marginInline: "auto", marginTop: "clamp(20px, 3vw, 32px)" }}>
            {lead ?? ctaSection.lead}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div style={{ marginTop: "clamp(28px, 4vw, 40px)", display: "flex", justifyContent: "center" }}>
            <Button href={ctaSection.href} variant="filled" arrow="right">
              {ctaSection.cta}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <p className="label-mono" style={{ marginTop: "clamp(28px, 4vw, 40px)" }}>
            {ctaSection.micro}
          </p>
        </Reveal>
        <div className="cta-curve" aria-hidden />
      </div>
      <style>{`
        .cta-curve {
          position: absolute; left: 50%; transform: translateX(-50%);
          bottom: calc(-0.5 * var(--section-py));
          width: min(1100px, 100%); height: 320px; pointer-events: none; z-index: -1;
          background: radial-gradient(60% 100% at 50% 100%, color-mix(in srgb, var(--green) 10%, transparent), transparent 68%);
        }
      `}</style>
    </section>
  );
}
