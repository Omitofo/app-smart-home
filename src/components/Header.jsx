import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header - sticky */}
      <header className="flex justify-between items-center p-4 shadow-md bg-gray-900 text-white fixed top-0 left-0 w-full z-30">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* SmartHome Logo that links to Home */}
        <Link
          to="/"
          className="font-bold text-lg hover:text-green-400 transition-colors"
        >
          SmartHome
        </Link>

        <Link to="/settings">⚙️</Link>
      </header>

      {/* Overlay for sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors"
          >
            🏠 Home
          </Link>
          <Link
            to="/devices"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors"
          >
            💡 Devices
          </Link>
          <Link
            to="/devices/lights"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors pl-6 text-sm"
          >
            - Lights
          </Link>
          <Link
            to="/devices/thermostat"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors pl-6 text-sm"
          >
            - Thermostat
          </Link>
          <Link
            to="/devices/cameras"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors pl-6 text-sm"
          >
            - Cameras
          </Link>
          <Link
            to="/devices/speakers"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors pl-6 text-sm"
          >
            - Speakers
          </Link>
          <Link
            to="/devices/locks"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors pl-6 text-sm"
          >
            - Locks
          </Link>
          <Link
            to="/reports"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors"
          >
            📊 Reports
          </Link>
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-400 transition-colors"
          >
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* Spacer so page content doesn't go under header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
