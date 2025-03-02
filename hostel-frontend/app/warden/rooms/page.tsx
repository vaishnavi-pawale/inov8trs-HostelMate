"use client";
import { useState } from "react";
import { Home, Search, Edit, Plus, CheckCircle, XCircle } from "lucide-react";

const roomsData = [
  { id: 101, block: "A", floor: 1, status: "Occupied", student: "Rahul Sharma" },
  { id: 102, block: "A", floor: 1, status: "Vacant", student: null },
  { id: 203, block: "B", floor: 2, status: "Occupied", student: "Priya Patel" },
  { id: 304, block: "C", floor: 3, status: "Vacant", student: null },
];

export default function ManageRooms() {
  const [rooms, setRooms] = useState(roomsData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-900 flex items-center">
        <Home className="mr-2" /> Manage Rooms
      </h1>
      <p className="text-lg text-green-800 mt-2">View, allocate, and update hostel room statuses.</p>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg mt-6">
        <input
          type="text"
          placeholder="Search by room number or block..."
          className="w-full px-4 py-2 rounded-full border border-green-400 shadow-md focus:outline-none"
        />
        <Search className="absolute top-2 right-3 text-green-800" />
      </div>

      {/* Rooms Table */}
      <div className="w-full max-w-4xl mt-6 bg-white bg-opacity-40 backdrop-blur-md rounded-xl shadow-lg p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-green-600 text-green-900">
              <th className="p-3">🏠 Room No.</th>
              <th className="p-3">🏢 Block</th>
              <th className="p-3">📍 Floor</th>
              <th className="p-3">📌 Status</th>
              <th className="p-3">👤 Student</th>
              <th className="p-3">🔄 Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-b border-green-400">
                <td className="p-3">{room.id}</td>
                <td className="p-3">{room.block}</td>
                <td className="p-3">{room.floor}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-white ${room.status === "Occupied" ? "bg-green-600" : "bg-gray-500"}`}>
                    {room.status}
                  </span>
                </td>
                <td className="p-3">{room.student ? room.student : "Not Assigned"}</td>
                <td className="p-3">
                  {room.status === "Vacant" ? (
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      <Plus className="inline mr-1 w-4 h-4" /> Allocate
                    </button>
                  ) : (
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
                      <Edit className="inline mr-1 w-4 h-4" /> Modify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Room Button */}
      <button className="mt-6 px-5 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition flex items-center">
        <Plus className="mr-2" /> Add New Room
      </button>
    </div>
  );
}
