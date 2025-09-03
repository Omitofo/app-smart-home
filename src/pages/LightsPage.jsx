import { useState } from "react";
import Footer from "../components/Footer";

const initialLights = [
  { id: 1, room: "Living Room", status: true, brightness: 80, color: "#FFD700" },
  { id: 2, room: "Bedroom", status: false, brightness: 0, color: "#FFFFFF" },
  { id: 3, room: "Kitchen", status: true, brightness: 60, color: "#FFA500" },
  { id: 4, room: "Master Bedroom", status: true, brightness: 70, color: "#FF69B4" },
  { id: 5, room: "Kids Room 1", status: false, brightness: 0, color: "#ADD8E6" },
  { id: 6, room: "Kids Room 2", status: true, brightness: 50, color: "#90EE90" },
  { id: 7, room: "Family Room", status: false, brightness: 0, color: "#FFB347" },
];

const LightsPage = () => {
  const [lights, setLights] = useState(initialLights);

  const toggleLight = (id) =>
    setLights((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: !l.status } : l))
    );

  const changeBrightness = (id, value) =>
    setLights((prev) =>
      prev.map((l) => (l.id === id ? { ...l, brightness: Number(value) } : l))
    );

  const changeColor = (id, value) =>
    setLights((prev) =>
      prev.map((l) => (l.id === id ? { ...l, color: value } : l))
    );

  const totalLights = lights.length;
  const lightsOn = lights.filter((l) => l.status).length;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Lights Control</h1>

        <p className="text-center text-gray-400 mb-2">
          Manage all the lights in your home
        </p>

        {/* Lights On/Off Counter */}
        <p
          className={`text-center mb-6 font-medium ${
            lightsOn === 0
              ? "text-red-500"
              : lightsOn === totalLights
              ? "text-green-500"
              : "text-yellow-400"
          }`}
        >
          {lightsOn}/{totalLights} lights ON
        </p>

        {/* Responsive Grid: 1 column default, 2 sm, 3 md, 4 lg */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {lights.map((light) => (
            <div
              key={light.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold mb-2">{light.room}</h2>

              {/* Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer mb-4">
                <input
                  type="checkbox"
                  checked={light.status}
                  onChange={() => toggleLight(light.id)}
                  className="sr-only peer"
                />
                <div className="w-16 h-8 bg-gray-700 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-8"></div>
              </label>

              {/* Brightness Slider */}
              <div className="w-full">
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
              <div className="mt-4 flex items-center justify-center gap-4">
                <label className="block mb-1 text-sm text-gray-300">Color</label>
                <input
                  type="color"
                  value={light.color}
                  onChange={(e) => changeColor(light.id, e.target.value)}
                  className="w-12 h-10 p-0 border rounded cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="mt-16" /> {/* extra spacing before footer */}
      <Footer />
    </div>
  );
};

export default LightsPage;
