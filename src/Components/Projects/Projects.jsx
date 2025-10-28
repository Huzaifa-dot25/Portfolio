import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

import project1 from "../../assets/rs.jpg";
import project2 from "../../assets/e-com.jpg.png";
import project3 from "../../assets/portfolio.jpg.png";
import project4 from "../../assets/edusity.jpg.png";
import project5 from "../../assets/news.png";
import project6 from "../../assets/weather.png";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Website",
      image: project1,
      desc: "A full-stack real estate platform with modern UI, property filters, and contact form integration.",
      github: "https://github.com/Huzaifa-dot25",
      live: "https://realestate-demo.vercel.app",
      linkedin: "https://www.linkedin.com/in/huzaifa-ajmal",
    },
    {
      title: "E-Commerce Store",
      image: project2,
      desc: "React + Tailwind powered e-commerce site with cart, product filtering, and payment integration.",
      github: "https://github.com/Huzaifa-dot25",
      live: "https://ecom-demo.vercel.app",
      linkedin: "https://www.linkedin.com/in/huzaifa-ajmal",
    },
    {
      title: "Educational Website",
      image: project4,
      desc: "A dynamic and user-friendly educational platform using React.",
      github: "https://github.com/Huzaifa-dot25",
      live: "https://restaurant-demo.vercel.app",
      linkedin: "https://www.linkedin.com/in/huzaifa-ajmal",
    },
    {
      title: "Portfolio Website",
      image: project3,
      desc: "Personal portfolio built using React, Tailwind, and Framer Motion to showcase skills and projects.",
      github: "https://github.com/Huzaifa-dot25",
      live: "https://portfolio-demo.vercel.app",
      linkedin: "https://www.linkedin.com/in/huzaifa-ajmal",
    },
    {
      title: "News Portal",
      image: project5,
      desc: "News aggregator website fetching live articles using REST APIs with category filters and search.",
      github: "https://github.com/Huzaifa-dot25",
      live: "https://newsportal-demo.vercel.app",
      linkedin: "https://www.linkedin.com/in/huzaifa-ajmal",
    },
    {
      title: "Weather App",
      image: project6,
      desc: "A responsive weather app built with React that fetches real-time weather data using a public API and displays forecasts in an elegant UI",
      github: "https://github.com/Huzaifa-dot25",
      live: "https://weather-app-demo.vercel.app",
      linkedin: "https://www.linkedin.com/in/huzaifa-ajmal",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={proj.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
                <a href={proj.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a
          href="https://github.com/Huzaifa-dot25"
          target="_blank"
          rel="noreferrer"
          className="view-all-btn"
        >
          <FaGithub className="github-icon" /> View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
