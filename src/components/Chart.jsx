import { useId } from "react";
import { X_LABELS } from "../data";
import "./Chart.css";

// Catmull-Rom -> cubic Bézier for a smooth line
function smooth(p) {
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1} ${c2} ${p2}`;
  }
  return d;
}

/** ticks: y-axis labels from top to bottom. min/max map to the bottom/top tick. */
export default function Chart({ data, min, max, ticks, color, badge, title, xLabels = X_LABELS }) {
  const id = useId().replace(/:/g, "");
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * 100,
    100 - ((v - min) / (max - min)) * 100,
  ]);
  const line = smooth(pts);
  const end = pts[pts.length - 1];

  return (
    <div className="chart" style={{ "--c": color }}>
      <div className="chart__y">{ticks.map((t) => <span key={t}>{t}</span>)}</div>

      <div className="chart__plot">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={title}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={color} stopOpacity=".45" />
              <stop offset="1" stopColor={color} stopOpacity=".04" />
            </linearGradient>
          </defs>
          {ticks.map((_, i) => {
            const y = (i * 100) / (ticks.length - 1);
            return <line key={`h${i}`} x1="0" x2="100" y1={y} y2={y} className="grid" />;
          })}
          {[0, 25, 50, 75, 100].map((x) => (
            <line key={`v${x}`} x1={x} x2={x} y1="0" y2="100" className="grid" />
          ))}
          <path d={`${line} L100,100 L0,100 Z`} fill={`url(#${id})`} />
          <path d={line} className="chart__line" stroke={color} />
        </svg>

        {pts.map(([x, y], i) => (
          <i
            key={i}
            className={`chart__dot ${i === pts.length - 1 ? "is-last" : ""}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
        <b className="chart__badge" style={{ left: `${end[0]}%`, top: `${end[1]}%` }}>{badge}</b>
      </div>

      <div className="chart__x">{xLabels.map((l, i) => <span key={i}>{l}</span>)}</div>
    </div>
  );
}
