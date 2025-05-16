import React from "react";
import { Link } from "react-router-dom";
import './style.css';


export default function Elogin() { 
    return (
        <div className="page">
            <div className="Container"> 
                <h2>Employee Login Page</h2>

                <label id="usn">USERNAME*</label>
                <input type="text" id="box1" placeholder="Enter your username" />

                <label id="psd">PASSWORD*</label>
                <input type="password" id="box2" placeholder="Enter your password" />

                <p id="fp">
                    <Link to ="/forgot-password" >
                    <u>Forgot Password?</u></Link></p>
                <Link to="/emp">
                <button className="login-button">LOGIN</button> 
                </Link>

                <div className="p1">
                    <p>Don't have an account?</p>
                    <Link to="/signup" id="p2">Sign Up?</Link>
                </div>
                <h4>
                <Link to="/role">
                    <button>Back</button>
                </Link>
            </h4>
            </div>
        </div>
    );
}
