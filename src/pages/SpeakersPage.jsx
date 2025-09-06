import { useStore } from "../store/useStore";

const SpeakersPage = () => {
  const speakers = useStore((state) => state.speakers);
  const toggleSpeaker = useStore((state) => state.toggleSpeaker);
  const setSpeakerVolume = useStore((state) => state.setSpeakerVolume);

  const CARD_HEIGHT = 250; // altura fija

  return (
<div className="flex flex-col min-h-[calc(var(--vh)*100)] bg-[var(--app-bg)] text-futuristic-green px-4 py-8">
      <main className="flex-grow max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Speakers Control</h1>
        <p className="text-center text-gray-400 mb-10">
          Click the icon, room name, or status badge to toggle ON/OFF. Adjust volume for active speakers.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`relative bg-futuristic-gray p-4 rounded-2xl shadow-lg flex flex-col items-center text-center
                transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl
                ${!speaker.status ? "opacity-60" : ""}`}
              style={{ minHeight: `${CARD_HEIGHT}px`, flex: "0 1 220px" }}
            >
              {/* Clickable area for toggle */}
              <div
                className="cursor-pointer text-white flex flex-col items-center"
                onClick={() => toggleSpeaker(speaker.id)}
              >
                {/* Speaker Icon */}
                <div className="text-5xl mb-3">{speaker.status ? "🔊" : "🔇"}</div>

                {/* Room Name */}
                <h2 className="text-lg font-semibold mb-1">{speaker.room}</h2>

                {/* Status Badge */}
                <span
                  className={`mt-1 inline-block px-3 py-1 rounded-full text-sm ${
                    speaker.status ? "bg-futuristic-green" : "bg-red-600"
                  }`}
                >
                  {speaker.status ? "ON" : "OFF"}
                </span>
              </div>

              {/* Volume Slider */}
              <div
                className={`mt-3 w-full transition-opacity ${
                  speaker.status ? "opacity-100" : "opacity-0"
                }`}
              >
                <label className="block mb-1 text-sm text-futuristic-green">
                  Volume: {speaker.volume}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={speaker.volume}
                  onClick={(e) => e.stopPropagation()} // prevent toggle
                  onChange={(e) => setSpeakerVolume(speaker.id, e.target.value)}
                  className="w-full accent-futuristic-green"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SpeakersPage;
