import React from "react";
import "./About.scss";

const About = () => (
  <section id="about" className="about section">
    <div className="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p className="justify new">
        I am passionate about building user-friendly, responsive, and visually appealing web applications with a strong foundation in frontend development. I am eager to work in a dynamic environment that values innovation and user experience. I strive to create seamless and engaging user experiences by combining clean code with modern design principles. Constantly learning and adapting to new technologies, I aim to build efficient and scalable web applications.
      </p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4 text-center">
          <img
            src="https://res.cloudinary.com/dlty18sqr/image/upload/v1743235217/profile_gjc7f0.png"
            className="img-fluid"
            style={{
              maxWidth: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="Profile"
          />
        </div>
        <div className="col-lg-8 content">
          <h2>Web Developer</h2>
          <p className="py-3 justify new2">
            Being a Web Developer means transforming creative concepts into interactive, functional websites. I find immense satisfaction in building the bridge between design and technology.
          </p>
          <div className="row">
            {[
              { label: "Degree", value: "Bachelor of Technology" },
              { label: "Email", value: "poriyatushar1@gmail.com" },
              { label: "Website", value: "https://portfolio-m4vw.vercel.app/" },
              { label: "Address", value: "Surat ,Gujarat, India" },
            ].map((item, index) => (
              <div className="col-lg-6" key={index}>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{item.label}:</strong> <span>{item.value}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <p className="py-3 justify new2">
            My dedication to programming is not just about writing code; it's
            about understanding the intricate details that make technology work.
            Whether it's exploring new languages, diving into innovative
            projects, or tackling difficult bugs, I am always eager to learn and
            grow in the ever-evolving landscape of web development.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
