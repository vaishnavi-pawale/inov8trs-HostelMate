"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, FileText, ClipboardCheck, ArrowLeftCircle } from "lucide-react";

export default function LeaveRequest() {
  const [formData, setFormData] = useState({
    leaveType: "Vacation",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Leave request submitted successfully!");
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
        <h1 className="text-3xl font-bold text-green-900 flex items-center gap-2">
          🏃 Apply for Leave
        </h1>
        <p className="text-lg text-green-800 mt-2">Request leave from hostel stay.</p>
      </motion.div>

      {/* Form */}
      <motion.form
        whileHover={{ scale: 1.02 }}
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md w-full text-green-900"
      >
        <label className="mb-2 font-semibold flex items-center gap-2">
          <FileText className="text-green-800" /> Leave Type
        </label>

        <select
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        >
          <option value="Vacation">Vacation</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Emergency">Emergency</option>
        </select>

        <label className="mt-4 mb-2 font-semibold flex items-center gap-2">
          <CalendarDays className="text-green-800" /> Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <label className="mt-4 mb-2 font-semibold flex items-center gap-2">
          <CalendarDays className="text-green-800" /> End Date
        </label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <label className="mt-4 mb-2 font-semibold flex items-center gap-2">
          <ClipboardCheck className="text-green-800" /> Reason
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-green-300 focus:ring-2 focus:ring-green-600 outline-none"
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md w-full flex items-center justify-center gap-2"
        >
          ✅ Submit Request
        </button>
      </motion.form>

      {/* Back to Dashboard */}
      <Link href="/dashboard">
        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <ArrowLeftCircle /> Back to Dashboard
        </button>
      </Link>
    </div>
  );
}
