import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="card-footer">our newsletter</div>

        <div className="card-body">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* column start */}
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h6 className="col-h6">About AJ's Fitness</h6>
                <p className="col-p">
                  Physical activity stimulates various brain chemicals that may
                  leave you feeling happier, more relaxed and less anxious.
                </p>
              </div>
              <div className="col">
                <h6 className="col-h6">Menus</h6>
                <ul>
                  <li className="col-li">
                    <a href="#carouselExampleIndicators">Home</a>
                  </li>
                  <li className="col-li">
                    <a href="#about-section">About</a>
                  </li>
                  <li className="col-li">
                    <a href="#services">Services</a>
                  </li>
                  <li className="col-li">
                    <a href="#bmi">Find BMI</a>
                  </li>
                  <li className="col-li">
                    <a href="#map">Locate Us</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h6 className="col-h6">Contact Us</h6>
                <i className="bi-geo-alt-fill">
                  <span className="contact_us"> Plot No.45 At. Isbavi</span>{" "}
                </i>
                <br />
                <i className="bi-telephone-fill">
                  <span className="contact_us"> +91 6465468578</span>{" "}
                </i>
                <br />
                <i className="bi-envelope-at-fill">
                  <span className="contact_us-mail"> srj5324@gmail.com</span>{" "}
                </i>
              </div>
            </div>
          </div>
          {/* column end */}
          <p className="footer-card-text">
            &copy; With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
