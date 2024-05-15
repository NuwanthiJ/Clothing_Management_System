import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './PSidebar';
import Header from './PHeader';
//import './PEditSales.css';

export default function PEditSales() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sales, setSales] = useState({
    salesID: '',
    reportType: '',
    Date: '',
    ReportDes: ''
  });

  useEffect(() => {
    if (id) {
      getById(id);
    }
  }, [id]);

  const getById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/sales/${id}`);
      if (response.status === 200) {
        setSales({ ...response.data });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching sales data');
    }
  };

  const updateSales = async (data, id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/sales/${id}`, data);
      if (response.status === 200) {
        toast.success('Sales report updated successfully');
        //navigate("/pallsales");
      }
    } catch (error) {
      console.error(error);
      toast.error('Error updating sales record');
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSales({ ...sales, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (id) {
      updateSales(sales, id);
      navigate("/pallsale");
    }
  };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="App">
      <div className='pmadd-grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <div>
          <center>
            <form onSubmit={submitForm}>
              <div className="form-bg">
                <div className="form-container">
                  <h3 className="title">Edit Sales Report</h3>
                  <div className="form-horizontal">
                    <div className="form-group">
                      <label>Sales ID</label>
                      <input
                        type="text"
                        name="salesID"
                        value={sales.salesID}
                        onChange={inputChangeHandler}
                        className="form-control"
                        placeholder="Sales ID"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Report Type</label>
                      <select
                        name="reportType"
                        value={sales.reportType}
                        onChange={inputChangeHandler}
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
                        type="date"
                        name="Date"
                        value={sales.Date}
                        onChange={inputChangeHandler}
                        className="form-control"
                        placeholder="Date"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        name="ReportDes"
                        value={sales.ReportDes}
                        onChange={inputChangeHandler}
                        className="form-control"
                        placeholder="Description"
                        rows={4}
                        required
                      />
                    </div>
                    <input type="submit" className="btn add" value="Update" />
                  </div>
                </div>
              </div>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
}
