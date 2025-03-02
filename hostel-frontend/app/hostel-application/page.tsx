"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HostelApplication() {
  const router = useRouter();
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePayment = () => {
    setPaymentDone(true);
    setTimeout(() => {
      router.push("/payment-confirmation");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-green-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-green-900">🏠 Hostel Application</h2>
        <p className="text-green-800 mt-2">Complete your application and pay the required fees.</p>

        {/* Room Details */}
        <div className="mt-4 text-green-900">
          <p><strong>Room Selected:</strong> Room 203 (Single Bed)</p>
          <p><strong>Hostel Type:</strong> Boys' Hostel</p>
          <p><strong>Fees:</strong> ₹10,000</p>
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md"
        >
          {paymentDone ? "Processing..." : "Pay Now"}
        </button>
      </motion.div>
    </div>
  );
}
