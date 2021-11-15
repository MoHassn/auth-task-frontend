import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" class="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" class="nav-link px-2 link-dark">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" class="nav-link px-2 link-dark">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" class="nav-link px-2 link-dark">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" class="nav-link px-2 link-dark">
                About
              </Link>
            </li>
          </ul>

          <div class="col-md-3 text-end">
            <Link to="login" type="button" class="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/register" type="button" class="btn btn-primary">
              Register
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Nav;
