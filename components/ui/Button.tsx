import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  /** "→" inline arrow, "↗" diagonal arrow */
  arrow?: "right" | "diagonal" | "none";
  className?: string;
};

export function Button({ href, children, variant = "filled", arrow = "right", className = "" }: ButtonProps) {
  const arrowChar = arrow === "diagonal" ? "↗" : arrow === "right" ? "→" : "";
  return (
    <a href={href} className={`btn btn-${variant} ${className}`.trim()}>
      <span>{children}</span>
      {arrowChar && (
        <span className="arrow" aria-hidden>
          {arrowChar}
        </span>
      )}
    </a>
  );
}
