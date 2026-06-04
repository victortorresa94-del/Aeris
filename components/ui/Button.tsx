import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline" | "ghost";
  /** "→" inline arrow, "↗" diagonal arrow */
  arrow?: "right" | "diagonal" | "none";
  className?: string;
};

export function Button({ href, children, variant = "filled", arrow = "right", className = "" }: ButtonProps) {
  const arrowChar = arrow === "diagonal" ? "↗" : arrow === "right" ? "→" : "";
  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      {arrowChar && (
        <span className="arrow" aria-hidden>
          {arrowChar}
        </span>
      )}
    </>
  );
  const internal = href.startsWith("/") && !href.startsWith("//");
  if (internal) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}
