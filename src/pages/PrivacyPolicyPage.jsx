const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-futuristic-dark text-futuristic-green px-4 py-12">
      <main className="flex-grow max-w-5xl mx-auto bg-futuristic-gray/20 backdrop-blur-md rounded-3xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-futuristic-green">Privacy Policy</h1>

        <p className="mb-4 text-gray-300">
          At SmartHome, your privacy is our top priority. We do not share your data with third parties without your explicit consent.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>We collect device usage data to enhance app performance and your experience.</li>
          <li>Your login credentials are encrypted and securely stored.</li>
          <li>You can request data deletion anytime via Settings.</li>
        </ul>

        <p className="mt-6 text-gray-300">
          By using SmartHome, you agree to this Privacy Policy.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
