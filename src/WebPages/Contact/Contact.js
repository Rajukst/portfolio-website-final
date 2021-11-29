import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-main pt-5">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4} className="banner-side pe-5">
            <div>
              <h1>Quick Response</h1>
              <h4>Not Interested submit form? I am also Avaiable here.</h4>
              <p>rajuahamedkst15@gmail.com</p>
              <p>rajuahamedkst13@gmail.com</p>
            </div>
          </Col>
          <Col xs={12} md={8} lg={8} className="banner-side px-3">
            <Form className="my-form">
              <div className="form-div">
                <label for="fname">First name:</label>
                <input className="dark" type="text" id="" name="" required />
                <br />

                <label for="fname">First name:</label>
                <input
                  className="dark"
                  type="text"
                  id="fname"
                  name="fname"
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
                  required
                ></textarea>
              </div>

              <Button className="my-5">Submit Opinion</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
