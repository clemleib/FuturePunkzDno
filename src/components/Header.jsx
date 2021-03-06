import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header" id="headerSection">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">
            <img className="img-fluid" src="/images/logo.png" alt="" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#homeSection">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mint">
                  Mint
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gameSection">
                  DAO Game
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#storySection">
                  Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmapSection">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teamSection">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
