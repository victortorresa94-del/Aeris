/**
 * Custom line icons (~1.5px stroke, geometric) — no icon library (spec §4.5).
 * Color inherits from `currentColor`; callers set it to --green for decorative icons.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 48, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

/* ---- Bento (Qué incluye) ---- */
export const IconAsterisk = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <path d="M24 8v32M10 14l28 20M38 14L10 34M8 24h32" />
  </svg>
);

export const IconCircles = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <circle cx="19" cy="24" r="11" />
    <circle cx="29" cy="24" r="11" />
  </svg>
);

export const IconFrame = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <rect x="10" y="12" width="28" height="24" />
    <path d="M10 12l28 24M38 12L10 36" />
  </svg>
);

export const IconWaves = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 26v-4M17 30v-12M22 22v-2M24 32V16M27 26v-8M32 30v-12M37 24v-2" />
  </svg>
);

export const IconPyramid = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <path d="M24 12l10 22M24 12L14 34M16 30h16M18 26h12M20 22h8M22 18h4" />
  </svg>
);

export const IconSquare = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <rect x="20" y="14" width="16" height="16" />
    <path d="M14 24h12M20 18v12" />
  </svg>
);

export const IconRings = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <circle cx="24" cy="24" r="4" />
    <circle cx="24" cy="24" r="9" />
    <circle cx="24" cy="24" r="14" />
  </svg>
);

export const IconBars = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 34V28M18 34V22M24 34V25M30 34V18M36 34V12" />
  </svg>
);

export const IconOutbound = (p: IconProps) => (
  <svg {...base(p)} aria-hidden>
    <path d="M40 8L18 30M40 8l-8 32-7-13-13-7 28-12z" />
  </svg>
);

export const BENTO_ICONS = {
  asterisk: IconAsterisk,
  circles: IconCircles,
  frame: IconFrame,
  waves: IconWaves,
  pyramid: IconPyramid,
  square: IconSquare,
  rings: IconRings,
  outbound: IconOutbound,
  bars: IconBars,
} as const;

/* ---- Comparativa rows (24px) ---- */
const rb = (p: IconProps) => base({ size: 24, ...p });

export const IconTarget = (p: IconProps) => (
  <svg {...rb(p)} aria-hidden>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 1v6M12 17v6M1 12h6M17 12h6" />
  </svg>
);
export const IconPeople = (p: IconProps) => (
  <svg {...rb(p)} aria-hidden>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 13.5c2.6.3 4.5 2.4 4.5 5" />
  </svg>
);
export const IconChart = (p: IconProps) => (
  <svg {...rb(p)} aria-hidden>
    <path d="M4 20V4M4 20h16M8 15l4-5 3 3 5-7" />
  </svg>
);
export const IconClock = (p: IconProps) => (
  <svg {...rb(p)} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
export const IconEuro = (p: IconProps) => (
  <svg {...rb(p)} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5A4.5 4.5 0 0 0 8 12a4.5 4.5 0 0 0 7.5 3.5M7 11h6M7 13.5h5" />
  </svg>
);

export const ROW_ICONS = {
  target: IconTarget,
  people: IconPeople,
  chart: IconChart,
  clock: IconClock,
  bars: (p: IconProps) => (
    <svg {...rb(p)} aria-hidden>
      <path d="M5 20V12M10 20V7M15 20v-6M20 20V4" />
    </svg>
  ),
  euro: IconEuro,
} as const;

/* ---- Check / cross for comparison table ---- */
export const IconCheck = (p: IconProps) => (
  <svg {...rb({ size: 22, ...p })} aria-hidden>
    <path d="M5 12.5l4.5 4.5L19 6.5" />
  </svg>
);
export const IconCross = (p: IconProps) => (
  <svg {...rb({ size: 20, ...p })} aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
