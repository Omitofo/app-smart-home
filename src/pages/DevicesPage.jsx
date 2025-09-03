import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const devicesMock = [
  { id: 1, name: "Living Room Lights", type: "Light", status: true, route: "/devices/lights" },
  { id: 2, name: "Thermostat", type: "Climate", status: false, route: "/devices/thermostat" },
  { id: 3, name: "Security Camera", type: "Camera", status: true, route: "/devices/cameras" },
  { id: 4, name: "Kitchen Speaker", type: "Audio", status: false, route: "/devices/speakers" },
  { id: 5, name: "Garage Door", type: "Access", status: true, route: "/devices/locks" },
];

const DevicesPage = () => {
  const [devices, setDevices] = useState(devicesMock);

  const toggleDevice = (id) => {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: !d.status } : d
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Devices</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {devices.map((device) => (
          <Link
            key={device.id}
            to={device.route}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl hover:bg-gray-700"
          >
            <div className="text-5xl mb-4">
              {device.type === "Light" && "💡"}
              {device.type === "Climate" && "🌡️"}
              {device.type === "Camera" && "📷"}
              {device.type === "Audio" && "🔊"}
              {device.type === "Access" && "🚪"}
            </div>
            <h2 className="text-xl font-semibold">{device.name}</h2>
            <span
              className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
                device.status ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {device.status ? "Online" : "Offline"}
            </span>

            {/* Toggle Switch */}
            <div
              className="mt-6"
              onClick={(e) => {
                e.preventDefault(); // prevent navigating when toggling
                toggleDevice(device.id);
              }}
            >
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={device.status}
                  readOnly
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </label>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DevicesPage;
