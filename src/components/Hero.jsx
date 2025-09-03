const Hero = () => (
  <section className="text-center py-12 px-4 bg-gray-800 text-white">
    <h1 className="text-4xl font-bold mb-4">Manage Your Home with Smart Home App</h1>
    <p className="text-lg mb-6">Control your smart home devices and optimize energy usage with our intuitive app.</p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">Get Started</button>
    <div className="mt-8">
      {/* Aquí iría la ilustración del mockup del teléfono */}
      <div className="h-64 w-48 mx-auto bg-gray-700 rounded-lg flex items-center justify-center">
        <span>Mockup Phone</span>
      </div>
    </div>
  </section>
);

export default Hero;
