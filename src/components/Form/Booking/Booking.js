import axios from 'axios';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import bg from '../../../images/AOL-BG.png'
import tiny from '../../../images/design.png'
import BookingForm from '../BookingForm/BookingForm';
const Booking = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const { id } = useParams();
  const [locationDetails, setLocationDetails] = useState({});
  const [isSpinner, setIsSpinner] = useState(true);
  const { image, tripName, description, price, days } = locationDetails;

  //get one
  React.useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      axios(`https://fast-ocean-49814.herokuapp.com/tourLocation/${id}`).then(
        (res) => {
          setLocationDetails(res.data);
          setIsSpinner(false);
        }
      );
    }, 1000);
  }, []);
  console.log(locationDetails);
  return (
    <div className="my-5 py-5 bg-img" style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <h3 className="text-warning text-uppercase">-Booking-</h3>
        <img src={tiny} alt="" />
      </div>
      {isSpinner ? (
        <Spinner animation="grow" variant="warning" className="mt-5" />
      ) : (
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
              <BookingForm tripName={tripName} price={price} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;