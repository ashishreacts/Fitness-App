import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="card-footer">our newsletter</div>

        <div className="card-body">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* column start */}
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <h6 className="col-h6">About AJ's Fitness</h6>
                <p className="col-p">
                  Physical activity stimulates various brain chemicals that may
                  leave you feeling happier, more relaxed and less anxious.
                </p>
              </div>
              <div class="col">
                <h6 className="col-h6">Menus</h6>
                <ul>
                  <li className="col-li">Home</li>
                  <li className="col-li">About</li>
                  <li className="col-li">Services</li>
                  <li className="col-li">Find BMI</li>
                  <li className="col-li">Locate Us</li>
                </ul>
              </div>
              <div class="col">
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
