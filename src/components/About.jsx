import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.scss";

import profile_pic from "../assets/profile_pic2.jpeg";

function About() {
  return (
    <div className="bg-dark-custom text-light d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img src={profile_pic} alt="Your Name" className="img-fluid rounded-circle mb-4 mb-md-0" style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }} />
          </div>
          <div className="col-md-8 align-self-start">
            <h1 className="display-4 typewriter">Hi! I am Aneesh!</h1>
            <p className="lead text-justify">
              I am currently a student in the M.Eng Robotics program at University of Maryland, College Park.<br /><br />
              Previously, I was working at ServiceNow as a software engineer in the Security Operations (SecOps) application team. I was involved in developing security applications using Java, JavaScript and SQL, and writing full scale automated test suites for each release.<br /><br />

              To evolve with my passion for software engineering, I enrolled in the Robotics program at UMD. I gained significant experience in designing and coding Machine Learning models for computer vision and imaging tasks. I am now also skilled in ROS, C++ and Python.<br /><br />

              I am seeking full-time roles starting in May. I can be reached at aneesh.dandime@outlook.com <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
