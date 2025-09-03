import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="mt-10 flex justify-around items-center p-4 bg-gray-900 border-t border-gray-700 shadow-inner text-white">
    <Link
      className="flex flex-col items-center text-white hover:text-green-400 transition-colors"
      to="/"
    >
      🏠<small>Home</small>
    </Link>
    <Link
      className="flex flex-col items-center text-white hover:text-green-400 transition-colors"
      to="/devices"
    >
      💡<small>Devices</small>
    </Link>
    <Link
      className="flex flex-col items-center text-white hover:text-green-400 transition-colors"
      to="/reports"
    >
      📊<small>Reports</small>
    </Link>
    <Link
      className="flex flex-col items-center text-white hover:text-green-400 transition-colors"
      to="/settings"
    >
      ⚙️<small>Settings</small>
    </Link>
  </footer>
);

export default Footer;
