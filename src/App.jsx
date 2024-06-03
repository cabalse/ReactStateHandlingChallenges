import { useState } from "react";

import AddItems from "./components/add-item";
import DisplayList from "./components/display-list";
import SimpleButton from "./components/button";
import random from "./utilities/random";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const handleChangeOnItems = (items) => {
    setItems(items);
  };

  const addNumber = () => {
    setItems((prev) => [...prev, random(1000)]);
  };

  return (
    <div className="page">
      <h1>React State Handling Example</h1>
      <p className="introText">
        Both lists of items should be updated to contain the same items. The
        list on the left is the list kept by the main component. The list on the
        right is the list local to the component adding chars.
      </p>
      <div className="header">
        <SimpleButton label={"Add Number"} onClick={addNumber} />
      </div>
      <div className="main">
        <div className="right">
          <DisplayList title="Items" items={items} />
        </div>
        <div className="left">
          <AddItems onItemsChange={handleChangeOnItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
