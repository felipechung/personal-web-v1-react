import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="background" id="experience">
      <div className="experience-container">
        <div className="title">
          <h3>Experience </h3>
          <h2>Where I've worked</h2>
          <p className="job-title">
            Frontend Developer{" "}
            <a
              className="company-name"
              href="https://b2bit.company/"
              target="_blank"
              rel="noreferrer"
            >
              @ B2bit Company
            </a>
          </p>
          <p>September 2021 - June 2023</p>

          <ul>
            <li>
              Developed and deployed responsive websites utilizing React,
              Typescript, Next.js, and Styled Components
            </li>
            <li>
              Developed engaging mobile applications for both Android and iOS
              platforms utilizing React Native, focusing on enhancing user
              experience
            </li>
            <li>
              Collaborated with developers and designers to guarantee cohesive
              and deliberate user experiences throughout various projects
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
