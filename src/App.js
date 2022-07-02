import "./styles.css";
import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import InfoContainer from "./components/InfoContainer/InfoContainer";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
export default function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [BMI, setBMI] = useState();
  const [categorie, setCategorie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const updateWeight = (newWeight) => {
    setWeight(newWeight);
  };
  const updateHeight = (newHeight) => {
    setHeight(newHeight);
  };
  const updateBMI = (newBMI) => {
    setBMI(newBMI);
  };
  const updateCategorie = (newCategorie) => {
    setCategorie(newCategorie);
  };

  const updateIsLoading = (newIsLoading) => {
    setIsLoading(newIsLoading);
  };

  return (
    <section className="App">
      <Navbar />
      <Loader isLoading={isLoading} />
      <main className="content">
        <Calculator
          weight={weight}
          height={height}
          updateWeight={updateWeight}
          updateHeight={updateHeight}
          updateBMI={updateBMI}
          updateCategorie={updateCategorie}
          updateIsLoading={updateIsLoading}
        />
        <InfoContainer BMI={BMI} categorie={categorie} />
      </main>
    </section>
  );
}
