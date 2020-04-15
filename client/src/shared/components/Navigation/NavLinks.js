import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./NavLinks.css";
import SearchButton from "./SearchButton";
import { AuthContext } from "../../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/users">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/diseases" exact>
          Diseases
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/diseases">MY DISEASES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/diseases/new">ADD Disease</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}

      <li>
        <SearchButton />
      </li>

      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
