"use client";
import { useState } from "react";
import { PlusCircle, Trash } from "lucide-react";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([
    { id: 1, title: "Hostel Cleaning Schedule", description: "Cleaning will be done every Sunday.", date: "2025-02-21" },
    { id: 2, title: "Electricity Maintenance", description: "Power outage on 25th Feb from 2 PM - 4 PM.", date: "2025-02-22" }
  ]);
  const [newNotice, setNewNotice] = useState({ title: "", description: "" });

  const addNotice = () => {
    if (!newNotice.title || !newNotice.description) return;
    const notice = { id: Date.now(), title: newNotice.title, description: newNotice.description, date: new Date().toISOString().split('T')[0] };
    setNotices([notice, ...notices]);
    setNewNotice({ title: "", description: "" });
  };

interface Notice {
    id: number;
    title: string;
    description: string;
    date: string;
}

interface NewNotice {
    title: string;
    description: string;
}

const deleteNotice = (id: number) => {
    setNotices(notices.filter((notice: Notice) => notice.id !== id));
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-900">📢 Notice Board</h1>
      <div className="bg-white p-6 rounded-xl shadow-md mt-4 w-full max-w-3xl">
        <input 
          type="text" 
          placeholder="Title" 
          value={newNotice.title} 
          onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} 
          className="w-full p-2 mb-2 border rounded" 
        />
        <textarea 
          placeholder="Description" 
          value={newNotice.description} 
          onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })} 
          className="w-full p-2 mb-2 border rounded"
        />
        <button onClick={addNotice} className="bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2">
          <PlusCircle size={18} /> Add Notice
        </button>
      </div>

      <div className="w-full max-w-3xl mt-6">
        {notices.length === 0 ? (
          <p className="text-center text-green-900">No notices available.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="bg-white p-4 rounded-xl shadow-md mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-green-900">{notice.title}</h2>
                <p className="text-green-800">{notice.description}</p>
                <small className="text-gray-600">📅 {notice.date}</small>
              </div>
              <button onClick={() => deleteNotice(notice.id)} className="text-red-600 hover:text-red-800">
                <Trash size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
