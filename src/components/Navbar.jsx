import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaHome, FaBriefcase, FaUserTie, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 sticky top-0 z-50 shadow-lg transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <FaBriefcase className="text-white text-3xl" /> {/* Logo Icon */}
          <span>CareerLink</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="flex items-center text-white hover:text-gray-300 transition-all duration-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/jobs" className="flex items-center text-white hover:text-gray-300 transition-all duration-300">
            <FaBriefcase className="mr-2" /> Jobs
          </Link>
          <Link to="/employer" className="flex items-center text-white hover:text-gray-300 transition-all duration-300">
            <FaUserTie className="mr-2" /> Employer
          </Link>

          {user ? (
            <div className="flex items-center space-x-3">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-md">{user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all duration-300 flex items-center"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700 transition-all duration-300">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white p-4 space-y-4 animate-dropdown">
          <Link to="/" className="flex items-center block hover:text-gray-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/jobs" className="flex items-center block hover:text-gray-300">
            <FaBriefcase className="mr-2" /> Jobs
          </Link>
          <Link to="/employer" className="flex items-center block hover:text-gray-300">
            <FaUserTie className="mr-2" /> Employer
          </Link>

          {user ? (
            <div className="flex flex-col items-start space-y-2">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-md">{user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all duration-300 flex items-center"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="block flex items-center text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700 transition-all duration-300">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
