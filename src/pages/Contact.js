import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    document.body.style.backgroundColor = "#8c9ec9"; // same sa Profile & About
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1>Contact Me</h1>

        <p>
          <FaEnvelope style={{ marginRight: "10px" }} />
          <strong>nina.talaugon18@gmail.com</strong>
        </p>

        <p>
          <FaPhoneAlt style={{ marginRight: "10px" }} />
          <strong>09072043252</strong>
        </p>

        <p>
          <FaMapMarkerAlt style={{ marginRight: "10px" }} />
          <strong>Hagnaya, Carmen, Cebu</strong>
        </p>

        <p>
          <FaGithub style={{ marginRight: "10px" }} />
          <a
            href="https://github.com/nintalaugon"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            nintalaugon
          </a>
        </p>
      </div>
    </div>
  );
}
