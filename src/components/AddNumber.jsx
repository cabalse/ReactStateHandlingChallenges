import { useEffect, useState } from "react";

import SimpleButton from "./SimpleButton";
import random from "../utilities/random";

const AddNumber = ({ whenItemsChange }) => {
  const [items, setItems] = useState([]);

  const addSmallNumber = () => {
    setItems((prev) => [...prev, random(100)]);
  };

  useEffect(() => {
    whenItemsChange(items);
  }, [items]);

  return (
    <div>
      <SimpleButton label={"Add Small Number"} onClick={addSmallNumber} />
      <div>
        <p>Numbers</p>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default AddNumber;
