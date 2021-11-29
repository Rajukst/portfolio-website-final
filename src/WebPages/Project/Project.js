import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Projects.css";
import project1 from "../../Images/Project-Image/project1.png";
import project2 from "../../Images/Project-Image/project2.png";
import project3 from "../../Images/Project-Image/project3.png";
const Project = () => {
  return (
    <div id="projects" className="project-main">
      <h1 className="p-5">Here are some Projects performed by me</h1>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={4} className="project-side">
            <div className="m-2 project">
              <div className="img">
                <img
                  className="img-fluid"
                  src={project1}
                  alt="Girl in a jacket"
                />
              </div>
              <h4>Project name: Modhurima WoodCraft</h4>
              <p>Project Details: Modhurima WoodCraft</p>
              <Button>See Details</Button>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-side">
            <div className="m-2 project">
              <div className="img">
                <img
                  className="img-fluid"
                  src={project3}
                  alt="Girl in a jacket"
                />
              </div>
              <h4>Project name: Adventure Tourist Agency</h4>
              <p>Project Details: Adventure</p>
              <Button>See Details</Button>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="project-side">
            <div className="m-2 project">
              <div className="img">
                <img
                  className="img-fluid"
                  src={project2}
                  alt="Girl in a jacket"
                />
              </div>
              <h4>Project name: MedRay Diagnostic</h4>
              <p>Project Details: MedRay</p>
              <Button>See Details</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
