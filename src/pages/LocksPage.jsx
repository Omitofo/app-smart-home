import { useStore } from "../store/useStore";

const LocksPage = () => {
  const locks = useStore((state) => state.locks);
  const toggleLock = useStore((state) => state.toggleLock);

  const totalLocks = locks.length;
  const lockedCount = locks.filter((l) => l.locked).length;

  return (
<div className="flex flex-col min-h-[calc(var(--vh)*100)] bg-[var(--app-bg)] text-futuristic-green px-4 py-8">    
    <main className="flex-grow max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Locks Control</h1>
        <p className="text-center text-gray-400 mb-6">
          Monitor and control your doors remotely
        </p>

        {/* Counter */}
        <p className="text-center mb-10 font-medium text-futuristic-green">
          {lockedCount}/{totalLocks} doors locked
        </p>

        {/* Locks Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {locks.map((lock) => (
            <div
              key={lock.id}
              onClick={() => toggleLock(lock.id)}
              className="cursor-pointer bg-futuristic-gray p-6 rounded-3xl shadow-lg hover:shadow-2xl transition min-h-[120px] flex flex-col items-center justify-between text-center"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold mb-4">{lock.name}</h2>

              {/* Bottom container: icon + badge */}
              <div className="flex flex-col items-center text-futuristic-dark mt-auto">
                {/* Lock icon */}
                <span className="text-3xl mb-2">{lock.locked ? "🔒" : "🔓"}</span>

                {/* Badge */}
                <span
                  className={`px-6 py-2 text-sm rounded-full text-center ${
                    lock.locked ? "bg-futuristic-green" : "bg-red-600"
                  }`}
                >
                  {lock.locked ? "Locked" : "Unlocked"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LocksPage;
