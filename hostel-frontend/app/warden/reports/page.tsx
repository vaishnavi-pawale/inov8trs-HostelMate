"use client";

import { Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, LineChart, BarChart as ReBarChart, PieChart, Pie, Cell } from "recharts";

// Sample data for charts
const studentData = [
  { name: "Allocated", value: 120 },
  { name: "Pending", value: 30 },
  { name: "Vacant Rooms", value: 50 },
];

const complaintsData = [
  { month: "Jan", complaints: 5 },
  { month: "Feb", complaints: 8 },
  { month: "Mar", complaints: 6 },
];

const attendanceData = [
  { day: "Mon", present: 90, absent: 10 },
  { day: "Tue", present: 85, absent: 15 },
  { day: "Wed", present: 88, absent: 12 },
];

const feeData = [
  { status: "Paid", value: 200 },
  { status: "Due", value: 50 },
  { status: "Pending", value: 30 },
];

const roomUsageData = [
  { type: "Single", usage: 50 },
  { type: "Double", usage: 80 },
  { type: "Dorm", usage: 150 },
];

const capacityData = [
  { month: "Jan", occupancy: 70 },
  { month: "Feb", occupancy: 75 },
  { month: "Mar", occupancy: 80 },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-900">📊 Reports & Analytics</h1>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-6">

        {/* Student Statistics Pie Chart */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-900">🏢 Student Room Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={studentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {studentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#2E7D32", "#FF9800", "#0097A7"][index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Complaints Trend Line Chart */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-red-900">⚠️ Complaint Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={complaintsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="complaints" stroke="#D32F2F" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Attendance Patterns */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900">📅 Attendance Patterns</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ReBarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#2E7D32" />
              <Bar dataKey="absent" fill="#D32F2F" />
            </ReBarChart>
          </ResponsiveContainer>
        </div>

        {/* Fee Payment Status */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-yellow-900">💰 Fee Payment Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={feeData} dataKey="value" nameKey="status" cx="50%" cy="50%" outerRadius={100} label>
                {feeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#2E7D32", "#FF9800", "#D32F2F"][index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Room Usage Statistics */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-purple-900">🏠 Room Usage Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ReBarChart data={roomUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#6A1B9A" />
            </ReBarChart>
          </ResponsiveContainer>
        </div>

        {/* Hostel Capacity */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-teal-900">🏢 Hostel Capacity Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={capacityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="occupancy" stroke="#0097A7" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
