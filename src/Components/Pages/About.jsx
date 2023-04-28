import React from "react";
import { about } from "../data/dummydata";
import { Heading } from "../Common/Heading";

export const About = () => {
  return (
    <>
      {" "}
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left">
              <img src={val.cover} alt='' />
              </div>
              <div className="right">
                <Heading title="About Me" />
                <p> {val.desc} </p>
                <p> {val.desc1} </p>
                <button>Download CV</button>
                <button className="primaryBtn"> Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
