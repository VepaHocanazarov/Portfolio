import React from "react";
import { Hero } from "./Hero";
import { About } from "../Pages/About";
import { Services } from "../Pages/Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
};
