import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  
  SiSlack,
  
  SiVmware,
  SiXampp,
  SiEclipseche,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
