# 🏠 SmartHome App

SmartHome App is a modern, responsive web application that allows users to manage and monitor their smart home devices from a single platform. Control lights, thermostats, cameras, speakers, and locks, while monitoring energy usage and accessing reports — all in one intuitive interface.

---

## 📦 Features

- **Device Control**: Toggle and configure lights, thermostats, cameras, speakers, and locks.
- **Real-Time Monitoring**: View live camera feeds and monitor device statuses instantly.
- **Energy Management**: Track energy usage and optimize consumption.
- **Reports & Analytics**: Get detailed insights about your smart home activities.
- **User-Friendly Interface**: Clean, modern design with responsive layouts for desktop and mobile.
- **Global Navigation**: Header menu and footer for easy navigation.
- **Support Pages**: Access Help, Privacy Policy, and Terms of Service pages directly from the footer.

---

## 🖥 Screenshots

<div align="center">
<img src="screenshots/homepage.png" alt="HomePage" width="300"/>
<img src="screenshots/devices.png" alt="DevicesPage" width="300"/>
<img src="screenshots/cameras.png" alt="CamerasPage" width="300"/>
</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn  

### Installation

```bash
git clone https://github.com/yourusername/smarthome-app.git
cd smarthome-app
npm install

🛠 Tech Stack

React 18 – UI library

React Router – Navigation

Zustand – State management

TailwindCSS – Styling

Lucide Icons – Icons

Vite – Build tool & dev server

🧩 Folder Structure
src/
├─ components/     # Reusable UI components (Header, Footer, Hero, FeatureCard)
├─ pages/          # Individual pages (Home, Devices, Lights, etc.)
├─ store/          # Zustand global store
├─ App.jsx         # Main app routes & layout
├─ index.jsx       # Entry point
└─ index.css       # Tailwind styles

🔗 Navigation

Header Menu: Access devices, reports, settings, and subpages directly.

Footer Links: Help, Privacy Policy, Terms of Service, and social links.

Scroll-to-top: Automatic scroll to top on route change for seamless navigation.

⚡ Features Mock Data

Lights: Toggle ON/OFF, adjust brightness, pick colors.

Thermostats: Set temperature and mode per zone.

Cameras: Live feed, toggle camera & mic.

Locks: Lock/unlock doors, track locked status.

Speakers: Toggle ON/OFF, adjust volume.

