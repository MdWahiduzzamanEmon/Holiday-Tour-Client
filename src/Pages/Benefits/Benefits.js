import React from 'react';
import benefits from "../../images/benefits.jpg";
const Benefits = () => {
    return (
      <div>
        <div className="container py-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={benefits} alt="" className=" img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-6 text-start fw-bold text-secondary">
              <h5 className="text-uppercase py-4 text-warning">benefits-</h5>
              <p>
                <i className="fas fa-plane-departure text-info me-3"></i>Reduces
                stress...
              </p>
              <p>
                <i className="fas fa-plane-departure text-info me-3"></i>Increases
                creativity...
              </p>
              <p>
                <i className="fas fa-plane-departure text-info me-3"></i>Improves low
                moods...
              </p>
              <p>
                <i className="fas fa-plane-departure text-info me-3"></i>Strengthens
                relationships...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Benefits;