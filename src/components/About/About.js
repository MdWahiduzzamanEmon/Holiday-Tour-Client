import axios from 'axios';
import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import bg from "../../images/Slider-Purple-Bg.svg";
import Benefits from '../../Pages/Benefits/Benefits';
import design from '../../images/design.png'
import ClientWords from '../../Pages/ClientWords/ClientWords';
const About = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [cmnt, setCmnt] = useState("");
  const { user } = useAuth();
  const Comment = (e) => setCmnt(e.target.value);
  const data = { comment: cmnt, img: user?.photoURL };
  //post comment
  const handleComment = (e) => {
    e.preventDefault();
    if (cmnt === "") {
      return toast("Please!!Write something to submit comments!");
    } else {
      axios
        .post("https://fast-ocean-49814.herokuapp.com/comment", data)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Comment created successfully!");
            e.target.reset();
          }
        });
    }
  };
  return (
    <div
      className="mt-5 pt-5 "
      style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
    >
      <section>
        <div className="container">
          <h1 className="text-warning fw-bold">-About Us-</h1>
          <img src={design} alt="" />
          <div className="row align-items-center ">
            <div className="col-md-6">
              <p className="text-secondary text-start fw-bold">
                Tourism is travelling for pleasure or to enjoy yourself away
                from the place you live. People do this for many different
                reasons – to have fun, visit other countries and learn about
                other cultures or just relax from stressful working life.
                Tourists go to various destinations - countries with great
                landmarks, places with lovely beaches or simply areas of
                wilderness and untouched nature. In the last few decades tourism
                has grown very much, mostly because people’s lifestyles have
                changed. They don’t want to stay at home any more. They spend
                more money on travelling than previous generations did.
                Travelling has also become cheaper and more affordable. The rise
                of budget airlines has made it possible to afford trips to
                faraway countries.
              </p>
            </div>
            <div className="col-md-6">
              <Benefits />
            </div>
          </div>
        </div>
      </section>
      <ClientWords />
      <section
        className="mt-5 py-5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h5 className="fw-bold text-start mb-4">
            Tell Us About our Services**
          </h5>
          <form onSubmit={handleComment}>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={Comment}
              />
            </FloatingLabel>
            <button className="btn btn-warning my-5 fw-bold">
              Submit Comment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;