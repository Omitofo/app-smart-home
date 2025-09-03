import { useState } from "react";

const mockLocks = [
  { id: 1, name: "Front Door", locked: true },
  { id: 2, name: "Back Door", locked: false },
  { id: 3, name: "Garage Door", locked: true },
];

const LocksPage = () => {
  const [locks, setLocks] = useState(mockLocks);

  const toggleLock = (id) => {
    setLocks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, locked: !l.locked } : l))
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Locks Control</h1>
      <div className="space-y-6">
        {locks.map((lock) => (
          <div
            key={lock.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between hover:shadow-xl transition"
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
    </div>
  );
};

export default LocksPage;
