import React from "react";
import "../../styles/home.css";
import {Characters} from "../component/characters.js"
import {Planets} from "../component/planets"


export const Home = () => {
	return (
	<div className="text-center mt-5">
		<Characters />
		<Planets />
			</div> )
};
