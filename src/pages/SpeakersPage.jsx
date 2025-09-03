import { useState } from "react";

const initialSpeakers = [
  { id: 1, room: "Living Room", status: true, volume: 70 },
  { id: 2, room: "Kitchen", status: false, volume: 0 },
];

const SpeakersPage = () => {
  const [speakers, setSpeakers] = useState(initialSpeakers);

  const toggleSpeaker = (id) => {
    setSpeakers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: !s.status } : s))
    );
  };

  const changeVolume = (id, value) => {
    setSpeakers((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, volume: Number(value) } : s
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Speakers Control</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{speaker.room}</h2>
            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  speaker.status ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {speaker.status ? "ON" : "OFF"}
              </span>
              <button
                onClick={() => toggleSpeaker(speaker.id)}
                className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
              >
                Toggle
              </button>
            </div>
            {speaker.status && (
              <div>
                <label className="block mb-1 text-sm text-gray-300">
                  Volume: {speaker.volume}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={speaker.volume}
                  onChange={(e) => changeVolume(speaker.id, e.target.value)}
                  className="w-full accent-blue-400"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersPage;
