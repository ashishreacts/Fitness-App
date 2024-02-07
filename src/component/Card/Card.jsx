import React, { useState } from "react";
import "./Card.css";
import { Button } from "@mui/material";
import CardModal from "./CardModal";

export const Card = ({ onOpen }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div className="container">
        <h6>become a part of us</h6>
        <h2 className="mem_title">Our Membership</h2>
        <p className="mem_para">
          We offer a wide range of membership with options to suit every budget.
          Everything from One Day Pass, Punch Pass to monthly or annual prepaid
          memberships. What's more, we won't tie you in to a long term contract,
          giving you greater flexibility.
        </p>
      </div>
      <div className="all_card">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Beginner Plan</h5>
            <p className="gym_package"> &#8377; 1000/- Month</p>

            <ul className="card-text-ul">
              <li>Customized Diet Plans</li>
              <li>Customized Workout Plans</li>
              <li>Posture Correction</li>
            </ul>

            <Button onClick={handleOpenModal} variant="contained">
              Get Membership
            </Button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Intermediate Plan</h5>
            <p className="gym_package"> &#8377; 1500/- Month</p>

            <ul className="card-text-ul">
              <li>Detox Drinks</li>
              <li>Customized Diet Plans</li>
              <li>Customized Workout Plans</li>
              <li>Posture Correction</li>
              <li>Supplement Guidance</li>
            </ul>

            <Button onClick={handleOpenModal} variant="contained">
              Get Membership
            </Button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Ultimate Plan</h5>
            <p className="gym_package"> &#8377; 2000/- Month</p>

            <ul className="card-text-ul">
              <li>Detox Drinks</li>
              <li>Customized Diet Plans</li>
              <li>Customized Workout Plans</li>
              <li>Posture Correction</li>
              <li>Supplement Guidance</li>
              <li>Blood Test Guidance</li>
            </ul>

            <Button onClick={handleOpenModal} variant="contained">
              Get Membership
            </Button>
            <CardModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
