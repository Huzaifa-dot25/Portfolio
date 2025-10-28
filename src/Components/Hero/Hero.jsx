import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import heroImage from "../../assets/img.jpg";
import cvFile from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Muhammad <span>Huzaifa Ajmal</span>
        </h1>

        <p className="hero-subtitle">
          Frontend Developer specializing in React and Tailwind CSS — crafting
          modern, responsive, and user-focused web interfaces. Passionate about
          building clean interfaces and seamless user experiences with modern
          design systems.
        </p>

        <div className="hero-buttons">
          <a href={cvFile} download="Huzaifa-Ajmal-CV.pdf">
            <button className="primary-btn">Download CV</button>
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
          >
            <button className="btn primary-btn">View Projects</button>
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Huzaifa Ajmal" />
        <h2>Open To Work</h2>
        <p>Passionate about creativity, design & innovation.</p>
      </div>
    </section>
  );
};

export default Hero;
