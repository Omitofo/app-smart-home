import { useState } from "react";
import Footer from "../components/Footer";

const mockLocks = [
  { id: 1, name: "Front Door", locked: true },
  { id: 2, name: "Back Door", locked: false },
  { id: 3, name: "Garage Door", locked: true },
];

const LocksPage = () => {
  const [locks, setLocks] = useState(mockLocks);

  const toggleLock = (id) =>
    setLocks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, locked: !l.locked } : l))
    );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Locks Control</h1>
        <p className="text-center text-gray-400 mb-8">
          See which doors are locked and unlock remotely
        </p>

        <div className="space-y-6">
          {locks.map((lock) => (
            <div
              key={lock.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg flex items-center justify-between hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold">{lock.name}</h2>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    lock.locked ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {lock.locked ? "Locked" : "Unlocked"}
                </span>
                <button
                  onClick={() => toggleLock(lock.id)}
                  className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                >
                  {lock.locked ? "Unlock" : "Lock"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocksPage;
