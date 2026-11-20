import "./StatCard.css";

export default function StatCard({ icon: Icon, label, value, unit, pct, tone }) {
  return (
    <section className={`card stat stat--${tone}`}>
      <div className="stat__top">
        <Icon size={34} strokeWidth={1.8} />
        <div>
          <span className="stat__label">{label}</span>
          <div className="stat__value">{value}<small>{unit}</small></div>
        </div>
      </div>
      <div className="bar"><i style={{ width: `${Math.min(100, pct)}%` }} /></div>
    </section>
  );
}
