import { useState } from "react";
import { Sprout, LayoutDashboard, BarChart3, Settings, Info } from "lucide-react";
import "./Sidebar.css";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand__logo"><Sprout size={44} strokeWidth={1.6} /></div>
        <strong>PlantCare</strong>
        <small>Smart Green Life</small>
      </div>

      <nav>
        {NAV.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`nav__item ${active === id ? "is-active" : ""}`}
            onClick={() => setActive(id)}
          >
            <Icon size={20} /> {label}
          </button>
        ))}
      </nav>

      <p className="sidebar__tag">Take care<br />of your plants…<br />smarter!</p>
    </aside>
  );
}
