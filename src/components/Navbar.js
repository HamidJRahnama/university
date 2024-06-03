import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        University
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav font-weight-bold">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              خانه
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
