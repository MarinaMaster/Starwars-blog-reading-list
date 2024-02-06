import React from "react";
import { Link } from "react-router-dom";
import Star from "../../img/Star_wars3.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <Link to="/">
        <img
          src={Star}
          alt={"Star_Wars-logo"}
          className="img-logo float-left"
        />
      </Link>
      <div className="col-md-1">
        <div className="btn-group">
          <Link to="/demo">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Favorites
            </button>
          </Link>
          {/*<button className="btn btn-primary float-right">Favorites</button>*/}
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="dropdown-item" to="/action">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/another-action">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/something-else">
                Something else here
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
