import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap"; // Import Carousel
import { PlayFill } from "react-bootstrap-icons";
import ColorThief from "colorthief";
import items from "../data/products.json";
import "../App.css";

const MarketPlace = () => {
  const [colors, setColors] = useState({});
  const imgRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

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

  const handleCardClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentItem(null);
  };

  return (
    <div className="section-content" style={{ display: "block" }}>
      <h1>Explore Our Products</h1>
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
              onClick={() => handleCardClick(item)} // Open modal on card click
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
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click event
                          handleDemoClick(item.link);
                        }}
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

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header style={{display:"flex", justifyContent:"space-between"}}>
          <Modal.Title>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{display:"flex", alignItems:"center"}}>

            <img
            src={currentItem?.icon}
            alt="Product"
            style={{ width: "100%", borderRadius: "12px", marginRight:"10px" }}
          /> 
          <span style={{whiteSpace:"nowrap"}}>{currentItem?.title}</span>
            </div>
         
              </div>
              </Modal.Title>
              <button
                        className="demo-btn-primary"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click event
                          handleDemoClick(currentItem?.link);
                        }}
                      >
                        <PlayFill /> Demo
                      </button>
        </Modal.Header>
        <Modal.Body>
          <div style={{fontSize:"22px"}}>Description</div>
          <p>{currentItem?.long_description}</p>
          <Carousel>
            {currentItem?.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ height:"60vh",objectFit: "cover",borderRadius: "12px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDemoClick(currentItem.link)}
          >
            <PlayFill /> Demo
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default MarketPlace;
