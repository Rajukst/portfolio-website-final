import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TopBanner.css";
import bannerImage from "../../Images/banner.png";
const TopBanner = () => {
  return (
    <div className="top-banner">
      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} md={6} className="banner my-5">
              <div className="left-side">
                <h3>Wellcome to my Profile</h3>
                <h1>Hi, I'm Raju Ahammed Roton</h1>
                <h2>I'm a Professional Web Developer</h2>

                <a
                  className="very-important"
                  href="https://drive.google.com/file/d/1-jFkUED-6vp3cu7xCvMe5yyykxz9dksS/view?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  <Button className="mt-5">Download Resume</Button>
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className=" my-5">
              <div>
                <img
                  src={bannerImage}
                  alt="Girl in a jacket"
                  className="img-fluid my-banner"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default TopBanner;
