import React from "react";
import "./Navbar.css";

const NavBar = () => {
  // Function to handle smooth scroll
  const handleScroll = (event, selector) => {
    event.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h2 style={{ color: "white" }}>3C CTPL</h2>
      <div>
        <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
          Home
        </a>
        <a href="#marketplace" onClick={(e) => handleScroll(e, "#marketplace")}>
          Market Place
        </a>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
          About Us
        </a>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
