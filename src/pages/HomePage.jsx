import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  const features = [
    {
      icon: "🎛️",
      title: "Device Control",
      description:
        "Easily control all your smart home devices from a single app",
      route: "/devices",
    },
    {
      icon: "📊",
      title: "Energy Usage",
      description: "Monitor and optimize your energy consumption",
      route: "/reports",
    },
    {
      icon: "📈",
      title: "Usage Reports",
      description: "Get detailed reports on your home’s energy usage",
      route: "/reports",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-12 max-w-7xl mx-auto space-y-16">
        <Hero />

        {/* Features */}
        <section id="features" className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-4">App Features</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">
            Control various smart home devices with just one app
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f, index) => (
              <FeatureCard key={index} {...f} />
            ))}
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="mx-auto max-w-3xl">
          <ContactUs />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
