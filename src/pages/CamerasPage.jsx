import { useState } from "react";
import Footer from "../components/Footer";

const mockCameras = [
  { id: 1, name: "Front Door", status: true },
  { id: 2, name: "Backyard", status: false },
  { id: 3, name: "Garage", status: true },
];

const CamerasPage = () => {
  const [cameras, setCameras] = useState(mockCameras);

  const toggleCamera = (id) =>
    setCameras((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: !c.status } : c))
    );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Security Cameras</h1>
        <p className="text-center text-gray-400 mb-8">
          Monitor your home and call for help if needed
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {cameras.map((cam) => (
            <div
              key={cam.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold mb-2">{cam.name}</h2>
              <div className="mb-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    cam.status ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {cam.status ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
                  {cam.status ? "Turn Off" : "Turn On"}
                </button>
                <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">
                  Call Police
                </button>
                <button className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700">
                  Emergency Contact
                </button>
              </div>

              {/* Mock live feed */}
              <div className="mt-4 w-full h-48 bg-black rounded-lg flex items-center justify-center text-gray-500">
                {cam.status ? "Live Feed Here" : "Camera Off"}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CamerasPage;
