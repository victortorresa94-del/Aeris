"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 100,
        background: scrolled ? "color-mix(in srgb, var(--cream) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        transition: "background var(--dur) var(--ease), border-color var(--dur) var(--ease)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a
          href="#top"
          aria-label={`${site.name} — inicio`}
          style={{ fontWeight: 800, letterSpacing: "0.18em", fontSize: "1.05rem" }}
        >
          {site.name}
        </a>

        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 40px)" }}>
          <ul className="header-nav" style={{ display: "flex", gap: "clamp(16px, 2.5vw, 36px)" }}>
            {nav.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-outline header-cta" href="#cta" style={{ padding: "10px 18px" }}>
            <span>Hablar con nosotros</span>
            <span className="arrow" aria-hidden>
              ↗
            </span>
          </a>
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          bottom: -1,
          height: 2,
          width: `${progress * 100}%`,
          background: "var(--green-deep)",
          transition: "width 80ms linear",
        }}
      />

      <style>{`
        @media (max-width: 720px) {
          .header-nav { display: none !important; }
          .header-cta span:first-child { font-size: var(--text-micro); }
        }
      `}</style>
    </header>
  );
}
