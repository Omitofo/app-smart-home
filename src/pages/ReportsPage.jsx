import Header from '../components/Header';
import Footer from '../components/Footer';

const ReportsPage = () => (
  <div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <Header />
    <main className="flex-grow p-4">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <p>Here you can see detailed energy usage reports (mockup).</p>
    </main>
    <Footer />
  </div>
);

export default ReportsPage;
