import React from "react";
import { Hero } from "./Hero";
import { About } from "../Pages/About";
import { Services } from "../Pages/Services";
import { Counter } from "../Pages/Counter";
import { Portfolio } from "../Pages/Portfolio";
import { Testimonials } from "../Pages/Testimonials";
import { Blog } from "../Pages/Blog";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
    </>
  );
};
