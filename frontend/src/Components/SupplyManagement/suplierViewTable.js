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

import jsPDF from "jspdf";
import "jspdf-autotable";

const ViewTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

   const sampleRows = [
     {
       OrderNumber: "O2345",
       OrderMaterial: "Linan",
       Quantity: "450M",
       Price: "LKR(35000-55000)",
       Date: "2024/02/23",
     },
     {
       OrderNumber: "O6785",
       OrderMaterial: "Poplin",
       Quantity: "850M",
       Price: "LKR(75000-95000)",
       Date: "2024/01/20",
     },
     {
       OrderNumber: "O9832",
       OrderMaterial: "Silk",
       Quantity: "250M",
       Price: "LKR(45000-65000)",
       Date: "2024/04/21",
     },
     {
       OrderNumber: "O8721",
       OrderMaterial: "Cotton",
       Quantity: "650M",
       Price: "LKR(655000-85000)",
       Date: "2024/03/13",
     },
     {
       OrderNumber: "O8903",
       OrderMaterial: "Linan",
       Quantity: "250M",
       Price: "LKR(25000-45000)",
       Date: "2024/05/15",
     },
     {
       OrderNumber: "O2267",
       OrderMaterial: "Cotton",
       Quantity: "550M",
       Price: "LKR(60000-75000)",
       Date: "2024/01/25",
     },
     {
       OrderNumber: "O6634",
       OrderMaterial: "Silk",
       Quantity: "400M",
       Price: "LKR(65000-85000)",
       Date: "2024/06/28",
     },
     {
       OrderNumber: "O1155",
       OrderMaterial: "Cotton",
       Quantity: "350M",
       Price: "LKR(40000-65000)",
       Date: "2024/03/20",
     },
   ];

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        [
          "ORDER NUMBER",
          "ORDER MATERIAL",
          "QUANTITY",
          "PRICE(NEGOTIABLE)",
          "DATE",
        ],
      ],
      body: sampleRows.map((row) => [
        row.OrderNumber,
        row.OrderMaterial,
        row.Quantity,
        row.Price,
        row.Date,
      ]),
    });
    doc.save("Order_Notice_Table.pdf");
  };

  const filteredRows = sampleRows.filter((row) =>
    row.OrderNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <img className="image2"></img>
      <h1 className="head">..........Order Notices Page..........</h1>
      <TextField
        label="Search by Order Number"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginTop: "-25px", marginBottom: "20px", marginLeft: "110px" }}
      />
      <TableContainer
        sx={{
          backgroundColor: "rgba(192,192,192,0.7)",
          width: "85%",
          marginLeft: "110px",
          paddingTop: "10px",
        }}
        component={Paper}
      >
        <Table sx={{ border: "3px solid #000000", width: "100%" }}>
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
                ORDER MATERIAL
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                QUANTITY
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                PRICE(NEGOTIABLE)
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                DATE
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
                  {row.OrderMaterial}
                </TableCell>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.Quantity}
                </TableCell>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.Price}
                </TableCell>
                <TableCell
                  sx={{
                    border: "3px solid #000000",
                    fontSize: "18px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {row.Date}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      alert(`Order Id: ${row.OrderNumber} Accept the Order`)
                    }
                    sx={{ margin: "0px 10px" }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      alert(`Order Id: ${row.OrderNumber} Reject the Order`)
                    }
                    sx={{ margin: "0px 10px" }}
                  >
                    Reject
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

export default ViewTable;
