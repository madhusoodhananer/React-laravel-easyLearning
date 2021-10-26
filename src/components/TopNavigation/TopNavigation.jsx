import React, { Component, Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import WhiteLogo from "../../asset/image/logo_white.png";
import BlackLogo from "../../asset/image/logo_black.png";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import { NavLink } from "react-router-dom";
export class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [WhiteLogo], //Object
      navVarient: "dark",
      navBarBack: "navBackground",
      navBarItem: "navItem",
      pageTitle: props.title,
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
        <title> {this.state.pageTitle} </title>
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
            <Navbar.Brand className={(this.state.navBarTitle, "p-0")} to="/">
              <img src={this.state.navBarLogo} alt="Brand Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/"
                  >
                    HOME
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/about"
                  >
                    ABOUT
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/service"
                  >
                    SERVICES
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/course"
                  >
                    COURSES
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/portfolio"
                  >
                    PORTFOLIO
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    exact
                    activeStyle={{ color: "#ffd900" }}
                    className={this.state.navBarItem}
                    to="/contact"
                  >
                    CONTACT US
                  </NavLink>
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
