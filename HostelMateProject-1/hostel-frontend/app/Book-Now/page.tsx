"use client";

import { useState } from "react";
import { MapPin, HelpCircle, MessageSquare, FileText } from "lucide-react";

const tabs = [
  { name: "Booking Guidelines", icon: FileText },
  { name: "Confirmation Status", icon: FileText },
  { name: "Hostel Location & Map", icon: MapPin },
  { name: "FAQ Section", icon: HelpCircle },
  { name: "Live Chat Support", icon: MessageSquare },
  { name: "Special Requests", icon: FileText },
];

export default function BookNowPage() {
  const [activeTab, setActiveTab] = useState("Booking Guidelines");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-900">📖 Book Your Room</h1>
      <p className="text-lg text-green-800 mt-2">Follow the steps to book your hostel room.</p>

      {/* Tabs Navigation */}
      <div className="flex space-x-4 mt-6 bg-white bg-opacity-30 p-2 rounded-xl shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center px-4 py-2 rounded-lg transition ${
              activeTab === tab.name ? "bg-green-700 text-white" : "bg-white text-green-900"
            }`}
          >
            <tab.icon className="w-5 h-5 mr-2" /> {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6">
        {activeTab === "Booking Guidelines" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">📝 Booking Guidelines</h2>
            <p className="text-green-800">Follow these steps to successfully book your hostel room:</p>
            <ul className="list-decimal list-inside text-green-800 mt-3">
              <li>Check room availability.</li>
              <li>Fill in the booking application form.</li>
              <li>Submit the required documents.</li>
              <li>Await confirmation from hostel administration.</li>
              <li>Complete the move-in formalities.</li>
            </ul>
          </div>
        )}

        {activeTab === "Confirmation Status" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">✅ Booking Confirmation Status</h2>
            <p className="text-green-800">Check your booking request status. Approved bookings will receive a confirmation email.</p>
          </div>
        )}

        {activeTab === "Hostel Location & Map" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">📍 Hostel Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?..."
              className="w-full h-64 mt-4 rounded-lg shadow-md"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}

        {activeTab === "FAQ Section" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">❓ Frequently Asked Questions</h2>
            <div className="mt-4 text-green-800">
              <p><strong>Q: Can I change my room after booking?</strong></p>
              <p>A: Room change requests can be made within the first week of move-in.</p>
              <p className="mt-3"><strong>Q: Is the booking refundable?</strong></p>
              <p>A: Refund policies depend on the hostel administration.</p>
              <p className="mt-3"><strong>Q: What if my booking is not confirmed?</strong></p>
              <p>A: Contact the hostel office for further assistance.</p>
              <p className="mt-3"><strong>Q: Are visitors allowed?</strong></p>
              <p>A: Visitors are allowed only in common areas during specified hours.</p>
            </div>
          </div>
        )}

        {activeTab === "Live Chat Support" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">💬 Live Chat Support</h2>
            <p className="text-green-800">Need help? Chat with our support team for assistance.</p>
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg shadow-md">Start Chat</button>
          </div>
        )}

        {activeTab === "Special Requests" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">✍️ Special Requests</h2>
            <textarea
              className="w-full p-3 mt-3 border rounded-lg focus:outline-none focus:ring focus:border-green-700"
              placeholder="Enter your special request here..."
            ></textarea>
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg shadow-md">Submit Request</button>
          </div>
        )}
      </div>
    </div>
  );
}
