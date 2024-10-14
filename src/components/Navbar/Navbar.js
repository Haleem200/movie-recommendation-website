import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="people">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="Tv">
                  Tv
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex me-2">
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-spotify"></i>
                </a>
                <a className="nav-link text-white" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
