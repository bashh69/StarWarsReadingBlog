import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Character = (props) => {
    console.log(props)
    console.log(store)
    const { store, actions } = useContext(Context);
    const fetchCharacter = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadCharacter(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div className="character">
           <p>Name: {store.character.name}</p>
           <p>Mass: {store.character.mass}</p>
           <p>Heigh: {store.character.height}</p>
           <p>Hair  Color: {store.character.hair_color}</p>
           <p>Skin Color: {store.character.skin_color}</p>
           <p>Eye Color: {store.character.eye_color}</p>
           <p>Birth Year: {store.character.birth_year}</p>
           <p>Gender: {store.character.gender}</p>
           <p>Home World: {store.character.homeworld}</p>
        </div>)
};