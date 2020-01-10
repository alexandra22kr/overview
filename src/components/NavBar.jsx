import React from "react";
import { NavLink , Link } from "react-router-dom";
import "../css/all.css";
import NavItem from './GeneralStyledComponents/NavItem';
// import NavLink from './GeneralStyledComponents/NavLink';

const NavBar = () => {
  return (
    <nav className="nav circle">
      <ul>
        <li>
          <NavLink to="/" className="nav__item" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className="nav__item" activeClassName="active">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" className="nav__item" activeClassName="active">
            Create
          </NavLink>
        </li>
        <NavItem>
            <NavLink to="/gallery" activeClassName="active" layout="light">test</NavLink>
        </NavItem>
        {/* <NavItem /> */}
      </ul>
    </nav>
  );
};

export default NavBar;
