"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ChooseRoom() {
  const router = useRouter();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleConfirmSelection = () => {
    if (selectedRoom) {
      router.push("/hostel-application"); // Redirects to application page
    } else {
      alert("Please select a room before proceeding.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-green-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-green-900">🛏 Choose Your Room</h2>
        <p className="text-green-800 mt-2">Select a room from the available options.</p>

        {/* Room Options (Example) */}
        <div className="mt-4">
          <button
            className={`px-6 py-2 rounded-md m-2 ${selectedRoom === "203" ? "bg-green-800 text-white" : "bg-green-300"}`}
            onClick={() => setSelectedRoom("203")}
          >
            Room 203 (Single Bed)
          </button>
          <button
            className={`px-6 py-2 rounded-md m-2 ${selectedRoom === "204" ? "bg-green-800 text-white" : "bg-green-300"}`}
            onClick={() => setSelectedRoom("204")}
          >
            Room 204 (Double Bed)
          </button>
        </div>

        {/* Confirm Selection Button */}
        <button
          onClick={handleConfirmSelection}
          className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md"
        >
          Confirm Selection
        </button>
      </motion.div>
    </div>
  );
}
