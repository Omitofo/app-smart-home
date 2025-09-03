import { useState } from "react";
import Footer from "../components/Footer";

const initialSpeakers = [
  { id: 1, room: "Living Room", status: true, volume: 70 },
  { id: 2, room: "Kitchen", status: false, volume: 0 },
];

const SpeakersPage = () => {
  const [speakers, setSpeakers] = useState(initialSpeakers);

  const toggleSpeaker = (id) =>
    setSpeakers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: !s.status } : s))
    );

  const changeVolume = (id, value) =>
    setSpeakers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, volume: Number(value) } : s))
    );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Speakers Control</h1>
        <p className="text-center text-gray-400 mb-10">
          Tap a speaker card to toggle or adjust the volume
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transition hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              {/* Speaker Icon */}
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:rotate-6">
                🔊
              </div>

              {/* Room Name */}
              <h2 className="text-xl font-semibold mb-2">{speaker.room}</h2>

              {/* Status */}
              <span
                className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
                  speaker.status ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {speaker.status ? "ON" : "OFF"}
              </span>

              {/* Volume Slider */}
              {speaker.status && (
                <div className="mt-4 w-full">
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
      </main>
      <Footer />
    </div>
  );
};

export default SpeakersPage;
