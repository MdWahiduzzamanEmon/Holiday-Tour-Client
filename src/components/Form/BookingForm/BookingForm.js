import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';

const BookingForm = ({ tripName,price }) => {
    const { user}= useAuth();
    const { register, handleSubmit,reset } = useForm();
    

    const onSubmit = (data) => {
        data["email"] = user?.email || "";
        data["name"] = user?.displayName || "";
        data["tripName"] = tripName || "";
        data["price"] = price || "";
        data["status"] = "Pending";
        //post on the database
        axios
          .post("https://fast-ocean-49814.herokuapp.com/bookingInfo", data)
          .then((response) => {
            if (response.data.insertedId) {
              toast.success(
                "Submitted successfully Your information! Wait for confirm your ticket"
              );
            } else {
              toast.error(
                "Something went wrong! Again Submit your information!"
              );
            }
            reset();
          });
      console.log(data);
  };

    
  return (
      <div>
          <h5 className="fw-bold">Booking Details</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="booking-form shadow p-3 rounded-3">
        <input
          {...register("name")}
          value={user?.displayName || ""}
          placeholder="Name"
        />
        <input
          {...register("email")}
          type="email"
          value={user?.email || ""}
          placeholder="Email"
          required
        />
        <input {...register("tripName")} value={tripName || ""} />
        <input {...register("telephone")} placeholder="Telephone" required />
        <input {...register("date")} type="date" required />
        <input
          {...register("adults")}
          type="number"
          placeholder="Adults"
          required
        />
        <input
          {...register("childs")}
          type="number"
          placeholder="Childs"
          required
        />

        <div>
          <button className="btn btn-warning my-3 fw-bold">Submit to booking</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;