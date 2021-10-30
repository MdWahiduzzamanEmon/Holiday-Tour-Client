import axios from 'axios';
import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const About = () => {
    const [cmnt, setCmnt] = useState('');
    const { user}=useAuth();
    const Comment = (e) => setCmnt(e.target.value);
    const data = { comment: cmnt,img: user?.photoURL };
    const handleComment = e => {
        e.preventDefault();
        axios
          .post("https://fast-ocean-49814.herokuapp.com/comment", data)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Comment created successfully!");
              e.target.reset();
            }
          });
    }
    return (
      <div className="mt-5 pt-5">
        <section className="mt-5 py-5">
          <div className="container">
                    <form onSubmit={ handleComment}>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "100px" }}
                                onChange={ Comment}
                />
                        </FloatingLabel>
                        <button className="btn btn-warning my-5 fw-bold">Submit Comment</button>
            </form>
          </div>
        </section>
      </div>
    );
};

export default About;