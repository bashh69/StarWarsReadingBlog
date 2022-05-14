import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Planet = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchPlanet = "https://www.swapi.tech/api/"
        useEffect(() => {
        actions.loadPlanet(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           <p>Name :{ store.planet.name }</p> 
           <p>Diameter :{ store.planet.diameter }</p> 
           <p>Rotation Period :{ store.planet.rotation_period }</p> 
           <p>Orbital Period :{ store.planet.orbital_period }</p>
           <p>Gravity :{ store.planet.gravity }</p>
           <p>Population :{ store.planet.population }</p>
           <p>Climate :{ store.planet.climate }</p>
           <p>Terrain :{ store.planet.terrain }</p>
           <p>Surface Water:{ store.planet.surface_water }</p>
        </div>)
};