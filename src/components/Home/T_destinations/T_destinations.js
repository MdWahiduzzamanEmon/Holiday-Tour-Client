import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Row, Spinner } from "react-bootstrap";
import design from '../../../images/design.png'
import Destination from '../Destination/Destination';
const T_destinations = () => {
    const [places, setPlaces] = useState([]);
    const [isSpinner, setIsSpinner] = useState(true)
    const [afterSearch,setAfterSearch]=useState([])
    useEffect(() => {
        setIsSpinner(true);
        setTimeout(() => {
           setIsSpinner(true);
            axios
              .get("https://fast-ocean-49814.herokuapp.com/tours")
              .then((res) => {
                setPlaces(res.data);
                //   console.log(res.data);
                  setAfterSearch(res.data);
                   setIsSpinner(false);
              });
       },1000 );
}
        , [])
    
    const handleSearch = (e) => {
        // console.log(e.target.value);
        const searchText = e.target.value;
        const searchDestination = places?.filter((place) => place?.tripName.toLowerCase().includes(searchText.toLowerCase()));
        setAfterSearch(searchDestination);
    }
    return (
      <div>
        <div className="container my-5">
          <section>
            <h2 className="fw-bold py-2">JOURNEY TO EXPLORE NATURE</h2>
            <img src={design} alt="" className="mb-3" />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Search Destination name...."
                className="w-75 p-3 mx-auto rounded-pill"
                onChange={handleSearch}
              />
            </Form.Group>
          </section>
          {isSpinner ? (
            <Spinner animation="grow" variant="warning" />
          ) : (
            <section className="my-4 py-4">
              <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {afterSearch?.map((place) => (
                  <Destination key={place?._id} place={place} />
                ))}
              </Row>
            </section>
          )}
        </div>
      </div>
    );
};

export default T_destinations;