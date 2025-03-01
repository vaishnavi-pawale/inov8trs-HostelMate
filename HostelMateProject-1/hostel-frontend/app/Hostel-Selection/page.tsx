"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HostelSelection() {
  const [selectedHostel, setSelectedHostel] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-green-900">🏡 Select Your Hostel</h1>
        <p className="text-lg text-green-800 mt-2">Choose your hostel type to proceed.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Boys' Hostel */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer ${selectedHostel === "boys" ? "border-4 border-green-700" : ""}`}
          onClick={() => setSelectedHostel("boys")}
        >
          <h2 className="text-xl font-semibold text-green-900">👦 Boys' Hostel</h2>
          <p className="text-green-800 mt-2">Apply for a room in the Boys' Hostel.</p>
        </motion.div>

        {/* Girls' Hostel */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg text-center cursor-pointer ${selectedHostel === "girls" ? "border-4 border-green-700" : ""}`}
          onClick={() => setSelectedHostel("girls")}
        >
          <h2 className="text-xl font-semibold text-green-900">👩 Girls' Hostel</h2>
          <p className="text-green-800 mt-2">Apply for a room in the Girls' Hostel.</p>
        </motion.div>
      </div>

      {selectedHostel && (
        <Link href={`/apply/${selectedHostel}`}>
          <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md shadow-lg">
            Proceed to Application
          </button>
        </Link>
      )}
    </div>
  );
}
