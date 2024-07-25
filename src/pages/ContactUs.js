import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormText, Button } from "react-bootstrap";
import image from "../data/about_image.jpg";
import RightArrowAni from "../components/RightArrowAni.json";
import Lottie from "lottie-react";
import "../App.css";
const ContactUs = () => {

  const lottieRef = useRef(); // Ref to control the animation
  const [isRunning, setIsRunning] = useState(false); // State to track if the animation is running
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

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


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here (e.g., send data to a server)
    alert('Form submitted! Check the console for data.');
    // Optionally clear the form after submission
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
};
  return (
    <div className="section-content" style={{backgroundColor:"#e7f0ff"}}>
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
                    Let's level up
                  </span>{" "}
                  your business.
                </h1>
                <div
                  style={{
                    marginTop: "40px",
                    textAlign: "left",
                    fontSize: "28px",
                  }}
                >
                  Email, Call or fill out the form the find out how we can help build better customer relations for your business.
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    textAlign: "left",
                    fontSize: "22px",
                  }}
                >
                  email@3c.in
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    textAlign: "left",
                    fontSize: "22px",
                  }}
                >
                  12345678910
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    textAlign: "left",
                    fontSize: "24px",
                    fontWeight:"600"
                  }}
                >
                  Address
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    textAlign: "left",
                    fontSize: "22px",
                  }}
                >
                  Building no.123<br/>
                  abc Road<br/>
                  Mumbai 123123
                </div>
              </div>
              <div>
               
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="get-in-touch-container">
            <div style={{textAlign:"left", fontSize:"40px"}}>Let's chat</div>
            <form  style={{width:"100%", marginTop:"20px"}}>
            <div style={{display:"flex"}}>
            <div className="input-group">
            <div style={{width:"100%", paddingRight:"10px"}}>
            <input
                type="text"
                className="form-control"
                id="username"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            </div>
            <div className="input-group">
            <div style={{width:"100%", paddingLeft:"10px"}}>
              
                <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
             
            </div>
            </div>
            
            <div className="input-group">
            <div style={{width:"100%", marginTop:"20px"}}>
              
                <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Email Id"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
             
            </div>
            <div className="input-group">
            <div style={{width:"100%", marginTop:"20px"}}>
              
                <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Phone"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
             
            </div>
            <div className="input-group">
            <div style={{width:"100%", marginTop:"20px"}}>
              
                <input
                type="text"
                className="form-control"
                id="message"
                placeholder="message"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                style={{height:"150px"}}
              />
            </div>
             
            </div>
            <div style={{width:"100%", display:"flex",justifyContent:"center", marginTop:"30px"}}>
            <button
                  className="touch-btn-primary"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                  Submit
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
            
          </form>
    
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
