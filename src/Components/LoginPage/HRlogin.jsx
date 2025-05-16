import React from "react";
import { Link } from "react-router-dom";

export default function HRlogin() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html, #root {
          height: 100%;
          width: 100%;
          background: #0f2027;
          overflow: hidden;
        }

        .login-page {
          display: flex;
          height: 100vh;
          width: 100vw;
          font-family: 'Segoe UI', sans-serif;
          background: #0f2027;
        }

        .login-left {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .login-box {
          background-color: rgba(255, 255, 255, 0.06);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          width: 100%;
          max-width: 400px;
          color: white;
          z-index: 2;
        }

        .login-box h2 {
          font-size: 28px;
          margin-bottom: 30px;
          text-align: center;
        }

        .login-box label {
          font-weight: bold;
          display: block;
          margin-bottom: 8px;
          margin-top: 15px;
        }

        .login-box input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .forgot-link {
          text-align: right;
          margin-bottom: 20px;
        }

        .forgot-link a {
          color: #b3d9ff;
          text-decoration: underline;
          font-size: 14px;
        }

        .login-btn,
        .back-btn {
          width: 100%;
          padding: 12px;
          font-weight: bold;
          font-size: 16px;
          border-radius: 30px;
          border: 2px solid white;
          background: transparent;
          color: white;
          cursor: pointer;
          margin-top: 10px;
          transition: all 0.3s ease;
        }

        .login-btn:hover {
          background-color: #00bcd4;
          border-color: #00bcd4;
          color: black;
        }

        .back-btn:hover {
          background-color: #ff5252;
          border-color: #ff5252;
          color: white;
        }

        .signup-text {
          margin-top: 20px;
          font-size: 14px;
          text-align: center;
        }

        .signup-text a {
          color: #b3d9ff;
          text-decoration: underline;
        }

        .login-right {
          flex: 1;
          overflow: hidden;
          height: 100%;
          z-index: 0;
        }

        .login-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          filter: brightness(0.85);
        }

        .login-image:hover {
          transform: scale(1.03);
        }
      `}</style>

      <div className="login-page">
        <div className="login-left">
          <div className="login-box">
            <h2>HR Manager Login</h2>

            <label>USERNAME*</label>
            <input type="text" placeholder="Enter your username" />

            <label>PASSWORD*</label>
            <input type="password" placeholder="Enter your password" />

            <div className="forgot-link">
              <Link to="/forgotPass">Forgot Password?</Link>
            </div>

            <Link to="/hr">
              <button className="login-btn">LOGIN</button>
            </Link>

            <p className="signup-text">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>

            <Link to="/role">
              <button className="back-btn">Back</button>
            </Link>
          </div>
        </div>

        <div className="login-right">
          <img
            src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80"
            alt="Woman in Office"
            className="login-image"
          />
        </div>
      </div>
    </>
  );
}
