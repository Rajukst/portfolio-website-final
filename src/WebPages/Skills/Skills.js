import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills-main">
      <h1 className="mb-5">Skill Highlights</h1>
      <Container fluid>
        <Container>
          <Row>
            <Col className="banneres mx-4">
              <div className=" m-3 alignment">
                <h3>Front End</h3>
                <h6>HTML</h6>
                <h6>HTML5</h6>
                <h6>CSS</h6>
                <h6>CSS3</h6>
                <h6>React.js</h6>
                <h3>Programming Language</h3>
                <h6>JavaScript</h6>
              </div>
            </Col>
            <Col className="banneres mx-4">
              <div className=" m-3 alignment">
                <h3>UI Frameworks</h3>
                <h6>Bootstrap5</h6>
                <h6>Material-UI</h6>
                <h6>Tailwind CSS</h6>
                <h3>Back End</h3>
                <h6>Node.js</h6>
                <h6>Express.js</h6>
              </div>
            </Col>
            <Col className="banneres mx-4">
              <div className=" m-3 alignment">
                <h3>Hosting Platform</h3>
                <h6>Netlify</h6>
                <h6>Firebase</h6>
                <h6>Heroku</h6>
                <h3>Database</h3>
                <h6>Mongodb</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Skills;
