const TermsOfServicePage = () => {
  return (
    <div
      className="flex flex-col bg-futuristic-dark text-futuristic-green px-4 py-12"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <main className="flex-grow max-w-5xl mx-auto bg-futuristic-gray/20 backdrop-blur-md rounded-3xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-futuristic-green">Terms of Service</h1>

        <p className="mb-4 text-gray-300">
          Welcome to SmartHome. By using our app, you agree to the following terms:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>You are responsible for all activity on your account.</li>
          <li>Do not attempt to reverse-engineer, hack, or misuse the app.</li>
          <li>SmartHome may update features or services at any time.</li>
          <li>We are not liable for damages resulting from improper use.</li>
        </ul>

        <p className="mt-6 text-gray-300">
          For complete details, contact <a href="mailto:support@smarthome.com" className="text-futuristic-green underline">support@smarthome.com</a>.
        </p>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
