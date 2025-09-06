import { useState } from "react";
import ContactUs from "../components/ContactUs";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "How do I add a new device?",
    answer: "Go to the Devices page, click 'Add Device', and follow the instructions."
  },
  {
    question: "How can I monitor energy usage?",
    answer: "Visit the Reports page to see detailed analytics for each device."
  },
  {
    question: "Can I control devices remotely?",
    answer: "Yes, all devices can be managed through the app from anywhere."
  },
  {
    question: "How do I reset a password?",
    answer: "Go to Settings > Account > Reset Password and follow the steps."
  },
];

const HelpPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
      <div
        className="flex flex-col bg-futuristic-dark text-futuristic-green px-4 py-12"
        style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
      >
        {/* Hero */}
      <div className="text-center mb-12">
        <FiHelpCircle className="mx-auto text-futuristic-green text-6xl mb-4 animate-pulse" />
        <h1 className="text-4xl text-white font-bold mb-2">Need Help?</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Browse common questions or reach out to our support team.
        </p>
      </div>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-futuristic-gray rounded-2xl shadow-lg p-4 cursor-pointer transition hover:bg-futuristic-green/10"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-futuristic-green">{faq.question}</h3>
                <FiChevronDown
                  className={`text-futuristic-green transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                />
              </div>
              {openFAQ === index && (
                <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Still need help?</h2>
        <p className="text-center text-gray-400 mb-6">
          Fill out the form below and our team will get back to you.
        </p>
        <ContactUs />
      </section>
    </div>
  );
};

export default HelpPage;
