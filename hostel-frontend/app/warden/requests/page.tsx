"use client";
import { useState } from "react";
import { ClipboardList, CheckCircle, XCircle } from "lucide-react";

interface Request {
    id: number;
    studentName: string;
    room: string;
    status: string;
}

interface HostelRequest extends Request {}

interface LeaveRequest extends Request {
    type: string;
}

interface Requests {
    hostel: HostelRequest[];
    leave: LeaveRequest[];
}

const dummyRequests: Requests = {
    hostel: [
        { id: 1, studentName: "Rahul Verma", room: "A-102", status: "Pending" },
        { id: 2, studentName: "Sanya Kapoor", room: "B-305", status: "Pending" },
    ],
    leave: [
        { id: 3, studentName: "Anjali Mehta", room: "C-201", type: "Leave", status: "Pending" },
        { id: 4, studentName: "Rohit Singh", room: "D-402", type: "Checkout", status: "Approved" },
    ],
};

export default function WardenRequests() {
    const [requests, setRequests] = useState<Requests>(dummyRequests);

    const handleAction = (category: keyof Requests, id: number, newStatus: string) => {
        setRequests({
            ...requests,
            [category]: requests[category].map(req => (req.id === id ? { ...req, status: newStatus } : req)),
        });
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-400 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-900">📜 All Requests</h1>
      <p className="text-lg text-blue-800 mt-2">Approve, reject or review pending requests.</p>

      <div className="mt-6 w-full max-w-4xl space-y-8">
        {/* Hostel Requests */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-800">🏠 Hostel Applications</h2>
          {requests.hostel.length > 0 ? (
            requests.hostel.map((req) => (
              <div key={req.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{req.studentName}</p>
                  <p className="text-gray-600">Room: {req.room}</p>
                  <p className={`mt-1 font-medium ${req.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    Status: {req.status}
                  </p>
                </div>
                {req.status === "Pending" && (
                  <div className="flex gap-4">
                    <button className="text-green-600 hover:scale-110 transition" onClick={() => handleAction("hostel", req.id, "Approved")}>
                      <CheckCircle className="w-8 h-8" />
                    </button>
                    <button className="text-red-600 hover:scale-110 transition" onClick={() => handleAction("hostel", req.id, "Rejected")}>
                      <XCircle className="w-8 h-8" />
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center">No pending hostel requests.</p>
          )}
        </div>

        {/* Leave Requests */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-800">🚪 Leave & Checkout Requests</h2>
          {requests.leave.length > 0 ? (
            requests.leave.map((req) => (
              <div key={req.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{req.studentName}</p>
                  <p className="text-gray-600">Room: {req.room}</p>
                  <p className="text-gray-600">Request Type: {req.type}</p>
                  <p className={`mt-1 font-medium ${req.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    Status: {req.status}
                  </p>
                </div>
                {req.status === "Pending" && (
                  <button className="text-green-600 hover:scale-110 transition" onClick={() => handleAction("leave", req.id, "Approved")}>
                    <CheckCircle className="w-8 h-8" />
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center">No leave or checkout requests.</p>
          )}
        </div>
      </div>
    </div>
  );
}
