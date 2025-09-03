import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DevicesPage from "./pages/DevicesPage";
import LightsPage from "./pages/LightsPage";
import ThermostatPage from "./pages/ThermostatPage";
import SpeakersPage from "./pages/SpeakersPage";
import LocksPage from "./pages/LocksPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import CamerasPage from "./pages/CamerasPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/devices" element={<DevicesPage />} />
      <Route path="/devices/lights" element={<LightsPage />} />
      <Route path="/devices/thermostat" element={<ThermostatPage />} />
      <Route path="/devices/cameras" element={<CamerasPage />} />
      <Route path="/devices/speakers" element={<SpeakersPage />} />
      <Route path="/devices/locks" element={<LocksPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default App;
