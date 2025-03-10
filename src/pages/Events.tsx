import React, { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

// Sample event data with 'type' field added
const events = [
  {
    id: 1,
    title: "Community Garden Workshop",
    date: "2025-04-15",
    time: "10:00 AM",
    location: "Central Park",
    type: "Cultural", // Event type
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
    type: "Cultural", // Event type
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
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    description: "Join us in keeping our community clean and beautiful.",
  },
  {
    id: 4,
    title: "Music in the Park",
    date: "2025-05-01",
    time: "5:00 PM",
    location: "Riverside Park",
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    description: "Evening of live music featuring local bands and artists.",
  },
  {
    id: 5,
    title: "Community Fitness Class",
    date: "2025-05-05",
    time: "8:00 AM",
    location: "Recreation Center",
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    description: "Free outdoor fitness class for all skill levels.",
  },
  {
    id: 6,
    title: "Food Festival",
    date: "2025-05-10",
    time: "11:00 AM",
    location: "Town Square",
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    description:
      "Celebrate local cuisine with food vendors and cooking demonstrations.",
  },
  {
    id: 7,
    title: "Book Club Meeting",
    date: "2025-05-15",
    time: "7:00 PM",
    location: "Public Library",
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    description:
      "Monthly book discussion group featuring contemporary literature.",
  },
  {
    id: 8,
    title: "Tech Workshop",
    date: "2025-05-20",
    time: "3:00 PM",
    location: "Innovation Hub",
    type: "Technical", // Event type
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    description:
      "Learn basic coding and digital skills from local tech experts.",
  },
  {
    id: 9,
    title: "Family Movie Night",
    date: "2025-05-25",
    time: "6:00 PM",
    location: "Community Center",
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    description: "Outdoor screening of family-friendly movies under the stars.",
  },
  {
    id: 10,
    title: "Farmers Market",
    date: "2025-05-30",
    time: "8:00 AM",
    location: "Market Square",
    type: "Cultural", // Event type
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
    description:
      "Weekly market featuring local produce, crafts, and artisanal goods.",
  },
];

export default function Events() {
  const [filter, setFilter] = useState("All"); // Filter state to manage event type selection

  // Filter events based on selected filter type
  const filteredEvents = events.filter(
    (event) => filter === "All" || event.type === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h1>

      {/* Filter dropdown */}
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

      {/* Event grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
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
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
