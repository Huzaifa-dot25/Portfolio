import React from "react";
import "./About.css";
import { FaCode, FaTools, FaLaptopCode, FaServer } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGithub,
  SiVite,
} from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">
        About <span>& Skills</span>
      </h2>

      <div className="about-container">
        {/* About Card */}
        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>About Me</h3>
          <p>
            I'm a passionate frontend developer focused on crafting clean,
            responsive, and modern web experiences. I specialize in building
            sleek UIs using React, Tailwind CSS, and Vite — turning creative
            ideas into functional, beautiful designs.
          </p>
        </div>

        <div className="about-card">
          <FaCode className="about-icon" />
          <h3>Frontend Development</h3>
          <p>
            Expert in React, modern JavaScript (ES6+), and responsive design
            using Tailwind CSS for pixel-perfect layouts.
          </p>
          <div className="skill-icons">
            <SiReact />
            <SiTailwindcss />
            <SiJavascript />
          </div>
        </div>

        <div className="about-card">
          <FaTools className="about-icon" />
          <h3>Tools & Platforms</h3>
          <p>
            Skilled in using tools that streamline development and version
            control — ensuring smooth workflows and maintainable codebases.
          </p>
          <div className="skill-icons">
            <SiGithub />
            <SiVite />
          </div>
        </div>

        <div className="about-card">
          <FaServer className="about-icon" />
          <h3>Deployment & Optimization</h3>
          <p>
            I manage builds, optimizations, and deployments using modern
            frameworks and CI/CD workflows — ensuring speed and scalability.
          </p>
          <div className="skill-icons">
            <SiGithub />
            <SiVite />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
