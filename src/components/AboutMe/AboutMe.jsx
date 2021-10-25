import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../asset/image/aboutme.png";
import { init } from "ityped";

export class AboutMe extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Web Developer", "Online Instructor!", "Solution Architect"],
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT ME</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeImage">
                <img className="aboutImage" src={face} alt="" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">Hi There, I am</h2>
                <h2 className="aboutMeTitle">Madhusoodanan</h2>
                <h2 className="aboutMeDetails">
                  Worked as <span id="myElement"></span>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;

// import React, { Fragment } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import face from "../../asset/image/aboutme.png";
// import { init } from "ityped";
// function AboutMe() {
//   return (
//     <Fragment>
//       <Container className="text-center">
//         <h1 className="serviceMainTitle">ABOUT ME</h1>
//         <div className="bottom"></div>
//         <Row>
//           <Col lg={6} md={6} sm={12}>
//             <div className="aboutMeImage">
//               <img className="aboutImage" src={face} alt="" />
//             </div>
//           </Col>
//           <Col lg={6} md={6} sm={12}>
//             <div className="aboutMeBody">
//               <h2 className="aboutMeDetails">Hi There, I am</h2>
//               <h2 className="aboutMeTitle">Madhusoodanan</h2>
//               <h2 className="aboutMeDetails">
//                 Worked as <span>Developer</span>
//               </h2>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </Fragment>
//   );
// }

// export default AboutMe;
