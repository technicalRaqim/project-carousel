import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
import img2 from "../assets/robynne-hu-HOrhCnQsxnQ-unsplash.jpg"
import img3 from "../assets/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.jpg"
const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay 
      showStatus={false} 
      showArrows={false}
      showThumbs={false}
      interval={2000}>
      <div>
      <img src={img1}></img>
        <p className='legend'>Web Development</p>
        </div>
        <div>
        <img src={img2}></img>
        <p className='legend'>Search Engine Optimization</p>
        </div>
        <div>
        <img src={img3}></img>
        <p className='legend'>Networking</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
