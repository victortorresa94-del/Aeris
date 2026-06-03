/** Mono section label "NN · NOMBRE" (spec §4.2). */
export function SectionLabel({ children, id }: { children: string; id?: string }) {
  return (
    <p className="label-mono" id={id} style={{ marginBottom: "clamp(24px, 4vw, 56px)" }}>
      {children}
    </p>
  );
}
