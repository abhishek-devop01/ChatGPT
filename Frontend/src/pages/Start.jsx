import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div>Landing Page</div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/login">register</Link>
      </div>
    </div>
  );
};

export default Start;
