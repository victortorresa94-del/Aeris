import type { SVGProps } from "react";

/**
 * AERIS logomark — monograma "A" con travesaño verde.
 * El trazo de la A usa `currentColor` (se adapta a fondo claro/oscuro);
 * el travesaño es siempre verde de marca.
 */
export function AerisMark({ size = 28, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M14 51 L32 13 L50 51"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M22.5 39 H41.5" stroke="var(--green)" strokeWidth="3.6" strokeLinecap="round" />
    </svg>
  );
}
