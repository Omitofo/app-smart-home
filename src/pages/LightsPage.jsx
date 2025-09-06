import { useStore } from "../store/useStore";

const LightsPage = () => {
  const lights = useStore((state) => state.lights);
  const toggleLight = useStore((state) => state.toggleLight);
  const setLightBrightness = useStore((state) => state.setLightBrightness);

  const totalLights = lights.length;
  const lightsOn = lights.filter((l) => l.status).length;

  return (
<div className="flex flex-col min-h-[calc(var(--vh)*100)] bg-[var(--app-bg)] text-futuristic-green px-4 py-8">
      <main className="flex-grow max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2  text-white text-center">Lights Control</h1>
        <p className="text-center text-gray-400 mb-2">Manage all the lights in your home</p>
        <p
          className={`text-center mb-6 font-medium ${
            lightsOn === 0
              ? "text-red-500"
              : lightsOn === totalLights
              ? "text-futuristic-green"
              : "text-yellow-400"
          }`}
        >
          {lightsOn}/{totalLights} lights ON
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {lights.map((light) => (
            <div
              key={light.id}
              className={`p-6 rounded-3xl shadow-lg transition flex flex-col items-center
                ${light.status
                  ? "bg-futuristic-gray hover:shadow-2xl"
                  : "bg-futuristic-gray opacity-60"}
              `}
            >
              {/* Title + Toggle */}
              <div
                className="flex flex-col items-center cursor-pointer select-none mb-6"
                onClick={() => toggleLight(light.id)}
              >
                <h2 className="text-xl font-semibold mb-2">{light.room}</h2>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={light.status}
                    onChange={() => toggleLight(light.id)}
                    className="sr-only peer"
                  />
                  <div className="w-16 h-8 bg-gray-700 rounded-full peer-checked:bg-futuristic-green transition-all"></div>
                  <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-8"></div>
                </label>
              </div>

              {/* Brightness */}
              <div className="w-full">
                <label className="block mb-1 text-sm text-gray-300">
                  Brightness: {light.brightness}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={light.brightness}
                  onChange={(e) => setLightBrightness(light.id, e.target.value)}
                  className="w-full accent-futuristic-green"
                  disabled={!light.status}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LightsPage;
