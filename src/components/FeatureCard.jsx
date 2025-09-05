import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const FeatureCard = ({ icon, title, description, route }) => (
  <Link
    to={route}
    className="relative bg-homepage-gray text-white p-5 rounded-3xl shadow-lg flex flex-col items-center hover:bg-gray-700 transition group"
  >
    {/* Arrow icon top-right */}
    <div className="absolute top-3 right-3 bg-homepage-black p-1 rounded-full opacity-70 group-hover:opacity-100 transition">
      <ArrowUpRight className="w-4 h-4 text-white" />
    </div>

    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg text-futuristic-green font-bold mb-2 text-center">{title}</h3>
    <p className="text-center text-sm text-gray-300">{description}</p>
  </Link>
);

export default FeatureCard;
