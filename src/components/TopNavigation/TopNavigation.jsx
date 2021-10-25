import React, { Component, Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import WhiteLogo from "../../asset/image/logo_white.png";
import BlackLogo from "../../asset/image/logo_black.png";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import { NavLink } from "react-router-dom";
export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [WhiteLogo], //Object
      navVarient: "dark",
      navBarBack: "navBackground",
      navBarItem: "navItem",
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [BlackLogo],
        navBarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVarient: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [WhiteLogo],
        navBarBack: "navBackground",
        navBarItem: "navItem",
        navVarient: "dark",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBarBack}
          collapseOnSelect
          expand="lg"
          fixed="top"
          variant={this.state.navVarient}
        >
          <Container
            fluid={true}
            // className="bg-danger w-100"
          >
            <Navbar.Brand className={(this.state.navBarTitle, "p-0")} href="/">
              <img src={this.state.navBarLogo} alt="Brand Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link
                  exact
                  activeStyle={{ color: "#rffd900" }}
                  className={this.state.navBarItem}
                  href="/"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  exact
                  activeStyle={{ color: "#rffd900" }}
                  className={this.state.navBarItem}
                  href="/about"
                >
                  ABOUT
                </Nav.Link>
                <Nav.Link
                  exact
                  activeStyle={{ color: "#rffd900" }}
                  className={this.state.navBarItem}
                  href="/service"
                >
                  SERVICES
                </Nav.Link>
                <Nav.Link
                  exact
                  activeStyle={{ color: "#rffd900" }}
                  className={this.state.navBarItem}
                  href="/course"
                >
                  COURSES
                </Nav.Link>
                <Nav.Link
                  exact
                  activeStyle={{ color: "#rffd900" }}
                  className={this.state.navBarItem}
                  href="/portfolio"
                >
                  PORTFOLIO
                </Nav.Link>
                <Nav.Link
                  exact
                  activeStyle={{ color: "#rffd900" }}
                  className={this.state.navBarItem}
                  href="/contact"
                >
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
