import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Characters = () => {
  useEffect(() => {
    actions.loadCharacters();
  }, []);
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div>
        <h1>Characters</h1>
        <div id= "characters">
        {!store.characters ? <h1> loading </h1> : (store.characters.map((character, i) => {
            return (
                <div className="space" key={character.uid}>
                    <img style={{height: 300, width: 300}} src="https://wallpaperaccess.com/full/1087224.jpg" class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            <button className="btn btn-primary"><Link style={{color: 'white'}} to={`starship/${character.uid}`}><p>Learn More!</p></Link></button>
                        </div>
                        
                </div>
            );
        }))}
    </div>
    </div>)
};