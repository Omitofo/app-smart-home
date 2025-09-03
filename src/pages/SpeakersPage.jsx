import Footer from "../components/Footer";
import { useStore } from "../store/useStore";

const SpeakersPage = () => {
  const speakers = useStore((state) => state.speakers);
  const toggleSpeaker = useStore((state) => state.toggleSpeaker);
  const setSpeakerVolume = useStore((state) => state.setSpeakerVolume);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Speakers Control</h1>
        <p className="text-center text-gray-400 mb-10">
          Click a card to toggle ON/OFF. Adjust volume for active speakers.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => toggleSpeaker(speaker.id)}
              className={`relative cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-xl flex flex-col items-center text-center
                transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
                ${!speaker.status ? "opacity-50 grayscale" : ""}`}
            >
              {/* Speaker Icon */}
              <div className="text-6xl mb-4">{speaker.status ? "🔊" : "🔇"}</div>

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
                    onClick={(e) => e.stopPropagation()} // para que no toggle al ajustar
                    onChange={(e) => setSpeakerVolume(speaker.id, e.target.value)}
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
