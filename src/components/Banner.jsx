import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../imagenes/banner1.png"
import banner2 from "../imagenes/banner2.png"
import banner3 from "../imagenes/banner3.png"
import banner4 from "../imagenes/banner4.png"
import banner5 from "../imagenes/banner5.png"

export const Banner = () => {
  return (
                             /*↓↓↓*/ 
    <Carousel style={{marginTop:10, marginBottom:20, /*{/*marginLeft:300, marginRight:315*/}}>
          
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="4th slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="5th slide"
        />
      </Carousel.Item>




    </Carousel>

  )
}
