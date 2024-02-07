import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://img.freepik.com/premium-photo/gym-with-black-floor-yellow-light-ceiling_899870-10360.jpg?w=1060"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption ">
            <h5 className="carousel-caption-h5"> Ignite Your Fitness Flame</h5>
            <p className="carousel-caption-p">
              Strength does not come from the body. It comes from the will.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption ">
            <h5 className="carousel-caption-h5">
              Sculpt Your Strength, Mold Your Mind
            </h5>
            <p className="carousel-caption-p">
              The gym is not just a place; it's a mindset.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://olimpsport.com/media/mageplaza/blog/post/image//o/-/o-ktorej-porze-dnia-trening-jest-najbardziej-skuteczny_3.jpg"
            className="d-block w-100 img-fluid"
            alt="..."
          />
          <div className="carousel-caption ">
            <h5 className="carousel-caption-h5">
              Elevate Your Potential, Conquer Your Limits
            </h5>
            <p className="carousel-caption-p">
              Fitness is not just about the body you build; it's about the life
              you create.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
