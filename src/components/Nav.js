import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ isLoggedIn }) => {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-dark">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-dark">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-dark">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-dark">
                About
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="col-md-3 text-end">
              <button
                to="login"
                onClick={() => {
                  localStorage.setItem("token", null);
                  window.location.reload();
                }}
                type="button"
                className="btn btn-outline-primary me-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="col-md-3 text-end">
              <Link
                to="login"
                type="button"
                className="btn btn-outline-primary me-2"
              >
                Login
              </Link>
              <Link to="/register" type="button" className="btn btn-primary">
                Register
              </Link>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};
export default Nav;
