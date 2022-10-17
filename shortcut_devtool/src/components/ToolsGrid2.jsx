import React from 'react'
import codepen_cover from '../image/image_devtools/Screenshot 2022-10-17 135156.png'
import replit_cover from '../image/image_devtools/Screenshot 2022-10-17 135244.png'
import css_gradient_cover from '../image/image_devtools/Screenshot 2022-10-17 135322.png'
import css_gradient_animator_cover from '../image/image_devtools/Screenshot 2022-10-17 140551.png'
import '../css/ToolsGrid.css'

const ToolsGrid2 = () => {
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
  return (
    <div className='main'>
      <div className='grid-container'>
        {
          data_grid.map(item => (
            <div className='item-container'>
              <img src={item.img} alt="" />
              <h2>{item.name.toUpperCase()}</h2>
              <a href={item.url}>Go To Page</a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ToolsGrid2
