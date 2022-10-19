import React, { useEffect } from "react";
import codepen_cover from "../image/image_devtools/Screenshot 2022-10-17 135156.png";
import replit_cover from "../image/image_devtools/Screenshot 2022-10-17 135244.png";
import css_gradient_cover from "../image/image_devtools/Screenshot 2022-10-17 135322.png";
import css_gradient_animator_cover from "../image/image_devtools/Screenshot 2022-10-17 140551.png";
import "../css/ToolsGrid.css";

const ToolsGrid2 = ({ value }) => {
  const data_grid = [
    {
      img: codepen_cover,
      name: "codepen",
      url: "https://codepen.io/trending",
    },
    {
      img: replit_cover,
      name: "replit ide online",
      url: "https://replit.com/",
    },
    {
      img: css_gradient_cover,
      name: "css gradient generator",
      url: "https://cssgradient.io/",
    },
    {
      img: css_gradient_animator_cover,
      name: "css gradient animator",
      url: "https://www.gradient-animator.com/",
    },
  ];

  const search = value.toUpperCase();

  function dynamicTitle() {
    document.title = "Devtools - IDE";
  }

  function handleDynamicSearch() {
    let item_container = document.querySelectorAll(".item-container");
    let text_name = document.querySelectorAll("h2");
    for (let i = 0; i < text_name.length; i++) {
      if (text_name[i].innerHTML === search) {
        setTimeout(() => {
          text_name[i].style.backgroundColor = "black";
          text_name[i].style.color = "white";
          text_name[i].style.transition = "all 1s ease-in-out";
          item_container[i].scrollIntoView();
        }, 200);
      } else {
        setTimeout(() => {
          text_name[i].style.backgroundColor = "white";
          text_name[i].style.color = "black";
          text_name[i].style.transition = "all 1s ease-in-out";
        }, 200);
      }
    }
  }

  useEffect(() => {
    handleDynamicSearch();
  });

  return (
    <div className="main">
      <div className="grid-container" onLoad={dynamicTitle}>
        {data_grid.map((item) => (
          <div className="item-container">
            <img src={item.img} alt="" />
            <h2>{item.name.toUpperCase()}</h2>
            <a href={item.url}>Go To Page</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid2;
