import { useState } from "react";

const mockCameras = [
  { id: 1, name: "Front Door", status: true },
  { id: 2, name: "Backyard", status: false },
  { id: 3, name: "Garage", status: true },
];

const CamerasPage = () => {
  const [cameras, setCameras] = useState(mockCameras);

  const toggleCamera = (id) => {
    setCameras((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: !c.status } : c))
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Security Cameras</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {cameras.map((cam) => (
          <div
            key={cam.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{cam.name}</h2>
            <div className="mb-4">
              <div
                className={`inline-block px-3 py-1 text-sm rounded-full ${
                  cam.status ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {cam.status ? "Active" : "Inactive"}
              </div>
            </div>
            <button
              onClick={() => toggleCamera(cam.id)}
              className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
            >
              {cam.status ? "Turn Off" : "Turn On"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CamerasPage;
