import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "../Common/Header";
import {Home} from "../home/Home"
import { About } from "./About";
import { Services } from "./Services";
import { Counter } from "./Counter";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";


export const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>

          <Route exact path="/"  component={Home} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/services"  component={Services} />
          <Route exact path="/counter"  component={Counter} />
          <Route exact path="/portfolio"  component={Portfolio} />
          <Route exact path="/testimonials"  component={Testimonials} />
          <Route exact path="/blog"  component={Blog} />

        </Switch>
      </Router>
    </>
  );
};
