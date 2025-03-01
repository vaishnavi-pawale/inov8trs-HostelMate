"use client";
import Link from "next/link";
import { ClipboardList, Users, Home, AlertTriangle, Megaphone, NotebookText, BarChart, CalendarCheck } from "lucide-react";

export default function WardenDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-900">👨‍💼 Warden Dashboard</h1>
      <p className="text-lg text-green-800 mt-2">Manage hostel applications and requests.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
        {/* View Requests */}
        <Link href="/warden/requests">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <ClipboardList className="mx-auto text-green-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-green-900 mt-2">📜 View Requests</h2>
            <p className="text-green-800 mt-2">Check pending hostel requests.</p>
          </div>
        </Link>

        {/* Manage Students */}
        <Link href="/warden/students">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <Users className="mx-auto text-green-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-green-900 mt-2">👥 Manage Students</h2>
            <p className="text-green-800 mt-2">View and manage allocated rooms.</p>
          </div>
        </Link>

        {/* Manage Rooms */}
        <Link href="/warden/rooms">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <Home className="mx-auto text-green-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-green-900 mt-2">🏢 Manage Rooms</h2>
            <p className="text-green-800 mt-2">View and update hostel room statuses.</p>
          </div>
        </Link>

        {/* Notice Board */}
        <Link href="/warden/notices">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <Megaphone className="mx-auto text-blue-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-blue-900 mt-2">📢 Notice Board</h2>
            <p className="text-blue-800 mt-2">View and manage hostel notices.</p>
          </div>
        </Link>

        {/* Visitor Logs */}
        <Link href="/warden/visitors">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <NotebookText className="mx-auto text-purple-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-purple-900 mt-2">📖 Visitor Logs</h2>
            <p className="text-purple-800 mt-2">Track and manage visitor entries.</p>
          </div>
        </Link>

        {/* View Complaints */}
        <Link href="/warden/complaints">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <AlertTriangle className="mx-auto text-red-600 w-10 h-10" />
            <h2 className="text-xl font-semibold text-red-700 mt-2">⚠️ View Complaints</h2>
            <p className="text-red-600 mt-2">Handle student complaints & issues.</p>
          </div>
        </Link>

        {/* Reports & Analytics */}
        <Link href="/warden/reports">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <BarChart className="mx-auto text-indigo-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-indigo-900 mt-2">📊 Reports & Analytics</h2>
            <p className="text-indigo-800 mt-2">View hostel statistics & insights.</p>
          </div>
        </Link>

        {/* Attendance / In-Out Register */}
        <Link href="/warden/Attendance">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
            <CalendarCheck className="mx-auto text-teal-900 w-10 h-10" />
            <h2 className="text-xl font-semibold text-teal-900 mt-2">📅 Attendance Register</h2>
            <p className="text-teal-800 mt-2">Track student in-out attendance.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
