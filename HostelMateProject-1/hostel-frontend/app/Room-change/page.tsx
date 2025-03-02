"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoomChangeRequest() {
  const [formData, setFormData] = useState({
    currentRoom: "",
    preferredRoom: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Room change request submitted!");
    // Here you would send data to the backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center justify-center p-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-green-900">🔄 Request Room Change</h1>
        <p className="text-lg text-green-800 mt-2">Apply for a new room based on availability.</p>
      </motion.div>

      {/* Form */}
      <motion.form
        whileHover={{ scale: 1.02 }}
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md w-full text-green-900"
      >
        <label className="block mb-2 font-semibold">🏠 Current Room Number</label>
        <input
          type="text"
          name="currentRoom"
          value={formData.currentRoom}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <label className="block mt-4 mb-2 font-semibold">🛏 Preferred Room Number</label>
        <input
          type="text"
          name="preferredRoom"
          value={formData.preferredRoom}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <label className="block mt-4 mb-2 font-semibold">✍ Reason for Change</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md w-full"
        >
          ✅ Submit Request
        </button>
      </motion.form>

      {/* Back to Dashboard */}
      <Link href="/dashboard">
        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
          🔙 Back to Dashboard
        </button>
      </Link>
    </div>
  );
}
