import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import VantaBackground from "./components/VantaBackground";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MarketPlace from "./pages/MarketPlace";

const App = () => {
  return (
    <VantaBackground>
      <div className="app">
        <NavBar />
        <div className="content">
          <div className="section" id="home">
            <LandingPage />
          </div>
          <div className="section" id="marketplace">
            <MarketPlace />
          </div>
          {/* <div className="section" id="about">
            <AboutUs />
          </div>
          <div className="section" id="contact">
            <ContactUs />
          </div> */}
        </div>
      </div>
    </VantaBackground>
  );
};

export default App;
