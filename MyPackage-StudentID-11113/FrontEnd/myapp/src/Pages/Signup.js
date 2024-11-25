import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.retypePassword) {
      setMessage("Passwords do not match");
      return;
    }
    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters long");
      return;
    }
    if (!/[!@#$%^&*]/.test(formData.password)) {
      setMessage("Password must include at least one special character");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8080/api/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setLoading(false);
      setMessage(response.data);
      if (response.data === "User registered successfully") {
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      setMessage("Error occurred while signing up");
    }
  };

  return (
    <div className={styles["signup-container"]}>
      <h2>Signup</h2>
      <p
        className={
          message.includes("success")
            ? styles["message-success"]
            : styles["message-error"]
        }
      >
        {message}
      </p>
      {loading && <div className={styles.spinner}>Loading...</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <label htmlFor="retypePassword">Retype Password</label>
        <input
          id="retypePassword"
          type="password"
          name="retypePassword"
          placeholder="Retype Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <h4>
        Already have an account? <Link to="/login">Log in</Link>
      </h4>
    </div>
  );
};

export default Signup;
