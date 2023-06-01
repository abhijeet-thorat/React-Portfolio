import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Abhijeet Thorat </span>
            from <span className="purple"> Solapur, Maharashtra, India.</span>
            <br /> I have graduated from Bsc(Computer Science) from Solapur University.
            <br />
            Additionally, I am currently doing course as Junior Full Stack Developer in Amber Project whose trainer is Vinsys IT services. 
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>


          {/* <footer className="blockquote-footer">Abhijeet</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
