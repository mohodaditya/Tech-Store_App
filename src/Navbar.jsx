import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png"; // Path to your PNG image

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Laptop Icon" className="logo-icon" id="logo_1" />
          <h4>TechStore</h4>
        </div>

        {/* Hamburger Menu Toggle for Mobile */}
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Links Section */}
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="navbar-link">
            <span>
              <i className="fa-regular fa-heart"></i> Wishlist
            </span>
          </div>
          <div className="navbar-link">
            <span>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart
            </span>
          </div>
          <div className="navbar-link">
            <span>
              <i className="fa-regular fa-user"></i> Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
