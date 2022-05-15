import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";


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
              <Col>
              <Card className="bg-dark text-white space" style={{ width: "20rem" }} key={planets.uid}>
                <Card.Img
                  className="imagen"
                  variant="top"
                  src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
                />
                <Card.Body>
                  <Card.Title>{planets.name}</Card.Title>
                 
                  <Link
                      style={{ color: "white" }}
                      to={`planets/${planets.uid}`}
                    >
                    <Button className= "nomejodasmas" variant="primary">Learn More</Button>
                  </Link>
                  <Button className="heart" variant="warning">
                    <i className="far fa-heart" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            );
          })
        )}
      </div>
    </div>
  );
};
