"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    category: "Maintenance",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Complaint submitted successfully!");
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
        <h1 className="text-3xl font-bold text-green-900">⚠ Raise a Complaint</h1>
        <p className="text-lg text-green-800 mt-2">Report any issue in the hostel.</p>
      </motion.div>

      {/* Form */}
      <motion.form
        whileHover={{ scale: 1.02 }}
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md w-full text-green-900"
      >
        <label className="block mb-2 font-semibold">📂 Complaint Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        >
          <option value="Maintenance">Maintenance</option>
          <option value="Noise">Noise</option>
          <option value="Facilities">Facilities</option>
          <option value="Other">Other</option>
        </select>

        <label className="block mt-4 mb-2 font-semibold">✍ Describe Your Issue</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md w-full"
        >
          ✅ Submit Complaint
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
