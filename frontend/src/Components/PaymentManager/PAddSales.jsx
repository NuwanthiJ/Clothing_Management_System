import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './PSidebar';
import Header from './PHeader';

export default function PAdd() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [state, setState] = useState({
    salesID: '',
    reportType: '',
    Date: '',
    ReportDes: ''
  });

  const { salesID, reportType, Date, ReportDes } = state;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!salesID || !reportType || !Date || !ReportDes) {
      toast.error('Please provide a value for each input field');
    } else {
      try {
        const response = await axios.post('http://localhost:3000/api/sales/', state);
        if (response.status === 200) {
          toast.success('Sales report added successfully');
          navigate('/pallsale');
        }
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while adding the sales report');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="pmadd-grid-container">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="main">
        <Header OpenSidebar={OpenSidebar} />
        <center>
          <form onSubmit={handleSubmit}>
            <div className="form-bg">
              <div className="form-container">
                <h3 className="title">Add Sales Report Summary</h3>
                <div className="form-horizontal">
                  <div className="form-group">
                    <label>Report ID</label>
                    <input
                      type="text"
                      name="salesID"
                      value={salesID}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Sales ID"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Report Type</label>
                    <select
                      name="reportType"
                      value={reportType}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Report Type</option>
                      <option value="income">Income Report</option>
                      <option value="outcome">Outcome Report</option>
                      <option value="net_profit">Net Profit Report</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="Date"
                      name="Date"
                      value={Date}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Date"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="ReportDes"
                      value={ReportDes}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Description"
                      rows={4}
                      required
                    />
                  </div>
                  <input type="submit" className="btn add" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}
