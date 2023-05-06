import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer >
        {social.map((item,i)=>(
            < >
            <i data-aos='zoom-in-left' > {item.icon} </i>
            </>
        ))}
        <p data-aos='zoom-in-right' >All Right Rescued 2022</p>
      </footer>
    </>
  );
};
