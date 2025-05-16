import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PayRoll = () => {
  const [ctc, setCtc] = useState(80000);
  const [salaryBreakup, setSalaryBreakup] = useState({
    basicMonthly: 0,
    basicAnnual: 0,
    hraMonthly: 0,
    hraAnnual: 0,
    specialMonthly: 0,
    specialAnnual: 0,
    grossMonthly: 0,
    grossAnnual: 0,
    empEpfMonthly: 0,
    empEpfAnnual: 0,
    empLwfMonthly: 0,
    empLwfAnnual: 0,
    empEsicMonthly: 0,
    empEsicAnnual: 0,
    emprEpfMonthly: 0,
    emprEpfAnnual: 0,
    emprLwfMonthly: 0,
    emprLwfAnnual: 0,
    emprEsicMonthly: 0,
    emprEsicAnnual: 0,
    takeHomeMonthly: 0,
    takeHomeAnnual: 0,
  });

  useEffect(() => {
    calculateCTC();
  }, [ctc]);

  const format = (n) => Math.round(n).toLocaleString();

  const calculateCTC = () => {
    const basic = ctc * 0.5;
    const hra = ctc * 0.2;
    const special = ctc * 0.2364;
    const gross = basic + hra + special;

    const empEPF = basic * 0.12;
    const empLWF = 25;
    const empESIC = gross * 0.0075;

    const emprEPF = basic * 0.12;
    const emprLWF = 50;
    const emprESIC = gross * 0.0325;

    const takeHome = gross - (empEPF + empLWF + empESIC);

    setSalaryBreakup({
      basicMonthly: format(basic / 12),
      basicAnnual: format(basic),
      hraMonthly: format(hra / 12),
      hraAnnual: format(hra),
      specialMonthly: format(special / 12),
      specialAnnual: format(special),
      grossMonthly: format(gross / 12),
      grossAnnual: format(gross),
      empEpfMonthly: format(empEPF / 12),
      empEpfAnnual: format(empEPF),
      empLwfMonthly: format(empLWF),
      empLwfAnnual: format(empLWF * 12),
      empEsicMonthly: format(empESIC / 12),
      empEsicAnnual: format(empESIC),
      emprEpfMonthly: format(emprEPF / 12),
      emprEpfAnnual: format(emprEPF),
      emprLwfMonthly: format(emprLWF),
      emprLwfAnnual: format(emprLWF * 12),
      emprEsicMonthly: format(emprESIC / 12),
      emprEsicAnnual: format(emprESIC),
      takeHomeMonthly: format(takeHome / 12),
      takeHomeAnnual: format(takeHome),
    });
  };

  return (
    <div className="payroll-container" style={{ padding: '20px' }}>
      <h2>Annual CTC Split-Up Calculator</h2>
      <input
        type="number"
        value={ctc}
        onChange={(e) => setCtc(parseFloat(e.target.value || 0))}
        placeholder="Enter Annual CTC"
        style={{ padding: '8px', fontSize: '16px', marginBottom: '20px' }}
      />

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Component</th>
            <th>Monthly</th>
            <th>Annual</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Basic Salary</td><td>{salaryBreakup.basicMonthly}</td><td>{salaryBreakup.basicAnnual}</td></tr>
          <tr><td>HRA</td><td>{salaryBreakup.hraMonthly}</td><td>{salaryBreakup.hraAnnual}</td></tr>
          <tr><td>Special Allowances</td><td>{salaryBreakup.specialMonthly}</td><td>{salaryBreakup.specialAnnual}</td></tr>
          <tr><td><strong>Gross Salary</strong></td><td>{salaryBreakup.grossMonthly}</td><td>{salaryBreakup.grossAnnual}</td></tr>
          <tr><td>Employee EPF</td><td>{salaryBreakup.empEpfMonthly}</td><td>{salaryBreakup.empEpfAnnual}</td></tr>
          <tr><td>Employee LWF</td><td>{salaryBreakup.empLwfMonthly}</td><td>{salaryBreakup.empLwfAnnual}</td></tr>
          <tr><td>Employee ESIC</td><td>{salaryBreakup.empEsicMonthly}</td><td>{salaryBreakup.empEsicAnnual}</td></tr>
          <tr><td>Employer EPF</td><td>{salaryBreakup.emprEpfMonthly}</td><td>{salaryBreakup.emprEpfAnnual}</td></tr>
          <tr><td>Employer LWF</td><td>{salaryBreakup.emprLwfMonthly}</td><td>{salaryBreakup.emprLwfAnnual}</td></tr>
          <tr><td>Employer ESIC</td><td>{salaryBreakup.emprEsicMonthly}</td><td>{salaryBreakup.emprEsicAnnual}</td></tr>
          <tr><td><strong>Take Home</strong></td><td>{salaryBreakup.takeHomeMonthly}</td><td>{salaryBreakup.takeHomeAnnual}</td></tr>
        </tbody>
      </table>

      <Link to="/empdashboard" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default PayRoll;
