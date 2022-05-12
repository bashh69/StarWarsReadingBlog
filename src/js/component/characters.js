import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Characters = (props) => {
    console.log(props)
  useEffect(() => {
    actions.loadCharacters();
  }, []);
  const { store, actions } = useContext(Context);
    return (
    <div>
        <h1>Characters</h1>
        <div id= "characters">
        {!store.characters ? <h1> loading </h1> : (store.characters.map((character, i) => {
            return (
                <div className="space" key={character.uid}>
                    <img style={{height: 300, width: 300}} src="https://wallpaperaccess.com/full/1087224.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">{character.url.properties}</p>
                            
                            <button className="btn btn-primary"><Link style={{color: 'white'}} to={`characters/${character.uid}`}><p>Learn More!</p></Link></button>
                        </div>
                        
                </div>
            );
        }))}
    </div>
    </div>)
};