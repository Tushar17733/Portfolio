import React from "react";
import "./Resume.scss";

const Resume = () => {
 
  const education = [
    {
      title: "B Tech CSE",
      duration: "2022 - 2026",
      institution: "P P Savani University",
      description:
        "During my B.Tech, I focused on hands-on projects involving modern web technologies, frontend frameworks, and responsive design. This practical experience strengthened my technical foundation and prepared me to build dynamic, user-friendly web applications.",
    },
    {
      title: "Higher Secondary Education",
      duration: "2020 - 2022",
      institution: "Shree Sharda Vidhyamandir",
      description:
        "During my higher education, I focused on the fundamentals of computer science, including basic programming concepts, web development, and system operations. This solid foundation has prepared me for practical applications and further growth in the IT field.",
    },
    
  ];
  const internships = [
    {
      company: "Internpe",
      duration: "June - July 2024",
      location: "Surat , Gujarat , India",
      responsibilities: [
        
        "Developed a simple calculator using HTML, CSS, and JavaScript, enabling basic arithmetic operations with a clean and interactive user interface.",
        "Built a responsive multi-page E-Commerce website with a structured layout and modern design using HTML, CSS, and JavaScript.",
        "Created a To-Do list application with JavaScript to allow users to add, delete, and mark tasks as completed. Implemented local storage to retain tasks even after page refresh.",
        "Designed a Connect 4 game using JavaScript, featuring a dynamic grid system and turn-based logic.",
      ],
    },
    {
      company: "CodSoft",
      duration: "April - May 2025",
      location: "Surat , Gujarat , India",
      responsibilities: [
        "Designed and developed a responsive landing page for the company using HTML, CSS, and JavaScript.",
        "Developed a personal portfolio website showcasing projects, skills, and experience using Reactjs.",
        "Developed a simple calculator using HTML, CSS, and JavaScript, enabling basic arithmetic operations with a clean and interactive user interface.",
      ],
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href= "https://drive.google.com/file/d/1X3U-yDojj7P6eQncry7cAGFjzLxWHBV7/view?usp=sharing"      
          className="icon resume"
          target="_blank"
          download="Resume"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
        I am a passionate and dedicated fresher specializing in web development. With a strong foundation in front-end technologies, responsive design, and user experience, I am eager to apply my skills to real-world projects. I thrive on building interactive and visually appealing web applications and look forward to collaborating with industry professionals to enhance my expertise and contribute to innovative digital solutions.

        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Poriya Tushar</h4>
              <p className="justify">
                I am an aspiring and passionate CS professional with a strong
                foundation in programming and web development. I am persuing my 
               degree in Computer Science and Engineering.With a strong foundation in front-end technologies, responsive design, and user experience, I am eager to apply my skills to real-world projects.
              </p>
              
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Internships</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
