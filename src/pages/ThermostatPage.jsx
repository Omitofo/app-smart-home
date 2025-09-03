import { useState } from "react";

const ThermostatPage = () => {
  const [temperature, setTemperature] = useState(22);
  const [mode, setMode] = useState("cool"); // cool, heat, off
  const [schedule, setSchedule] = useState("18:00");

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Thermostat Control</h1>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Current Temperature</h2>
        <div className="text-6xl font-bold mb-6">{temperature}°C</div>

        {/* Temperature Control */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setTemperature((t) => t - 1)}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            -
          </button>
          <button
            onClick={() => setTemperature((t) => t + 1)}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            +
          </button>
        </div>

        {/* Mode Selector */}
        <div className="mb-6">
          <label className="block mb-2">Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            <option value="cool">Cool</option>
            <option value="heat">Heat</option>
            <option value="off">Off</option>
          </select>
        </div>

        {/* Schedule */}
        <div>
          <label className="block mb-2">Turn Off At</label>
          <input
            type="time"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="bg-gray-700 px-4 py-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ThermostatPage;
