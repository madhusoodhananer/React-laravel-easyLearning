import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us</h2>
              <div className="socialContainer">
                <a className="facebook social" href="#">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className="youtube social" href="#">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a className="twitter social" href="#">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5  text-justify">
              <h2 className="footerName">Address</h2>
              <div className="text-justify">
                <p className="footerDescription">
                  Foton Labz YMCA Building Alappuzha
                  <br />
                  <FontAwesomeIcon icon={faEnvelope} /> Email:
                  support@fotonlab.com
                  <br />
                  <FontAwesomeIcon icon={faPhone} /> Phone:04772252422
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-center text-justify">
              <div className="text-justify">
                <h2 className="footerName ">Information</h2>
                <a className="footerLink" href="#">
                  About Me{" "}
                </a>
                <br />
                <a className="footerLink" href="#">
                  Company Profile{" "}
                </a>
                <br />
                <a className="footerLink" href="#">
                  Contact Us{" "}
                </a>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-center ">
              <div className="text-justify">
                <h2 className="footerName">Policy</h2>
                <Link className="footerLink" to="/refund">
                  Refund Policy{" "}
                </Link>
                <br />
                <Link className="footerLink" to="/terms">
                  Terms And Conditions{" "}
                </Link>
                <br />
                <a className="footerLink" href="#">
                  Privacy Policy{" "}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center copyrightSection">
          <a className="copyrightLink" href="#">
            © Copyright 2016 by easy Learning, All rights reserved
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
