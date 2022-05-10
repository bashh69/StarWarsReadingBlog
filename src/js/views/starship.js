import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Starship = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
        useEffect(() => {
        actions.loadStarship(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           <p>hi</p>
        </div>)
};