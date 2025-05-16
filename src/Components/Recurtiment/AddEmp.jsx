import React, { useState } from 'react';

const AddEmp = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);

  return (
    <div className="container">
      <div className="background-image" />
      <div className="form-scroll-container">
        {!showForm ? (
          <button onClick={handleShowForm} className="btn">
            Add Employee
          </button>
        ) : (
          <div className="form-wrapper">
            <h2 className="heading">Add New Employee</h2>
            <form>
              <label className="label">Title</label>
              <select name="title" className="input">
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
              </select>

              <label className="label">First Name</label>
              <input type="text" name="firstName" className="input" />

              <label className="label">Last Name</label>
              <input type="text" name="lastName" className="input" />

              <label className="label">Employee ID</label>
              <input type="text" name="employeeId" className="input" />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" />

              <label className="label">Username</label>
              <input type="text" name="username" className="input" />

              <label className="label">Address</label>
              <input type="text" name="address" className="input" />

              <label className="label">Country</label>
              <input type="text" name="country" className="input" />

              <label className="label">State/Province/Region</label>
              <input type="text" name="state" className="input" />

              <label className="label">City</label>
              <input type="text" name="city" className="input" />

              <label className="label">Date of Birth</label>
              <input type="date" name="dob" className="input" />

              <label className="label">Department</label>
              <input type="text" name="department" className="input" />

              <label className="label">Project</label>
              <select name="project" className="input">
                <option value="">Select Project</option>
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
              </select>

              <label className="label">Role</label>
              <select name="role" className="input">
                <option value="">Select Role</option>
                <option value="operating_manager">Operating Manager</option>
                <option value="accountant">Accountant</option>
                <option value="marketing_manager">Marketing Manager</option>
                <option value="sales_manager">Sales Manager</option>
                <option value="general_manager">General Manager</option>
              </select>

              <label className="label">Upload File</label>
              <input type="file" name="fileUpload" className="input" />

              <label className="label">Confirm Password</label>
              <input type="password" name="confirmPassword" className="input" />

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .container {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .background-image {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/background-image.jpg'); /* Replace with your image path */
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          z-index: -1;
          align-items: stretch;
        }

        .form-scroll-container {
          height: 100vh;
          overflow-y: auto;
          padding: 50px;
        }

        .form-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 10px;
        }

        .label {
          display: block;
          margin-top: 10px;
          font-weight: 500;
        }

        .input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .btn {
          margin-top: 20px;
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .btn:hover {
          background-color: #0056b3;
        }

        .heading {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default AddEmp;
