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
  { name: "Bob Smith", role: "CTO", photo: bobPhoto, bio: "Bob is the technical mastermind behind smart devices integrations." },
  { name: "Wang Martinez", role: "Head of Design", photo: wangPhoto, bio: "Wang designs beautiful and intuitive UIs." },
  { name: "Kenji Tanaka", role: "Senior Engineer", photo: kenjiPhoto, bio: "Kenji specializes in IoT architecture and scalability." },
  { name: "Raj Patel", role: "Software Engineer", photo: rajPhoto, bio: "Raj develops core backend services and APIs." },
  { name: "Aurora AI", role: "AI Consultant", photo: aiPhoto, bio: "Aurora provides data-driven insights and optimizations." },
];

const tabs = [
  { id: "who", label: "Who We Are" },
  { id: "mission", label: "Our Mission" },
  { id: "what", label: "What We Do" },
];

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState("who");

  return (
<section id="about" className="bg-black/40 py-12 md:py-16 rounded-3xl">
          <div className="mx-auto max-w-6xl text-center px-6">
        <h2 className="text-2xl font-bold mb-4 text-white">About Us</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full font-semibold transition w-fit text-sm
                ${
                  activeTab === tab.id
                    ? "bg-futuristic-green text-futuristic-dark shadow-lg"
                    : "bg-homepage-gray text-white hover:bg-futuristic-green/40"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto text-center px-4">
          {activeTab === "who" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
       <div
          key={member.name}
          className="bg-homepage-gray px-6 py-8 rounded-3xl shadow-lg flex flex-col items-center transition hover:scale-105"
       >

                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-3xl mb-4 shadow-md"
                  />
                  <h3 className="font-bold text-white text-lg">
                    {member.name}
                  </h3>
                  <p className="text-futuristic-green mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "mission" && (
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto mb-12">
              <div className="md:w-1/2">
                <img
                  src={missionImg}
                  alt="Our Mission"
                  className="w-full h-64 object-cover rounded-3xl shadow-md"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We create connected, intelligent homes that are simple,
                  secure, and sustainable. Automate routines and save energy
                  efficiently.
                </p>
              </div>
            </div>
          )}

          {activeTab === "what" && (
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-4xl mx-auto mb-12">
              <div className="md:w-1/2">
                <img
                  src={whatImg}
                  alt="What We Do"
                  className="w-full h-64 object-cover rounded-3xl shadow-md"
                />
              </div>
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  What We Do
                </h3>
                <p className="text-gray-300 mb-2 leading-relaxed">
                  We develop smart home solutions including lighting, climate
                  control, security, and multimedia systems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Users can control and monitor all devices seamlessly from
                  anywhere.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
