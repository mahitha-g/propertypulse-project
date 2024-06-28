import React, { useState } from "react";
import "../navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav__menu");

    
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        Propertypulse
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="https://projectabout.ccbp.tech/" className="nav__link" >
            About
          </a>
        </li>
        <li className="nav_item">
          <a href="https://projectcard.ccbp.tech/" className="nav__link">
            Property
          </a>
        </li>
        <li className="nav__item">
          <a href="https://projectagents.ccbp.tech/" className="nav__link">
            Agents
          </a>
        </li>
        <li className="nav__item">
          <a href="https://contactproject.ccbp.tech/" className="nav__link">
            Contact Us
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <li className="nav__item">
          <a href="https://formproject1.ccbp.tech/" className="nav__link">
            Login
          </a>
        </li>
    </nav>
  );
}

export default Navbar;