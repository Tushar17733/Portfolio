import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "./Projects.scss";

const Portfolio = () => {
  useEffect(() => {
    let iso;
    const lightbox = GLightbox({
      selector: ".glightbox",
    });
    const initializeIsotope = () => {
      iso = new Isotope(".isotope-container", {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: ".filter-web",
      });
    };
    const imgLoad = imagesLoaded(".isotope-container");
    imgLoad.on("progress", () => {
      iso && iso.layout();
    });
    imgLoad.on("done", initializeIsotope);
    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
        filters.forEach((item) => item.classList.remove("filter-active"));
        this.classList.add("filter-active");
      });
    });
    return () => {
      filters.forEach((filter) =>
        filter.removeEventListener("click", () => {})
      );
      if (iso) iso.destroy();
    };
  }, []);

  const projects = [
   
    {
      title: "Cara Clothing",
      description: "Developed a responsive E-commerce website with product categories, cart functionality, and a checkout page using Reactjs.Integrated authentication using Clerk. ",
      demoLink: "https://cara-website-roan.vercel.app/",
      codeLink: "https://github.com/Tushar17733/Cara-Website",
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743273544/newcara_um7cxr.png"
    },
    {
      title: "Niora",
      description: "Created a stylish and modern jewelery landing page using HTML and Tailwind CSS. It includes a beautiful hero section, product highlights, and a call-to-action.",
      demoLink: "https://niora-sable.vercel.app/",
      codeLink: "https://github.com/Tushar17733/Niora",
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743273352/Screenshot_2025-03-30_000548_ble9la.png"
    },
    {
      title: "YRF Clone",
      description: "Designed Yash Raj Films clone using HTML, CSS, and JS. Showcased movies, trailers, and company details with a visually appealing and responsive layout.",
      demoLink: "https://yashrajfilms-pied.vercel.app/",
      codeLink: "https://github.com/Tushar17733/YRF-Website",
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743273818/Screenshot_2025-03-30_001333_k0degi.png"
    },
    {
      title: "Sidcup Family Golf",
      description: "Developed a animated landing  website of Sidcup Family Golf using HTML, CSS, GSAP and JavaScript.",
      demoLink: "https://sidcup-golf-ten.vercel.app/",
      codeLink: "https://github.com/Tushar17733/Sidcup-family-Golf",
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743385494/sidcup_tqbhim.png"
    },
    {
      title: "Connect 4 game",
      description: "Developd a Connect 4 game using HTML, CSS, and JavaScript, where two players take turns dropping discs into a grid and uses alerts to announce the winner.",
      demoLink: "https://connect-4-delta.vercel.app/",
      codeLink: "https://github.com/Tushar17733/Connect-4",
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743386231/Screenshot_2025-03-31_072659_kzswtg.png"
    },
    {
      title: "Sundown-Studio Clone",
      description: "Developed a responsive e-commerce website with product listings, cart functionality, and a checkout page using HTML, CSS, and JavaScript.",
      demoLink: "https://sundown-studio-blush.vercel.app/",
      codeLink: "https://github.com/Tushar17733/Sundown-Studio-Clone",
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743385493/sundwn_pridxb.png"
    },
    
  ];
  

  return (
    <section id="projects" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p className="justify">
          Take a look at my portfolio to see a diverse collection of projects
          that highlight my technical skills and problem-solving abilities. Each
          project reflects my commitment to innovation and my passion for
          creating effective, real-world solutions.
        </p>
      </div>

      <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image"/>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="buttons">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn demo-btn">Demo</a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn code-btn">Code</a>
          </div>
        </div>
      ))}
    </div>


      {/* <div className="container">
        <div
          className="isotope-layout"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                  className="img-fluid"
                  alt="Project 1"
                />
                <div className="portfolio-info">
                  <h4>Project 1</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <a
                    href="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                    title="Project 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                  className="img-fluid"
                  alt="Project 2"
                />
                <div className="portfolio-info">
                  <h4>Project 2</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <a
                    href="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                    title="Project 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                  className="img-fluid"
                  alt="Project 3"
                />
                <div className="portfolio-info">
                  <h4>Project 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                    title="Project 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                  className="img-fluid"
                  alt="Project 3"
                />
                <div className="portfolio-info">
                  <h4>Project 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121481/demo_xhn7qz.jpg"
                    title="Project 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Portfolio;
