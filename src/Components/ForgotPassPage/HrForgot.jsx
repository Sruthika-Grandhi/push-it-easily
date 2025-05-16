import React from "react";
import { Link } from "react-router-dom";

export default function HrForgot() {
    const styles = {
        container: {
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            fontFamily: "Arial, sans-serif",
        },
        box: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            width: "90%",
            maxWidth: "500px",
            color: "#000",
            border: "2px solid black",
            boxSizing: "border-box",
        },
        heading: {
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "15px",
        },
        paragraph: {
            fontSize: "16px",
            marginBottom: "25px",
        },
        label: {
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "left",
        },
        input: {
            width: "100%",
            padding: "12px",
            borderRadius: "25px",
            border: "none",
            outline: "none",
            marginBottom: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            fontSize: "14px",
        },
        button: {
            padding: "12px 24px",
            borderRadius: "25px",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "3px 3px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
        },
        link: {
            display: "inline-block",
            marginTop: "20px",
            textDecoration: "underline",
            color: "#000",
            fontWeight: "bold",
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.heading}>Forgot Password?</h2>
                <p style={styles.paragraph}>
                    Please enter your email or phone<br />
                    and we'll send you a link to get<br />
                    back into your account.
                </p>

                <label style={styles.label}>Email/Phone number</label>
                <input 
                    type="text" 
                    style={styles.input} 
                    placeholder="Enter your email or phone"
                />
                
                <button style={styles.button}>Send Verification</button>
                <br />
                <Link to="/hr-login" style={styles.link}>
                    Back to login
                </Link>
            </div>
        </div>
    );
}
