// Components/DashboardPage/EmpDashBoard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function EmpDashBoard() {
  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, #74ebd5, #9face6)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "20px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      display: "flex",
      width: "85%",
      maxWidth: "1000px",
      overflow: "hidden",
    },
    sidebar: {
      background: "linear-gradient(to bottom right, #7f00ff, #e100ff)",
      padding: "40px 30px",
      color: "white",
      width: "45%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    button: {
      background: "linear-gradient(to right, #d3cce3, #e9e4f0)",
      color: "#000",
      padding: "12px",
      border: "none",
      borderRadius: "30px",
      fontSize: "16px",
      margin: "10px 0",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s ease",
    },
    backBtn: {
      background: "linear-gradient(to right, #a18cd1, #fbc2eb)",
      padding: "10px 16px",
      borderRadius: "20px",
      fontWeight: "bold",
      fontSize: "14px",
      marginBottom: "20px",
      border: "none",
      color: "#000",
      cursor: "pointer",
    },
    mainContent: {
      backgroundColor: "#ecf0f3",
      width: "55%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
    },
    illustration: {
      width: "100%",
      maxWidth: "400px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.sidebar}>
          <Link to="/emp">
            <button style={styles.backBtn}>Back</button>
          </Link>
          <div style={styles.title}>Employee Dashboard</div>
          <button style={styles.button}>Personal Info</button>
          <Link to="/leave-request">
            <button style={styles.button}>Applying Leaves</button>
          </Link>
          <Link to="/payroll">
            <button style={styles.button}>Payroll</button>
          </Link>
          <button style={styles.button}>Attendance Tracking</button>
        </div>
        <div style={styles.mainContent}>
          <img
            style={styles.illustration}
            src="Ed.jpg"
            alt="Dashboard Illustration"
          />
        </div>
      </div>
    </div>
  );
}
