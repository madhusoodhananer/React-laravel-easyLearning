import React, { Component, Fragment } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton } from "video-react";
export class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR VIDEOS</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="videoText">
              <p className="serviceDescription text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                reiciendis illo, non, hic dolorum asperiores vitae excepturi
                porro iste earum labore! Libero ad natus praesentium laboriosam
                cupiditate unde inventore magnam? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. <br />
                <br /> Laboriosam dolorem ab facilis? Delectus harum perferendis
                neque, culpa laborum architecto a nihil vitae ex quibusdam quos,
                consectetur, sit odio. Ea, dolore. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Impedit ducimus dignissimos at
                dolorem, quis tenetur fugit! Atque laborum reprehenderit
                consectetur suscipit est voluptatum, nostrum dignissimos facere
                consequuntur magnam tempora qui. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
                <br />
                <br /> Sapiente, libero ipsam similique at itaque, assumenda
                nostrum voluptate, saepe suscipit consequuntur vel qui. Debitis
                saepe sunt rem molestias praesentium amet perferendis!
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="videoCard">
              <FontAwesomeIcon
                onClick={this.modalOpen}
                className="iconProject"
                icon={faVideoSlash}
              />
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
