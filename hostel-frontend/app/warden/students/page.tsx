"use client";
import { useState } from "react";
import { Users, Search, RefreshCw, Home } from "lucide-react";

const studentsData = [
  { id: 1, name: "Rahul Sharma", room: "A-101", hostel: "Boys", status: "Occupied" },
  { id: 2, name: "Priya Patel", room: "G-204", hostel: "Girls", status: "Occupied" },
  { id: 3, name: "Amit Verma", room: "A-303", hostel: "Boys", status: "Vacant" },
];

export default function ManageStudents() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-900 flex items-center">
        <Home className="mr-2" /> Manage Allocated Rooms
      </h1>
      <p className="text-lg text-green-800 mt-2">View and update student room allocations.</p>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg mt-6">
        <input
          type="text"
          placeholder="Search by student name or room..."
          className="w-full px-4 py-2 rounded-full border border-green-400 shadow-md focus:outline-none"
        />
        <Search className="absolute top-2 right-3 text-green-800" />
      </div>

      {/* Students Table */}
      <div className="w-full max-w-4xl mt-6 bg-white bg-opacity-40 backdrop-blur-md rounded-xl shadow-lg p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-green-600 text-green-900">
              <th className="p-3">👤 Student Name</th>
              <th className="p-3">🏠 Room</th>
              <th className="p-3">🏢 Hostel</th>
              <th className="p-3">📌 Status</th>
              <th className="p-3">🔄 Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-green-400">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.room}</td>
                <td className="p-3">{student.hostel}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-white ${student.status === "Occupied" ? "bg-green-600" : "bg-gray-500"}`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">Reassign</button>
                  <button className="px-3 py-1 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Refresh Button */}
      <button className="mt-6 px-5 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition flex items-center">
        <RefreshCw className="mr-2" /> Refresh Data
      </button>
    </div>
  );
}
