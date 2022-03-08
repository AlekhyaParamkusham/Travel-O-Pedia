import React from "react";
import { Link } from "react-router-dom";
const countries = ["France", "India", "Italy", "NewZealand", "China"];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Travel-O-Pedia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{ paddingRight: "40px" }}
          >
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle "
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ paddingRight: "40px" }}
              >
                <span className="badge badge-warning">Countries</span>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {countries.map((country, id) => (
                  <li key={id}>
                    <Link className="dropdown-item" to={`/${country}`}>
                      {country}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
