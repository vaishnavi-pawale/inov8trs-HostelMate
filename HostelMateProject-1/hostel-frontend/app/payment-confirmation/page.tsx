"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PaymentConfirmation() {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-green-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-green-900">✅ Payment Successful</h2>
        <p className="text-green-800 mt-2">Your hostel application has been submitted successfully.</p>

        {/* Receipt Details */}
        <div className="mt-4 text-green-900">
          <p><strong>Room Assigned:</strong> Room 203 (Single Bed)</p>
          <p><strong>Transaction ID:</strong> TXN123456789</p>
          <p><strong>Amount Paid:</strong> ₹10,000</p>
        </div>

        {/* Return to Dashboard */}
        <button
          onClick={handleGoToDashboard}
          className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md"
        >
          Go to Dashboard
        </button>
      </motion.div>
    </div>
  );
}
