import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY COURSES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-photo/college-mates-studying-together_23-2149038402.jpg"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    ipsam consequatur qui dicta obcaecati possimus fuga
                    perspiciatis.
                  </p>
                  <a className="courseViewMore float-start " href="">
                    View Details
                  </a>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    ipsam consequatur qui dicta obcaecati possimus fuga
                    perspiciatis.
                  </p>
                  <a className="courseViewMore float-start " href="">
                    View Details
                  </a>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-photo/discussing-video-course_1098-13061.jpg"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    ipsam consequatur qui dicta obcaecati possimus fuga
                    perspiciatis.
                  </p>
                  <a className="courseViewMore float-start " href="">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-photo/row-students-doing-exam_1098-174.jpg?2"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    ipsam consequatur qui dicta obcaecati possimus fuga
                    perspiciatis.
                  </p>
                  <a className="courseViewMore float-start " href="">
                    View Details
                  </a>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-photo/college-mates-studying-together_23-2149038410.jpg"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    ipsam consequatur qui dicta obcaecati possimus fuga
                    perspiciatis.
                  </p>
                  <a className="courseViewMore float-start " href="">
                    View Details
                  </a>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                    alt=""
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 8</h5>
                  <p className="text-justify serviceDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    ipsam consequatur qui dicta obcaecati possimus fuga
                    perspiciatis.
                  </p>
                  <a className="courseViewMore float-start " href="">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
