import React from 'react';
import { NavLink } from "react-router-dom";

const Admin = () => {

    return (
      <div>
        <ul className="list-unstyled fs-5">
          <li>
            <NavLink
              to="/managebooking"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-tasks me-2"></i>Manage All Booking
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addnewevent"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              {" "}
              <p className=" py-3 fw-bold fs-6">
                <i class="fas fa-plus me-2"></i>Add a New Booking Details
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    );
};

export default Admin;