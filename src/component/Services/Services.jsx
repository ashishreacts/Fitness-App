import React from "react";
import "./Services.css";
export const Services = () => {
  return (
    <section className="service_section layout_padding">
      <div className="main-container">
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
          </div>
          <div className="box">
            <img
              src="https://post.healthline.com/wp-content/uploads/2020/08/man-deadlift-1200x628-facebook-1200x628.jpg"
              style={{ height: "175px" }}
              alt=""
            />
            <h6 className="visible_heading">FITNESS</h6>
          </div>
          <div className="box">
            <img
              src="https://uploads-ssl.webflow.com/5eb17e57534ba845bbfee70e/60110f8b2a7a6007b9fcd327_createafitnessappgurucan_6493aa7f59d8a7a9d7b12b0e27140ca4_1000.jpeg"
              alt=""
            />
            <h6 className="visible_heading">DYNAMIC STRENGTH TRAINING</h6>
          </div>
          <div className="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6j5ESn_UEIQ9dxVokocTawoxYf28NF_pR0ZVr6M445oxRv-PxUVajPfrXC4_wZCTMvdBrxSdoLc&usqp=CAU&ec=48665701"
              alt=""
            />
            <h6 className="visible_heading">HEALTH</h6>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <h6 className="visible_heading">WORKOUT</h6>
          </div>
          <div className="box">
            <img
              src="https://wallpaperbat.com/img/180562-free-download-fitness-wallpaper-15-hd-wallpaper-wallpaper.jpg"
              alt=""
            />
            <h6 className="visible_heading">STRATEGIES</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
