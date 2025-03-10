import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

// Sample event data with 10 events
const events = [
  {
    id: 1,
    title: "Community Garden Workshop",
    date: "2025-04-15",
    time: "10:00 AM",
    location: "Central Park",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    description:
      "Learn sustainable gardening practices and help maintain our community garden.",
  },
  {
    id: 2,
    title: "Local Art Exhibition",
    date: "2025-04-20",
    time: "2:00 PM",
    location: "Community Center",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
    description:
      "Showcase of local artists featuring paintings, sculptures, and photography.",
  },
  {
    id: 3,
    title: "Neighborhood Cleanup Drive",
    date: "2025-04-25",
    time: "9:00 AM",
    location: "Main Street",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    description: "Join us in keeping our community clean and beautiful.",
  },
  {
    id: 4,
    title: "Tech Conference 2025",
    date: "2025-05-05",
    time: "10:00 AM",
    location: "Tech Hub Arena",
    type: "Technical",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description:
      "A conference showcasing the latest advancements in technology and AI.",
  },
  {
    id: 5,
    title: "Startup Pitch Fest",
    date: "2025-05-10",
    time: "4:00 PM",
    location: "Innovation Hub",
    type: "Technical",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    description: "An event for startups to pitch their ideas to investors.",
  },
  {
    id: 6,
    title: "Food Festival",
    date: "2025-05-20",
    time: "12:00 PM",
    location: "Downtown Plaza",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "Experience a variety of cuisines from around the world.",
  },
  {
    id: 7,
    title: "Robotics Workshop",
    date: "2025-06-01",
    time: "10:00 AM",
    location: "STEM Lab",
    type: "Technical",
    image: "https://images.unsplash.com/photo-1581092336926-52a2a7c9f3f3",
    description: "Hands-on robotics and automation training for beginners.",
  },
  {
    id: 8,
    title: "Music Night Festival",
    date: "2025-06-10",
    time: "7:00 PM",
    location: "City Park",
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548",
    description:
      "An open-air music festival featuring local bands and artists.",
  },
  {
    id: 9,
    title: "AI & ML Bootcamp",
    date: "2025-06-15",
    time: "9:00 AM",
    location: "Tech Institute",
    type: "Technical",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description:
      "Learn artificial intelligence and machine learning from industry experts.",
  },
  {
    id: 10,
    title: "Entrepreneurship Summit",
    date: "2025-06-20",
    time: "3:00 PM",
    location: "Business Convention Center",
    type: "Technical",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    description:
      "A gathering of successful entrepreneurs sharing their journey and tips.",
  },
];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const filteredEvents = events.filter(
    (event) => filter === "All" || event.type === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
      <div className="mb-6">
        <label className="text-gray-600 font-semibold mr-2">
          Filter by Type:
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Events</option>
          <option value="Cultural">Cultural</option>
          <option value="Technical">Technical</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? [...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  </div>
                  <div className="h-20 bg-gray-300 rounded mb-4"></div>
                </div>
              </div>
            ))
          : filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}