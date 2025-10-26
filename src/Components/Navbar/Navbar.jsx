import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Portfolio</div>
      <div className="nav-hamburger" onClick={toggleMenu}>
        {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
      </div>

      <ul className={`nav-items ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav-contact-btn desktop-btn">
        <Link to="contact" smooth={true} duration={600} offset={-70} spy={true}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
