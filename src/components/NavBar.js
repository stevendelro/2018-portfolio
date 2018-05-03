import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="blue-grey darken-1">
    <div className="container nav-wrapper">
      <Link to="/" className="brand-logo left">
        Steven Del Rosario
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
