import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import AdminDash from "./AdminDash";
import DMD from "./DMD";
import DVT from "./DVT";
import UserEdit from "./UserEdit";

const LoginWithNavigation = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup navigate={(path) => window.location.href = path} />} />
      <Route path="/login" element={<LoginWithNavigation />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/adminDash" element={<AdminDash />} />
      <Route path="/DMD" element={<DMD />} />
      <Route path="/DVT" element={<DVT />} />
      <Route path="/UserEdit" element={<UserEdit />} />
      
    </Routes>
  </Router>
);

export default App;
