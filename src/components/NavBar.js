import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 style={{ color: "white" }}>3C CTPL</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#marketplace">Market Place</a>
        {/* <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a> */}
      </div>
    </nav>
  );
};

export default NavBar;
