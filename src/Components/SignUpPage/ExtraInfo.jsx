import React from "react";
import { Link } from "react-router-dom";

export default function ExtraInfo() {
    const styles = {
        page: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: 'url("/images/office-background.jpg") center/cover no-repeat',
            fontFamily: "Arial, sans-serif",
        },
        container: {
            background: "linear-gradient(to right, #0077b6, #00b4d8)",
            padding: "40px",
            borderRadius: "30px",
            boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
            color: "#fff",
            width: "350px",
            textAlign: "center",
        },
        label: {
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
            textAlign: "left",
        },
        input: {
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "25px",
            border: "none",
            outline: "none",
            boxShadow: "3px 3px 6px rgba(0,0,0,0.1)",
        },
        select: {
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "25px",
            border: "none",
            outline: "none",
            boxShadow: "3px 3px 6px rgba(0,0,0,0.1)",
        },
        button: {
            padding: "12px 30px",
            borderRadius: "25px",
            background: "#fff",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "3px 3px 8px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2>Employee Portal</h2>

                <label htmlFor="Eid" style={styles.label}>Employee Id</label>
                <input type="number" id="Eid" placeholder="Employee Id" style={styles.input} />

                <label htmlFor="role" style={styles.label}>Employee Type</label>
                <select id="role" style={styles.select}>
                    <option value="">--Select Role--</option>
                    <option value="Employee">Employee</option>
                    <option value="HRManager">HR Manager</option>
                </select>

                <label htmlFor="department" style={styles.label}>Department</label>
                <input type="text" id="department" placeholder="Department" style={styles.input} />

                <label htmlFor="phone" style={styles.label}>Phone Number</label>
                <input type="tel" id="phone" placeholder="Phone Number" style={styles.input} />

                <label htmlFor="location" style={styles.label}>Work Location</label>
                <input type="text" id="location" placeholder="Work Location" style={styles.input} />

                <Link to="/">
                    <button style={styles.button}>Create</button>
                </Link>
            </div>
        </div>
    );
}
