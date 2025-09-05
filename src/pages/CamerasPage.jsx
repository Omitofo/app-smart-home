import { useState } from "react";
import { useStore } from "../store/useStore";
import { FiMic, FiMaximize, FiX, FiPlay, FiPause, FiRewind, FiSettings } from "react-icons/fi";
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
  const [settingsCamera, setSettingsCamera] = useState(null);

  // Local settings state for mock toggles
  const [motionSettings, setMotionSettings] = useState({});
  const [notificationSettings, setNotificationSettings] = useState({});

  const handleToggleMotion = (camId) => {
    setMotionSettings((prev) => ({ ...prev, [camId]: !prev[camId] }));
  };

  const handleToggleNotification = (camId) => {
    setNotificationSettings((prev) => ({ ...prev, [camId]: !prev[camId] }));
  };

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

              {/* Control Bar */}
              <div className="flex justify-center gap-4 mt-4 text-xl">
                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                  <FiRewind />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                  <FiPlay />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                  <FiPause />
                </button>
                <button
                  onClick={() => setSettingsCamera(cam)}
                  className="p-2 rounded-full hover:bg-gray-700 transition"
                >
                  <FiSettings />
                </button>
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

              {/* Modal Control Bar */}
              <div className="flex justify-center gap-6 mb-6 text-2xl">
                <button className="p-3 rounded-full hover:bg-gray-700 transition">
                  <FiRewind />
                </button>
                <button className="p-3 rounded-full hover:bg-gray-700 transition">
                  <FiPlay />
                </button>
                <button className="p-3 rounded-full hover:bg-gray-700 transition">
                  <FiPause />
                </button>
                <button
                  onClick={() => setSettingsCamera(focusedCamera)}
                  className="p-3 rounded-full hover:bg-gray-700 transition"
                >
                  <FiSettings />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Panel */}
        {settingsCamera && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="relative bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6">
              <button
                onClick={() => setSettingsCamera(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-700 transition"
              >
                <FiX size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-4 text-center">{settingsCamera.name} Settings</h2>

              {/* Mock settings content */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span>Recording Quality</span>
                  <select className="bg-gray-700 text-white rounded px-2 py-1">
                    <option>1080p</option>
                    <option>720p</option>
                    <option>480p</option>
                  </select>
                </div>

                <div className="flex justify-between items-center">
                  <span>Motion Detection</span>
                  <button
                    onClick={() => handleToggleMotion(settingsCamera.id)}
                    className={`px-3 py-1 rounded ${
                      motionSettings[settingsCamera.id] ? "bg-green-500" : "bg-gray-600"
                    }`}
                  >
                    {motionSettings[settingsCamera.id] ? "Enabled" : "Disabled"}
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span>Notifications</span>
                  <button
                    onClick={() => handleToggleNotification(settingsCamera.id)}
                    className={`px-3 py-1 rounded ${
                      notificationSettings[settingsCamera.id] ? "bg-green-500" : "bg-gray-600"
                    }`}
                  >
                    {notificationSettings[settingsCamera.id] ? "On" : "Off"}
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <span>Recording Schedule</span>
                  <span className="text-gray-300">24/7</span>
                  <span className="text-gray-400 text-sm">
                    Up to 5 days of recording before auto-delete. Upgrade to Premium for unlimited cloud storage.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CamerasPage;
