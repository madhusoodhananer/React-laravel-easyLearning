import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export class ClientReview extends Component {
  render() {
    var settings = {
      autoPlaySpeed: 3000,
      autoPlay: true,
      dots: true,
      infinite: true,
      speed: 3000,
      arrows: true,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container fluid={true} className="sliderBack text-center p-1">
          <h1 className="reviewMainTitle">TESTIMONIAL</h1>
          <div className="reviewbottom"></div>
          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImage"
                    src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
                    alt=""
                  />
                  <h2 className="reviewName">Madhusoodanan ER</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit autem aliquid voluptatum ipsa, tempora eos rem
                    ducimus possimus dolorem laboriosam, beatae deleniti
                    nostrum!
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImage"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                    alt=""
                  />
                  <h2 className="reviewName">Rajappan</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit autem aliquid voluptatum ipsa, tempora eos rem
                    ducimus possimus dolorem laboriosam, beatae deleniti
                    nostrum!
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImage"
                    src="https://image.freepik.com/free-photo/portrait-masculinity-portrait-handsome-young-bearded-man-while-standing-against-grey-wall_231208-7829.jpg"
                    alt=""
                  />
                  <h2 className="reviewName">Thankappan</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit autem aliquid voluptatum ipsa, tempora eos rem
                    ducimus possimus dolorem laboriosam, beatae deleniti
                    nostrum!
                  </p>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImage"
                    src="https://image.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg"
                    alt=""
                  />
                  <h2 className="reviewName">Damodaran Nair</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit autem aliquid voluptatum ipsa, tempora eos rem
                    ducimus possimus dolorem laboriosam, beatae deleniti
                    nostrum!
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
