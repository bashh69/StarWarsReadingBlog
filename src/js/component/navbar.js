import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span ><img id="topLeftLogo" src="https://www.pngitem.com/pimgs/m/21-210302_star-wars-logo-png-star-wars-logo-icon.png" /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};