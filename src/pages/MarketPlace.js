import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PlayFill } from "react-bootstrap-icons";
import tempIcon from "../data/tempLogo.jpg";
import items from "../data/products.json";
import "../App.css";

const MarketPlace = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // Fetch the JSON data
  //   fetch("/data/products.json")
  //     .then((response) => response.json())
  //     .then((data) => setItems(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const handleDemoClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="section-content" style={{ display: "block" }}>
      <h1>Market Place</h1>
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card">
            <Container fluid>
              <Row>
                <Col xl={4}>
                  <div>
                    <img src={tempIcon} width="80px" alt="Icon" />
                  </div>
                </Col>
                <Col xl={8}>
                  <div style={{ textAlign: "left" }}>{item.title}</div>
                  <div style={{ textAlign: "left" }}>{item.description}</div>
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      className="demo-btn-primary"
                      onClick={() => handleDemoClick(item.link)}
                    >
                      <PlayFill /> Demo
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
