import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import bg from "../../../images/AOL-BG.png";
import design from "../../../images/design.png";
const AddNewEvent = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data["rating"] = parseFloat(data["rating"]);
    axios
      .post("https://fast-ocean-49814.herokuapp.com/destination", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Data Inserted Successfully!");
          reset();
        }
      });
  };

  return (
    <div className="my-5 pt-5" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div>
          <h3 className="text-warning">-ADD BooKing InFo-</h3>
          <img src={design} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 shadow p-4 rounded-3"
        >
          <div className="row">
            <div className="col-md-6 d-flex flex-column booking-form">
              <input
                {...register("tripName", { required: true, maxLength: 20 })}
                placeholder="Location Name"
              />
              <textarea
                {...register("description")}
                placeholder="Description"
              />
              <input {...register("rating")} type="text" placeholder="Rate" />
            </div>
            <div className="col-md-6 d-flex flex-column booking-form">
              <input type="number" {...register("price")} placeholder="Price" />
              <input {...register("image")} placeholder="Image url" />
              <input {...register("days")} placeholder="How many days Trip" />
            </div>
            <div>
              <button className="btn btn-warning my-5 fw-bold">
                Add Destination Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEvent;