import { useStore } from "../store/useStore";

const SettingsPage = () => {
  const settings = useStore((state) => state.settings);
  const toggleSetting = useStore((state) => state.toggleSetting);

  return (
    <div className="flex flex-col min-h-screen bg-futuristic-dark text-futuristic-green p-6">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Settings</h1>

      {/* Container with max width */}
      <div className="mx-auto max-w-5xl">
        {/* Grid of cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className={`flex items-center justify-between p-6 rounded-2xl shadow-lg transition-all cursor-pointer
                h-24 max-w-md w-full
                ${setting.enabled
                  ? "bg-gradient-to-r from-futuristic-green to-green-500 text-futuristic-dark"
                  : "bg-futuristic-gray opacity-80 pointer-events-auto"
                }`}
              onClick={() => toggleSetting(setting.id)}
            >
              <span className="text-lg font-medium flex-1 break-words">
                {setting.name}
              </span>
              <button
                className={`ml-4 px-6 py-2 rounded-full font-semibold transition text-sm
                  ${setting.enabled ? "bg-white text-futuristic-dark" : "bg-futuristic-red text-futuristic-dark"}
                `}
                onClick={(e) => {
                  e.stopPropagation(); // prevent double toggle
                  toggleSetting(setting.id);
                }}
              >
                {setting.enabled ? "ON!" : "OFF!"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
