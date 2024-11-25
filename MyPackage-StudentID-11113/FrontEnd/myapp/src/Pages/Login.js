import React, { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css"; // Importing the same CSS module
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data) {
        navigate("/welcome", { state: { username: response.data.username } });
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error) {
      setMessage("Error occurred during login");
    }
  };

  return (
    <div className={styles["signup-container"]}>
      <h2>Login</h2>
      <p
        className={
          message.includes("Invalid")
            ? styles["message-error"]
            : styles["message-success"]
        }
      >
        {message}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <h4>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </h4>
    </div>
  );
};

export default Login;
