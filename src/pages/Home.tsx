import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className=" rounded-lg relative h-[500px] flex items-center justify-center mb-16  "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Connecting People Across Faiths & interests
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Bridging diverse faiths and interests to foster unity and meaningful
            connections.
          </p>
          <Link
            to="/events"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Explore Events
          </Link>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Connect</h2>
            <p className="text-gray-600">
              Meet like-minded people in your community and build lasting
              relationships.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Learn</h2>
            <p className="text-gray-600">
              Discover new skills and share knowledge through community
              workshops.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Grow</h2>
            <p className="text-gray-600">
              Be part of something bigger and help your community thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
