import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import AllCoursePage from "../pages/AllCoursePage";
import AllServicePage from "../pages/AllServicePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import RefundPage from "../pages/RefundPage";
class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={AllServicePage} />
          <Route exact path="/course" component={AllCoursePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/refund" component={RefundPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
