import { useState } from "react";
import Footer from "../components/Footer";

const initialZones = [
  { id: 1, name: "Living Room", temp: 22, mode: "Normal", active: true },
  { id: 2, name: "Master Bedroom", temp: 22, mode: "Normal", active: true },
  { id: 3, name: "Kids Room 1", temp: 22, mode: "Normal", active: false },
  { id: 4, name: "Kitchen", temp: 22, mode: "Normal", active: false },
];

const modes = {
  Hielo: { temp: 16, icon: "🧊", color: "bg-blue-600" },
  Frío: { temp: 18, icon: "❄️", color: "bg-blue-400" },
  Normal: { temp: 22, icon: "🌡️", color: "bg-gray-500" },
  Calor: { temp: 26, icon: "🔥", color: "bg-red-500" },
};

const ThermostatPage = () => {
  const [zones, setZones] = useState(initialZones);

  const toggleZone = (id) => {
    setZones((prev) =>
      prev.map((z) => (z.id === id ? { ...z, active: !z.active } : z))
    );
  };

  const changeMode = (id, modeName) => {
    setZones((prev) =>
      prev.map((z) =>
        z.id === id ? { ...z, mode: modeName, temp: modes[modeName].temp } : z
      )
    );
  };

  const changeTemp = (id, value) => {
    setZones((prev) =>
      prev.map((z) => (z.id === id ? { ...z, temp: Number(value) } : z))
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Thermostat Control</h1>
        <p className="text-center text-gray-400 mb-10">
          Adjust temperatures by zone
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-xl transition hover:shadow-2xl`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{zone.name}</h2>
                <button
                  onClick={() => toggleZone(zone.id)}
                  className={`px-3 py-1 rounded text-sm ${
                    zone.active ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {zone.active ? "ON" : "OFF"}
                </button>
              </div>

              <div className="text-center mb-4">
                <div className="text-6xl mb-2">{modes[zone.mode].icon}</div>
                <div className="text-3xl font-bold">{zone.temp}°C</div>
              </div>

              {zone.active && (
                <>
                  {/* Mode Selector */}
                  <div className="mb-4">
                    <label className="block mb-1 text-sm text-gray-300">Mode</label>
                    <select
                      value={zone.mode}
                      onChange={(e) => changeMode(zone.id, e.target.value)}
                      className="bg-gray-700 px-4 py-2 rounded w-full"
                    >
                      {Object.keys(modes).map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Temperature Slider */}
                  <div>
                    <label className="block mb-1 text-sm text-gray-300">Temperature</label>
                    <input
                      type="range"
                      min="16"
                      max="30"
                      value={zone.temp}
                      onChange={(e) => changeTemp(zone.id, e.target.value)}
                      className="w-full accent-yellow-400"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThermostatPage;
