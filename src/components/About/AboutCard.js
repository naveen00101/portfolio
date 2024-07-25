import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavani Machineni </span>
            from <span className="purple"> khammam, India.</span>
            <br />
            I am currently Intern at Aircom Solutions.
            <br />
            I have completed Graduation in Electronics And Communication Engineering at MIST Sathupally.
        
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Knowing About New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Research helps to Know real facts!"{" "}
          </p>
          <footer className="blockquote-footer">Pavani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
