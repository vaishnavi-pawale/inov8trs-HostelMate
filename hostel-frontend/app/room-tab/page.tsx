"use client";

import { useState } from "react";
import { Image, List, ClipboardCheck, Brush, FileText } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabs = [
  { name: "Facilities & Amenities", icon: List },
  { name: "Gallery", icon: Image },
  { name: "Rules & Guidelines", icon: ClipboardCheck },
  { name: "Cleaning Schedule", icon: Brush },
  { name: "Inspection Reports", icon: FileText },
];

const roomImages = [
  "/images/room1.png",
  "/images/room2.png",
  "/images/room3.png",
  "/images/room4.png",
];

export default function RoomsPage() {
  const [activeTab, setActiveTab] = useState("Facilities & Amenities");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-green-900">🏠 Hostel Rooms</h1>
      <p className="text-lg text-green-800 mt-2">Explore room options and facilities.</p>

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
        {activeTab === "Facilities & Amenities" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">🏢 Room Facilities</h2>
            <ul className="list-disc list-inside text-green-800 mt-3">
              <li>High-Speed WiFi</li>
              <li>Air Conditioning</li>
              <li>24/7 Security</li>
              <li>Laundry Service</li>
            </ul>
          </div>
        )}

        {activeTab === "Gallery" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">🖼 Room Gallery</h2>
            <Slider {...sliderSettings} className="mt-4">
              {roomImages.map((src, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={src}
                    alt={`Room ${index + 1}`}
                    className="rounded-xl shadow-lg w-full max-h-96 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {activeTab === "Rules & Guidelines" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">📜 Hostel Rules & Guidelines</h2>
            <ul className="list-disc list-inside text-green-800 mt-3 space-y-2">
              <li>Maintain cleanliness in rooms and common areas.</li>
              <li>No loud music or noise after <b>10:00 PM</b>.</li>
              <li>Visitors are allowed only in common areas and must leave by <b>8:00 PM</b>.</li>
              <li>Do not tamper with hostel property or electrical fittings.</li>
              <li>Always lock your room when leaving.</li>
              <li>Smoking, alcohol, and drugs are strictly prohibited.</li>
              <li>Curfew time is <b>10:30 PM</b>; late entry requires special permission.</li>
              <li>Failure to follow rules may lead to disciplinary action.</li>
            </ul>
          </div>
        )}

        {activeTab === "Cleaning Schedule" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">🧹 Cleaning Schedule</h2>
            <p className="text-green-800">Scheduled cleaning details will be shown here.</p>
          </div>
        )}

        {activeTab === "Inspection Reports" && (
          <div>
            <h2 className="text-xl font-semibold text-green-900">📄 Inspection Reports</h2>
            <p className="text-green-800">Latest room inspections and reports.</p>
          </div>
        )}
      </div>
    </div>
  );
}
