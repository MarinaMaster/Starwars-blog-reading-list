import React from "react";

export const Characters = ({ contact }) => {
  return (
    <div className="col-4 g-3">
      <div className="post" style={{ border: "solid rgb(232, 229, 229) 2px" }}>
        <img
          src="https://loremflickr.com/320/240/dog"
          className="w-100"
          alt="random-picture1"
          style={{ height: "auto" }}
        />
        <div className="col post-header" style={{ padding: "10px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
            {contact.name}
          </h2>
          <p style={{ textAlign: "left", margin: "5px 0" }}>
            Gender: {contact.gender}
          </p>
          <p style={{ textAlign: "left", margin: "5px 0" }}>
            Hair Color:{contact.hair_color}
          </p>
          <p style={{ textAlign: "left", margin: "5px 0" }}>
            Eye-Color:{contact.eye_color}
          </p>

          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "20px" }}
          >
            <button type="button" className="btn btn-outline-primary">
              Learn more!
            </button>
            <button type="button" className="btn btn-outline-warning">
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
