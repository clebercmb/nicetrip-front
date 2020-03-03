import React from "react";
import { Link } from "react-router-dom";


import LocationSearchInput from "../SearchPlace/LocationSearchInput"
import SearchPlace from "../SearchPlace/SearchPlace"

import "./NavBar.css"

const NavBar = props => {
	return (
		<nav className="navbar sticky-top navbar-light bg-light mb-0 NavBarStyle">

			<Link to="/">
				<span className="navbar-brand mb-0 h1">Nice-Trip</span>
			</Link>
			<div className="SearchPlaceP">
				<SearchPlace />
			</div>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
			
		</nav>
	);
};

export default NavBar

