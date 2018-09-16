import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Header = () => (
  <header>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to="/" activeClassName="is-active">
            Todo your day
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {/* <Navbar.Text>
          Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
        </Navbar.Text> */}
        <Navbar.Text pullRight>Have a great day!</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    {/* <h1>Todo your day</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Home
    </NavLink> */}
  </header>
);

export default Header;
