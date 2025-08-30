import { Link, useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-20 py-6">
        
        <div className="flex items-center justify-center">
          <Link
          className="text-2xl  sm:text-3xl lg:text-4xl font-semibold"
          to="/"
        >
          GPT
        </Link>
          <div className="ml-6">
            <video className="w-[53vw] h-9 ml-4 rounded-full object-cover" autoPlay muted loop 
            src="https://www.pexels.com/download/video/18069233/"></video>
          </div>
        </div>
        
        
        <div className="flex sm:gap-4">
          <Link className="hover:bg-gray-400 border border-gray-400 rounded-full py-1 px-8" to="/login">
            Sign In
          </Link>
          
          <Link className="hover:bg-gray-400 border border-gray-400 rounded-full py-1 px-8" to="/register">
            Sign Up
          </Link>
        </div>
      </nav>

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
