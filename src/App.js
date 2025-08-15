import { useState } from 'react';
import img  from './images/kenzhu.jpg';
import img1 from './images/Screenshot 2025-08-08 163159.png';
import img2 from './images/Screenshot 2025-08-08 193450.png';
import img3 from './images/krazee.png';

const Portfolio = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [portfolioBgColor, setPortfolioBgColor] = useState('#f8f9fa');

  const projects = [
    {
      id: 1,
      title: "Advocacy Campaign",
      image: img1,
      description: "An advocacy campaign project built using HTML, CSS, and JavaScript.",
      fullDescription: " This is a advocacy campaign webpage project that was built using HTML, CSS, and JavaScript. This took place last 2021 for a school project. Moreover, this advocacy campaign helps and inspires people to fight for gender equality to achieve human equality at all cost.",
      technologies: "HTML, CSS, JavaScript",
      duration: "1 month",
      role: "Full Stack Developer"
    },
    {
      id: 2,
      title: "Student Management System",
      image: img2,
      description: "A student management system project created using C++.",
      fullDescription: "The project is a C++-based student management system intended to increase the efficiency of keeping student data for educational institutions or schools. This system features a grading system, academic records, class and course management, attendance, analytics reports, and other information. ",
      technologies: "C++",
      duration: "3 weeks",
      role: "Software Developer"
    },
    {
      id: 3,
      title: "Project Kraze",
      image: img3,
      description: "Project Kraze is a sales and inventory database using Microsoft Access.",
      fullDescription: " Project Kraze is a sales and inventory database for Kraze SportsWear using Microsoft Access. This was a project in Information Management Final Examination in which we have a group consisting of 5 members which aims to solve some problems of a sportswear shop in regards to its sales and inventory management.",
      technologies: "Microsoft Access",
      duration: "1 month",
      role: "Backend Developer"
    }
  ];

  const backgroundColors = ['#f8f9fa', '#e3f2fd', '#f3e5f5', '#e8f5e8', '#fff3e0'];

  const handleProjectTitleClick = (projectId) => {
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    setPortfolioBgColor(randomColor);
  };


  const openModal = (project) => {
    setSelectedModal(project);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (

    <> <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" /> 
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" /> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className="min-h-screen bg-light">
      
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
          <div className="container">
            <a className="navbar-brand text-primary" href="#home">
              My Portfolio
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#about">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <section id="home" className="hero-section text-white text-center position-relative">
          <div className="floating-shapes"></div>
          <div className="container position-relative" style={{zIndex: 2}}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h1 className="hero-title">Kenzhu Aguilera</h1>
                <p className="hero-subtitle">
                  Backend Developer
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary btn-lg me-3">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline-light btn-lg">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="section-title text-dark">About Me</h2>
                <div className="row align-items-center">
                  <div className="col-md-4 mb-4">
                    <div className="profile-image">
                      <img 
                        src={img} 
                        alt="Profile" 
                        className="img-fluid"
                        style={{width: '280px', height: '280px', objectFit: 'cover'}}
                      />
                    </div>
                  </div>
                  <div className="col-md-8 text-start">
                    <p className="lead mb-4">
                      An aspiring Backend developer with just a few months of experience. 
                    </p>
                    <p className="mb-4">
                      I specialize in C++ programming especially Object-Oriented Programming (OOP). Moreover, I am just starting to learn React, Node.js; also, refreshing my skills in HTML, CSS, and JavaScript.
                    </p>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="skills-list mb-4">
                          <h6 className="fw-bold text-primary">Frontend Skills:</h6>
                          <ul className="list-unstyled">
                            <li>React</li>
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript ES6+</li>
                            <li>Bootstrap</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="skills-list mb-4">
                          <h6 className="fw-bold text-primary">Backend Skills:</h6>
                          <ul className="list-unstyled">
                            <li>Node.js</li>
                            <li>C++</li>
                            <li>SQL</li>
                            <li>Java</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
        <section 
              id="projects" 
              className="py-5 portfolio-section"
              style={{ backgroundColor: portfolioBgColor }}
        >
          <div className="container">
            <h2 className="section-title text-dark text-center">My Projects</h2>
            <div className="row g-4 align-items-stretch">
              {projects.map((project) => (
                <div key={project.id} className="col-md-4 d-flex">
                  <div className="card project-card flex-fill position-relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="card-img-top project-image"
                    />
                    <div className="card-body">
                      <div>
                        <h5 
                          className="card-title project-title"
                          onClick={() => handleProjectTitleClick(project.id)}
                        >
                          {project.title}
                        </h5>
                        <p className="card-text text-muted">
                          {project.description}
                        </p>
                      </div>
                      <div className="d-flex justify-content-center w-100">
                        <button 
                          className="btn btn-primary"
                          onClick={() => openModal(project)}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

             
        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-dark text-center">Contact Me</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <form 
                  className="contact-form p-5" 
                  onSubmit={(e) => {
                   e.preventDefault();

            if (!e.target.checkValidity()) {
              e.stopPropagation();
              e.target.reportValidity(); 
              return;
            }

            alert(`Thank you for contacting me!`);
            e.target.reset();
          }}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message 
                      </label>
                      <textarea 
                        className="form-control" 
                        id="message"
                        rows="5"
                        placeholder="Tell me about your project or question..."
                      ></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>


        <footer className="text-white py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mb-0">
                  © 2025 Kenzhu Aguilera. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>

        {selectedModal && (
          <div className="modal show d-block" tabIndex="-1" style={{ zIndex: 1060 }}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedModal.title}</h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={selectedModal.image}
                      alt={selectedModal.title}
                      className="img-fluid rounded mb-4" />
                    <h6 className="fw-bold">Project Overview</h6>
                    <p className="mb-4">{selectedModal.fullDescription}</p>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <h6 className="fw-bold">Technologies Used</h6>
                        <p className="text-muted">{selectedModal.technologies}</p>
                      </div>
                      <div className="col-md-3">
                        <h6 className="fw-bold">Duration</h6>
                        <span className="badge bg-primary">{selectedModal.duration}</span>
                      </div>
                      <div className="col-md-3">
                        <h6 className="fw-bold">Role</h6>
                        <span className="badge bg-success">{selectedModal.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}

      
     
      </div>
  </>
  );
};

export default Portfolio;