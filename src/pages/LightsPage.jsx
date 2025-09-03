import { useState } from "react";

const initialLights = [
  { id: 1, room: "Living Room", status: true, brightness: 80, color: "#FFD700" },
  { id: 2, room: "Bedroom", status: false, brightness: 0, color: "#FFFFFF" },
  { id: 3, room: "Kitchen", status: true, brightness: 60, color: "#FFA500" },
];

const LightsPage = () => {
  const [lights, setLights] = useState(initialLights);

  const toggleLight = (id) => {
    setLights((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, status: !l.status } : l
      )
    );
  };

  const changeBrightness = (id, value) => {
    setLights((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, brightness: Number(value) } : l
      )
    );
  };

  const changeColor = (id, value) => {
    setLights((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, color: value } : l
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Lights Control</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {lights.map((light) => (
          <div
            key={light.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{light.room}</h2>
            <div className="flex items-center justify-between">
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  light.status ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {light.status ? "ON" : "OFF"}
              </span>
              <button
                onClick={() => toggleLight(light.id)}
                className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
              >
                Toggle
              </button>
            </div>

            {light.status && (
              <div className="mt-4 space-y-4">
                {/* Brightness Slider */}
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Brightness: {light.brightness}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={light.brightness}
                    onChange={(e) => changeBrightness(light.id, e.target.value)}
                    className="w-full accent-yellow-400"
                  />
                </div>

                {/* Color Picker */}
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Color
                  </label>
                  <input
                    type="color"
                    value={light.color}
                    onChange={(e) => changeColor(light.id, e.target.value)}
                    className="w-16 h-10 p-0 border rounded cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightsPage;
