"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 100,
        background: scrolled || menuOpen ? "color-mix(in srgb, var(--cream) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        transition: "background var(--dur) var(--ease), border-color var(--dur) var(--ease)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}
      >
        <Link href="/" aria-label={`${site.name} — inicio`} style={{ fontWeight: 800, letterSpacing: "0.18em", fontSize: "1.05rem", zIndex: 2 }}>
          {site.name}
        </Link>

        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 40px)" }}>
          <ul className="header-nav" style={{ display: "flex", gap: "clamp(16px, 2.5vw, 36px)" }}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link className={`nav-link ${isActive(item.href) ? "is-active" : ""}`} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-outline header-cta" href="/contacto" style={{ padding: "10px 18px" }}>
            <span>Hablar con nosotros</span>
            <span className="arrow" aria-hidden>↗</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="header-burger"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`burger ${menuOpen ? "open" : ""}`} aria-hidden>
              <i /><i /><i />
            </span>
          </button>
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div aria-hidden style={{ position: "absolute", left: 0, bottom: -1, height: 2, width: `${progress * 100}%`, background: "var(--green-deep)", transition: "width 80ms linear" }} />

      {/* Fullscreen mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Menú" hidden={!menuOpen}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={isActive(item.href) ? "is-active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contacto" className="btn btn-filled mobile-cta">
          <span>Hablar con nosotros</span>
          <span className="arrow" aria-hidden>↗</span>
        </Link>
      </div>

      <style>{`
        .header-burger { display: none; width: 40px; height: 40px; align-items: center; justify-content: center; z-index: 2; }
        .burger { position: relative; width: 22px; height: 14px; }
        .burger i { position: absolute; left: 0; width: 100%; height: 1.5px; background: var(--ink); transition: transform var(--dur) var(--ease), opacity var(--dur-fast) var(--ease); }
        .burger i:nth-child(1) { top: 0; }
        .burger i:nth-child(2) { top: 6px; }
        .burger i:nth-child(3) { top: 12px; }
        .burger.open i:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .burger.open i:nth-child(2) { opacity: 0; }
        .burger.open i:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        .mobile-overlay {
          position: fixed; inset: 72px 0 0 0; background: var(--cream);
          padding: clamp(24px, 8vw, 48px) var(--gutter) 48px; display: flex; flex-direction: column;
          opacity: 0; pointer-events: none; transform: translateY(-8px); transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease);
        }
        .mobile-overlay.open { opacity: 1; pointer-events: auto; transform: none; }
        .mobile-overlay ul { display: flex; flex-direction: column; gap: 4px; }
        .mobile-overlay li a {
          display: block; padding: 14px 0; font-size: clamp(1.6rem, 8vw, 2.4rem); font-weight: 800;
          letter-spacing: -0.02em; color: var(--ink); border-bottom: 1px solid var(--hairline);
        }
        .mobile-overlay li a.is-active { color: var(--green-deep); }
        .mobile-cta { margin-top: 32px; justify-content: center; padding: 18px; }
        .nav-link.is-active { color: var(--green-deep); }
        .nav-link.is-active::after { transform: scaleX(1); }
        @media (max-width: 860px) {
          .header-nav, .header-cta { display: none !important; }
          .header-burger { display: inline-flex; }
        }
      `}</style>
    </header>
  );
}
