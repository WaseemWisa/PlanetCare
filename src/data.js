// Replace with live readings from your sensors / API.
// 13 samples = one every 2 hours from 12AM to 12AM.
export const X_LABELS = ["12AM", "6AM", "12PM", "6PM", "12AM"];

export const soil     = [66, 63, 53, 44, 38, 48, 59, 65, 71, 64, 63, 66, 68];
export const temp     = [27, 25, 26, 30, 29, 31, 29, 28, 27, 26, 26, 25, 24.5];
export const humidity = [70, 76, 78, 78, 75, 76, 80, 80, 77, 76, 75, 73, 72];
export const light    = [200, 350, 700, 1050, 1150, 1150, 1100, 980, 900, 880, 860, 850, 850];

export const system = {
  pump: "OFF",
  soilStatus: "OK",
  overall: "All Systems Normal",
  online: true,
};
