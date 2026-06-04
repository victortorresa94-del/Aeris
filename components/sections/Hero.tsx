"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/lib/content";

export function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  // Subtle parallax (spec §7) — disabled under reduced-motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = imgRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" aria-labelledby="hero-title" style={{ position: "relative", overflow: "hidden" }}>
      <div className="hero-grid container">
        <div className="hero-content">
          <Reveal>
            <h1 id="hero-title" className="t-hero">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead" style={{ marginTop: "clamp(20px, 3vw, 36px)" }}>
              {hero.lead.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: "clamp(32px, 4vw, 48px)" }}>
              <Button href={hero.ctaPrimary.href} variant="filled" arrow="right">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="outline" arrow="diagonal">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="label-mono" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
              {hero.micro}
            </p>
          </Reveal>
        </div>

        <div className="hero-image" aria-hidden>
          <div ref={imgRef} className="hero-image-inner">
            <Image
              src="/img/hero-arch.webp"
              alt=""
              width={900}
              height={1100}
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div className="hero-fade" />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: safe center;
          min-height: 100svh;
          padding-top: clamp(112px, 16vh, 168px);
          padding-bottom: clamp(48px, 8vh, 96px);
        }
        .hero-content { position: relative; z-index: 2; max-width: min(800px, 100%); }
        .hero-content .lead, .hero-content .label-mono, .hero-content .hero-cta { max-width: none; }
        .hero-image {
          position: absolute;
          inset: 0 0 0 auto;
          width: 52%;
          z-index: 1;
          pointer-events: none;
        }
        .hero-image-inner { position: absolute; inset: -10% 0 -10% 0; }
        .hero-fade {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, var(--cream) 0%, color-mix(in srgb, var(--cream) 40%, transparent) 24%, transparent 55%);
        }
        /* Mobile: imagen integrada como fondo (no bloque suelto debajo) */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            align-items: start;
            min-height: 90svh;
            padding-top: clamp(120px, 18vh, 180px);
            padding-bottom: clamp(40px, 7vh, 80px);
          }
          .hero-content { max-width: 100%; }
          .hero-image { width: 100%; inset: 0; z-index: 0; }
          .hero-image-inner { inset: 0; }
          .hero-fade {
            background:
              linear-gradient(180deg, var(--cream) 14%, color-mix(in srgb, var(--cream) 55%, transparent) 42%, transparent 78%),
              linear-gradient(0deg, var(--cream) 4%, transparent 30%);
          }
        }
      `}</style>
    </section>
  );
}
