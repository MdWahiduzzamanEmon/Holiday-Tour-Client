import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Destination = ({ place }) => {
    const { tripName, rating, days, price, description, image ,_id } = place;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={image}
              className="destinations-img position-relative"
            />
            <h6 className="position-absolute top-0 end-0 bg-warning p-2 rounded">
              ${price}
            </h6>
            <Card.Body className="text-start">
              <div>
                <Card.Title>{tripName}</Card.Title>
              </div>
              <Card.Text className="text-secondary">
                {description.slice(0, 100)}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Rating
                  className="text-warning"
                  initialRating={rating}
                  fullSymbol="fas fa-star"
                  emptySymbol="far fa-star"
                  readonly
                />
                <div>
                  <h6> {days}-Days</h6>
                </div>
              </div>
              <div className="text-end">
                <Link to={`/bookingForm/${_id}`}>
                  {" "}
                  <button className="btn btn-warning mt-4 fw-bold">
                    <i className="fas fa-ticket-alt me-2"></i>Buy Now
                  </button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Destination;