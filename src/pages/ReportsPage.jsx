import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const mockData = {
  lights: { usageHours: 120, avgBrightness: 65, cost: 14.5 },
  thermostats: { usageHours: 200, avgTemp: 22, cost: 30.2 },
  cameras: { activeHours: 50, incidents: 2 },
  locks: { lockedPercentage: 85 },
};

const pieColors = ['#4ade80', '#f87171', '#60a5fa', '#facc15'];

const ReportsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-futuristic-dark text-futuristic-green">
      <main className="flex-grow p-4 sm:p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Smart Home Usage Reports
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Lights Card */}
          <div className="bg-gradient-to-br from-futuristic-gray to-futuristic-dark p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col min-h-[220px]">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-futuristic-green">Lights</h3>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Hours On: {mockData.lights.usageHours}h</p>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Avg Brightness: {mockData.lights.avgBrightness}%</p>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">Cost: ${mockData.lights.cost.toFixed(2)}</p>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[{ name: 'Lights', hours: mockData.lights.usageHours }]}>
                  <Bar dataKey="hours" fill="#4ade80" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Thermostats Card */}
          <div className="bg-gradient-to-br from-futuristic-gray to-futuristic-dark p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col min-h-[220px]">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-futuristic-green">Thermostats</h3>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Usage Hours: {mockData.thermostats.usageHours}h</p>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Avg Temp: {mockData.thermostats.avgTemp}°C</p>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">Cost: ${mockData.thermostats.cost.toFixed(2)}</p>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[{ name: 'Thermostats', hours: mockData.thermostats.usageHours }]}>
                  <Bar dataKey="hours" fill="#60a5fa" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cameras Card */}
          <div className="bg-gradient-to-br from-futuristic-gray to-futuristic-dark p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col min-h-[220px] items-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-futuristic-green">Cameras</h3>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Active Hours: {mockData.cameras.activeHours}h</p>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">Incidents: {mockData.cameras.incidents}</p>
            <div className="w-24 sm:w-32 h-24 sm:h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Active', value: mockData.cameras.activeHours },
                      { name: 'Inactive', value: 24 * 7 - mockData.cameras.activeHours }
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
          </div>

          {/* Locks Card */}
          <div className="bg-gradient-to-br from-futuristic-gray to-futuristic-dark p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col min-h-[220px] items-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-futuristic-green">Locks</h3>
            <div className="relative w-24 sm:w-28 h-24 sm:h-28">
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
              <div className="absolute inset-0 flex items-center justify-center text-futuristic-green font-semibold text-sm sm:text-base">
                {mockData.locks.lockedPercentage}%
              </div>
            </div>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">Locked Doors</p>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-futuristic-gray p-4 sm:p-6 rounded-3xl shadow-lg overflow-auto">
          <h3 className="text-xl font-semibold mb-4 text-futuristic-green">Weekly Overview</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b border-futuristic-dark text-futuristic-green">Device</th>
                <th className="p-2 border-b border-futuristic-dark text-futuristic-green">Usage Hours</th>
                <th className="p-2 border-b border-futuristic-dark text-futuristic-green">Avg Value</th>
                <th className="p-2 border-b border-futuristic-dark text-futuristic-green">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-futuristic-dark transition">
                <td className="p-2 border-b border-futuristic-dark">Lights</td>
                <td className="p-2 border-b border-futuristic-dark">{mockData.lights.usageHours}h</td>
                <td className="p-2 border-b border-futuristic-dark">{mockData.lights.avgBrightness}%</td>
                <td className="p-2 border-b border-futuristic-dark">${mockData.lights.cost.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-futuristic-dark transition">
                <td className="p-2 border-b border-futuristic-dark">Thermostats</td>
                <td className="p-2 border-b border-futuristic-dark">{mockData.thermostats.usageHours}h</td>
                <td className="p-2 border-b border-futuristic-dark">{mockData.thermostats.avgTemp}°C</td>
                <td className="p-2 border-b border-futuristic-dark">${mockData.thermostats.cost.toFixed(2)}</td>
              </tr>
              <tr className="hover:bg-futuristic-dark transition">
                <td className="p-2 border-b border-futuristic-dark">Cameras</td>
                <td className="p-2 border-b border-futuristic-dark">{mockData.cameras.activeHours}h</td>
                <td className="p-2 border-b border-futuristic-dark">{mockData.cameras.incidents}</td>
                <td className="p-2 border-b border-futuristic-dark">-</td>
              </tr>
              <tr className="hover:bg-futuristic-dark transition">
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
