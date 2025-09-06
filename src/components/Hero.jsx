import heroPhone from "../assets/roboto4.jpg";

const Hero = () => {
  const goToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      const headerOffset = 64;
      const extraSpacing = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerOffset - extraSpacing;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center rounded-3xl overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${heroPhone})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="absolute left-8 bottom-8 text-white max-w-xs">
        <h1 className="text-3xl font-bold mb-3 leading-snug drop-shadow-lg">
          Manage Your Home with Smart Home App
        </h1>
        <p className="text-sm mb-3 max-w-[15rem] drop-shadow-md">
          Control your smart home devices and optimize energy usage with our intuitive app.
        </p>

        <button // 
          onClick={goToFeatures}
          className="bg-futuristic-green hover:bg-green-500 text-futuristic-gray font-bold py-2 px-5 rounded-full w-fit text-sm transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
