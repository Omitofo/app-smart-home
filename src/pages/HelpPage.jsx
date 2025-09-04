
const HelpPage = () => {
  const faqs = [
    { q: "How do I add a new device?", a: "Go to Devices > Add Device, and follow the steps." },
    { q: "How do I reset a device?", a: "Click on the device and select 'Reset'. Make sure it's powered on." },
    { q: "Can I schedule lights to turn on/off?", a: "Yes, use the automation section under each light's settings." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">Help & FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h2 className="font-semibold text-lg mb-2">{faq.q}</h2>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HelpPage;
