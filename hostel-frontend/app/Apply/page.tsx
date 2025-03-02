'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Apply() {
  const [hostelType, setHostelType] = useState('');
  const [roomPreference, setRoomPreference] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostelType || !name || !email) {
      alert('Please fill all required fields!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
      <motion.h1
        className="text-3xl font-bold text-green-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🏠 Hostel Application
      </motion.h1>
      
      <Card className="w-full max-w-lg mt-6 shadow-lg">
        <CardContent className="p-6 text-gray-700">
          {submitted ? (
            <div className="text-center text-green-700 font-semibold">
              🎉 Application Submitted Successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Hostel Type</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={hostelType}
                  onChange={(e) => setHostelType(e.target.value)}
                  required
                >
                  <option value="">Select Hostel</option>
                  <option value="boys">Boys' Hostel</option>
                  <option value="girls">Girls' Hostel</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Room Preference</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={roomPreference}
                  onChange={(e) => setRoomPreference(e.target.value)}
                >
                  <option value="">No Preference</option>
                  <option value="single">Single Room</option>
                  <option value="shared">Shared Room</option>
                </select>
              </div>
              <Button type="submit" className="bg-green-500 hover:bg-green-700 w-full">Submit Application</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
