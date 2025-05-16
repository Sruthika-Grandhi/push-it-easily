// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Roles from "./Components/LoginPage/Roles";
import Elogin from "./Components/LoginPage/Elogin";
import HRlogin from "./Components/LoginPage/HRlogin";
import WebPage from "./Components/WebPage";
import ForgotPass from "./Components/ForgotPassPage/ForgotPass";
import HrForgot from "./Components/ForgotPassPage/HrForgot";
import Signup from "./Components/SignUpPage/Signup";
import ExtraInfo from "./Components/SignUpPage/ExtraInfo";
import Employee from "./Components/MainPage/Employee";
import Hr from "./Components/MainPage/Hr";
import EmpDashBoard from "./Components/DashboardPage/EmpDashBoard";
import HrDashBoard from "./Components/DashboardPage/HrDashBoard";
import EmpAbout from "./Components/AboutUs/EmpAbout";
import HrAbout from "./Components/AboutUs/HrAbout";
import LeaveRequest from "./Components/ApplingLeaves/LeaveRequest";
import AddEmp from "./Components/Recurtiment/AddEmp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/role" element={<Roles />} />
        <Route path="/employee-login" element={<Elogin />} />
        <Route path="/hr-login" element={<HRlogin />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/info" element={<ExtraInfo />} />
        <Route path="/emp" element={<Employee />} />
        <Route path="/hr" element={<Hr />} />
        <Route path="/forgotPass" element={<HrForgot />} />
        <Route path="/EmpDashBoard" element={<EmpDashBoard />} />
        <Route path="/HrDashBoard" element={<HrDashBoard />} />
        <Route path="/add-emp" element={<AddEmp/>}/>
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/EmpAbout" element={<EmpAbout />} />
        <Route path="/HrAbout" element={<HrAbout />} />
      </Routes>
    </Router>
  );
}

export default App;
