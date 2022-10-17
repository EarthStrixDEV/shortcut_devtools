import React from 'react'
import '../css/ToolsGrid.css'
import w3shool_cover from '../image/image_website/Screenshot 2022-10-16 175736.png'
import programiz_cover from '../image/image_website/Screenshot 2022-10-16 175848.png'
import mozilla_dev_cover from '../image/image_website/Screenshot 2022-10-16 175921.png'
import react_doc_cover from '../image/image_website/Screenshot 2022-10-16 180003.png'

const ToolsGrid = () => {
  const data_grid = [
    {
      img: w3shool_cover,
      name: "w3school",
      link: "https://www.w3schools.com/",
    },
    {
      img: programiz_cover,
      name: "programiz",
      link: "https://www.programiz.com/",
    },
    {
      img: mozilla_dev_cover,
      name: "mozilla developer",
      link: "https://developer.mozilla.org/en-US/",
    },
    {
      img: react_doc_cover,
      name: "react docs",
      link: "https://beta.reactjs.org/",
    },
  ];
  return (
    <div className="main">
      <div className="grid-container">
        {
          data_grid.map(data => (
            <div className="item-container">
              <img src={data.img} alt="" />
              <h2>{data.name.toUpperCase()}</h2>
              <a href={data.link}>Go To Page</a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ToolsGrid