import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                      <h1 className="countNumber">
                        <CountUp start={0} end={35000} duration={2}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Students World Wide</h4>
                      <hr className="bg-white" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon
                        className="iconProject"
                        icon={faLaptop}
                      />
                      <h1 className="countNumber">
                        <CountUp start={0} end={22} duration={2}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Course Published</h4>
                      <hr className="bg-white " />
                    </Col>
                    <Col>
                      <FontAwesomeIcon className="iconProject" icon={faStar} />
                      <h1 className="countNumber">
                        <CountUp start={0} end={3000} duration={2}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Student Reviews</h4>
                      <hr className="bg-white " />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        What I Have Achived
                      </Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullet"
                            icon={faCheckSquare}
                          />{" "}
                          Requirement Gathering
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullet"
                            icon={faCheckSquare}
                          />{" "}
                          System Analysis
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullet"
                            icon={faCheckSquare}
                          />{" "}
                          Coding Testing
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            className="iconBullet"
                            icon={faCheckSquare}
                          />{" "}
                          Implimentation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* <h1>1</h1> */}
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
