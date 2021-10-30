import React from 'react';
import design from '../../../images/design.png'
import service1 from "../../../images/service-1.png";
import service4 from "../../../images/service-4.png";
import service2 from "../../../images/service-2.png";
import service3 from "../../../images/service-3.png";
const OurService = () => {
    return (
      <div>
        <div className="container">
          <section>
            <h2 className="fw-bold text-uppercase py-2">Our Services</h2>
            <img src={design} alt="" />
          </section>
          <section>
            <div className="container">
              <div className="row py-5 our-service mx-auto">
                <div className="col-lg-6 d-flex text-start my-4">
                  <div>
                    <img src={service1} alt="" className=" img-fluid me-5" />
                  </div>
                  <div>
                    <h5 className="text-uppercase">accommodation</h5>
                    <p>
                      convenient arrangement; a settlement or compromise
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex text-start my-4">
                  <div>
                    <img src={service4} alt="" className=" img-fluid me-5" />
                  </div>
                  <div>
                    <h5 className="text-uppercase">TRIP ADVISER</h5>
                    <p>
                      convenient arrangement; a settlement or compromise
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 my-4">
                  <div className="d-flex text-start">
                    <div>
                      <img src={service2} alt="" className=" img-fluid me-5" />
                    </div>
                    <div>
                      <h5 className="text-uppercase">TRANSPORTATION</h5>
                      <p>
                        convenient arrangement; a settlement or compromise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex text-start my-4 ">
                  <div>
                    <img src={service3} alt="" className=" img-fluid me-5" />
                  </div>
                  <div>
                    <h5 className="text-uppercase">EASY TRIP PLANNER</h5>
                    <p >
                      convenient arrangement; a settlement or compromise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default OurService;