import React, { useState } from 'react';

const Pmain = () => {
  const [salesId, setSalesId] = useState('');
  const [reportType, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [reportFile, setReportFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log({ salesId, reportType, date, reportFile });
  };

  return (
    <div>
      <h1>Add Sales</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="salesId">Sales ID:</label>
        <input type="text" id="salesId" value={salesId} onChange={(e) => setSalesId(e.target.value)} required /><br /><br />

        <label htmlFor="reportType">Report Type:</label>
        <select id="reportType" value={reportType} onChange={(e) => setReportType(e.target.value)} required>
          <option value="">Select Report Type</option>
          <option value="income">Income Report</option>
          <option value="outcome">Outcome Report</option>
          <option value="profit">Total Profit Report</option>
        </select><br /><br />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br /><br />

        <label htmlFor="reportFile">Upload Report Document:</label><br />
        <input type="file" id="reportFile" onChange={(e) => setReportFile(e.target.files[0])} accept=".pdf,.doc,.docx" required /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Pmain;
