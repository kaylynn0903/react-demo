import React, { useState } from "react";
import "./App.css";
import ColorBoxes from "./components/ColorBoxes";
import CoinFlipper from "./components/CoinFlipper";
import Lottery from "./components/Lottery";
import RollDice from "./components/RollDice";

function App() {
  const [displayComponent, setDisplayComponent] = useState("ColorBoxes");

  const renderComponent = () => {
    let targetComponent;

    switch (displayComponent) {
      case "ColorBoxes":
      default:
        targetComponent = <ColorBoxes />;
        break;
      case "CoinFlipper":
        targetComponent = <CoinFlipper />;
        break;
      case "Lottery":
        targetComponent = <Lottery />;
        break;
      case "RollDice":
        targetComponent = <RollDice />;
        break;
    }

    return targetComponent;
  };

  const onClickButton = (evt) => {
    setDisplayComponent(evt.target.innerHTML);
  };

  return (
    <div className="App">
      <div className="button-section">
        <button onClick={onClickButton}>ColorBoxes</button>
        <button onClick={onClickButton}>CoinFlipper</button>
        <button onClick={onClickButton}>Lottery</button>
        <button onClick={onClickButton}>RollDice</button>
      </div>

      <div className="component-title">
        <p>{displayComponent}</p>
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;
