import React from 'react';
import bg from '../../images/AOL-BG.png'
const Contact = () => {
    return (
      <div
        className="my-5 py-5"
        style={{ backgroundImage: `url(${bg})` }}
        >
            <h1 className="text-warning py-4">-Contact Us-</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                </div>
            </div>
      </div>
    );
};

export default Contact;