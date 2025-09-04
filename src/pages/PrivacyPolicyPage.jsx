
const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow px-4 py-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">Privacy Policy</h1>
        <p className="mb-4 text-gray-300">
          At SmartHome, your privacy is our priority. We do not share your data with third parties without consent.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>We collect device usage data to improve app performance.</li>
          <li>Your login information is encrypted and stored securely.</li>
          <li>You can request data deletion anytime via settings.</li>
        </ul>
        <p className="mt-4 text-gray-300">
          By using SmartHome, you agree to this Privacy Policy.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
