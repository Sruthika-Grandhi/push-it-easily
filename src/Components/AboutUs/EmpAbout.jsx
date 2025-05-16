import React from "react";
import { Link } from "react-router-dom";

export default function EmpAbout() {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-color: #f5f9fc;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .emp-about-container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 700px;
            text-align: center;
            opacity: 0.5;
            
          }
            .emp-about-container:hover{
            opacity: 1.0;
            }

          .emp-about-container h4 {
            font-size: 28px;
            color: #2c3e50;
            margin-bottom: 20px;
          }

          .emp-about-container p {
            font-size: 16px;
            line-height: 1.7;
            color: #4a4a4a;
            text-align: justify;
          }

          .emp-about-container strong {
            color: #1976d2;
          }

          .emp-about-container button {
            background-color: #43a047;
            color: white;
            padding: 10px 24px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-bottom: 20px;
          }

          .emp-about-container button:hover {
            background-color: #388e3c;
          }

          .emp-about-container a {
            text-decoration: none;
          }
        `}
      </style>

      <div className="emp-about-container">
        <Link to="/emp"><button>Back</button></Link>
        <h4>About Us</h4>
        <p>
          Welcome to Employee Portal, a smart and efficient employee management system designed to streamline HR operations, 
          enhance workforce productivity, and simplify administrative tasks. Our platform is built to help businesses manage
          their employees seamlessly by providing a centralized, automated, and secure solution.
          <br /><br />
          <strong>User-Friendly</strong> – designed for easy navigation.
          <br />
          <strong>Secure &amp; Reliable</strong> – Robust authentication and encrypted data storage.
          <br />
          <strong>Time-Saving</strong> – Automated payroll, attendance tracking, and leave approvals.
        </p>
      </div>
    </div>
  );
}
