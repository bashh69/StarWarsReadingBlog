import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Character = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchCharacter = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadCharacter(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           <p>hi</p>
        </div>)
};