import React from "react";
import { Link } from "react-router-dom";

export default function Roles() {
    return (
        <div className="roles-container">
            <div className="roles-content">
                <div className="roles-left">
                    <h1 className="roles-heading">Roles</h1>

                    <Link to="/employee-login" className="roles-link">
                        <u>Employee</u>
                    </Link>

                    <Link to="/hr-login" className="roles-link">
                        <u>HR&Admin</u>
                    </Link>

                    <Link to="/" className="back-link">
                        Back to WebPage
                    </Link>
                </div>

                <div className="roles-right">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // You can replace with your image
                        alt="Professional"
                        className="roles-image"
                    />
                </div>
            </div>

            <style jsx>{`
                .roles-container {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(to right, #c0f0d0, #a0d8ef);
                    font-family: 'Segoe UI', sans-serif;
                }

                .roles-content {
                    width: 90%;
                    max-width: 1200px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .roles-left {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                }

                .roles-heading {
                    font-size: 40px;
                    font-weight: bold;
                    color: #111;
                }

                .roles-link {
                    background: linear-gradient(to right, #5d9cec, #d1c4e9);
                    color: #000;
                    text-decoration: none;
                    font-weight: bold;
                    padding: 12px 30px;
                    border-radius: 30px;
                    font-size: 18px;
                    transition: all 0.3s ease;
                }

                .roles-link:hover {
                    background: linear-gradient(to right, #3a7bd5, #a56de2);
                    color: #fff;
                }

                .back-link {
                    margin-top: 10px;
                    color: #333;
                    font-size: 16px;
                    text-decoration: underline;
                }

                .roles-right {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .roles-image {
                    width: 280px;
                    max-width: 100%;
                    border-radius: 50%;
                    background-color: #dbeafe;
                    padding: 10px;
                }

                @media (max-width: 768px) {
                    .roles-content {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .roles-left {
                        align-items: center;
                    }

                    .roles-image {
                        margin-top: 20px;
                    }
                }
            `}</style>
        </div>
    );
}
