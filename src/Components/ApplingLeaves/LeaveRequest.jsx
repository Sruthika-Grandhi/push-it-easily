import React, { useState } from 'react';
import './LeaveRequest.css';
import { Link, useNavigate } from 'react-router-dom';

const LeaveRequest = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate(); // for redirect after submit

  const handleLeaveTypeChange = (e) => {
    setShowCheckboxes(e.target.value === 'show');
  };

  const handleApply = () => {
    // Add form submission logic here (e.g., API call)
    console.log({ fromDate, toDate, reason });
    alert('Leave Request Submitted!');
    navigate('/EmpDashBoard'); // Redirect to dashboard
  };

  return (
    <div className="container">
      <h2>Leave Request</h2>

      <select onChange={handleLeaveTypeChange}>
        <option value="">Leave Type</option>
        <option value="show">Show Leave Types</option>
      </select>

      {showCheckboxes && (
        <div className="leave-checkboxes">
          <label><input type="checkbox" value="Casual Leave" /> 1. Casual Leave</label>
          <label><input type="checkbox" value="Sick Leave" /> 2. Sick Leave</label>
          <label><input type="checkbox" value="Paid Leave" /> 3. Paid Leave / Earned Leave</label>
          <label><input type="checkbox" value="Maternity Leave" /> 4. Maternity Leave</label>
        </div>
      )}

      <label>From</label>
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

      <label>To</label>
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />

      <label>Detailed Reason</label>
      <textarea
        maxLength="300"
        placeholder="Enter detailed reason..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <div className="button-group">
        <Link to="/EmpDashBoard">
          <button className="back-btn">Back to Dashboard</button>
        </Link>

        <button className="apply-btn" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default LeaveRequest;
