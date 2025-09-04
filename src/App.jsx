import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import DevicesPage from "./pages/DevicesPage";
import LightsPage from "./pages/LightsPage";
import ThermostatPage from "./pages/ThermostatPage";
import SpeakersPage from "./pages/SpeakersPage";
import LocksPage from "./pages/LocksPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import CamerasPage from "./pages/CamerasPage";
import HelpPage from "./pages/HelpPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

// Layout que envuelve todas las páginas con Header + Footer
const Layout = () => (
  <div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <Header />
    <main className="flex-grow p-4">
      <Outlet /> {/* Aquí se renderiza la página */}
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="devices/lights" element={<LightsPage />} />
          <Route path="devices/thermostat" element={<ThermostatPage />} />
          <Route path="devices/cameras" element={<CamerasPage />} />
          <Route path="devices/speakers" element={<SpeakersPage />} />
          <Route path="devices/locks" element={<LocksPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsOfServicePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
