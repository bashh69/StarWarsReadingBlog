import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span>
          <img
            id="topLeftLogo"
            src="https://www.pngitem.com/pimgs/m/21-210302_star-wars-logo-png-star-wars-logo-icon.png"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Favorites
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
