import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './PSidebar';
import Header from './PHeader';
import './PAllSales.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function PAllSales(props) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/sales/');
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching sales data');
    }
  };

  const deleteSales = async (id) => {
    if (window.confirm('Are you sure you want to delete this sales record?')) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/sales/${id}`);
        if (response.status === 200) {
          toast.success(response.data);
          getSales();
        }
      } catch (error) {
        console.error(error);
        toast.error('Error deleting sales record');
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((sales) =>
    sales.reportType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generateReport = () => {
    const doc = new jsPDF();

    // Add a title
    doc.text('Sales Report', 20, 10);

    // Define table column names
    const columns = ['No.', 'Sales ID', 'Report Type', 'Date', 'Report Description'];

    // Map the data to rows
    const rows = filteredData.map((sales, index) => [
      index + 1,
      sales.salesID,
      sales.reportType,
      sales.Date,
      sales.ReportDes,
    ]);

    // Add the table to the PDF
    doc.autoTable(columns, rows, { startY: 20 });

    // Save the PDF
    doc.save('sales_report.pdf');
  };

  return (
    <div>
      <div className="App">
        <div className="pmall-grid-container">
          <Header />
          <Sidebar />
          <div className="display-container">
            <h3><b>All Sales</b></h3>
            <div className="productSearch">
              <input
                type="search"
                className="productSearchInput"
                id="search"
                placeholder="Search by Report Type..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button onClick={generateReport} className="preport-button">Generate Report</button>
            <div>
              <table className="product-table">
                <thead className="pm-thead">
                  <tr>
                    <th>No.</th>
                    <th>Sales ID</th>
                    <th>Report Type</th>
                    <th>Date</th>
                    <th>Report Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((sales, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{sales.salesID}</td>
                      <td>{sales.reportType}</td>
                      <td>{sales.Date}</td>
                      <td>{sales.ReportDes}</td>
                      <td>
                        <span className="pm-actions">
                          <Link to={`/pedit/${sales._id}`}>
                            <BsFillPencilFill className="pm-edit" />
                          </Link>
                          <BsFillTrashFill
                            onClick={() => deleteSales(sales._id)}
                            className="pm-delete"
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PAllSales;
