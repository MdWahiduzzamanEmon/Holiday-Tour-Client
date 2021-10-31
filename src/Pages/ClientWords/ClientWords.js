import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import cmnt from "../../images/comment.jpg";
import bg from "../../images/AOL-BG.png";
import design from '../../images/design.png'
import cmnt_p from "../../images/customer-2.png";
import axios from 'axios';
const ClientWords = () => {
const [comments,setComments]=useState([])
    useEffect(() => {
        axios
          .get("https://fast-ocean-49814.herokuapp.com/comments")
          .then((res) => setComments(res.data));
    },[])

    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="fw-bold text-uppercase py-4 mb-4">
          <h1>Our Client Words</h1>
          <img src={design} alt="" />
        </div>
        <Carousel className="carousel-control mx-auto mb-5 py-5">
          {comments.map((comment) => (
            <Carousel.Item interval={2000} key={ comment?._id}>
              <img
                className="d-block slider-img-2"
                src={cmnt}
                alt="First slide"
              />
              <div className="slider-text-2">
                {/* <h1>-- Our Client Words --</h1> */}
                <img
                  src={comment?.img || cmnt_p}
                  alt=""
                  className="rounded-circle border"
                />
                <div>
                  {" "}
                  <p className="py-md-4">{comment.comment.slice(0,90)+"..."}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};

export default ClientWords;