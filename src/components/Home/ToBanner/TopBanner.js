import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg_2 from "../../../images/slider-img-2.jpg";
import sliderImg_3 from "../../../images/slider-img-3.jpg";
import sliderImg_4 from "../../../images/slider-img-4 (1).jpg";
import LearnMore from "../../LearnMore/LearnMore";
const TopBanner = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="mt-5 pt-4">
      {/* //Carousel */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block slider-img"
            src={sliderImg_4}
            alt="First slide"
            style={{
              width: "100%",
            }}
          />
          <div className="slider-text">
            <h1>Let's Enjoy The Travel</h1>
            <p className="py-md-4">
              I wish you didn’t have to go so soon – but I am so glad for the
              time we had together. Have a safe journey!
            </p>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => setModalShow(true)}
            >
              Learn More
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block slider-img"
            src={sliderImg_2}
            alt="Second slide"
            style={{
              width: "100%",
            }}
          />

          <div className="slider-text">
            <h1>Experience's The Holiday and Travel</h1>
            <p className="py-md-4">
              If you’re nervous on your journey, just think about me – because I
              will absolutely be thinking about you. Travel safe, darling.
            </p>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => setModalShow(true)}
            >
              Learn More
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src={sliderImg_3}
            style={{
              width: "100%",
            }}
            alt="Third slide"
          />
          <div className="slider-text">
            <h1>Save Values Money</h1>
            <p className="py-md-4">
              I wish you didn’t have to go so soon – but I am so glad for the
              time we had together. Have a safe journey!
            </p>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => setModalShow(true)}
            >
              Learn More
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
