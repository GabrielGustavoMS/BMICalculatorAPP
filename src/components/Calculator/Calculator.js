import { useState } from "react";
import "./Calculator.css";

const axios = require("axios");

export default function (props) {
  const onWeightChange = (event) => {
    const newWeight = event.target.value;
    props.updateWeight(newWeight);
  };

  const onHeightChange = (event) => {
    const newHeight = event.target.value;
    props.updateHeight(newHeight);
  };

  const getBMIInfo = () => {
    props.updateIsLoading(true);
    setTimeout(() => {
      handleSubmition();
      props.updateIsLoading(false);
    }, 1000);
  };

  const handleSubmition = () => {
    let url = `https://bmi-calculator-13.herokuapp.com/api`;

    axios
      .get(url, {
        params: {
          weight: props.weight,
          height: props.height
        }
      })
      .then((response) => {
        updateCalculatorValues(
          response.data.weight,
          response.data.height,
          response.data.bmi,
          response.data.categorie
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCalculatorValues = (weight, height, bmi, categorie) => {
    props.updateBMI(bmi);
    props.updateCategorie(categorie);
    props.updateHeight(height);
    props.updateWeight(weight);
  };

  return (
    <section className="container">
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Weight in kilograms"
        min="0"
        onChange={onWeightChange}
      />
      <input
        type="number"
        placeholder="Height in meters"
        min="0"
        onChange={onHeightChange}
      />

      <input
        type="button"
        value="Calculate BMI"
        onClick={getBMIInfo}
        className="btn"
      />
    </section>
  );
}
