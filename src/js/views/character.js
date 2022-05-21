import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Character = (props) => {
  console.log(props);
  console.log(store);
  const { store, actions } = useContext(Context);
  const fetchCharacter = "https://www.swapi.tech/api/";
  useEffect(() => {
    actions.loadCharacter(id);
  }, []);
  console.log(store);
  let id = props.match.params.id;
  return (
    <div className="character">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h1>Name: {store.character.name}</h1>
          <p>Mass: {store.character.mass}</p>
          <p>Heigh: {store.character.height}</p>
          <p>Hair Color: {store.character.hair_color}</p>
          <p>Skin Color: {store.character.skin_color}</p>
          <p>Eye Color: {store.character.eye_color}</p>
          <p>Birth Year: {store.character.birth_year}</p>
          <p>Gender: {store.character.gender}</p>
          <p>Home World: {store.character.homeworld}</p>
        </div>
      </div>
    </div>
  );
};

{
  /* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
