import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const SupplierTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

   const sampleRows = [
     {
       OrderNumber: "O2345",
       supplierNumber: "S001",
       supplierName: "Kamal Gunarathne",
       supplierPrice: "LKR 50000",
     },
     {
       OrderNumber: "O6785",
       supplierNumber: "S002",
       supplierName: "Nimal Samarasooriya",
       supplierPrice: "LKR 59000",
     },
     {
       OrderNumber: "O9832",
       supplierNumber: "S003",
       supplierName: "Ajith Gamage",
       supplierPrice: "LKR 55000",
     },
     {
       OrderNumber: "O8721",
       supplierNumber: "S004",
       supplierName: "Supun Karunarathne",
       supplierPrice: "LKR 58000",
     },
     {
       OrderNumber: "O8903",
       supplierNumber: "S005",
       supplierName: "Sunil Wickramathunga",
       supplierPrice: "LKR 68000",
     },
     {
       OrderNumber: "O2267",
       supplierNumber: "S006",
       supplierName: "Arjuna Ranathunga",
       supplierPrice: "LKR 66000",
     },
     {
       OrderNumber: "O6634",
       supplierNumber: "S007",
       supplierName: "Jagath Vithanage",
       supplierPrice: "LKR 65000",
     },
     {
       OrderNumber: "O1155",
       supplierNumber: "S008",
       supplierName: "Yasith Samarathuga",
       supplierPrice: "LKR 52000",
     },
   ];

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        ["Order Number", "Supplier Number", "Supplier Name", "Supplier Price"],
      ],
      body: sampleRows.map((row) => [
        row.OrderNumber,
        row.supplierNumber,
        row.supplierName,
        row.supplierPrice,
      ]),
    });
    doc.save("SupplierTable.pdf");
  };

  const filteredRows = sampleRows.filter((row) =>
    row.supplierNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body1">
      <img className="image2"></img>
      <TextField
        label="Search by Supplier Number"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginTop: "30px", marginBottom: "20px", marginLeft: "90px" }}
      />
      <TableContainer
        sx={{
          backgroundColor: "rgba(192,192,192,0.7)",
          width: "90%",
          marginLeft: "90px",
          paddingTop: "10px",
        }}
        component={Paper}
      >
        <h1 className="supplier" style={{ textAlign: "center" }}>
          ..........Requested All Suppliers..........
        </h1>
        <Table sx={{ border: "3px solid #000000", width: "1350px" }}>
          <TableHead>
            <TableRow sx={{ border: "3px solid #000000" }}>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                ORDER NUMBER
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                SUPPLIER NUMBER
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                SUPPLIER NAME
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                SUPPLIER PRICE
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index} sx={{ border: "3px solid #000000" }}>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.OrderNumber}
                </TableCell>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.supplierNumber}
                </TableCell>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.supplierName}
                </TableCell>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.supplierPrice}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      alert(
                        `Supplier Id: ${row.supplierNumber} Accept the Request`
                      )
                    }
                    sx={{ margin: "0px 10px" }}
                  >
                    Accept Request
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      alert(
                        `Supplier Id: ${row.supplierNumber} Reject the Request`
                      )
                    }
                    sx={{ margin: "0px 10px" }}
                  >
                    Reject Request
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pdf">
        <Button variant="contained" color="primary" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default SupplierTable;
