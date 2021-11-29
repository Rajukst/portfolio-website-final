import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import project1 from "../../Images/Project-Image/project1.png";
import project2 from "../../Images/Project-Image/project2.png";
import project3 from "../../Images/Project-Image/project3.png";
const Project = () => {
  return (
    <div className="project-main">
      <h1>Here are some Projects performed by me</h1>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={4} className="banner-side">
            <div>
              <div className="img">
                <img
                  className="img-fluid"
                  src={project1}
                  alt="Girl in a jacket"
                />
              </div>
              <h1>Project name: Modhurima WoodCraft</h1>
              <p>Project Details: Modhurima WoodCraft</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="banner-side">
            <div>
              <div className="img">
                <img
                  className="img-fluid"
                  src={project3}
                  alt="Girl in a jacket"
                />
              </div>
              <h1>Project name: Adventure Tourist Agency</h1>
              <p>Project Details: Adventure</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="banner-side">
            <div>
              <div className="img">
                <img
                  className="img-fluid"
                  src={project2}
                  alt="Girl in a jacket"
                />
              </div>
              <h1>Project name: MedRay Diagnostic</h1>
              <p>Project Details: MedRay</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
