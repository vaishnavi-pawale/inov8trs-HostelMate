"use client";

import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Select, SelectItem } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { CheckCircle, Clock, XCircle } from "lucide-react";

interface Complaint {
    id: number;
    student: string;
    issue: string;
    status: string;
    response: string;
}

const complaintsData: Complaint[] = [
    { id: 1, student: "John Doe", issue: "Water leakage in room", status: "Pending", response: "" },
    { id: 2, student: "Jane Smith", issue: "WiFi not working", status: "In Progress", response: "Technician assigned" },
    { id: 3, student: "Alice Johnson", issue: "Bed broken", status: "Resolved", response: "Fixed" },
];

export default function WardenComplaints() {

interface Complaint {
    id: number;
    student: string;
    issue: string;
    status: string;
    response: string;
}

const complaintsData: Complaint[] = [
    { id: 1, student: "John Doe", issue: "Water leakage in room", status: "Pending", response: "" },
    { id: 2, student: "Jane Smith", issue: "WiFi not working", status: "In Progress", response: "Technician assigned" },
    { id: 3, student: "Alice Johnson", issue: "Bed broken", status: "Resolved", response: "Fixed" },
];

  const [complaints, setComplaints] = useState(complaintsData);

const updateComplaint = (id: number, status: string, response: string) => {
    setComplaints(
        complaints.map((complaint) =>
            complaint.id === id ? { ...complaint, status, response } : complaint
        )
    );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-900 mb-6">📜 Manage Complaints</h1>
      <div className="w-full max-w-4xl grid gap-6">
        {complaints.map((complaint) => (
          <Card key={complaint.id} className="bg-white p-4 rounded-lg shadow-md">
            <CardContent>
              <h2 className="text-xl font-semibold text-green-900">🧑 {complaint.student}</h2>
              <p className="text-green-800 mt-2">🔹 {complaint.issue}</p>
              <div className="mt-4 flex justify-between items-center">
                <Select
                  defaultValue={complaint.status}
                  onValueChange={(value: string) => updateComplaint(complaint.id, value, complaint.response)}
                >
                  <SelectItem value="Pending" label="⏳ Pending" onClick={() => {}} />
                  <SelectItem value="In Progress" label="🛠 In Progress" onClick={() => {}} />
                  <SelectItem value="Resolved" label="✅ Resolved" onClick={() => {}} />
                </Select>
                {complaint.status === "Resolved" ? (
                  <CheckCircle className="text-green-600" />
                ) : complaint.status === "In Progress" ? (
                  <Clock className="text-yellow-600" />
                ) : (
                  <XCircle className="text-red-600" />
                )}
              <div className="mt-4">
                <Textarea
                  value={complaint.response}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateComplaint(complaint.id, complaint.status, e.target.value)}
                />
              </div>
              <Button className="mt-4 bg-green-700 text-white" onClick={() => alert("Response Saved!")}>Save</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
