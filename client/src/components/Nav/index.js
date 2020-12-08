import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="navbar-brand">Google Books</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href={"/search"}>
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={"/saved"}>
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
