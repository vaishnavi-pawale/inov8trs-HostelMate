"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center justify-center p-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-green-900">🌿 Welcome to Your Dashboard</h1>
        <p className="text-lg text-green-800 mt-2">Manage your hostel applications and requests easily.</p>
      </motion.div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Apply for Hostel */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold text-green-900">🏠 Apply for Hostel</h2>
          <p className="text-green-800 mt-2">Choose your hostel and room preferences.</p>
          <Link href="/Apply">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
              Apply Now
            </button>
          </Link>
        </motion.div>

        {/* Choose Room (New Feature) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold text-green-900">🛏️ Choose Your Room</h2>
          <p className="text-green-800 mt-2">Select your preferred room and confirm your choice.</p>
          <Link href="/room-selection">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
              Choose Room
            </button>
          </Link>
        </motion.div>

        {/* Check Application Status */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold text-green-900">📄 Application Status</h2>
          <p className="text-green-800 mt-2">Track your hostel application progress.</p>
          <Link href="/Status">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
              Check Status
            </button>
          </Link>
        </motion.div>

        {/* Request Room Change */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold text-green-900">🔄 Request Room Change</h2>
          <p className="text-green-800 mt-2">Not happy with your room? Request a change.</p>
          <Link href="/Room-change">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
              Request Change
            </button>
          </Link>
        </motion.div>

        {/* Raise Complaint */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold text-green-900">⚠ Raise a Complaint</h2>
          <p className="text-green-800 mt-2">Facing any issue? Let us know.</p>
          <Link href="/Complaint">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
              Raise Issue
            </button>
          </Link>
        </motion.div>

        {/* Leave Request */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold text-green-900">🏃 Leave Request</h2>
          <p className="text-green-800 mt-2">Leaving hostel temporarily? Apply for leave.</p>
          <Link href="/leave">
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
              Apply Leave
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
