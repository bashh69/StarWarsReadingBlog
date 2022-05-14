import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Starship = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchStarships = "https://www.swapi.tech/api/"
        useEffect(() => {
        actions.loadStarship(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           <p>Name : { store.starship.name }</p>
           <p>Model : { store.starship.model }</p>
           <p>Class : { store.starship.starship_class }</p>
           <p>Manufacturer : { store.starship.manufacturer }</p>
           <p>Cost in Credits : { store.starship.cost_in_credits }</p>
           <p>length : { store.starship.length }</p>
           <p>Crew : { store.starship.crew }</p>
           <p>Passengers : { store.starship.passengers }</p>
           <p>Consumables : { store.starship.consumables }</p>   
         
      </div>)
};