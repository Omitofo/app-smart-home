import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import AboutUsSection from "../pages/AboutUs";
import ContactUs from "../components/ContactUs";
import { useStore } from "../store/useStore";

const HomePage = () => {
  const darkMode = useStore((state) => state.darkMode);

  // Aplicar clase dark al body
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const features = [
    { icon: "🎛️", title: "Device Control", description: "Control all your smart home devices from one app", route: "/devices" },
    { icon: "📊", title: "Energy Usage", description: "Monitor and optimize your energy consumption", route: "/reports" },
    { icon: "📈", title: "Usage Reports", description: "Detailed insights on your home’s energy usage", route: "/reports" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-futuristic-dark text-futuristic-green">
      <main className="flex-grow px-4 py-8 max-w-7xl mx-auto">
        <Hero />

        {/* Features */}
        <section id="features" className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-4">App Features</h2>
          <p className="text-center text-gray-400 mb-8 text-sm">
            Control various smart home devices with just one app
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f, idx) => (
              <FeatureCard key={idx} {...f} />
            ))}
          </div>
        </section>

        {/* About Us */}
        <AboutUsSection />

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-3xl">
          <ContactUs />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
