import { Leaf, Sprout, CircleCheck } from "lucide-react";
import "./SystemStatus.css";

export default function SystemStatus({ pump, soilStatus, overall }) {
  const items = [`Pump: ${pump}`, `Soil Moisture: ${soilStatus}`, overall];

  return (
    <section className="card status">
      <h2><Leaf size={22} className="g" /> System Status</h2>
      <div className="status__body">
        <div className="status__health">
          <div className="ring"><Sprout size={30} /><span>Healthy</span></div>
          <p>Your plant is doing great!</p>
        </div>
        <ul>
          {items.map((t) => (
            <li key={t}><CircleCheck size={22} /> {t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
