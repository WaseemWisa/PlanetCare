# PlantCare Dashboard

React + Vite implementation of the Smart Automatic Plant Watering System design.

    npm install
    npm run dev

## Structure

    src/
      App.jsx / App.css        page layout (stats row, charts row, bottom row)
      data.js                  sample sensor data – swap for your API / MQTT / Firebase feed
      hooks/useNow.js          live date & time
      styles/base.css          theme variables, reset, shared .card
      components/
        Sidebar                logo + navigation
        Header                 title, tagline, online pill, clock
        StatCard               icon + value + progress bar
        DateCard               date & time tile
        TrendCard              card shell + title + range select, wraps Chart
        Chart                  dependency-free SVG area chart
        SystemStatus           health ring + status checklist

Optional: put the plant hero photo at `public/plant-hero.png`.
