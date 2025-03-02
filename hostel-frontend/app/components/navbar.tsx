"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="text-2xl font-bold flex items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            🌿 Hostel Allocation
          </motion.div>
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-green-700 lg:bg-transparent w-full lg:w-auto left-0 top-16 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0 lg:flex-row flex flex-col items-center`}
        >
          {[
            { name: "Home", href: "/" },
            { name: "Rooms", href: "/room-tab" },
            { name: "Book Now", href: "/Book-Now" },
            { name: "Community & Events", href: "/Community-Events" },
            { name: "Profile", href: "/Profile" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-lg px-4 py-2 hover:text-yellow-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
