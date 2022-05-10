import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Starships = () => {
  useEffect(() => {
    actions.loadStarships();
  }, []);
  const { store, actions } = useContext(Context);

  console.log(store);
  return (
    <div>
      <h1>Starships</h1>
      <div id="characters">
        {!store.starships ? (
          <h1> loading </h1>
        ) : (
          store.starships.map((starships, i) => {
            return (
              <div className="space" key={starships.uid}>
                <img
                  style={{ height: 300, width: 300 }}
                  src="https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg?fit=2560%2C2066"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{starships.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary">
                    <Link
                      style={{ color: "white" }}
                      to={`starship/${starships.uid}`}
                    >
                      <p>Learn More!</p>
                    </Link>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
