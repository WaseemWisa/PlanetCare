import { Leaf, Clock } from "lucide-react";
import "./Header.css";

export default function Header({ date, time, online }) {
  return (
    <header className="hero">
      <div>
        <h1>Smart Automatic<br /><span>Plant Watering System</span></h1>
        <p className="hero__sub">Monitor. Analyze. Water Automatically. <Leaf size={16} className="g" /></p>
      </div>

      <div className="hero__meta">
        <div className={`pill ${online ? "" : "is-off"}`}><i /> System {online ? "Online" : "Offline"}</div>
        <div>{date}</div>
        <div className="hero__time"><Clock size={18} /> {time}</div>
      </div>
    </header>
  );
}
