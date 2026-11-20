import { Droplet, Thermometer, Droplets, Sun } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import DateCard from "./components/DateCard";
import TrendCard from "./components/TrendCard";
import SystemStatus from "./components/SystemStatus";
import useNow from "./hooks/useNow";
import { soil, temp, humidity, light, system } from "./data";
import "./App.css";

const last = (a) => a[a.length - 1];
const PCT_TICKS = ["100%", "75%", "50%", "25%", "0%"];

export default function App() {
  const { date, time } = useNow();

  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Header date={date} time={time} online={system.online} />

        <div className="stats">
          <StatCard icon={Droplet} tone="blue" label="Soil Moisture" value={last(soil)} unit="%" pct={last(soil)} />
          <StatCard icon={Thermometer} tone="orange" label="Temperature" value={last(temp)} unit="°C" pct={(last(temp) / 50) * 100} />
          <StatCard icon={Droplets} tone="purple" label="Air Humidity" value={last(humidity)} unit="%" pct={last(humidity)} />
          <StatCard icon={Sun} tone="yellow" label="Light Intensity" value={last(light)} unit=" Lux" pct={(last(light) / 1500) * 100} />
          <DateCard date={date} time={time} />
        </div>

        <div className="row2">
          <TrendCard
            large showRange icon={Droplet} color="#2fa8ff" title="Soil Moisture Trend"
            data={soil} min={0} max={100} ticks={PCT_TICKS} badge={`${last(soil)}%`}
          />
          <SystemStatus {...system} />
        </div>

        <div className="row3">
          <TrendCard
            icon={Thermometer} color="#ffa733" title="Temperature Trend"
            data={temp} min={10} max={40} ticks={["40°C", "30°C", "20°C", "10°C"]} badge={`${last(temp)}°C`}
          />
          <TrendCard
            icon={Droplets} color="#8b5cf6" title="Air Humidity Trend"
            data={humidity} min={0} max={100} ticks={PCT_TICKS} badge={`${last(humidity)}%`}
          />
          <TrendCard
            icon={Sun} color="#ffc928" title="Light Intensity Trend"
            data={light} min={0} max={1500} ticks={["1.5K", "1K", "500", "0"]} badge={`${last(light)} Lux`}
          />
        </div>
      </main>
    </div>
  );
}
