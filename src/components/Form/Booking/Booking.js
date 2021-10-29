import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import bg from '../../../images/AOL-BG.png'
import tiny from '../../../images/design.png'
import BookingForm from '../BookingForm/BookingForm';
const Booking = () => {
    const { id } = useParams();
    const [locationDetails, setLocationDetails] = useState({});
    const { image, tripName, description, price, days } = locationDetails;

    //get one 
    React.useEffect(() => {
        axios(
          `https://fast-ocean-49814.herokuapp.com/tourLocation/${id}`
        ).then((res) => {
          setLocationDetails(res.data);
        });
    }, [])
    console.log(locationDetails);
    return (
      <div
        className="my-5 py-5 bg-img"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h3 className="text-warning text-uppercase">-Booking-</h3>
        <img src={tiny} alt="" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4 p-3 ">
                  <div>
                    <img
                      src={image}
                      alt={tripName}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="col-lg-8 text-start border-bottom">
                  <h5>{tripName}</h5>
                  <p className="text-secondary">{description}</p>
                  <h6 className="text-danger">{days} days Trip</h6>
                  <h5>Price: {price}$</h5>
                </div>
                <h5 className="fw-bold text-end">Total: {price}$</h5>
              </div>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-5">
              <BookingForm tripName={tripName} price={price}/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Booking;