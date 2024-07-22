import React, { useEffect, useRef } from "react";
import "../App.css";
import DownArrowAni from "../components/DownArrowAni.json";
import Lottie from "lottie-react";
import { ImageBitmapLoader } from "three";

const LandingPage = () => {


  return (
    <div className="landing-section-content">
    <h1>Empowering Business Diligence and Enhancing Customer Interaction</h1>
    <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
      <Lottie animationData={DownArrowAni} style={{ height: "50px" }} />
    </div>
  </div>
            );
};

export default LandingPage;
