// import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from "../../assets/profile_img.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I am Fortune Chinwo,</span> Frontend Developer based in Nigeria.</h1>
      <p>
        I am a Frontend Developer from Rivers State, Nigeria with 1 (one) year of
        work experience at Beothkings Global.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
