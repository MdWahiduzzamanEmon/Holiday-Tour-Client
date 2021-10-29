import React from 'react';
import { Carousel } from 'react-bootstrap';
import  sliderImg_2 from '../../../images/slider-img-2.jpg'
import  sliderImg_3 from '../../../images/slider-img-3.jpg'
import  sliderImg_4 from '../../../images/slider-img-4 (1).jpg'
const TopBanner = () => {
    return (
      <div className="mt-5 pt-4">
        {/* //Carousel */}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block slider-img"
              src={sliderImg_4}
              alt="First slide"
            />
            <div className="slider-text">
              <h2>Let's Enjoy The Travel</h2>
              <p>
                I wish you didn’t have to go so soon – but I am so glad for the
                time we had together. Have a safe journey!
              </p>
              <button className="btn btn-warning">Learn More</button>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block slider-img"
              src={sliderImg_2}
              alt="Second slide"
            />

            <div className="slider-text">
              <h2>Experience's The Holiday and Travel</h2>
              <p>
                If you’re nervous on your journey, just think about me – because
                I will absolutely be thinking about you. Travel safe, darling.
              </p>
              <button className="btn btn-warning">Learn More</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block slider-img"
              src={sliderImg_3}
              alt="Third slide"
            />
            <div className="slider-text">
              <h2>Save Values Money</h2>
              <p>
                I wish you didn’t have to go so soon – but I am so glad for the
                time we had together. Have a safe journey!
              </p>
              <button className="btn btn-warning">Learn More</button>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default TopBanner;