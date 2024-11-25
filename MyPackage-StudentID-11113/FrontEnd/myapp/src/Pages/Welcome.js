import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const username = location.state?.username || "Guest"; // Fallback to 'Guest' if no state is passed

  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default Welcome;
