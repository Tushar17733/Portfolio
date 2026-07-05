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
      company: "Bigscal Technologies",
      duration: "January - June 2026",
      location: "Surat , Gujarat , India",
      responsibilities: [
        "Gained practical experience in front-end development using JavaScript, TypeScript,and core Angular concepts.",
        "Contributed to the development and maintenance of the healthcare application Healthray , serving real-world business requirements.",
        "Investigated and resolved production issues reported through Sentry, minimizing application errors and improving reliability upto 60%.",
        "Collaborated closely with senior developers during feature development, code reviews, debugging sessions, and sprint planning in an Agile environment",
      ],
    },
    {
      company: "Internpe",
      duration: "June - July 2024",
      location: "Remote",
      responsibilities: [
        "Built a responsive Multi-page E-Commerce website with a structured layout and modern design using HTML, CSS, and JavaScript.",
        "Created a To-Do list application with JavaScript to allow users to add, delete, and mark tasks as completed. Implemented local storage to retain tasks even after page refresh.",
        "Designed a Connect 4 game using JavaScript, featuring a dynamic grid system and turn-based logic.",
      ],
    },
    
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title pb-0" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="https://drive.google.com/file/d/1vlNvPuE34XP1oBxCowJvUlsxZcr0iIze/view?usp=sharing"
          className="icon resume"
          target="_blank"
          download="Resume"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Poriya Tushar</h4>
              <p className="justify">
                Full Stack Developer with hands-on experience in the MEAN stack (MongoDB, Express.js, Angular, Node.js)
                and strong proficiency in JavaScript and TypeScript. Proficient in building Responsive UIs, debugging issues,
                and writing clean, maintainable code. Passionate about learning modern Web technologies, solving real-world
                problems . Currently seeking an opportunity to contribute to enterprise-level projects
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
