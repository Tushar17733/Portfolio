import React, { useEffect, useRef, useCallback } from "react";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import  "./Cert.css"



function Certifications() {
  const certifications = [
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
    {
      id: 3,
      image: "https://res.cloudinary.com/dlty18sqr/image/upload/v1743405017/internpe_gcxx6q.png",
      link: "https://www.linkedin.com/posts/tushar-poriya-a91a78298_internpe-activity-7218426312959397889-bmyi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgPqw0BE09euAGhmyG-cLBQjoZciPTtTh0",
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
