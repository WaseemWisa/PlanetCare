import { ChevronDown } from "lucide-react";
import Chart from "./Chart";
import "./TrendCard.css";

export default function TrendCard({ icon: Icon, color, title, large = false, showRange = false, ...chart }) {
  return (
    <section className="card trend">
      <header>
        <h2 style={{ "--c": color }}><Icon size={22} /> {title}</h2>
        {showRange && <div className="select">Last 24 Hours <ChevronDown size={14} /></div>}
      </header>
      <div className={large ? "chart-wrap chart--lg" : "chart-wrap"}>
        <Chart color={color} title={`${title}, last 24 hours`} {...chart} />
      </div>
    </section>
  );
}
