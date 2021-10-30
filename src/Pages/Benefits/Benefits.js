import React from 'react';
import benefits from "../../images/benefits.jpg";
import design from '../../images/design.png'
const Benefits = () => {
    return (
      <div>
        <div className="container py-5 mb-5">
          <img src={design} alt="" />
          <div className="row mt-5">
            <div className="col-md-6">
              <div>
                <img src={benefits} alt="" className=" img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-6 text-start fw-bold text-secondary">
              <h5 className="text-uppercase py-4 text-warning">benefits-</h5>
              <p className=" ms-md-0 ms-5">
                <i className="fas fa-plane-departure text-info me-3"></i>Reduces
                stress...
              </p>
              <p className=" ms-md-0 ms-5">
                <i className="fas fa-plane-departure text-info me-3"></i>
                Increases creativity...
              </p>
              <p className=" ms-md-0 ms-5">
                <i className="fas fa-plane-departure text-info me-3"></i>
                Improves low moods...
              </p>
              <p className=" ms-md-0 ms-5">
                <i className="fas fa-plane-departure text-info me-3"></i>
                Strengthens relationships...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Benefits;