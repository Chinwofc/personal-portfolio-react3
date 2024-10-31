// import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import theme_img from '../../assets/theme_img.jpeg';
import "./About.css";


const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_img} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
          <p>
            I am an experienced Frontend Developer with over a year of
            professional expertise in the field. In the little year of my career, I have
            had the privilege of collaborating with a team of developers,
            and contributing the best of my quota to achieve organizational goals.
            Also, some contract jobs for a few clients.
          </p>
          <p>
            My passion for frontend development is not only reflected in my
            experience, but also in the enthusiasm and dedication I
            bring to each project.
          </p>
          <a href="https://docs.google.com/document/d/1IW2EKNJRDjnbtozPrILTJsJ45k4wIwIR2kE_ofC17hI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download My CV</a>
        </div>
        <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>HTML 5</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>React Hooks</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Git</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Github</p><hr style={{width:"60%"}}/></div>
        </div>
      </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5</h1>
            <p>HAPPY CLIENTS</p>
        </div>
    </div>
    </div>
  );
};

export default About;
