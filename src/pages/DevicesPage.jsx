import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const devicesMock = [
  { id: 1, name: "Living Room Lights", type: "Light", route: "/devices/lights" },
  { id: 2, name: "Thermostat", type: "Climate", route: "/devices/thermostat" },
  { id: 3, name: "Security Camera", type: "Camera", route: "/devices/cameras" },
  { id: 4, name: "Kitchen Speaker", type: "Audio", route: "/devices/speakers" },
  { id: 5, name: "Doors lock", type: "Access", route: "/devices/locks" },
];

const typeIcons = {
  Light: "💡",
  Climate: "🌡️",
  Camera: "📷",
  Audio: "🔊",
  Access: "🚪",
};

const DevicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Smart Devices</h1>
        <p className="text-center text-gray-400 mb-10">
          Tap or click a card to manage the device
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-20 mx-auto max-w-4xl justify-items-center">
          {devicesMock.map((device) => (
            <Link
              key={device.id}
              to={device.route}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-xl w-40 sm:w-48"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:rotate-12">
                {typeIcons[device.type]}
              </div>
              <h2 className="text-lg font-medium">{device.name}</h2>
              <div className="absolute inset-0 rounded-2xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevicesPage;
