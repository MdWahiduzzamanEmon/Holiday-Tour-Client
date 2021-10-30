import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import bg from "../../../images/AOL-BG.png";
import design from '../../../images/design.png';
const ManageBooking = () => {
    const [bookingData, setBookingData] = useState([]);
    const [statusChng,setStatusChng] = useState('')
    useEffect(() => {
        axios
          .get("https://fast-ocean-49814.herokuapp.com/bookingInfo")
          .then((res) => {
            setBookingData(res.data);
          });
    },[])

    const handleOptionChng = (e) => {
        
        const updateStatus = e.target.value;
        const newData = { ...bookingData };
        newData.status = updateStatus;
        setStatusChng(newData);
        
    }
    const handletoOp = (id) => {
        // console.log(statusChng, id);
        axios
          .put(
            `https://fast-ocean-49814.herokuapp.com/status/${id}`,
            statusChng
          )
          .then((res) => {
            console.log(res.data);
          });
        
    }

    //delete booking

    const handleDelete = (id) => {
      // const singleBooking = allBookingInfo.find(booking => booking._id === id);
      // console.log(singleBooking);
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(
              `https://fast-ocean-49814.herokuapp.com/bookingDelete/${id}`
            )
            .then((res) => {
              if (res.data.deletedCount === 1) {
                toast.success("User Tour booking cancel successfully!");
                const restBooking = bookingData.filter(
                  (booking) => booking._id !== id
                );
                setBookingData(restBooking);
              }
            });
        } else {
          swal("user ticket is safe!");
        }
      });
    };
    return (
      <div className="my-5 pt-5" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
          <div className="py-4">
            <h3 className="text-warning">-Manage Booking-</h3>
            <img src={design} alt="" />
          </div>
          {/* table   */}
          <Table striped bordered hover className="text-start" responsive="sm">
            <thead>
              <tr>
                <th>Location</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            {bookingData.map((bData) => (
              <tbody key={bData?._id}>
                <tr>
                  <td>{bData?.tripName}</td>
                  <td>{bData?.email}</td>
                  <td>{bData?.date}</td>
                  <td className="d-flex justify-content-around">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-75"
                      onChange={handleOptionChng}
                    >
                      <option>{bData?.status}</option>
                      <option value="Approved">Approved</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Rejected">Rejected</option>
                    </Form.Select>
                    <button
                      onClick={() => handletoOp(bData?._id)}
                      className="btn"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td className="text-center text-danger trash">
                    <p onClick={() => handleDelete(bData?._id)}>
                      <i className="fas fa-trash"></i>
                    </p>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    );
};

export default ManageBooking;