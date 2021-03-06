import React from "react";
import "./Contact.css";
import * as FaIcons from "react-icons/fa";

function Contact() {
  return (
    <div className="dark-background" id="contact">
      <div className="contact-container">
        <a className="contact-icon" href="mailto:fchung.dev@gmail.com">
          <FaIcons.FaTelegramPlane></FaIcons.FaTelegramPlane>
        </a>
        <h2 className="contact-text">Get In Touch</h2>
        <p className="contact-text">Feel free to contact me anytime!</p>
        <a className="send-button" href="mailto:fchung.dev@gmail.com">
          Send a Message
        </a>

        <div className="contact-icons-container">
          <a href="https://github.com/felipechung" className="contact-me">
            <FaIcons.FaGithubSquare></FaIcons.FaGithubSquare>
          </a>
          <a
            href="https://www.linkedin.com/in/felipechung/"
            className="contact-me"
          >
            <FaIcons.FaLinkedin></FaIcons.FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
