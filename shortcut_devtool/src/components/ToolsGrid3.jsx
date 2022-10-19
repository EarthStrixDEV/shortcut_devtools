import React, { useEffect } from 'react'
import post_man_cover from '../image/image_api/Screenshot 2022-10-19 182326.png'
import mackaroo_cover from '../image/image_api/Screenshot 2022-10-19 182823.png'
import hoppscotch_cover from '../image/image_api/Screenshot 2022-10-19 183923.png'
import insomnia_cover from '../image/image_api/Screenshot 2022-10-19 185259.png'

const ToolsGrid3 = ({value}) => {
    const data_grid = [
      {
        img: post_man_cover,
        name: "post man",
        url: "https://www.postman.com/",
        description:
          "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
      },
      {
        img: mackaroo_cover,
        name: "mackaroo",
        url: "https://www.mockaroo.com/",
        description: "A free test data generator and API mocking tool.",
      },
      {
        img: hoppscotch_cover,
        name: "hoppscotch",
        url: "https://hoppscotch.io/#gh-light-mode-only",
        description:
          "Hoppscotch is an open-source API development platform that is lightweight and fast with respect to sending requests and copying responses in real-time.",
      },
      {
        img: insomnia_cover,
        name: "insomnia",
        url: "https://insomnia.rest/",
        description: "Build APIs that work. Deliver high quality APIs through standards and collaboration with the Insomnia API design platform",
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
                <h2>{ item.name.toUpperCase() }</h2>
                <p>{item.description}</p>
              <a href={item.url}>Go To Page</a>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ToolsGrid3