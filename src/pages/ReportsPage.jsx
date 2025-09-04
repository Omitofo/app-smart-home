import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const mockData = {
  lights: { usageHours: 120, avgBrightness: 65, cost: 14.5 },
  thermostats: { usageHours: 200, avgTemp: 22, cost: 30.2 },
  cameras: { activeHours: 50, incidents: 2 },
  locks: { lockedPercentage: 85 },
};

const pieColors = ['#4ade80', '#f87171', '#60a5fa', '#facc15'];

const ReportsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

      <main className="flex-grow p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Smart Home Usage Reports</h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Lights Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Lights</h3>
            <p className="text-gray-400 mb-2">Hours On: {mockData.lights.usageHours}h</p>
            <p className="text-gray-400 mb-2">Avg Brightness: {mockData.lights.avgBrightness}%</p>
            <p className="text-gray-400 mb-4">Cost: ${mockData.lights.cost.toFixed(2)}</p>
            <ResponsiveContainer width="100%" height={80}>
              <BarChart data={[{ name: 'Lights', hours: mockData.lights.usageHours }]}>
                <Bar dataKey="hours" fill="#facc15" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Thermostats Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Thermostats</h3>
            <p className="text-gray-400 mb-2">Usage Hours: {mockData.thermostats.usageHours}h</p>
            <p className="text-gray-400 mb-2">Avg Temp: {mockData.thermostats.avgTemp}°C</p>
            <p className="text-gray-400 mb-4">Cost: ${mockData.thermostats.cost.toFixed(2)}</p>
            <ResponsiveContainer width="100%" height={80}>
              <BarChart data={[{ name: 'Thermostats', hours: mockData.thermostats.usageHours }]}>
                <Bar dataKey="hours" fill="#60a5fa" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Cameras Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Cameras</h3>
            <p className="text-gray-400 mb-2">Active Hours: {mockData.cameras.activeHours}h</p>
            <p className="text-gray-400 mb-2">Incidents: {mockData.cameras.incidents}</p>
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Active', value: mockData.cameras.activeHours },
                    { name: 'Inactive', value: 24*7 - mockData.cameras.activeHours }
                  ]}
                  innerRadius={20}
                  outerRadius={40}
                  dataKey="value"
                  paddingAngle={3}
                >
                  <Cell fill={pieColors[2]} />
                  <Cell fill={pieColors[1]} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Locks Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Locks</h3>
            <div className="relative w-24 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Locked', value: mockData.locks.lockedPercentage },
                      { name: 'Unlocked', value: 100 - mockData.locks.lockedPercentage }
                    ]}
                    innerRadius={30}
                    outerRadius={40}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill={pieColors[0]} />
                    <Cell fill={pieColors[1]} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                {mockData.locks.lockedPercentage}%
              </div>
            </div>
            <p className="mt-2 text-gray-400">Locked Doors</p>
          </div>
        </div>

        {/* Optional detailed report table */}
        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Weekly Overview</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b border-gray-700">Device</th>
                <th className="p-2 border-b border-gray-700">Usage Hours</th>
                <th className="p-2 border-b border-gray-700">Avg Value</th>
                <th className="p-2 border-b border-gray-700">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 transition">
                <td className="p-2 border-b border-gray-700">Lights</td>
                <td className="p-2 border-b border-gray-700">{mockData.lights.usageHours}h</td>
                <td className="p-2 border-b border-gray-700">{mockData.lights.avgBrightness}%</td>
                <td className="p-2 border-b border-gray-700">${mockData.lights.cost.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="p-2 border-b border-gray-700">Thermostats</td>
                <td className="p-2 border-b border-gray-700">{mockData.thermostats.usageHours}h</td>
                <td className="p-2 border-b border-gray-700">{mockData.thermostats.avgTemp}°C</td>
                <td className="p-2 border-b border-gray-700">${mockData.thermostats.cost.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="p-2 border-b border-gray-700">Cameras</td>
                <td className="p-2 border-b border-gray-700">{mockData.cameras.activeHours}h</td>
                <td className="p-2 border-b border-gray-700">{mockData.cameras.incidents}</td>
                <td className="p-2 border-b border-gray-700">-</td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="p-2">Locks</td>
                <td className="p-2">{mockData.locks.lockedPercentage}%</td>
                <td className="p-2">Locked Doors</td>
                <td className="p-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

    </div>
  );
};

export default ReportsPage;
