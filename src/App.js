import React from "react";
import About from "./component/About Section/About";
import { Card } from "./component/Card/Card";
import CardModal from "./component/Card/CardModal";
import Carousel from "./component/Carousel/Carousel";
import Review from "./component/Carousel1/Review";
import Footer from "./component/Footer/Footer";
import { Map } from "./component/Map/Map";
import Modal from "./component/Modal/Modal";
import Navbar from "./component/Navbar/Navbar1";
import { Services } from "./component/Services/Services";
import BMI from "./component/BMI Calculator/BMI";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Modal />
      <Carousel />
      <About />
      <Services />
      <Card />
      <CardModal />
      <Review />
      <span
        className="bmi_map"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"center",
          flexFlow: "row",
          gap:"10rem",
          margin: "10px 0",
        }}
      >
        <BMI />
        <Map />
      </span>
      <Footer />
    </div>
  );
}

export default App;
