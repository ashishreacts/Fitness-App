import React, { useState } from "react";
import "./BMI.css";
const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [weightRange, setWeightRange] = useState("");

  const calcBmi = () => {
    const enterWeight = parseFloat(weight);
    const enterHeight = parseFloat(height) / 100;

    if (enterWeight && enterHeight) {
      const bmiValue = enterWeight / (enterHeight * enterHeight);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setWeightRange("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setWeightRange("Healthy weight");
      } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
        setWeightRange("Overweight");
      } else {
        setWeightRange("Obesity");
      }
    }
  };

  return (
    <div>
      <div className="bmi-container" id="bmi">
        <h2 className="bmi-title">BMI Calculator</h2>
        <label htmlFor="weight">Weight (kg): </label>&nbsp;
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="height">Height (cm): </label>&nbsp;
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        {/* &nbsp;&nbsp;
        <input type="number" /> */}
        <br />
        <br />
        <button type="submit" className="bmi-btn" onClick={calcBmi}>
          Submit
        </button>
        {bmi && <p>Your BMI: {bmi}</p>}
        {weightRange && <p>Weight Category: {weightRange}</p>}
      </div>
    </div>
  );
};
export default BMI;
