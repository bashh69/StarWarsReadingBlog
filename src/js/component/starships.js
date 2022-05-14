import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";


export const Starships = () => {
  const { store, actions } = useContext(Context);
    useEffect(() => {
    actions.loadStarships();
    }, []);
    console.log(store);
  return (
    <div>
      <h1>Starships</h1>
      <div id="starships">
        {!store.starships ? (
          <h1> loading </h1>
        ) : (
          store.starships.map((starship, i) => {
            return (
              <Col>
              <Card className="bg-dark text-white space" style={{ width: "20rem" }} key={starships.uid}>
                <Card.Img
                  className="imagen"
                  variant="top"
                  src="https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg?fit=2560%2C2066"
                />
                <Card.Body>
                  <Card.Title>{starship.name}</Card.Title>
                 
                  <Link
                      style={{ color: "white" }}
                      to={`starships/${starship.uid}`}
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
