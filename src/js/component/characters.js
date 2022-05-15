import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Characters = (props) => {
  console.log(props);
  useEffect(() => {
    actions.loadCharacters();
  }, []);
  const { store, actions } = useContext(Context);
  return (
    <div>
      <h1>Characters</h1>
      <div id="characters">
        {!store.characters ? (
          <h1> loading </h1>
        ) : (
          store.characters.map((character, i) => {
            return (
              <Col>
              <Card className="bg-dark text-white space" style={{ width: "20rem" }} key={starships.uid}>
                <Card.Img
                  className="imagen"
                  variant="top"
                  src="https://wallpaperaccess.com/full/1087224.jpg"
                />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                 
                  <Link
                      style={{ color: "white" }}
                      to={`characters/${character.uid}`}
                    >
                    <Button className= "nomejodasmas" variant="primary">Learn More</Button>
                  </Link>
                  <Button className="heart" variant="warning">
                    <i className="far fa-heart" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
              // <div className="space" key={character.uid}>
              //   <img
              //     style={{ height: 300, width: 300 }}
              //     src="https://wallpaperaccess.com/full/1087224.jpg"
              //     className="card-img-top"
              //     alt="..."
              //   />
              //   <div className="card-body">
              //     <h5 className="card-title">{character.name}</h5>
              //     <p className="card-text">{character.url.properties}</p>

                  
              //       <Link
              //         style={{ color: "white" }}
              //         to={`characters/${character.uid}`}
              //       >
              //           <button className="btn btn-primary">
              //         <p>Learn More!</p>
              //         </button>
              //       </Link>
               
              //     <button type="button" class="btn btn-warning">
              //       Warning
              //     </button>
              //   </div>
              //</div>
            );
          })
        )}
      </div>
    </div>
  );
};
