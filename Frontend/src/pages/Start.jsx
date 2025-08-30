import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full mt-5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* Brand + (desktop) video */}
          <div className="flex items-center gap-3">
            <Link to="/" className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              GPT
            </Link>

            {/* Hide video on small screens */}
            <div className=" md:block">
              <video
                className="w-[68vw] md:w-[65vw] lg:w-[60vw] h-9 rounded-full object-cover"
                autoPlay
                muted
                loop
                // Use a direct .mp4 URL; many sites block hotlinking of "download" pages
                src="https://www.pexels.com/download/video/18069233/"
              />
            </div>
          </div>

          {/* Desktop actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full border border-gray-400 px-5 py-2 text-sm sm:text-base hover:bg-gray-400/20"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="rounded-full border border-gray-400 px-5 py-2 text-sm sm:text-base hover:bg-gray-400/20"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-gray-500/30"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {/* hamburger / close icons */}
            <svg className={`h-5 w-5 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg className={`h-5 w-5 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="sm:hidden pb-4">
            <div className="mt-2 flex flex-col gap-2">
              <Link
                to="/login"
                className="rounded-full border border-gray-400 px-4 py-2 text-base hover:bg-gray-400/20"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="rounded-full border border-gray-400 px-4 py-2 text-base hover:bg-gray-400/20"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>


      {/* Floating Images Section */}
      <div className="relative flex justify-center items-center mt-10">
        <img
          className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-2xl absolute top-3 left-10 sm:left-20"
          src="https://images.unsplash.com/photo-1755249583314-fec47e52ac42?q=80&w=387&auto=format&fit=crop"
          alt=""
        />
        <img
          className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-2xl absolute top-10 right-4 sm:right-20"
          src="https://images.unsplash.com/photo-1755511268115-a7a68109cc8b?q=80&w=387&auto=format&fit=crop"
          alt=""
        />
        <img
          className="h-18 w-20 sm:h-32 sm:w-32 object-cover rounded-2xl absolute top-58 left-4 sm:left-40"
          src="https://images.unsplash.com/photo-1755354567507-10dae25beb9a?q=80&w=1374&auto=format&fit=crop"
          alt=""
        />
        <img
          className="h-32 w-32 sm:h-48 sm:w-48 object-cover rounded-2xl absolute top-95 right-10 sm:right-40"
          src="https://images.unsplash.com/photo-1623418371013-4baaf507be2b?q=80&w=435&auto=format&fit=crop"
          alt=""
        />
      </div>

      {/* Hero Title */}
      <div className="text-center mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          GPT-Clone
        </h1>
      </div>

      {/* Description */}
      <div className="flex mt-6 items-center justify-center px-6">
        <p className="max-w-2xl text-center text-gray-500 text-sm sm:text-base md:text-md">
          An intelligent AI chat companion that understands context, generates
          human-like responses, and simplifies tasks—designed for smarter
          conversations, learning, and productivity. Experience seamless
          interaction where technology meets everyday assistance
        </p>
      </div>

      {/* Get Started Button */}
      <div
        className="mt-18 flex justify-center"
        onClick={() => {
          navigate("/login");
        }}
      >
        <button
          className="border px-6 py-2 rounded-full text-md cursor-pointer
          bg-white text-black flex items-center shadow-md hover:shadow-lg transition"
        >
          Get started
          <div className="pl-6">
            <video className="w-20 h-8 rounded-full object-cover" autoPlay muted loop
             src="https://www.pexels.com/download/video/18068664/"></video>
          </div>
        </button>
      </div>

      {/* Bottom Text */}
      <div className="relative h-32 flex ml-10 items-center mt-16">
        <div className="w-[40%] sm:w-[30%] lg:w-[15%] ">
          <p className="text-xs sm:text-sm text-white">
            Your personal AI assistant built to chat, create, and solve. From
            everyday questions to complex tasks, experience natural
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
