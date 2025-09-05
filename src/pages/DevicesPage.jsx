import { Link } from "react-router-dom";
import bottomRightImg from "../assets/roboto7.jpg";

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
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      {/* Title and subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-1">Smart Devices</h1>
        <p className="text-gray-400 text-base">
          Tap or click a card to manage the device
        </p>
      </div>

      {/* Two columns */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left column: flex-wrap for devices */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start flex-1">
          {devicesMock.map((device) => (
            <Link
              key={device.id}
              to={device.route}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transform transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl min-w-[150px] max-w-[200px] flex-1"
            >
              <div className="text-4xl mb-3">{typeIcons[device.type]}</div>
              <h2 className="text-lg font-semibold">{device.name}</h2>
              <div className="absolute inset-0 rounded-2xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          ))}
        </div>

        {/* Right column: image with fixed width */}
        <div
          className="w-full lg:w-1/2 rounded-2xl shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${bottomRightImg})`, minHeight: '400px' }}
        >
          <div className="w-full h-full bg-black/20 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default DevicesPage;
