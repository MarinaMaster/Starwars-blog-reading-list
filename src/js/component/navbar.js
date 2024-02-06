import React from "react";
import { Link } from "react-router-dom";
import Star from "../../img/Star_wars3.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<Link to="/">
				<img src={Star} alt={'Star_Wars-logo'}
				className="img-logo float-left"/>
			</Link>
			<li className="nav-item dropdown">
				<Link to="/demo">
				<button className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
					Favorites
				</button>
				</Link>
					{/*<button className="btn btn-primary float-right">Favorites</button>*/}
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">Action</a>
					<a className="dropdown-item" href="#">Another action</a>
					<a className="dropdown-item" href="#">Something else here</a>
				</div>
			</li>
		</nav>
	);
};
