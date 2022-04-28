import React from "react";
import "../../styles/home.css";
import {Character} from "./character.js";
//import {Character} from "./character.js"
import {Characters} from "./characters.js"
import {Planets} from "../views/planets"

export const Home = () => {
	return (
	<div className="text-center mt-5">
		<h1>Character</h1>
		<Characters />
		<Planets />
	</div> )
};
