import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Huzaifa Ajmal</h2>
          <p>Frontend Developer — React | Tailwind | UI/UX</p>
        </div>

        <ul className="footer-nav">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/huzaifa-ajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Huzaifa-dot25"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:huzaifaajmaldev@gmail.com"
            className="social-icon email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Huzaifa Ajmal — Crafted using React &
          Css.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
