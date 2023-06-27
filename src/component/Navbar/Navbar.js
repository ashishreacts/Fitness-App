import React from "react";
import "./Navbar.css";
import Carousel from "../Carousel/Carousel";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: " rgba(0, 0, 0, 0.95)" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a
              className="navbar-brand"
              href="#"
              style={{ margin: "5px -160px 5px 5px" }}
            >
              <img
                src="https://www.joonsquare.com/usermanage/image/business/aj-fitness-vellore-28650/aj-fitness-vellore-logo.jpg"
                alt="Fitness"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white", marginLeft: "100px" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "white" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "white" }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "white" }}
                >
                  Find BMI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{ color: "white" }}
                >
                  Locate Us
                </a>
              </li>
              {isAuthenticated && (
                <li>
                  <p style={{ color: "white", margin: "30px" }}>{user.name}</p>
                </li>
              )}
              {isAuthenticated ? (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ margin: "22px" }}
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ margin: "22px" }}
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Carousel />
    </div>
  );
};

export default Navbar;
