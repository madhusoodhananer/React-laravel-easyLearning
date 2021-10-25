import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
class ContactSec extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Quick Connect</h1>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Discuss Now</h1>
              <p className="serviceDescription">
                Foton Labz YMCA Building Alappuzha
                <br />
                <FontAwesomeIcon icon={faEnvelope} /> Email:
                support@fotonlab.com
                <br />
                <FontAwesomeIcon icon={faPhone} /> Phone:04772252422
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactSec;
