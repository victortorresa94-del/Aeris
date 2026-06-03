import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-brand">
      <hr className="hairline" />
      <div className="container" style={{ paddingBlock: "clamp(48px, 7vw, 96px)" }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <p id="footer-brand" style={{ fontWeight: 800, letterSpacing: "0.18em", fontSize: "1.1rem" }}>
              {site.name}
            </p>
            <p style={{ color: "var(--ink-soft)", marginTop: 12, maxWidth: "26ch" }}>{footer.brandLine}</p>
            <p className="label-mono" style={{ marginTop: 16 }}>
              {footer.brandMicro}
            </p>
          </div>

          {footer.cols.map((col) => (
            <nav key={col.title} className="footer-col" aria-label={col.title}>
              <p className="label-mono">{col.title}</p>
              <ul style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="footer-link"
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="hairline" style={{ marginTop: "clamp(40px, 5vw, 64px)" }} />
        <div className="footer-legal">
          <p className="label-mono">{footer.legalLeft}</p>
          <ul className="footer-legal-links">
            {footer.legalRight.map((l) => (
              <li key={l}>
                <a className="footer-link" href="#">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: clamp(24px, 4vw, 56px); }
        .footer-link { color: var(--ink-soft); transition: color var(--dur) var(--ease); }
        .footer-link:hover { color: var(--green-deep); }
        .footer-legal { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-top: 20px; }
        .footer-legal-links { display: flex; gap: 20px; }
        .footer-legal-links a { font-family: var(--font-mono); font-size: var(--text-micro); color: var(--mute); }
        @media (max-width: 820px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr; } .footer-legal { flex-direction: column; align-items: flex-start; } }
      `}</style>
    </footer>
  );
}
