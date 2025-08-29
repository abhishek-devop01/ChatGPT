import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="text-9xl text-center font-semibold">Landing Page</div>
      <div className="text-7xl mt-10 text-center font-semibold">GPT</div>
      <div className="flex gap-5 items-center justify-center mt-10 text-2xl">
        <Link to="/login">Login</Link>
        <Link to="/login">register</Link>
      </div>
    </div>
  );
};

export default Start;
