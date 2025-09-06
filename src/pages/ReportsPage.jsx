import { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const mockData = {
  lights: { usageHours: 120, avgBrightness: 65, cost: 14.5 },
  thermostats: { usageHours: 200, avgTemp: 22, cost: 30.2 },
  cameras: { activeHours: 50, incidents: 2 },
  locks: { lockedPercentage: 85 },
  speakers: { usageHours: 90 },
};

const mockMonthlyData = {
  lights: Array.from({ length: 30 }, (_, i) => ({ day: i + 1, usageHours: Math.floor(Math.random() * 5 + 1) })),
  thermostats: Array.from({ length: 30 }, (_, i) => ({ day: i + 1, usageHours: Math.floor(Math.random() * 10 + 1) })),
  cameras: Array.from({ length: 30 }, (_, i) => ({ day: i + 1, status: Math.random() > 0.2 ? 2 : 1 })),
  speakers: Array.from({ length: 30 }, (_, i) => ({ day: i + 1, usageHours: Math.floor(Math.random() * 6) })),
};

const pieColors = ['#4ade80', '#f87171', '#60a5fa', '#facc15'];

const MonthlyUsageChart = ({ data, device, color, isCamera }) => (
  <div className="bg-futuristic-gray p-6 rounded-3xl shadow-lg flex flex-col" style={{ minHeight: '250px' }}>
    <h3 className="text-lg font-semibold mb-4 text-white">{device} - Last 30 Days</h3>
    <ResponsiveContainer width="100%" height={200}>
      {isCamera ? (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 40 }}>
          <CartesianGrid stroke="#333" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#a3f0ba" label={{ position: 'bottom', offset: 20 }} />
          <YAxis stroke="#a3f0ba" label={{ value: 'On / Off', angle: -90, position: 'insideLeft', offset: 10 }} domain={[0, 2]} />
          <Tooltip formatter={(value) => (value === 2 ? 'On' : 'Off')} />
          <Legend />
          <Line type="monotone" dataKey="status" stroke={color} strokeWidth={2} />
        </LineChart>
      ) : (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 40 }}>
          <CartesianGrid stroke="#333" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#a3f0ba" label={{ position: 'bottom', offset: 20 }} />
          <YAxis stroke="#a3f0ba" label={{ value: 'Hours', angle: -90, position: 'insideLeft', offset: 10 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="usageHours" stroke={color} strokeWidth={2} />
        </LineChart>
      )}
    </ResponsiveContainer>
  </div>
);

const Recommendations = () => (
  <div className="bg-futuristic-gray p-4 sm:p-6 rounded-3xl shadow-lg mx-auto" style={{ maxWidth: '500px', width: '100%' }}>
    <h3 className="text-xl font-semibold mb-4 text-futuristic-green">Recommendations</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-300">
      <li>Reduce lights usage in unused rooms to save energy.</li>
      <li>Set thermostats to eco mode during night or absence.</li>
      <li>Consider using energy saver mode for devices during weekends.</li>
    </ul>
  </div>
);

const AutoAIPilot = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="bg-futuristic-gray p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col space-y-3 mx-auto" style={{ maxWidth: '400px', width: '100%' }}>
      <h3 className="text-xl font-semibold text-futuristic-green">Auto AI Pilot</h3>
      <p className="text-gray-300 text-sm">
        Automatically adjusts device settings based on usage patterns and energy efficiency. Can turn devices on/off as needed.
      </p>
      <button
        className={`px-4 py-2 rounded-xl text-white font-semibold ${enabled ? 'bg-green-500' : 'bg-red-500'}`}
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Enabled' : 'Disabled'}
      </button>
    </div>
  );
};

const ReportsPage = () => {
  return (
    <div
      className="flex flex-col bg-futuristic-dark text-futuristic-green px-4 py-8"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <main className="flex-grow max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Smart Home Usage Reports
        </h2>

        {/* Charts Flex Container */}
        <div className="flex flex-wrap -mx-3 gap-6 justify-center">
          {[
            { data: mockMonthlyData.lights, device: 'Lights', color: '#4ade80' },
            { data: mockMonthlyData.thermostats, device: 'Thermostats', color: '#60a5fa' },
            { data: mockMonthlyData.cameras, device: 'Cameras', color: '#f87171', isCamera: true },
            { data: mockMonthlyData.speakers, device: 'Speakers', color: '#facc15' },
          ].map((chart, index) => (
            <div key={index} className="w-full sm:w-[48%] px-3">
              <MonthlyUsageChart
                data={chart.data}
                device={chart.device}
                color={chart.color}
                isCamera={chart.isCamera}
              />
            </div>
          ))}
        </div>

        {/* Weekly Overview Table + Pie Chart */}
        <div className="bg-futuristic-gray p-4 sm:p-6 rounded-3xl shadow-lg overflow-auto">
          <h3 className="text-xl font-semibold mb-4 text-white">Weekly Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(mockData).map(([device, stats]) => (
              <div key={device} className="bg-futuristic-dark p-3 rounded-xl flex flex-col space-y-2">
                <h4 className="text-white font-semibold">{device.charAt(0).toUpperCase() + device.slice(1)}</h4>
                {stats.usageHours !== undefined && <p>Usage Hours: {stats.usageHours}h</p>}
                {stats.avgBrightness !== undefined && <p>Avg Brightness: {stats.avgBrightness}%</p>}
                {stats.avgTemp !== undefined && <p>Avg Temp: {stats.avgTemp}°C</p>}
                {stats.lockedPercentage !== undefined && <p>Locked: {stats.lockedPercentage}%</p>}
                {stats.incidents !== undefined && <p>Incidents: {stats.incidents}</p>}
                {stats.cost !== undefined && <p>Cost: ${stats.cost.toFixed(2)}</p>}
                <p>Status: {Math.random() > 0.5 ? 'Stable' : 'Alert'}</p>
              </div>
            ))}

            <div className="bg-futuristic-dark p-3 rounded-xl flex flex-col items-center justify-center">
              <h4 className="text-white font-semibold mb-2">Usage Distribution 30days</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={Object.entries(mockData)
                      .filter(([_, stats]) => stats.usageHours !== undefined)
                      .map(([device, stats]) => ({ name: device, value: stats.usageHours }))}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {Object.entries(mockData)
                      .filter(([_, stats]) => stats.usageHours !== undefined)
                      .map(([device], index) => (
                        <Cell key={device} fill={pieColors[index % pieColors.length]} />
                      ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recommendations & Auto AI Pilot */}
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-full sm:w-[48%] max-w-[500px]">
            <Recommendations />
          </div>
          <div className="w-full sm:w-[48%] max-w-[400px]">
            <AutoAIPilot />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportsPage;
