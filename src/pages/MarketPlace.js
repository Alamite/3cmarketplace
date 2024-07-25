import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PlayFill } from "react-bootstrap-icons";
import ColorThief from "colorthief";
import items from "../data/products.json";
import "../App.css";

const MarketPlace = () => {
  const [colors, setColors] = useState({});
  const imgRefs = useRef([]);

  useEffect(() => {
    const colorThief = new ColorThief();
    const colorsMap = {};

    imgRefs.current.forEach((img, index) => {
      if (img && img.complete) {
        // Ensure the image is loaded
        const palette = colorThief.getPalette(img, 5); // Get a palette of 5 colors
        colorsMap[index] = palette[1] || [0, 0, 0]; // Use the second color as the secondary color
      } else if (img) {
        img.addEventListener("load", () => {
          const palette = colorThief.getPalette(img, 5);
          colorsMap[index] = palette[1] || [0, 0, 0];
          setColors({ ...colorsMap }); // Update state after loading
        });
      }
    });

    setColors(colorsMap);
  }, [items]);

  const handleDemoClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="section-content" style={{ display: "block" }}>
      <h1>Explore our products</h1>
      <div className="card-container">
        {items.map((item, index) => {
          const secondaryColor = colors[index] || [0, 0, 0];
          const colorString = `${secondaryColor[0]}, ${secondaryColor[1]}, ${secondaryColor[2]}`;
          const boxShadowStyle = {
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
            transition: "box-shadow 0.3s ease-in-out",
          };

          return (
            <div
              key={item.id}
              className="card"
              style={boxShadowStyle}
              data-color={colorString} // Custom attribute for CSS
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 8px 16px rgba(${colorString}, 0.6)`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = `0 4px 8px rgba(0, 0, 0, 0.2)`)
              }
            >
              <Container fluid>
                <Row>
                  <Col xl={4}>
                    <div>
                      <img
                        ref={(el) => (imgRefs.current[index] = el)} // Store ref for each image
                        src={item.icon}
                        width="80px"
                        alt="Icon"
                        crossOrigin="anonymous"
                        style={{ borderRadius: "12px" }}
                      />
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
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlace;
