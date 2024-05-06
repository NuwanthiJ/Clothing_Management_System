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
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  const navigate = useNavigate();

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
        body: rows.map((row) => [
          row.id,
          row.material,
          row.quantity,
          row.price,
          row.date ? row.date.split("T")[0] : "",
        ]),
      });
      doc.save("Order_Notice_Table.pdf");
    };

  return (
    <div>
      <TableContainer
        sx={{ backgroundColor: "rgba(192,192,192,0.6)" }}
        component={Paper}
      >
        <Table sx={{ border: "3px solid #000000" }} id="table-to-pdf">
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
                PRICE (NEGOTIABLE)
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
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td,&:last-child th": { border: 0 },
                    border: "2px solid #000000",
                  }}
                >
                  <TableCell
                    component={"th"}
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    component={"th"}
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    {row.material}
                  </TableCell>
                  <TableCell
                    component={"th"}
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    component={"th"}
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    component={"th"}
                    scope="row"
                    sx={{
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "900",
                    }}
                  >
                    {row.date ? row.date.split("T")[0] : ""}
                  </TableCell>
                  <TableCell>
                    <button
                      className="btn1"
                      sx={{ margin: "0px 10px" }}
                      onClick={() =>
                        selectedUser({
                          id: row.id,
                          material: row.material,
                          quantity: row.quantity,
                          price: row.price,
                          date: row.date,
                        })
                      }
                    >
                      Update
                    </button>
                    <button
                      className="btn2"
                      sx={{
                        margin: "10px 20px",
                      }}
                      onClick={() => deleteUser({ id: row.id })}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
              >
                <TableCell component={"th"} scope="row">
                  No Data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pdf">
        <Button variant="contained" color="primary" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
      <button className="user1" onClick={() => navigate("/supplytable")}>
        View Requested Supplier's
      </button>
      <button className="user2" onClick={() => navigate("/userview")}>
        View Supplier's Page
      </button>
    </div>
  );
};
export default UsersTable;