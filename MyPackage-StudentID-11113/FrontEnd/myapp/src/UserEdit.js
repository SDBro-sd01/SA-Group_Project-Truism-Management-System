import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./UserManagement.module.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetching users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch (error) {
      setMessage("Error fetching users");
    }
  };

  // Call fetchUsers when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle create or update user form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formData.id) {
        // Update existing user
        await axios.put(`http://localhost:8080/api/users/${formData.id}`, formData);
        setMessage("User updated successfully");
      } else {
        // Create new user
        await axios.post("http://localhost:8080/api/users", formData);
        setMessage("User created successfully");
      }
      setLoading(false);
      setFormData({ id: "", username: "", email: "", password: "" }); // Reset form
      fetchUsers(); // Refresh user list
    } catch (error) {
      setLoading(false);
      setMessage("Error occurred while saving user");
    }
  };

  // Handle edit button click (populate the form)
  const handleEdit = (user) => {
    setFormData(user); // Set form data with user info
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      setMessage("User deleted successfully");
      fetchUsers(); // Refresh user list after deletion
    } catch (error) {
      setMessage("Error occurred while deleting user");
    }
  };

  return (
    <div className={styles["user-management-container"]}>
      <h2>User Management</h2>
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
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {formData.id ? "Update User" : "Create User"}
        </button>
      </form>

      <h3>Users List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
