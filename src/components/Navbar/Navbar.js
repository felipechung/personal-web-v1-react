import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo" href="#home">
          &lt;fchung&gt;
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a className="nav-links" href="#home" onClick={closeMobileMenu}>
              <FaIcons.FaHome></FaIcons.FaHome>
              <span className="nav-icon">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-links"
              href="#portfolio"
              onClick={closeMobileMenu}
            >
              <FaIcons.FaLayerGroup></FaIcons.FaLayerGroup>
              <span className="nav-icon">Portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="#about" onClick={closeMobileMenu}>
              <FaIcons.FaUserAlt></FaIcons.FaUserAlt>
              <span className="nav-icon">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="#contact" onClick={closeMobileMenu}>
              <FaIcons.FaComments></FaIcons.FaComments>
              <span className="nav-icon">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
