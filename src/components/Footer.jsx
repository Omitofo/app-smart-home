import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="mt-10 bg-gray-900 border-t border-gray-700 shadow-inner text-white">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      
      {/* Left: App Info */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="font-semibold">SmartHome App</p>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        <p className="text-gray-400 text-sm">v1.0.0</p>
      </div>

      {/* Center: Optional Links */}
      <div className="flex gap-6 mb-4 md:mb-0">
        <Link className="text-gray-400 hover:text-green-400 transition" to="/help">
          Help
        </Link>
        <Link className="text-gray-400 hover:text-green-400 transition" to="/privacy">
          Privacy Policy
        </Link>
        <Link className="text-gray-400 hover:text-green-400 transition" to="/terms">
          Terms of Service
        </Link>
      </div>

      {/* Right: Socials */}
      <div className="flex gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          🐦
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          LinkedIn
        </a>
        
      </div>
    </div>
  </footer>
);

export default Footer;
