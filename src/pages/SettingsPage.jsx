import { useStore } from '../store/useStore';

const SettingsPage = () => {
  const settings = useStore((state) => state.settings);
  const toggleSetting = useStore((state) => state.toggleSetting);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>
        <p className="text-center text-gray-400 mb-8">
          Customize your smart home preferences
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className={`flex items-center justify-between p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl cursor-pointer
                ${setting.enabled ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-gray-800"}
              `}
              onClick={() => toggleSetting(setting.id)}
            >
              {/* Texto adaptable */}
              <span className="text-lg font-medium flex-1 break-words">
                {setting.name}
              </span>
              <button
                className={`ml-4 px-6 py-2 rounded-full font-semibold transition
                  ${setting.enabled ? "bg-white text-green-600" : "bg-gray-600 text-gray-200"}
                `}
                onClick={(e) => e.stopPropagation()} // prevenir doble toggle
              >
                {setting.enabled ? "ON" : "OFF"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
