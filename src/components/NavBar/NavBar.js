import React from "react";
import { Link } from "react-router-dom";


import LocationSearchInput from "../SearchPlace/LocationSearchInput"
import SearchPlace from "../SearchPlace/SearchPlace"

const NavBar = props => {
	return (
		<nav className="navbar fixed-top navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<SearchPlace/>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar

