import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Todo your day</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Home
    </NavLink>
  </header>
);

export default Header;
