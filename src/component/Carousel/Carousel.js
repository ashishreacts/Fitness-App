import React from "react";
import "./Carousel.css";
import Footer from "../Footer/Footer";
import BMI from "../BMI Calculator/BMI";
import { Map } from "../Map/Map";
import Carousel1 from "../Carousel1/Carousel1";
import { Card } from "../Card/Card";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ overflowY: "hidden" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://t4.ftcdn.net/jpg/02/86/09/83/360_F_286098390_D2J4jLbOkCzikuSXxQBh26IxhR7t4i28.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://w0.peakpx.com/wallpaper/315/293/HD-wallpaper-sports-weightlifting-bodybuilder-gym-man-muscle.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/people-doing-indoor-cycling_23-2149270268.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* about section  */}

      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2 className="about-h2" id="about-section">
              About AJ's Fitness
            </h2>
          </div>
          <div className="about-box">
            <div className="about-img-box">
              <img
                className="aj-logo"
                src="https://cdn.dribbble.com/users/77971/screenshots/350658/media/5ef7b5722d38d2c34425409956d0a3a0.jpg?compress=1&resize=400x300&vertical=center"
                alt=""
              />
            </div>
            <div className="detail-box">
              <p className="about-p">
                Fitness is the state of physical health and well-being achieved
                through regular exercise, proper nutrition, and a healthy
                lifestyle. It involves activities that improve cardiovascular
                endurance, strength, flexibility, and body composition. Fitness
                benefits include improved heart health, increased energy,
                reduced stress, weight management, and better overall
                well-being. Consulting professionals is recommended before
                starting any fitness program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container" id="services">
            <h2>Our Services</h2>
          </div>
          <div className="service_container">
            <div className="box">
              <img
                src="https://npr.brightspotcdn.com/dims4/default/1c4fa9c/2147483647/strip/true/crop/5184x3456+0+0/resize/1760x1174!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fmichigan%2Ffiles%2F202006%2Fmark-bertulfo-gym-unsplash.jpg"
                alt=""
              />
              <h6 className="visible_heading">CROSSFIT TRAINING</h6>
              {/* <div className="link_box">
                <a href="">
                  <img src="images/link.png" alt="" />
                </a>
                <h6>CROSSFIT TRAINING</h6>
              </div> */}
            </div>
            <div className="box">
              <img
                src="https://post.healthline.com/wp-content/uploads/2020/08/man-deadlift-1200x628-facebook-1200x628.jpg"
                style={{ height: "175px" }}
                alt=""
              />
              <h6 className="visible_heading">FITNESS</h6>
              {/* <div className="link_box">
                <a href="">
                  <img src="images/link.png" alt="" />
                </a>
                <h6>FITNESS</h6>
              </div> */}
            </div>
            <div className="box">
              <img
                src="https://uploads-ssl.webflow.com/5eb17e57534ba845bbfee70e/60110f8b2a7a6007b9fcd327_createafitnessappgurucan_6493aa7f59d8a7a9d7b12b0e27140ca4_1000.jpeg"
                alt=""
              />
              <h6 className="visible_heading">DYNAMIC STRENGTH TRAINING</h6>
              {/* <div className="link_box">
                <a href="">
                  <img src="images/link.png" alt="" />
                </a>
                <h6>DYNAMIC STRENGTH TRAINING</h6>
              </div> */}
            </div>
            <div className="box">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6j5ESn_UEIQ9dxVokocTawoxYf28NF_pR0ZVr6M445oxRv-PxUVajPfrXC4_wZCTMvdBrxSdoLc&usqp=CAU&ec=48665701"
                alt=""
              />
              <h6 className="visible_heading">HEALTH</h6>
              {/* <div className="link_box">
                <a href="">
                  <img src="images/link.png" alt="" />
                </a>
                <h6>HEALTH</h6>
              </div> */}
            </div>
            <div className="box">
              <img
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <h6 className="visible_heading">WORKOUT</h6>
              {/* <div className="link_box">
                <a href="">
                  <img src="images/link.png" alt="" />
                </a>
                <h6>WORKOUT</h6>
              </div> */}
            </div>
            <div className="box">
              <img
                src="https://wallpaperbat.com/img/180562-free-download-fitness-wallpaper-15-hd-wallpaper-wallpaper.jpg"
                alt=""
              />
              <h6 className="visible_heading">STRATEGIES</h6>
              {/* <div className="link_box">
                <a href="">
                  <img src="images/link.png" alt="" />
                </a>
                <h6>STRATEGIES</h6>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Card />
      <Carousel1 />
      <span className="bmi_map">
        <BMI />
        <Map />
      </span>
      <br />

      <Footer />
    </div>
  );
};

export default Carousel;
