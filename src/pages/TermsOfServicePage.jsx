
const TermsOfServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">Terms of Service</h1>
        <p className="mb-4 text-gray-300">
          Welcome to SmartHome. By using our app, you agree to the following terms:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>You are responsible for all activity on your account.</li>
          <li>Do not attempt to reverse-engineer or misuse the app.</li>
          <li>SmartHome may update features or services at any time.</li>
          <li>We are not liable for damages resulting from improper use.</li>
        </ul>
        <p className="mt-4 text-gray-300">
          For full details, contact support@smarthome.com.
        </p>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
