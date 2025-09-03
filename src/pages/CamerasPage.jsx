import Footer from "../components/Footer";
import { useStore } from "../store/useStore";
import { FiMic } from "react-icons/fi"; // icono de micrófono

const CamerasPage = () => {
  const cameras = useStore((state) => state.cameras);
  const toggleCamera = useStore((state) => state.toggleCamera);
  const toggleMic = useStore((state) => state.toggleMic);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-cyan-400 tracking-wide">
          Security Cameras
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Monitor your home in real time
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {cameras.map((cam) => (
            <div
              key={cam.id}
              className="relative flex-shrink-0 w-72 sm:w-80 md:w-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition p-6 flex flex-col items-center"
            >
              {/* Mic icon top-right */}
              <button
                onClick={() => toggleMic(cam.id)}
                className={`absolute top-4 right-4 text-2xl transition-opacity ${
                  cam.mic ? "text-blue-400 opacity-100" : "text-gray-500 opacity-50"
                }`}
              >
                <FiMic />
              </button>

              <h2 className="text-2xl font-semibold mb-6">{cam.name}</h2>

              {/* Camera toggle */}
              <label className="relative inline-flex items-center cursor-pointer mb-6">
                <input
                  type="checkbox"
                  checked={cam.status}
                  onChange={() => toggleCamera(cam.id)}
                  className="sr-only peer"
                />
                <div className="w-16 h-8 bg-gray-700 rounded-full peer-checked:bg-green-500 transition-colors"></div>
                <div className="absolute left-1 top-1 w-6 h-6 bg-gray-200 rounded-full shadow-md transition-transform peer-checked:translate-x-8 peer-checked:bg-green-400 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900 peer-checked:text-white">
                    {cam.status ? "ON" : "OFF"}
                  </span>
                </div>
              </label>

              {/* Mock live feed */}
              <div className="mt-4 w-full h-60 bg-black rounded-xl flex items-center justify-center text-gray-500 font-mono">
                {cam.status ? "Live Feed Here" : "Camera Off"}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency buttons */}
        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-red-700 hover:bg-red-800 px-6 py-2 rounded-lg text-white font-medium transition text-sm">
            Call Police
          </button>
          <button className="bg-yellow-700 hover:bg-yellow-800 px-6 py-2 rounded-lg text-white font-medium transition text-sm">
            Emergency Contact
          </button>
        </div>
      </main>

      <div className="mt-16" />
      <Footer />
    </div>
  );
};

export default CamerasPage;
