import React from 'react';
import outdoor1 from "../../images/outdoor-1.png";
import outdoor2 from "../../images/outdoor-2.png";
import outdoor3 from "../../images/outdoor-3.png";
import outdoor4 from "../../images/outdoor-4.png";
import outdoor5 from "../../images/outdoor-5.png";
const Extra = () => {
    return (
      <div>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-around my-5 py-md-5">
            <div>
              <img src={outdoor1} alt="outdoor" className="mb-4 mb-md-0" />
            </div>
            <div>
              <img src={outdoor2} alt="outdoor" className="mb-4 mb-md-0 d-md-block d-none" />
            </div>
            <div>
              <img src={outdoor3} alt="outdoor" className="mb-4 mb-md-0" />
            </div>
            <div>
              <img src={outdoor4} alt="outdoor" className="mb-4 mb-md-0" />
            </div>
            <div>
              <img src={outdoor5} alt="outdoor" className=" d-md-block d-none" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Extra;