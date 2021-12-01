import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TopBanner.css";
import bannerImage from "../../Images/banner.png";
import { Typewriter } from "react-simple-typewriter";
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
                <h1
                  style={{
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  I am Professional at{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React.Js",
                        "Node.Js",
                        "Express.Js",
                        "Mongodb",
                      ]}
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
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
