import React, { useEffect, useRef, useCallback } from "react";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import  "./Cert.css"



function Certifications() {
  const certifications = [
    {
      id: 3,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1759426202/frontend_eqdsif.png",
      link: "https://www.udemy.com/certificate/UC-e9e409ad-de3b-4543-b3c3-5b7dd3a4b29d/",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1759426203/mern_blog_ysyub2.png",
      link: "https://www.udemy.com/certificate/UC-c0394e3f-80c9-42c8-afe7-40df36cd3c23/",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1759426202/java_wfvw6v.png",
      link: "https://www.udemy.com/certificate/UC-38ad4f9b-eed1-47d7-88f8-c71105e597b8/"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1759426203/nptel_k9zi7q.png",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs56/Course/NPTEL25CS56S55760021504402221.pdf"
    },

    {
      id: 1,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743405108/Screenshot_2025-03-31_124136_hcupda.png", 
      link: "https://coursera.org/verify/C9TNGT2JUNQL",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743405017/python_x8bpcj.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/BHLQ5H3JCPQR",
    },
    
    
  ];


  return (
    <section id="certifications" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Certifications</h2>
        <p className="justify">
          Explore a curated selection of certifications showcasing my technical
          expertise and problem-solving skills. Each certification represents my
          commitment to mastering new technologies and delivering practical,
          innovative solutions.
        </p>
      </div>

      <div className="certifications-container">
      {certifications.map((cert) => (
        <div className="cert-card" key={cert.id}>
          <img src={cert.image} alt={`Certificate ${cert.id}`} />
          <button
            className="credential-btn"
            onClick={() => window.open(cert.link, "_blank")}
          >
            Show Credential
          </button>
        </div>
      ))}
    </div>

    </section>
  );
}

export default Certifications;
