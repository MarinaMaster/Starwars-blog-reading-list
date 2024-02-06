import React from "react";
import { useLocation } from "react-router-dom";

export const FullPage = () => {
  const location = useLocation();
  const { data, type } = location.state || { data: {}, type: "unknown" };

  const renderDetails = () => {
    switch (type) {
      case "character":
        return (
          <>
            <div className="col-2">
              <p>Name</p>
              <div>{data.name}</div>
            </div>
            <div className="col-2">
              <p>Birth Year</p>
              <div>{data.birth_year}</div>
            </div>
            <div className="col-2">
              <p>Gender</p>
              <div>{data.gender}</div>
            </div>
            <div className="col-2">
              <p>Height</p>
              <div>{data.height}</div>
            </div>
            <div className="col-2">
              <p>Skin Color</p>
              <div>{data.skin_color}</div>
            </div>
            <div className="col-2">
              <p>Eye Color</p>
              <div>{data.eye_color}</div>
            </div>
          </>
        );
      case "planet":
        return (
          <>
            <div className="col-2">
              <p>Name</p>
              <div>{data.name}</div>
            </div>
            <div className="col-2">
              <p>Population</p>
              <div>{data.population}</div>
            </div>
            <div className="col-2">
              <p>Terrain</p>
              <div>{data.terrain}</div>
            </div>
            <div className="col-2">
              <p>Climate</p>
              <div>{data.climate}</div>
            </div>
            <div className="col-2">
              <p>Gravity</p>
              <div>{data.gravity}</div>
            </div>
            <div className="col-2">
              <p>Diameter</p>
              <div>{data.diameter}</div>
            </div>
          </>
        );
      default:
        return <p>No data available.</p>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="https://loremflickr.com/320/240/dog" // Replace with relevant image source
            className="w-100"
            alt={data.name || "Placeholder"}
            style={{ height: "auto" }}
          />
        </div>
        <div className="col-6" style={{ textAlign: "center" }}>
          <h2>{data.name}</h2>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            distinctio dolorum eos magni praesentium quas, repellendus?
            Accusamus dignissimos impedit ipsa minus modi nihil non quisquam
            quod suscipit totam. Adipisci, cumque dignissimos doloremque ea
            exercitationem laborum maxime minima modi obcaecati, odit quae
            quibusdam quo, quos reiciendis rerum similique ullam voluptatum.
            Architecto blanditiis delectus deleniti earum minus nesciunt nobis
            nulla quaerat quis rerum. Corporis debitis dolor doloribus hic,
            illum natus placeat quisquam rem totam. Distinctio dolores enim eum
            incidunt ipsam itaque nisi, officiis optio soluta ut. Aliquid,
            animi, at consequuntur est, ipsa mollitia neque nobis odit provident
            quas quidem quos rerum veniam?
          </p>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}></div>
      <div className="row border-danger border-top border-bottom g-5">
        {renderDetails()}
      </div>
    </div>
  );
};
