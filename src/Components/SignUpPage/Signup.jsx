import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const styles = {
    page: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: 'url("image1.jpg") center/cover no-repeat',
        fontFamily: "Arial, sans-serif",
      },
    container: {
      background: "white",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      width: "400px",
    },
    heading: {
      color: "#b30000",
      textAlign: "center",
      marginBottom: "30px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "25px",
      border: "none",
      backgroundColor: "#b0b5b1",
      marginBottom: "15px",
    },
    loginButton: {
      width: "100%",
      padding: "12px",
      borderRadius: "25px",
      border: "none",
      backgroundImage: "linear-gradient(to right, #ff5fad, #f7d060)",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
    },
    backButton: {
      width: "100%",
      padding: "12px",
      borderRadius: "25px",
      border: "2px solid #b30000",
      backgroundColor: "#fff",
      color: "#b30000",
      fontWeight: "bold",
      cursor: "pointer",
    },
    p1: {
      textAlign: "center",
      color: "#b30000",
      fontWeight: "bold",
    },
    link: {
      color: "#b30000",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Create New Account</h2>

        <label htmlFor="username" style={styles.label}>NAME*</label>
        <input type="text" id="username" placeholder="Enter your username" style={styles.input} />

        <label htmlFor="email" style={styles.label}>Email*</label>
        <input type="email" id="email" placeholder="Enter your Email" style={styles.input} />

        <label htmlFor="password" style={styles.label}>PASSWORD*</label>
        <input type="password" id="password" placeholder="Enter your password" style={styles.input} />

        <Link to="/info">
          <button style={styles.loginButton}>Sign Up</button>
        </Link>

        <div style={styles.p1}>
          <p>
            Already Registered?{" "}
            <Link to="/role" style={styles.link}>Login</Link>
          </p>
        </div>

        <Link to="/role">
          <button style={styles.backButton}>Back</button>
        </Link>
      </div>
    </div>
  );
}
