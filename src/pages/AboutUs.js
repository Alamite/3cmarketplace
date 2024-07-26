import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../data/about_image.jpg";
import RightArrowAni from "../components/RightArrowAni.json";
import Lottie from "lottie-react";
import "../App.css";

const AboutUs = () => {
  const lottieRef = useRef(); // Ref to control the animation
  const [isRunning, setIsRunning] = useState(false); // State to track if the animation is running

  // Function to modify the colors in the animation data
  const changeAnimationColor = (color) => {
    const animationItem = lottieRef.current?.animationData;

    if (animationItem && animationItem.layers) {
      animationItem.layers.forEach((layer) => {
        if (layer.shapes) {
          layer.shapes.forEach((shape) => {
            if (shape.it) {
              shape.it.forEach((item) => {
                if (item.c) {
                  item.c.k = color; // Change the color
                }
              });
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    // Change color based on the animation state
    const color = isRunning ? [0, 0, 0, 1] : [1, 1, 1, 1]; // Black when running, white when stopped
    changeAnimationColor(color);
  }, [isRunning]);

  const handleMouseEnter = () => {
    setIsRunning(true); // Set state to running
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsRunning(false); // Set state to not running
    lottieRef.current?.stop();
    lottieRef.current?.setDirection(1); // Ensure direction is forward
    lottieRef.current?.goToAndStop(RightArrowAni.op, true); // Set to the end frame
  };

  const handleDemoClick = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the element
    }
  };
  
  return (
    <div className="section-content">
      <Container fluid>
        <Row>
          <Col xl={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                padding: "10px 0px",
              }}
            >
              <div>
                <h1 style={{ textAlign: "left", fontSize: "50px" }}>
                  <span style={{ fontWeight: "600" }}>
                    We help build bridges between
                  </span>{" "}
                  you and your customers
                </h1>
                <div
                  style={{
                    marginTop: "40px",
                    textAlign: "left",
                    fontSize: "28px",
                  }}
                >
                  Our mission is to revolutionize the way businesses manage
                  their customer relationships. We believe that every
                  interaction matters, and our CRM solutions help
                  customer-facing teams at businesses to create stronger
                  relationships with their customers.
                </div>
              </div>
              <div>
                <button
                  className="touch-btn-primary"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDemoClick("#contact")}
                >
                  <div>
                  Get in touch
                  <div className="lottie-container">
                    <Lottie
                      lottieRef={lottieRef}
                      animationData={RightArrowAni}
                      loop={true} // Loop the animation while hovering
                      autoplay={false} // Do not autoplay
                      style={{ height: "32x" }}
                    />
                  </div>
                  </div>
                 
                </button>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="image-container">
              <img src={image} alt="About Us" className="responsive-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
