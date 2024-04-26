import { useState } from "react";

import AddNumber from "./components/AddNumber";
import DisplayNumbers from "./components/DisplayNumbers";
import SimpleButton from "./components/SimpleButton";
import random from "./utilities/random";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const handleChangeOnItems = (items) => {
    setItems(items);
  };

  const addLargeNumber = () => {
    setItems((prev) => [...prev, random(10000)]);
  };

  return (
    <div className="page">
      <h1>React State Handling Example</h1>
      <p className="introText">
        Both lists of Numbers should be updated correctly when either you add a
        small or large number with the two buttons!
      </p>
      <div className="header">
        <SimpleButton label={"Add Large Number"} onClick={addLargeNumber} />
      </div>
      <div className="main">
        <div className="left">
          <AddNumber whenItemsChange={handleChangeOnItems} />
        </div>
        <div className="right">
          <DisplayNumbers items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
