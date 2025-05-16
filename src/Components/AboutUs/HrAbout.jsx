import React from "react";
import { Link } from "react-router-dom";

export default function HrAbout() {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #ffffff;
          }

          .hr-about-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
          }

          .hr-about-container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
            max-width: 780px;
            width: 90%;
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-align: center;
          }

          .hr-about-container h4 {
            font-size: 32px;
            color: #ffffff;
            margin-bottom: 24px;
          }

          .hr-about-container p {
            font-size: 16px;
            line-height: 1.7;
            color: #e0e0e0;
            text-align: justify;
          }

          .hr-about-container strong {
            color: #90caf9;
          }

          .hr-about-container button {
            background: transparent;
            color: #ffffff;
            padding: 10px 24px;
            border: 2px solid #ffffff;
            border-radius: 30px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 30px;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .hr-about-container button:hover {
            background-color: #ffffff;
            color: #0f2027;
          }

          .hr-about-container a {
            text-decoration: none;
          }
        `}
      </style>

      <div className="hr-about-wrapper">
        <div className="hr-about-container">
          <Link to="/hr">
            <button>Back</button>
          </Link>
          <h4>About Us</h4>
          <p>
            Welcome to Employee Portal, a modern HR management solution designed to simplify workforce administration and empower productivity. Our platform helps businesses handle payroll, attendance, and employee data seamlessly and securely.
            <br /><br />
            <strong>User-Friendly</strong> – Clean interface for smooth navigation.<br />
            <strong>Secure &amp; Reliable</strong> – Enhanced security protocols built-in.<br />
            <strong>Time-Saving</strong> – Automate repetitive tasks with ease.<br />
            <strong>Scalable</strong> – Perfect for startups and enterprises alike.<br />
            <strong>Insightful Analytics</strong> – Visual dashboards to drive decisions.<br />
            <strong>Compliance-Ready</strong> – Stay aligned with HR regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
