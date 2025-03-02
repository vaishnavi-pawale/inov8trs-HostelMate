"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplicationStatus() {
  // Dummy data for now (replace with actual fetched data)
  const [application, setApplication] = useState({
    id: "HSTL12345",
    hostelName: "Greenwood Hostel",
    roomNumber: "B-202",
    paymentStatus: "Paid",
    approvalStatus: "Approved",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center justify-center p-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-green-900">📄 Application Status</h1>
        <p className="text-lg text-green-800 mt-2">Track the status of your hostel application.</p>
      </motion.div>

      {/* Status Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg text-center max-w-md w-full"
      >
        <h2 className="text-xl font-semibold text-green-900">Application ID: {application.id}</h2>
        <p className="text-green-800 mt-2">🏠 Hostel: {application.hostelName}</p>
        <p className="text-green-800 mt-2">🛏 Room: {application.roomNumber}</p>
        <p className="text-green-800 mt-2">💰 Payment: {application.paymentStatus}</p>
        <p className={`mt-2 font-semibold ${application.approvalStatus === "Approved" ? "text-green-700" : "text-red-700"}`}>
          ✅ Status: {application.approvalStatus}
        </p>
      </motion.div>

      {/* Back to Dashboard */}
      <Link href="/dashboard">
        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
          🔙 Back to Dashboard
        </button>
      </Link>
    </div>
  );
}
