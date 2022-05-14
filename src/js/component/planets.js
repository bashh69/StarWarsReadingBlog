import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
  const { store, actions } = useContext(Context);
    useEffect(() => {
    actions.loadPlanets();
    }, []);
    console.log(store);
  return (
    <div>
      <h1>Planets</h1>
      <div id="planets">
        {!store.planets ? (
          <h1> loading </h1>
        ) : (
          store.planets.map((planets, i) => {
            return (
              <div className="space" key={planets.uid}>
                <img
                  style={{ height: 300, width: 300 }}
                  src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{planets.name}</h5>
              
                  <button className="btn btn-primary">
                    <Link
                      style={{ color: "white" }}
                      to={`planets/${planets.uid}`}
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
