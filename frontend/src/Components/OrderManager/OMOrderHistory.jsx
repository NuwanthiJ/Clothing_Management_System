import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

const OMOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/item/order-history"
        );
        setOrderHistory(response.data.orderHistory);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="my-3 mx-5">
      <Row>
        <Col>
          <h1>Order History</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Postal Code</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>{order.postalCode}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OMOrderHistory;
