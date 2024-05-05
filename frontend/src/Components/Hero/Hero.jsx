import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap';
import banner_image1 from '../Assets/homeBanner1.png'
import banner_image2 from '../Assets/homeBanner2.png'
import banner_image3 from '../Assets/homeBanner3.png'
const Hero = () => {
  return (
    <main className="core">
            <article className="left">
            <center>
                <Carousel>
                    <Carousel.Item>
                        <img src={banner_image1} alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner_image2} alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner_image3} alt=""/>
                    </Carousel.Item>  
                </Carousel>
            </center>
            </article>
            <article className="right"></article>
        </main>
    
  )
}

export default Hero
