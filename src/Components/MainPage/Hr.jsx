import React from "react";
import { Link } from "react-router-dom";

export default function HrHome() {
    const styles = {
        container: {
            height: "100vh",
            width: "100vw",
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            padding: "40px",
            fontFamily: "'Poppins', sans-serif",
            color: "#f1f1f1",
            boxSizing: "border-box",
        },
        nav: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginBottom: "50px",
        },
        navItem: {
            color: "#f1f1f1",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "20px",
            padding: "14px 30px",
            border: "2px solid #f1f1f1",
            borderRadius: "25px",
            transition: "0.3s ease-in-out",
            cursor: "pointer",
        },
        navItemHover: {
            backgroundColor: "#ffffff22",
            transform: "scale(1.1)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        },
        main: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
        },
        textContainer: {
            flex: "1",
            maxWidth: "700px",
            marginRight: "40px",
        },
        heading: {
            fontSize: "56px",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#ffffff",
        },
        paragraph: {
            fontSize: "24px",
            lineHeight: "1.7",
            color: "#dddddd",
        },
        image: {
            flex: "1",
            maxWidth: "650px", // Adjusted for better proportion
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
            transition: "transform 0.3s ease-in-out",
        },
    };

    const navHover = (e, enter) => {
        if (enter) {
            e.target.style.backgroundColor = "#ffffff22";
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
        } else {
            e.target.style.backgroundColor = "transparent";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
        }
    };

    const imageHover = (e, enter) => {
        if (enter) {
            e.target.style.transform = "scale(1.05)";
        } else {
            e.target.style.transform = "scale(1)";
        }
    };

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                {["/hr", "/HrDashBoard", "/HrAbout", "/hr-login"].map((path, idx) => {
                    const labels = ["Home", "Dashboard", "About Us", "Logout"];
                    return (
                        <Link
                            key={path}
                            to={path}
                            style={styles.navItem}
                            onMouseEnter={(e) => navHover(e, true)}
                            onMouseLeave={(e) => navHover(e, false)}
                        >
                            {labels[idx]}
                        </Link>
                    );
                })}
            </nav>

            <main style={styles.main}>
                <div style={styles.textContainer}>
                    <h1 style={styles.heading}>Welcome Back</h1>
                    <p style={styles.paragraph}>
                        "Transform the way you manage your workforce. Our Employee Management System offers a seamless, modern interface to handle records, teams, and growth—everything in one place. Start simplifying HR today."
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
                    alt="HR professionals working"
                    style={styles.image}
                    onMouseEnter={(e) => imageHover(e, true)}
                    onMouseLeave={(e) => imageHover(e, false)}
                />
            </main>
        </div>
    );
}
