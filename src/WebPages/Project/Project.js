import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Projects.css";
import project1 from "../../Images/Project-Image/project1.png";
import project2 from "../../Images/Project-Image/project2.png";
import project3 from "../../Images/Project-Image/project3.png";
import { Typewriter } from "react-simple-typewriter";
const Project = () => {
  return (
    <div id="projects" className="project-main">
      <h1 className="p-5">Here are some Projects performed by me</h1>
      <Container>
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
              <p>
                Project Details: <br /> • This is a woodcraft sells website.
                This company sells various kinds of handmade woodcraft products.
                User can purchase product, cancel his/her order; see his/her
                order on dashboard, review products. <br /> • It also has an
                admin dashboard. Admin can make a new Admin, Add a new Product,
                and manage all users order. <br />• It is a SPA (Single Page
                Application), responsive and user friendly.
              </p>
              <h6
                className="mb-3"
                style={{
                  margin: "auto 0",
                  fontWeight: "normal",
                }}
              >
                Used Technology:{" "}
                <span style={{ color: "Red", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "HTML",
                      "CSS",
                      "React-bootstrap",
                      "React.js",
                      "Express.js",
                      "Mongodb",
                      "Firebase Authentication",
                      "Netlify",
                    ]}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h6>
              <div className="link-att">
                <a
                  className="anchor-tag"
                  href="https://github.com/Rajukst/modhurima-woodcraft-client-updated"
                  target="_blank"
                >
                  <Button variant="outline-warning">Github Client</Button>
                </a>

                <a
                  className="anchor-tag"
                  href="https://github.com/Rajukst/modhurima-woodcraft-server-updated"
                  target="_blank"
                >
                  {" "}
                  <Button variant="outline-warning">Github Server</Button>
                </a>

                <a
                  className="anchor-tag"
                  href="https://tender-brown-ba79d4.netlify.app/"
                  target="_blank"
                >
                  <Button variant="outline-warning">Live Link</Button>
                </a>
              </div>
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
              <p>
                Project Details: <br />• This is a Tourist Agency service
                website. This Agency provides all historical tourist places in
                Bangladesh. User can booking tourist place, add more place or
                cancel his/her booking. <br />• Registration and login system
                are implemented. Admin can add a new service. Admin can see all
                users’s booking.
                <br />• It is a SPA (Single Page Application), responsive. User
                can use it on mobile, tablet or large Device.
              </p>
              <h6
                className="mb-3"
                style={{
                  margin: "auto 0",
                  fontWeight: "normal",
                }}
              >
                Used Technology:{" "}
                <span style={{ color: "yellow", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "HTML",
                      "CSS",
                      "React-bootstrap",
                      "React.js",
                      "Express.js",
                      "Mongodb",
                      "Firebase Authentication",
                      "Netlify",
                    ]}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h6>
              <div className="link-att">
                <a
                  className="anchor-tag"
                  href="https://github.com/Rajukst/Adventure-tourist-client-updated"
                  target="_blank"
                >
                  {" "}
                  <Button variant="outline-warning">Github Client</Button>
                </a>

                <a
                  className="anchor-tag"
                  href="https://github.com/Rajukst/adventure-tourist-server-updated"
                  target="_blank"
                >
                  <Button variant="outline-warning">Github Server</Button>
                </a>

                <a
                  className="anchor-tag"
                  href="https://eager-bohr-85ea3b.netlify.app/"
                  target="_blank"
                >
                  <Button variant="outline-warning">Live Link</Button>
                </a>
              </div>
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
              <h4>Project name: MedRay Diagnostic Center</h4>
              <p>
                Project Details: <br /> • This is a Medical Diagnostic Centre
                website. This Diagnostic Centre provides various kinds of
                medical services. A user can see the doctor’s list, medical
                services list. User can see specific doctor’s details.
                <br />• Registration and login system are implemented. User can
                register here or signup with Google. After login users can see
                doctor's lists, medical services.
                <br />• It is mobile responsive. User can use it on mobile,
                tablet or large Device.
              </p>
              <h6
                className="mb-3"
                style={{
                  margin: "auto 0",
                  fontWeight: "normal",
                }}
              >
                Used Technology:{" "}
                <span style={{ color: "Aqua", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={[
                      "HTML",
                      "CSS",
                      "React-bootstrap",
                      "React.js",
                      "Firebase Authentication",
                      "Netlify",
                    ]}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h6>
              <div className="link-att">
                <a
                  className="anchor-tag"
                  href="https://github.com/Rajukst/medray-diagnostic-updated"
                  target="_blank"
                >
                  <Button variant="outline-warning">Github Link</Button>
                </a>
                <a
                  className="anchor-tag"
                  href="https://kind-heyrovsky-f144ce.netlify.app/"
                  target="_blank"
                >
                  <Button variant="outline-warning">Live Link</Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
