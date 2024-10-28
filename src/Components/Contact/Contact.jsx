/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import call_icon from '../../assets/call_icon.jpeg';
import email_icon from '../../assets/email_icon.jpeg';
import location_icon from '../../assets/location_icon.png';
import theme_img from "../../assets/theme_img.jpeg";
import "./Contact.css";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b37877c4-cf2c-4d71-8ba4-5997620286de");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_img} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to talk on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={email_icon} alt="" />
                <p>fortunechinwo@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>09054445295</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Port Harcourt, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name'name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="Write your message here"></label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
