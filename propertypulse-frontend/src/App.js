import React, { useState } from "react";
import "./navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./services/Home";
import About from "./services/About";
import Property from "./services/Property";
import Agents from "./services/Agents";
import ContactUs from "./services/ContactUs";
import Login from "./services/Login";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navToggle = () => {
    setActive((prevActive) => (prevActive === "nav__menu" ? "nav__menu nav__active" : "nav__menu"));
    setIcon((prevIcon) => (prevIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"));
  };

  const handleLoginLogout = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <Router>
      <nav className="nav">
        <Link to="/" className="nav__brand">
          Propertypulse
        </Link>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/Home" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/property" className="nav__link">
              Property
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/agents" className="nav__link">
              Agents
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <li className="nav__item">
          <Link to={isLoggedIn ? "/" : "/login"} className="nav__link" onClick={handleLoginLogout}>
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </li>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
