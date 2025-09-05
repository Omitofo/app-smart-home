import heroPhone from "../assets/roboto4.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      const headerOffset = 64; // height of sticky header
      const extraSpacing = 20; // extra space above section
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerOffset - extraSpacing;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${heroPhone})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Text container */}
      <div className="absolute left-8 bottom-8 text-white max-w-xs">
        <h1 className="text-3xl font-bold mb-3 leading-snug">
          Manage Your Home with Smart Home App
        </h1>
        <p className="text-sm mb-3 max-w-[25rem]">
          Control your smart home devices and optimize energy usage with our intuitive app.
        </p>
        <button
          onClick={goToFeatures}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-full w-fit text-sm"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
