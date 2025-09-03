import Footer from "../components/Footer";
import { useStore } from "../store/useStore";

const modes = {
  Hielo: { temp: 16, icon: "🧊", color: "bg-blue-600" },
  Frío: { temp: 18, icon: "❄️", color: "bg-blue-400" },
  Normal: { temp: 22, icon: "🌡️", color: "bg-gray-500" },
  Calor: { temp: 26, icon: "🔥", color: "bg-red-500" },
};

const ThermostatPage = () => {
  const zones = useStore((state) => state.zones);
  const toggleZone = useStore((state) => state.toggleZone);
  const setZoneMode = useStore((state) => state.setZoneMode);
  const setZoneTemp = useStore((state) => state.setZoneTemp);

  const handleModeChange = (id, mode) => {
    setZoneMode(id, mode, modes[mode].temp);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Thermostat Control</h1>
        <p className="text-center text-gray-400 mb-10">Adjust temperatures by zone</p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-xl transition hover:shadow-2xl flex flex-col items-center
                ${!zone.active ? "opacity-50" : ""}`}
            >
              <h2 className="text-xl font-semibold mb-2">{zone.name}</h2>

              {/* Toggle */}
              <label className="relative inline-flex items-center cursor-pointer mb-4">
                <input
                  type="checkbox"
                  checked={zone.active}
                  onChange={() => toggleZone(zone.id)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-700 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-7"></div>
              </label>

              {/* Icon y Temperatura */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">{modes[zone.mode].icon}</div>
                <div className="text-3xl font-bold">{zone.temp}°C</div>
              </div>

              {/* Selector de Modo */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-sm text-gray-300">Mode</label>
                <select
                  value={zone.mode}
                  onChange={(e) => handleModeChange(zone.id, e.target.value)}
                  className="bg-gray-700 px-4 py-2 rounded w-full"
                  disabled={!zone.active}
                >
                  {Object.keys(modes).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Slider de Temperatura */}
              <div className="w-full">
                <label className="block mb-1 text-sm text-gray-300">Temperature</label>
                <input
                  type="range"
                  min="16"
                  max="30"
                  value={zone.temp}
                  onChange={(e) => setZoneTemp(zone.id, e.target.value)}
                  className="w-full accent-yellow-400"
                  disabled={!zone.active}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="mt-16" />
      <Footer />
    </div>
  );
};

export default ThermostatPage;
