import { useState } from "react";
import { useStore } from "../store/useStore";
import { FiMic, FiMaximize, FiX } from "react-icons/fi";
import frontDoorImg from "../assets/frontcamera.jpg";
import backyardImg from "../assets/backdoor.jpg";
import garageImg from "../assets/garage.png";

const fakeCameraImages = {
  "Front Door": frontDoorImg,
  "Backyard": backyardImg,
  "Garage": garageImg,
};


const CamerasPage = () => {
  const cameras = useStore((state) => state.cameras);
  const toggleCamera = useStore((state) => state.toggleCamera);
  const toggleMic = useStore((state) => state.toggleMic);

  const [focusedCamera, setFocusedCamera] = useState(null);

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
              {/* MIC button */}
              <button
                onClick={() => toggleMic(cam.id)}
                className={`absolute top-4 right-4 text-2xl transition-opacity ${
                  cam.mic ? "text-blue-400 opacity-100" : "text-gray-500 opacity-50"
                }`}
              >
                <FiMic />
              </button>

              {/* Camera Name - toggle on click */}
              <h2
                onClick={() => toggleCamera(cam.id)}
                className="text-2xl font-semibold mb-6 cursor-pointer select-none"
              >
                {cam.name}
              </h2>

              {/* Modern Toggle */}
              <label className="relative inline-flex items-center cursor-pointer mb-6">
                <input
                  type="checkbox"
                  checked={cam.status}
                  onChange={() => toggleCamera(cam.id)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-700 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-7"></div>
              </label>

              {/* Fake Camera Feed / Placeholder */}
              <div className="mt-4 w-full h-60 bg-black rounded-xl flex items-center justify-center text-gray-500 font-mono overflow-hidden">
                {cam.status ? (
                  <img
                    src={fakeCameraImages[cam.name]}
                    alt={`${cam.name} feed`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  "Camera Off"
                )}
              </div>

              {/* Maximize / Focus button */}
              <button
                onClick={() => setFocusedCamera(cam)}
                className="absolute bottom-4 right-4 text-white bg-gray-700 p-1 rounded-full hover:bg-gray-600 transition"
                title="Focus Camera"
              >
                <FiMaximize size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Focused Camera Modal */}
        {focusedCamera && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full h-[80vh] flex flex-col">
              <button
                onClick={() => setFocusedCamera(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-700 transition"
              >
                <FiX size={24} />
              </button>

              <h2 className="text-3xl font-bold text-center mt-6 mb-4">
                {focusedCamera.name}
              </h2>

              <div className="flex-1 bg-black rounded-xl overflow-hidden m-6 flex items-center justify-center">
                {focusedCamera.status ? (
                  <img
                    src={fakeCameraImages[focusedCamera.name]}
                    alt={`${focusedCamera.name} feed`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-xl">Camera Off</span>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CamerasPage;
