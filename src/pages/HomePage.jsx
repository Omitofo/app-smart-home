import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import ContactUs from "../components/ContactUs";
import { useState } from "react";
import alicePhoto from "../assets/team1.jpg";
import bobPhoto from "../assets/team2.jpg";
import wangPhoto from "../assets/team3.jpg";
import rajPhoto from "../assets/team4.jpg";
import kenjiPhoto from "../assets/team5.jpg";
import aiPhoto from "../assets/team6.jpg";
import missionImg from "../assets/mission3.jpg";
import whatImg from "../assets/what.jpeg";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO & Founder", photo: alicePhoto, bio: "Alice leads the company with vision and passion for smart home technology." },
  { name: "Bob Smith", role: "CTO", photo: bobPhoto, bio: "Bob is the technical mastermind behind all our smart devices integrations." },
  { name: "Wang Martinez", role: "Head of Design", photo: wangPhoto, bio: "Wang designs beautiful and intuitive user interfaces for our apps." },
  { name: "Kenji Tanaka", role: "Senior Engineer", photo: kenjiPhoto, bio: "Kenji specializes in IoT systems architecture, ensuring scalability and reliability for connected devices." },
  { name: "Raj Patel", role: "Software Engineer", photo: rajPhoto, bio: "Raj develops core backend services and APIs, bridging devices with seamless app experiences." },
  { name: "Aurora AI", role: "Internal AI Consultant", photo: aiPhoto, bio: "Aurora is our in-house AI consultant, providing data-driven insights and optimization strategies." },
];

const tabs = [
  { id: "who", label: "Who We Are" },
  { id: "mission", label: "Our Mission" },
  { id: "what", label: "What We Do" },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("what");

  const features = [
    { icon: "🎛️", title: "Device Control", description: "Easily control all your smart home devices from a single app", route: "/devices" },
    { icon: "📊", title: "Energy Usage", description: "Monitor and optimize your energy consumption", route: "/reports" },
    { icon: "📈", title: "Usage Reports", description: "Get detailed reports on your home’s energy usage", route: "/reports" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-12 max-w-7xl mx-auto space-y-32">

        <Hero />

        {/* Features Section */}
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

        {/* About Us Section */}
        <section id="about" className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold mb-6">About Us</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  activeTab === tab.id ? "bg-green-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content - only visible if active */}
          {activeTab === "who" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col items-center">
                  <img src={member.photo} alt={member.name} className="w-full h-48 object-cover rounded-2xl mb-4"/>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-green-400">{member.role}</p>
                  <p className="text-gray-300 text-sm mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "mission" && (
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
              <div className="md:w-1/2">
                <img src={missionImg} alt="Our Mission" className="w-full h-64 object-cover rounded-2xl"/>
              </div>
              <div className="md:w-1/2 text-left">
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to create a connected and intelligent home experience that is simple, secure, and sustainable. We strive to improve quality of life by automating daily routines and saving energy.
                </p>
              </div>
            </div>
          )}

          {activeTab === "what" && (
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-4xl mx-auto">
              <div className="md:w-1/2">
                <img src={whatImg} alt="What We Do" className="w-full h-64 object-cover rounded-2xl"/>
              </div>
              <div className="md:w-1/2 text-left">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  We develop smart home solutions including lighting, climate control, security, and multimedia systems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our apps allow users to control and monitor their home devices seamlessly from anywhere.
                </p>
              </div>
            </div>
          )}
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
