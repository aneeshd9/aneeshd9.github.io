import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Aneesh Dandime</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="text-decoration-none text-white" to="/">
              <a className="nav-link" href="/">About</a>
            </Link>
            <Link className="text-decoration-none text-white" to="/workex">
              <a className="nav-link" href="/workex">Experience</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
