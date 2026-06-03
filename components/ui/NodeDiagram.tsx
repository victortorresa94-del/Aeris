/**
 * Node network for "Inteligencia Artificial" (spec §6 block 02 / §7).
 * Pure SVG; nodes "breathe" via CSS, paused under reduced-motion.
 */
const NODES = [
  [24, 18], [40, 14], [58, 22], [72, 16],
  [18, 36], [36, 40], [54, 38], [70, 42], [84, 34],
  [28, 56], [46, 60], [62, 56], [78, 60],
  [38, 74], [56, 74],
] as const;

const LINKS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7],
  [4, 5], [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [6, 11],
  [7, 12], [9, 10], [10, 11], [11, 12], [10, 13], [11, 14], [13, 14],
];

export function NodeDiagram() {
  return (
    <svg
      viewBox="0 0 100 90"
      width="100%"
      height="100%"
      role="img"
      aria-label="Red de inteligencias artificiales ejecutando en paralelo"
      style={{ display: "block" }}
    >
      <g stroke="var(--green)" strokeWidth="0.4" opacity="0.5">
        {LINKS.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      <g fill="var(--green-deep)">
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.3" className="nd-node" style={{ animationDelay: `${i * 140}ms` }} />
        ))}
      </g>
      <style>{`
        .nd-node { transform-box: fill-box; transform-origin: center; animation: nd-breathe 3.4s var(--ease) infinite; }
        @keyframes nd-breathe {
          0%, 100% { transform: scale(0.98); opacity: 0.8; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) { .nd-node { animation: none; } }
      `}</style>
    </svg>
  );
}
