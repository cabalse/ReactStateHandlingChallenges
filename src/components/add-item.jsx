import { useEffect, useState } from "react";

import SimpleButton from "./button";
import randomChar from "../utilities/random-char";

const AddItem = ({ onItemsChange }) => {
  const [items, setItems] = useState([]);

  const addChar = () => {
    setItems((prev) => [...prev, randomChar()]);
  };

  useEffect(() => {
    onItemsChange(items);
  }, [items]);

  return (
    <div>
      <SimpleButton label={"Add char"} onClick={addChar} />
      <div>
        <p>Local Items</p>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default AddItem;
