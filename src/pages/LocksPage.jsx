import Footer from "../components/Footer";
import { useStore } from "../store/useStore";

const LocksPage = () => {
  const locks = useStore((state) => state.locks);
  const toggleLock = useStore((state) => state.toggleLock);

  const totalLocks = locks.length;
  const lockedCount = locks.filter((l) => l.locked).length;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-4 py-8">
      <main className="flex-grow max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2 text-center">Locks Control</h1>
        <p className="text-center text-gray-400 mb-6">
          Monitor and control your doors remotely
        </p>

        {/* Counter */}
        <p className="text-center mb-8 font-medium text-gray-300">
          {lockedCount}/{totalLocks} doors locked
        </p>

        {/* Locks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locks.map((lock) => (
            <div
              key={lock.id}
              onClick={() => toggleLock(lock.id)}
              className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg flex items-center justify-between hover:shadow-2xl transition min-h-[100px]"
            >
              {/* Name + Icon */}
              <h2 className="text-lg font-semibold flex items-center gap-4">
                <span className="text-2xl">{lock.locked ? "🔒" : "🔓"}</span>
                {lock.name}
              </h2>

              {/* Locked/Unlocked Badge */}
              <span
                className={`px-6 py-2 text-sm rounded-full min-w-[90px] text-center ${
                  lock.locked ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {lock.locked ? "Locked" : "Unlocked"}
              </span>
            </div>
          ))}
        </div>
      </main>

      <div className="mt-16" /> {/* Spacing before footer */}
      <Footer />
    </div>
  );
};

export default LocksPage;
