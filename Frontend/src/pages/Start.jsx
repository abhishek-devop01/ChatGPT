import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      {/* Header */}
      <header className="absolute top-6 left-6 text-2xl font-bold">
        ChatGPT Clone
      </header>

      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-green-400">ChatGPT Clone</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Your personal AI assistant — Chat with AI, explore conversations, and
          get instant answers in real-time.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-black shadow-lg transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 border border-green-400 text-green-400 rounded-xl font-semibold hover:bg-green-400 hover:text-black transition-all"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} ChatGPT Clone. Built with ❤️
      </footer>
    </div>
  );
};

export default Start;
