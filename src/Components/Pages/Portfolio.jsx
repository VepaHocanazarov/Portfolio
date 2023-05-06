import React from "react";
import { portfolio } from "../data/dummydata";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { Heading } from "../Common/Heading";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);
  console.log(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    if (category === "all") {
      setList(portfolio);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {category.map((category, i) => (
              <button
                key={i}
                className="primaryBtn"
                onClick={() => filterItems(category)} data-aos='zoom-out-down'
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((items, i) => (
              <div className="box" key={i} data-aos='fade-up'>
                <div className="img">
                  <img src={items.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3> {items.title} </h3>
                  <span> {items.name} </span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
