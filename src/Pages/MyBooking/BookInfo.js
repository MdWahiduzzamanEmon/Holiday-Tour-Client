import React from 'react';

const BookInfo = ({ bookInfo, handleDelete }) => {
  const { tripName, date, adults, childs, status } = bookInfo;
  return (
    <div className="row shadow p-4 rounded-3 my-4">
      <div className="col-md-6">
        <div className="row text-start">
          <div className="col-md-7 ">
            <p className="text-secondary mb-2">Place Name-</p>
            <h5>{tripName}</h5>
          </div>
          <div className="col-md-5">
            <p className="text-secondary mb-2">Date-</p>
            <h5>{date}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row text-start align-items-center">
          <div className="col-md-3 ">
            <p className="text-secondary mb-2">Adults- </p>
            <h5>{adults}</h5>
          </div>
          <div className="col-md-3 ">
            <p className="text-secondary mb-2">Childs- </p>
            <h5>{childs}</h5>
          </div>
          <div className="col-md-3 text-center">
            <p className="text-secondary mb-2 text-start">Status-</p>
            <h5 className="fs-6 bg-info w-50 p-1 rounded-pill">{status}</h5>
          </div>
          <div className="col-md-3">
            <button className="btn btn-warning" onClick={handleDelete}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;