import { CalendarDays } from "lucide-react";
import "./DateCard.css";

export default function DateCard({ date, time }) {
  return (
    <section className="card date-card">
      <CalendarDays size={38} strokeWidth={1.6} />
      <div>
        <span className="date-card__label">Date &amp; Time</span>
        <div className="date-card__value">{date}<br />{time}</div>
      </div>
    </section>
  );
}
