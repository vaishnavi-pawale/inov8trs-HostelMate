"use client";

import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";

interface StudentProfile {
  personalInfo: { name: string; contact: string; gender: string; dob: string };
  hostelDetails: { hostelName: string; roomNumber: string; roomType: string };
  academicDetails: { course: string; year: string; enrollment: string; department: string };
  mealPreferences: { type: string; allergies: string; specialDiet: string };
  healthDetails: { conditions: string; emergencyContact: string; insurance: string };
  pastComplaints: { id: number; issue: string; status: string }[];
}

interface WardenProfile {
  personalInfo: { name: string; contact: string; gender: string; experience: string };
  hostelDetails: { hostelName: string; wardenID: string; assignedRooms: string };
  contactInfo: { email: string; phone: string };
  workSchedule: { shift: string; days: string };
  responsibilities: string[];
  complaintsSummary: { pending: number; resolved: number };
}

export default function ProfilePage() {
  const [userType, setUserType] = useState<"student" | "warden">("student");
  const [editing, setEditing] = useState<string | null>(null);

  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    personalInfo: { name: "John Doe", contact: "9876543210", gender: "Male", dob: "2002-05-15" },
    hostelDetails: { hostelName: "Green Residency", roomNumber: "B-101", roomType: "Double" },
    academicDetails: { course: "B.Tech IT", year: "2nd Year", enrollment: "VIT12345", department: "Information Technology" },
    mealPreferences: { type: "Vegetarian", allergies: "None", specialDiet: "Low Carb" },
    healthDetails: { conditions: "None", emergencyContact: "9876543211", insurance: "Yes" },
    pastComplaints: [
      { id: 1, issue: "Leaking Tap", status: "Resolved" },
      { id: 2, issue: "WiFi Issue", status: "Pending" }
    ]
  });

  const [wardenProfile, setWardenProfile] = useState<WardenProfile>({
    personalInfo: { name: "Dr. Smith", contact: "9876543215", gender: "Male", experience: "10 Years" },
    hostelDetails: { hostelName: "Green Residency", wardenID: "WRD-102", assignedRooms: "50" },
    contactInfo: { email: "warden.green@hostel.com", phone: "9876543215" },
    workSchedule: { shift: "Night", days: "Monday to Friday" },
    responsibilities: ["Overseeing hostel operations", "Handling complaints", "Ensuring discipline"],
    complaintsSummary: { pending: 5, resolved: 20 }
  });

  const handleEdit = (section: string) => setEditing(section);
  const handleSave = () => setEditing(null);
  const handleCancel = () => setEditing(null);

  type StudentSections = keyof StudentProfile;
  type WardenSections = keyof WardenProfile;

  const handleStudentProfileChange = (
    section: StudentSections,
    field: string,
    value: string
  ) => {
    setStudentProfile((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const handleWardenProfileChange = (
    section: WardenSections,
    field: string,
    value: string
  ) => {
    setWardenProfile((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const handleProfileChange = (
    section: StudentSections | WardenSections,
    field: string,
    value: string
  ) => {
    if (userType === "student") {
      handleStudentProfileChange(section as StudentSections, field, value);
    } else {
      handleWardenProfileChange(section as WardenSections, field, value);
    }
  };

  const profile = userType === "student" ? studentProfile : wardenProfile;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-900">👤 {userType === "student" ? "Student" : "Warden"} Profile</h1>
      <p className="text-lg text-green-800 mt-2">Manage your profile details.</p>

      <div className="w-full max-w-4xl bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6 space-y-6">
        {Object.entries(profile).map(([section, details]) => (
          <div key={section} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-xl font-semibold text-green-900 capitalize">{section.replace(/([A-Z])/g, ' $1')}</h2>
              {editing === section ? (
                <div className="flex space-x-2">
                  <button onClick={handleSave} className="text-green-700 hover:text-green-900"><Check /></button>
                  <button onClick={handleCancel} className="text-red-700 hover:text-red-900"><X /></button>
                </div>
              ) : (
                <button onClick={() => handleEdit(section)} className="text-blue-700 hover:text-blue-900"><Pencil /></button>
              )}
            </div>

            <div className="mt-3 space-y-2">
              {Array.isArray(details) ? (
                details.map((item, index) => (
                  <div key={index} className="border p-2 rounded-lg bg-gray-100">
                    {typeof item === "object"
                      ? Object.entries(item).map(([key, value]) => (
                          <p key={key} className="text-green-800 font-medium">{key}: {value as string}</p>
                        ))
                      : item}
                  </div>
                ))
              ) : (
                Object.entries(details).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-green-800 font-medium">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    {editing === section ? (
                      <input
                        className="border p-1 rounded"
                        value={value as string}
                        onChange={(e) => handleProfileChange(section as keyof StudentProfile | keyof WardenProfile, key, e.target.value)}
                      />
                    ) : (
                      <span className="text-green-900">{value as string}</span>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}