import React from "react";
import "./Navbar.css";
import Carousel from "../Carousel/Carousel";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        id="navHome"
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
              href="https://example.com"
              style={{ margin: "5px -160px 5px 5px" }}
            >
              <img
                src="https://www.joonsquare.com/usermanage/image/business/aj-fitness-vellore-28650/aj-fitness-vellore-logo.jpg"
                alt="Fitness"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => handleNavigation("navHome")}
                  style={{
                    color: "white",
                    marginLeft: "100px",
                    cursor: "pointer",
                  }}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  onClick={() => handleNavigation("about-section")}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  onClick={() => handleNavigation("services")}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Services
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  onClick={() => handleNavigation("bmi")}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Find BMI
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active"
                  onClick={() => handleNavigation("map")}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  Locate Us
                </button>
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
