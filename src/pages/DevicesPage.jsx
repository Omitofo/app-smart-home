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

const DevicesPage = () => (
  <div className="flex flex-col min-h-screen bg-futuristic-dark text-futuristic-green px-4 py-8">
    {/* Title */}
    <div className="text-center mb-12">
      <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold mb-1">
        Smart Devices
      </h1>
      <p className="text-gray-400 text-[clamp(0.875rem,2.5vw,1rem)]">
        Tap or click a card to manage the device
      </p>
    </div>

    {/* Devices row */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {devicesMock.map((device) => (
        <Link
          key={device.id}
          to={device.route}
          className="group bg-futuristic-gray p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition hover:-translate-y-1 hover:scale-105 min-w-[150px] max-w-[200px] flex-1"
        >
          <div className="text-[clamp(2rem,5vw,3rem)] mb-3">{typeIcons[device.type]}</div>
          <h2 className="font-semibold text-futuristic-green text-[clamp(0.875rem,2.5vw,1rem)] truncate">
            {device.name}
          </h2>
        </Link>
      ))}
    </div>

    {/* Bottom image */}
    <div
      className="mx-auto w-full max-w-[800px] rounded-2xl shadow-lg bg-cover bg-center min-h-[300px] md:min-h-[250px] relative"
      style={{ backgroundImage: `url(${bottomRightImg})` }}
    >
      <div className="w-full h-full bg-black/40 rounded-2xl"></div>
    </div>
  </div>
);

export default DevicesPage;
