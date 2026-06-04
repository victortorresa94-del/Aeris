import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

/** Standard hero for dedicated pages: label + H1 + lead. */
export function PageHero({ label, title, lead, titleMaxCh = 18 }: { label: string; title: string; lead?: string; titleMaxCh?: number }) {
  return (
    <section className="section" aria-labelledby="page-hero-title" style={{ paddingBottom: 0 }}>
      <div className="container" style={{ paddingTop: "calc(var(--section-py) + 48px)" }}>
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h1 id="page-hero-title" className="t-hero" style={{ maxWidth: `${titleMaxCh}ch` }}>
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={120}>
            <p className="lead measure" style={{ marginTop: "clamp(20px, 3vw, 32px)" }}>
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
