import React from "react";
import { Link } from "react-router-dom";

export default function WebPage() {
    return (
        <div className="webpage-container">
            <header className="webpage-header">
                <Link to="/signup" className="nav-link">
                    <u>Sign Up</u>
                </Link>
                <Link to="/role" className="nav-link">
                    <u>Log In</u>
                </Link>
            </header>

            <div className="webpage-content">
                <div className="webpage-left">
                    <h1 className="greeting">HelloEveryone!..</h1>
                    <img
                        src="web.jpg" // Replace with your own
                        alt="Business Professional"
                        className="main-image"
                    />
                </div>

                <div className="webpage-right">
                    <h1 className="program-title">
                        Employee <br />
                        Management <br />
                        System
                    </h1>
                </div>
            </div>

            <style jsx>{`
                .webpage-container {
                    height: 100vh;
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    background: linear-gradient(to right, #52b6f4, #0f2c61);
                    color: #fff;
                    font-family: 'Segoe UI', sans-serif;
                    overflow: hidden;
                }

                .webpage-header {
                    display: flex;
                    justify-content: flex-end;
                    gap: 25px;
                    padding: 20px 40px;
                }

                .nav-link {
                    color: white;
                    font-weight: bold;
                    font-size: 18px;
                    text-decoration: none;
                }

                .nav-link:hover {
                    color: #ffd700;
                }

                .webpage-content {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex: 1;
                    padding: 0 5%;
                }

                .webpage-left {
                    text-align: center;
                }

                .greeting {
                    font-size: 50px;
                    font-weight: bold;
                    color: #0f2c61;
                    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
                }

                .main-image {
                    width: 280px;
                    height: 280px;
                    border-radius: 50%;
                    border: 5px solid #00bcd4;
                    object-fit: cover;
                    margin-top: 20px;
                }

                .webpage-right {
                    font-size: 20px;
                    font-weight: bold;
                    color: #ffd54f;
                    text-align: center;
                }
                    

                @media (max-width: 768px) {
                    .webpage-content {
                        flex-direction: column;
                        gap: 30px;
                    }

                    .greeting {
                        font-size: 36px;
                    }

                    .webpage-right {
                        font-size: 26px;
                    }
                }
            `}</style>
        </div>
    );
}
