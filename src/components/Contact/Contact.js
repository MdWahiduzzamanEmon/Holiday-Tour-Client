import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import bg from '../../images/AOL-BG.png'
import contact from "../../images/contact.jpg";
import OurService from '../Home/OurService/OurService';
import design from "../../images/design.png";
const Contact = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const data = { name, email, message };
  //message submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fast-ocean-49814.herokuapp.com/message", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Your message send successfully!");
          e.target.reset();
        }
      });
  };
  return (
    <div className="my-5 py-5" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-warning pt-4">-Contact Us-</h1>
      <img src={design} alt="" />
      <div className="container my-5 pb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h2 className="fw-bold py-4">CONTACT US TO GET MORE INFO*</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleName}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleEmail}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleMessage} />
              </Form.Group>
              <div>
                <button className="btn btn-warning fw-bold">
                  Submit Message
                </button>
              </div>
            </Form>
          </div>
          <div className="col-md-6 mt-md-0 mt-5">
            <div>
              <img
                src={contact}
                alt=""
                className="img-fluid shadow-lg rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurService />
      </div>
    </div>
  );
};

export default Contact;