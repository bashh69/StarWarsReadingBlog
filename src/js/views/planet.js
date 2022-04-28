import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Planet = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadPlanet(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           <p>hi</p>
        </div>)
};