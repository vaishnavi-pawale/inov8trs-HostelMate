"use client";

import { useState } from "react";
import { Calendar, MessageCircle, Megaphone, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  isUpcoming: boolean;
}

export default function CommunityEvents() {
  const [events] = useState<Event[]>([
    { id: 1, title: "Eco-Friendly Hostel Cleanup", date: "2025-03-05", description: "Join us in making our hostel greener!", isUpcoming: true },
    { id: 2, title: "Tech Hackathon Meetup", date: "2025-02-20", description: "A session to discuss upcoming hackathons.", isUpcoming: false },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-900">🌍 Community & Events</h1>
      <p className="text-lg text-green-800 mt-2">Engage, participate, and stay updated with hostel activities.</p>

      {/* Sections */}
      <div className="w-full max-w-4xl space-y-6 mt-6">
        {/* Upcoming Events */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center text-green-900 mb-3">
            <Calendar className="mr-2" />
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          </div>
          {events.filter(event => event.isUpcoming).length > 0 ? (
            <ul className="space-y-4">
              {events.filter(event => event.isUpcoming).map(event => (
                <li key={event.id} className="border p-3 rounded-lg shadow">
                  <h3 className="text-green-900 font-bold">{event.title}</h3>
                  <p className="text-green-800">📅 {event.date}</p>
                  <p className="text-green-700">{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-800">No upcoming events.</p>
          )}
        </section>

        {/* Past Events */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center text-green-900 mb-3">
            <Users className="mr-2" />
            <h2 className="text-2xl font-semibold">Past Events Gallery</h2>
          </div>
          {events.filter(event => !event.isUpcoming).length > 0 ? (
            <ul className="space-y-4">
              {events.filter(event => !event.isUpcoming).map(event => (
                <li key={event.id} className="border p-3 rounded-lg shadow">
                  <h3 className="text-green-900 font-bold">{event.title}</h3>
                  <p className="text-green-800">📅 {event.date}</p>
                  <p className="text-green-700">{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-800">No past events available.</p>
          )}
        </section>

        {/* Announcements */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center text-green-900 mb-3">
            <Megaphone className="mr-2" />
            <h2 className="text-2xl font-semibold">Announcements</h2>
          </div>
          <p className="text-green-800">📢 Stay tuned for important hostel updates!</p>
        </section>
      </div>
    </div>
  );
}
