import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const hanldeOnSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "thanks for your feedback",
      showConfirmButton: false,
      timer: 2500,
    });
    emailjs
      .send(
        "service_hr4nih9",
        "template_pl3t802",
        e.target,
        "user_RV7Aliw9MvtDjW2eW7lsT"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <div id="contact" className="contact-main pt-5">
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={4} lg={4} className="side pe-5">
            <div className="social-response">
              <h1>Social Response</h1>
              <h6>
                Not Interested submit form? I am also Avaiable <br /> here.
              </h6>
              <div className="for-fontaswame mb-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100006529598078"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="facebook"
                    icon={faFacebook}
                    size="4x"
                  />
                </a>
                <a href="https://github.com/Rajukst" target="_blank">
                  <FontAwesomeIcon
                    className="github"
                    icon={faGithub}
                    size="4x"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajuahamedkst"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="linkedin"
                    icon={faLinkedin}
                    size="4x"
                  />
                </a>

                <a href="https://web.whatsapp.com/" target="_blank">
                  <FontAwesomeIcon
                    className="whatsapp"
                    icon={faWhatsapp}
                    size="4x"
                  />
                </a>

                <a href="https://www.w3schools.com" target="_blank">
                  <FontAwesomeIcon className="skype" icon={faSkype} size="4x" />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} lg={8} className="side px-3">
            <Form onSubmit={hanldeOnSubmit} className="my-form">
              <h3>
                If you have any kind of support or feedback, then fillup this
                form and submit it.
              </h3>
              <div className="form-div">
                <label for="fname">Your Name:</label>
                <input
                  className="dark"
                  type="text"
                  id=""
                  name="name"
                  required
                />
                <br />

                <label for="fname">Email Address:</label>
                <input
                  className="dark"
                  type="email"
                  id="fname"
                  name="user_email"
                  required
                />
                <br />
                <label for="fname">Your Message:</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  className="my-dark"
                  name="message"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="my-5">
                Submit your Opinion
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
