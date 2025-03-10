import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Calendar, MapPin, Clock } from "lucide-react";
// import menuBar from "./menuBar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import BasicMenu from "./menuBar";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  CommunityHub
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <div className="hidden md:flex space-x-4 lg:flex space-x-4">
                  <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Home
                  </Link>
                  <Link
                    to="/events"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Events
                  </Link>
                </div>
                <div className="md:hidden lg:hidden p-2 text-white rounded">
                  <BasicMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
