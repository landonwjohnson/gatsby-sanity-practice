import React from "react";
import { Link } from "gatsby";
import {NavStyles} from './styles'
import Logo from "../../Logo";


function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/"> Hot Now </Link>
        </li>
        <li>
          <Link to="/pizzas/"> Pizza Menu </Link>
        </li>
        <li>
          <Link to="/"> <Logo /> </Link>
        </li>
        <li>
          <Link to="/slicemasters"> Slice Masters </Link>
        </li>
        <li>
          <Link to="/order"> Orders </Link>
        </li>
      </ul>
    </NavStyles>
  );
}

export default Nav;
