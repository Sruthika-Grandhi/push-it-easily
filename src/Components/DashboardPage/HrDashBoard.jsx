import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardImage from "/public/Ed.jpg"; // ✅ Ensure image is in src/assets

export default function HrDashboard() {
  useEffect(() => {
    // Remove any unwanted global background image
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#0f2027";
    document.body.style.margin = "0";
    document.body.style.overflowX = "hidden";
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(to right, #c2e9fb, #a1c4fd)",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1100px",
      width: "100%",
      gap: "60px",
      flexWrap: "wrap",
    },
    left: {
      flex: 1,
      minWidth: "300px",
    },
      left: {
      flex: 1,
      minWidth: "300px",
    },
    right: {
      flex: 1,
      minWidth: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    backButton: {
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "white",
      borderRadius: "30px",
      padding: "8px 18px",
      fontSize: "14px",
      marginBottom: "30px",
      cursor: "pointer",
    },
    heading: {
      fontSize: "38px",
      fontWeight: "bold",
      color: "white",
      marginBottom: "20px",
    },
    description: {
      color: "#e0e0e0",
      fontSize: "16px",
      marginBottom: "40px",
      maxWidth: "500px",
    },
    button: {
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "white",
      borderRadius: "30px",
      padding: "14px 25px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "20px",
      width: "100%",
      maxWidth: "300px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    image: {
      width: "100%",
      maxWidth: "480px",
      borderRadius: "20px",
      boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.left}>
          <Link to="/hr">
            <button style={styles.backButton}>Back</button>
          </Link>
          <h1 style={styles.heading}>Welcome Back</h1>
          <p style={styles.description}>
            Manage approvals, employee records, and recruitment easily. Your HR operations are just a click away.
          </p>
          <button style={styles.button}>Approval Leaves</button>
          <button style={styles.button}>Employee Data</button>
          <Link to="/add-emp">
            <button style={styles.button}>Recruitment</button>
          </Link>
        </div>
        <div style={styles.right}>
          <img
            src={DashboardImage}
            alt="Dashboard Visual"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
