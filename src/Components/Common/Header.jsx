import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { navlink } from "../data/dummydata";
import logo from "../data/images/avatar.png";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link to={links.url} key={i} data-aos="zoom-out-up">
                {" "}
                {links.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu></Menu>
          </button>
        </div>
      </header>
    </>
  );
};
