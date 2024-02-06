import React from "react";
import { useNavigate } from "react-router-dom";

export const Planets = ({ detail }) => {
  const navigate = useNavigate();

  const goToFullPage = () => {
    navigate("/FullPage", { state: { data: detail, type: "planet" } });
  };

  return (
    <div
      id="scrollspyHeading1"
      className="col-4 g-3"
      style={{ flex: "0 0 auto" }}
    >
      <div className="post" style={{ border: "solid rgb(232, 229, 229) 2px" }}>
        <img
          src="https://loremflickr.com/320/240/dog"
          className="w-100"
          alt={detail.name}
          style={{ height: "auto" }}
        />
        <div className="col post-header" style={{ padding: "10px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
            {detail.name}
          </h2>
          <p style={{ textAlign: "left", margin: "5px 0" }}>
            Population: {detail.population}
          </p>
          <p style={{ textAlign: "left", margin: "5px 0" }}>
            Terrain: {detail.terrain}
          </p>

          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "20px" }}
          >
            <button
              onClick={goToFullPage}
              type="button"
              className="btn btn-outline-primary"
            >
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
