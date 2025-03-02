"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#FAF3E0]">
      
      {/* Title Animation */}
      <motion.h1
        className="text-5xl font-extrabold text-[#2E7D32] flex items-center space-x-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span>🏡</span> <span>HostelMate</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg text-[#6D4C41] max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Easily apply for hostel rooms & track your application with a seamless experience.
      </motion.p>

      {/* Login Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link href="/login">
          <button className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:scale-105 transition-transform text-white py-3 px-6 rounded-lg shadow-lg font-semibold">
            Login
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
