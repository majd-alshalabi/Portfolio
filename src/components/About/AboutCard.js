import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Majd Alshalabi </span>
            from <span className="purple"> Damascus, Syria.</span>
            <br />
            currently living in <span className="purple"> UAE</span>.
            <br />
            And I am currently employed as a software developer at <span className="purple"> TC OF TC</span>.
            <br />
            I completed a master's degree in information technology engineering,
            specializing in software engineering, at the University of Damascus.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
