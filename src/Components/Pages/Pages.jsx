import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "../Common/Header";
import {Home} from "../home/Home"
import { About } from "./About";


export const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>

          <Route exact path="/"  component={Home} />
          <Route exact path="/about"  component={About} />

        </Switch>
      </Router>
    </>
  );
};
