import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DesignIcon from "../../asset/image/design.png";
import EcommerceIcon from "../../asset/image/ecommerce.png";
import WebIcon from "../../asset/image/web.png";

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className = "text-center" >
          <h1 className="serviceMainTitle">OUR SERVICES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className = "serviceCard text-center" >
                <img className="ecommerceIcon" src={EcommerceIcon} alt="" />
                <h2 className="serviceName">Ecommerce</h2>
                <p className="serviceDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit autem aliquid voluptatum ipsa, tempora eos rem
                  ducimus possimus dolorem laboriosam, beatae deleniti nostrum!
                  
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className = "serviceCard text-center" >
                <img className="designIcon" src={DesignIcon} alt="" />
                <h2 className="serviceName">Web Design</h2>
                <p className="serviceDescription">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error beatae animi voluptatem nostrum nesciunt tempora magni
                  dolor atque voluptatibus aliquam. Suscipit magni totam maxime
                  
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className = "serviceCard text-center" >
                <img className="webIcon" src={WebIcon} alt="" />
                <h2 className="serviceName">Web</h2>
                <p className="serviceDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  perferendis commodi accusantium eveniet maiores voluptates,
                  labore voluptas soluta voluptatem reiciendis deleniti, dolorem
                  
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
