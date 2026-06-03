import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Standard section header: label + big H2 on the left, mono micro-line top-right
 * (matches the approved mockups). Replaces the ad-hoc `.qi-head` grid.
 */
export function SectionHead({
  label,
  title,
  titleId,
  micro,
  titleMaxCh = 18,
}: {
  label: string;
  title: string;
  titleId: string;
  micro?: string;
  titleMaxCh?: number;
}) {
  return (
    <div className="sec-head">
      <div className="sec-head-main">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 id={titleId} className="t-h2" style={{ maxWidth: `${titleMaxCh}ch` }}>
            {title}
          </h2>
        </Reveal>
      </div>
      {micro && (
        <Reveal delay={120} className="sec-head-micro">
          <p className="label-mono">{micro}</p>
        </Reveal>
      )}

      <style>{`
        .sec-head { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 16px 40px; }
        .sec-head-micro { justify-self: end; align-self: start; padding-top: 6px; }
        .sec-head-micro .label-mono { text-align: right; max-width: 26ch; }
        @media (max-width: 760px) {
          .sec-head { grid-template-columns: 1fr; }
          .sec-head-micro { justify-self: start; }
          .sec-head-micro .label-mono { text-align: left; }
        }
      `}</style>
    </div>
  );
}
