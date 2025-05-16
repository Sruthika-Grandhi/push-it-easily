import React from "react";
import { Link } from "react-router-dom";
import employeeImage from "./employeeImage.png"; // Replace with your actual image file path

export default function Employee() {
    const styles = {
        container: {
            height: "100vh",
            width: "100vw",
            padding: "20px",
            background: "linear-gradient(to right, #48c6ef, #6f86d6)",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            boxSizing: "border-box",
        },
        nav: {
            display: "flex",
            gap: "30px",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "40px",
        },
        navItem: {
            textDecoration: "none",
            color: "#000",
        },
        main: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
        },
        textContainer: {
            flex: "1",
            paddingRight: "40px",
        },
        heading: {
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        paragraph: {
            fontSize: "20px",
            lineHeight: "1.6",
            maxWidth: "500px",
        },
        image: {
            flex: "1",
            maxWidth: "400px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }
    };

    return (
        <div style={styles.container}>
            <header>
                <nav style={styles.nav}>
                    <Link to="/emp" style={styles.navItem}><u>Home</u></Link>
                    <Link to="/EmpDashBoard" style={styles.navItem}><u>DashBoard</u></Link>
                    <Link to="/EmpAbout" style={styles.navItem}><u>About Us</u></Link>
                    <Link to="/employee-login" style={styles.navItem}><u>Logout</u></Link>
                </nav>
            </header>

            <main style={styles.main}>
                <div style={styles.textContainer}>
                    <h1 style={styles.heading}>Welcome Back</h1>
                    <p style={styles.paragraph}>
                        <strong>
                            "Streamline your workforce with our Employee Management System! 
                            Easily manage employee records—all in one place. Get started today!"
                        </strong>
                    </p>
                </div>
                <img
                    src={employeeImage}
                    alt="Employee working"
                    style={styles.image}
                />
            </main>
        </div>
    );
}
