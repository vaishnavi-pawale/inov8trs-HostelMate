"use client";

import { useState } from "react";
import { Search, FileText, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

// Sample Attendance Data
const attendanceData = [
  { date: "2025-02-20", name: "John Doe", room: "101", status: "Check-in", time: "08:00 AM" },
  { date: "2025-02-20", name: "Jane Smith", room: "102", status: "Check-out", time: "06:00 PM" },
  { date: "2025-02-21", name: "Alex Johnson", room: "103", status: "Check-in", time: "09:00 AM" },
];

// Attendance Chart Data
const chartData = [
  { date: "Feb 18", checkins: 30, checkouts: 25 },
  { date: "Feb 19", checkins: 28, checkouts: 22 },
  { date: "Feb 20", checkins: 35, checkouts: 30 },
];

export default function AttendanceRegister() {
  const [search, setSearch] = useState("");

  // Filtered data based on search
  const filteredData = attendanceData.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-900">📌 Attendance / In-Out Register</h1>

      {/* Search & Export Options */}
      <div className="flex space-x-4 mt-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search student..."
            className="pl-10 pr-4 py-2 border rounded-lg shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600">
          <FileText className="w-5 h-5 mr-2" /> Export Data
        </button>
      </div>

      {/* Attendance Logs */}
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-green-900">📅 Attendance Logs</h2>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-2">Date</th>
              <th className="p-2">Name</th>
              <th className="p-2">Room No.</th>
              <th className="p-2">Status</th>
              <th className="p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry, index) => (
              <tr key={index} className="text-center border-b border-gray-300">
                <td className="p-2">{entry.date}</td>
                <td className="p-2">{entry.name}</td>
                <td className="p-2">{entry.room}</td>
                <td className={`p-2 font-semibold ${entry.status === "Check-in" ? "text-green-700" : "text-red-600"}`}>
                  {entry.status}
                </td>
                <td className="p-2">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Attendance Trend Graph */}
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-blue-900">📊 Attendance Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="checkins" fill="#2E7D32" name="Check-ins" />
            <Bar dataKey="checkouts" fill="#D32F2F" name="Check-outs" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
