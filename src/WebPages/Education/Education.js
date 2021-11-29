import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import eduPic from "../../Images/Education/education.png";
import "./Education.css";
const Education = () => {
  return (
    <div className="main-education">
      <h1 className="p-5">Personal & Educational Information</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} className="banner">
            <img className="img-fluid" src={eduPic} alt="Girl in a jacket" />
          </Col>
          <Col xs={12} md={6} className="banner">
            <div className="title-info">
              <h1>Hi,</h1>
              <p className="paragraph">
                I am Raju Ahammed Roton. I am a web designer and developer both
                front-end and back-end. I have several kinds of skills. I am
                very capable to turn your thought and dream into a modern and
                responsive website. You can fully depend on my task because I
                never give up and never keep any project incomplete.
              </p>
              <hr />
              <h3>Personal Info</h3>
              <h4>Name: Raju Ahammed Roton</h4>
              <h5>
                Address: 125, Anwar Yousuf Road, Barkhada, Kushtia, Bangladesh
              </h5>
              <h5>Contact: +8801765629262</h5>
              <h3>Educational Background</h3>
              <h5>
                Bachelor of Social Science in Sociology, National University,
                Bangladesh
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
