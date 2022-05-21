import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown, Button } from "react-bootstrap";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Button href='/' variant='none'>
        <img
          id="topLeftLogo"
          src="https://png.pngitem.com/pimgs/s/108-1087514_star-wars-hd-png-download.png"
        />
      </Button>
      <div className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Favorites
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Classified Info</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Don't go there</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
