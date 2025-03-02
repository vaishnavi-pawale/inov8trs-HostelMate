"use client";
import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { PlusCircle, LogOut } from "lucide-react";

interface Visitor {
  id: number;
  name: string;
  date: string;
  purpose: string;
  inTime: string;
  outTime?: string;
}

export default function VisitorLogs() {
  const [visitors, setVisitors] = useState<Visitor[]>([
    { id: 1, name: "Rahul Sharma", date: "2025-02-21", purpose: "Meeting Student", inTime: "10:30 AM" },
    { id: 2, name: "Anjali Verma", date: "2025-02-21", purpose: "Maintenance Work", inTime: "12:00 PM" },
  ]);

  const markExited = (id: number) => {
    setVisitors((prev) =>
      prev.map((visitor) => (visitor.id === id ? { ...visitor, outTime: new Date().toLocaleTimeString() } : visitor))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-900">📖 Visitor Logs</h1>
      <p className="text-lg text-green-800 mt-2">Track and manage visitor entries.</p>

      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6 w-full max-w-4xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>In-Time</TableHead>
              <TableHead>Out-Time</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visitors.map((visitor) => (
              <TableRow key={visitor.id} className="text-green-900">
                <TableCell>{visitor.name}</TableCell>
                <TableCell>{visitor.date}</TableCell>
                <TableCell>{visitor.purpose}</TableCell>
                <TableCell>{visitor.inTime}</TableCell>
                <TableCell>{visitor.outTime || "Still Inside"}</TableCell>
                <TableCell>
                  {!visitor.outTime && (
                    <Button
                      onClick={() => markExited(visitor.id)}
                      className="text-red-600 border-red-600 border"
                    >
                      <LogOut className="w-4 h-4 mr-2" /> Mark Exited
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 text-center">
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <PlusCircle className="w-5 h-5 mr-2" /> Add Visitor
          </Button>
        </div>
      </div>
    </div>
  );
}
