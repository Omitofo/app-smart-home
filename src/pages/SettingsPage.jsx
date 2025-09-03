import Header from '../components/Header';
import Footer from '../components/Footer';

const SettingsPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <Header />
    <main className="flex-grow p-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p>Settings page (mockup)</p>
    </main>
    <Footer />
  </div>
);

export default SettingsPage;
